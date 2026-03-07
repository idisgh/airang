<script setup lang="ts">
import { searchTools, type Tool } from '~/data/tools'

const emit = defineEmits<{ close: [] }>()
const query = ref('')
const results = ref<Tool[]>([])
const inputRef = ref<HTMLInputElement>()

watch(query, (q) => {
  results.value = q.length >= 2 ? searchTools(q).slice(0, 8) : []
})

onMounted(() => inputRef.value?.focus())

function selectTool(slug: string) {
  navigateTo(`/tools/${slug}`)
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div class="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]" @click.self="emit('close')">
      <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" @click="emit('close')" />
      <div class="relative w-full max-w-xl mx-4 bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <!-- Input -->
        <div class="flex items-center gap-3 px-4 border-b border-neutral-200 dark:border-neutral-700">
          <LIcon name="lucide:search" class="w-5 h-5 text-neutral-400" />
          <input
            ref="inputRef"
            v-model="query"
            type="text"
            placeholder="AI 도구 검색... (이름, 기능, 카테고리)"
            class="flex-1 py-4 bg-transparent text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none"
          />
          <kbd class="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-400 rounded">ESC</kbd>
        </div>

        <!-- Results -->
        <div v-if="results.length > 0" class="max-h-80 overflow-y-auto p-2">
          <button
            v-for="tool in results"
            :key="tool.id"
            @click="selectTool(tool.slug)"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-left"
          >
            <div class="w-8 h-8 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center text-sm font-bold text-primary-600 overflow-hidden">
              <img v-if="tool.logoUrl" :src="tool.logoUrl" :alt="tool.name" class="w-6 h-6 object-contain" @error="($event.target as HTMLImageElement).style.display='none'">
              <span :class="{ 'hidden': tool.logoUrl }" class="text-sm">{{ tool.name[0] }}</span>
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100">{{ tool.name }}</div>
              <div class="text-xs text-neutral-500 dark:text-neutral-400 truncate">{{ tool.tagline }}</div>
            </div>
            <span :class="[
              'badge',
              tool.pricingModel === 'free' ? 'badge-free' :
              tool.pricingModel === 'freemium' ? 'badge-freemium' : 'badge-paid'
            ]">
              {{ tool.pricingModel === 'free' ? '무료' : tool.pricingModel === 'freemium' ? '프리미엄' : '유료' }}
            </span>
          </button>
        </div>

        <!-- Empty state -->
        <div v-else-if="query.length >= 2" class="p-8 text-center text-neutral-500 dark:text-neutral-400">
          <p class="text-sm">"{{ query }}"에 대한 결과가 없습니다</p>
        </div>

        <!-- Hint -->
        <div v-else class="p-4 text-center text-xs text-neutral-400">
          도구 이름, 기능, 카테고리로 검색하세요
        </div>
      </div>
    </div>
  </Teleport>
</template>
