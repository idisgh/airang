<script setup lang="ts">
import type { Tool } from '~/data/tools'
import { categories } from '~/data/categories'

const props = defineProps<{ tool: Tool }>()
const logoError = ref(false)

function getCategoryName(slug: string) {
  return categories.find(c => c.slug === slug)?.name || slug
}

const pricingLabel = computed(() => {
  switch (props.tool.pricingModel) {
    case 'free': return '무료'
    case 'freemium': return '프리미엄'
    case 'paid': return '유료'
    case 'enterprise': return '엔터프라이즈'
  }
})

const koreanLabel = computed(() => {
  switch (props.tool.koreanSupport) {
    case 'full': return '🇰🇷 한국어'
    case 'partial': return '🇰🇷 일부'
    case 'none': return ''
  }
})
</script>

<template>
  <NuxtLink :to="`/tools/${tool.slug}`" class="card group p-5 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200">
    <!-- Header -->
    <div class="flex items-start gap-3 mb-3">
      <div v-if="tool.logoUrl && !logoError" class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
        <img :src="tool.logoUrl" :alt="tool.name" class="w-10 h-10 object-contain" @error="logoError = true">
      </div>
      <div v-else class="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl flex items-center justify-center text-lg font-bold text-primary-700 dark:text-primary-300 shrink-0">
        {{ tool.name[0] }}
      </div>
      <div class="min-w-0 flex-1">
        <h3 class="font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate">
          {{ tool.name }}
        </h3>
        <p class="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 mt-0.5">{{ tool.tagline }}</p>
      </div>
    </div>

    <!-- Categories -->
    <div class="flex flex-wrap gap-1.5 mb-3">
      <span v-for="cat in tool.categories.slice(0, 3)" :key="cat"
        class="text-xs px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full">
        {{ getCategoryName(cat) }}
      </span>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between text-xs">
      <div class="flex items-center gap-2">
        <span :class="[
          'badge',
          tool.pricingModel === 'free' ? 'badge-free' :
          tool.pricingModel === 'freemium' ? 'badge-freemium' : 'badge-paid'
        ]">
          {{ pricingLabel }}
        </span>
        <span v-if="koreanLabel" class="badge badge-korean">{{ koreanLabel }}</span>
      </div>
      <div class="flex items-center gap-1 text-amber-500">
        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        <span class="text-neutral-600 dark:text-neutral-400">{{ tool.rating }}</span>
      </div>
    </div>
  </NuxtLink>
</template>
