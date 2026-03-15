<script setup lang="ts">
import type { Tool } from '~/data/tools'
import type { Category } from '~/data/categories'

const props = defineProps<{
  categories: Category[]
  tools: Tool[]
}>()

const hoveredCatSlug = ref<string | null>(null)
const isTouchDevice = ref(false)
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

function getCategoryToolCount(catSlug: string) {
  return props.tools.filter(t => t.categories.includes(catSlug)).length
}

function getCategoryTopTools(catSlug: string) {
  return props.tools
    .filter(t => t.categories.includes(catSlug))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
}

onMounted(() => {
  isTouchDevice.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0

  const observer = new IntersectionObserver(
    (entries) => { if (entries[0].isIntersecting) isVisible.value = true },
    { threshold: 0.1 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <section ref="sectionRef" class="dark:bg-neutral-950 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
          <LIcon name="lucide:folder-open" class="w-6 h-6" /> 카테고리
        </h2>
        <NuxtLink to="/categories" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">전체보기 →</NuxtLink>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div
          v-for="(cat, catIdx) in categories"
          :key="cat.id"
          class="relative scroll-reveal"
          :style="{ transitionDelay: `${catIdx * 50}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)' }"
          @mouseenter="!isTouchDevice && (hoveredCatSlug = cat.slug)"
          @mouseleave="hoveredCatSlug = null"
        >
          <NuxtLink
            :to="`/categories/${cat.slug}`"
            class="p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl flex flex-col items-center text-center hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all group block"
          >
            <LIcon :name="cat.icon" class="w-8 h-8 text-primary-600 dark:text-primary-400 mb-2" />
            <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600">{{ cat.name }}</div>
            <div class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{{ getCategoryToolCount(cat.slug) }}개 도구</div>
          </NuxtLink>

          <!-- 호버 프리뷰 팝업 -->
          <Transition name="cat-popup">
            <div
              v-if="hoveredCatSlug === cat.slug && !isTouchDevice"
              class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-52 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 p-3"
            >
              <div class="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-neutral-800" />
              <div class="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2">인기 도구</div>
              <div class="space-y-2">
                <NuxtLink
                  v-for="tool in getCategoryTopTools(cat.slug)"
                  :key="tool.id"
                  :to="`/tools/${tool.slug}`"
                  class="flex items-center gap-2 group/tool p-1 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors"
                >
                  <div class="w-7 h-7 rounded-lg bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center shrink-0 overflow-hidden">
                    <img v-if="tool.logoUrl" :src="tool.logoUrl" :alt="tool.name" class="w-5 h-5 object-contain" @error="($event.target as HTMLImageElement).style.display = 'none'" />
                    <span v-else class="text-xs font-bold text-primary-600">{{ tool.name[0] }}</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-xs font-medium text-neutral-900 dark:text-neutral-100 group-hover/tool:text-primary-600 truncate">{{ tool.name }}</div>
                    <div class="text-xs text-neutral-400 flex items-center gap-0.5">
                      <LIcon name="lucide:star" fill="currentColor" class="w-2.5 h-2.5 text-amber-400 inline" />
                      {{ tool.rating }}
                    </div>
                  </div>
                </NuxtLink>
                <div v-if="getCategoryTopTools(cat.slug).length === 0" class="text-xs text-neutral-400 text-center py-1">
                  등록된 도구 없음
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.cat-popup-enter-active,
.cat-popup-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.cat-popup-enter-from,
.cat-popup-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(4px);
}
.cat-popup-enter-to,
.cat-popup-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
</style>
