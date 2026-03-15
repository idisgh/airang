<script setup lang="ts">
import type { Tool } from '~/data/tools'
import type { Category } from '~/data/categories'

defineProps<{
  trends: Array<{ category: Category; tools: Tool[] }>
}>()

const TREND_FRONT = 1
const TREND_BACK  = 1

const trendWrapperRef = ref<HTMLElement | null>(null)
const horizontalTranslate = ref(0)
const currentTrendIndex = ref(0)
const trendBgOpacity = ref(0)

const colorMode = useColorMode()
const trendTextColor = computed(() => {
  if (colorMode.value === 'dark') return 'rgb(255, 255, 255)'
  const v = Math.round(255 * trendBgOpacity.value)
  return `rgb(${v}, ${v}, ${v})`
})

let _rafId: number | null = null
let _scrollHandler: (() => void) | null = null

function updateHScroll() {
  _rafId = null
  const wrapper = trendWrapperRef.value
  if (!wrapper) return
  const top = wrapper.getBoundingClientRect().top
  const wh = wrapper.offsetHeight
  const vh = window.innerHeight
  const scrollable = wh - vh
  if (scrollable <= 0) return

  const PRELOAD = vh * 0.8
  const rawProgress = Math.max(0, Math.min(1, (-top + PRELOAD) / (scrollable + PRELOAD)))

  const n = wrapper.dataset.trendCount ? parseInt(wrapper.dataset.trendCount) : 4
  const total = n + TREND_FRONT + TREND_BACK
  const FADE_END  = TREND_FRONT / total
  const SLIDE_END = (TREND_FRONT + n) / total

  trendBgOpacity.value = Math.min(1, rawProgress / FADE_END)
  const slideProgress = Math.max(0, Math.min(1, (rawProgress - FADE_END) / (SLIDE_END - FADE_END)))
  horizontalTranslate.value = -(slideProgress * (n - 1) * 100)
  currentTrendIndex.value = Math.round(slideProgress * (n - 1))
}

onMounted(() => {
  _scrollHandler = () => {
    if (_rafId === null) _rafId = requestAnimationFrame(updateHScroll)
  }
  window.addEventListener('scroll', _scrollHandler, { passive: true })
  updateHScroll()
})

onUnmounted(() => {
  if (_scrollHandler) window.removeEventListener('scroll', _scrollHandler)
  if (_rafId !== null) cancelAnimationFrame(_rafId)
})
</script>

<template>
  <!-- Desktop: Sticky Horizontal Scroll -->
  <div
    ref="trendWrapperRef"
    :data-trend-count="trends.length"
    class="relative hidden md:block"
    :style="{ height: `calc(${trends.length + TREND_FRONT + TREND_BACK} * 100vh)` }"
  >
    <div
      class="sticky top-0 h-screen overflow-hidden"
      :style="{ backgroundColor: `rgba(9, 9, 11, ${trendBgOpacity})`, color: trendTextColor }"
    >
      <!-- 섹션 헤더 -->
      <div class="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 lg:px-16 pt-6">
        <div class="flex items-center gap-3">
          <LIcon name="lucide:trending-up" class="w-5 h-5" />
          <span class="text-sm font-semibold tracking-wider uppercase">카테고리별 트렌드</span>
        </div>
        <div class="text-sm">
          <span class="font-bold text-lg tabular-nums">{{ String(currentTrendIndex + 1).padStart(2, '0') }}</span>
          <span class="mx-1">/</span>
          <span>{{ String(trends.length).padStart(2, '0') }}</span>
        </div>
      </div>

      <!-- 진행 인디케이터 -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2" :style="{ opacity: trendBgOpacity }">
        <button
          v-for="(trend, i) in trends"
          :key="trend.category.slug"
          class="transition-all duration-300 rounded-full cursor-default"
          :class="i === currentTrendIndex ? 'w-8 h-2 bg-primary-400' : 'w-2 h-2 bg-neutral-600'"
          :aria-label="trend.category.name"
        />
      </div>

      <!-- 스크롤 힌트 -->
      <Transition name="fade">
        <div
          v-if="currentTrendIndex === 0"
          class="absolute bottom-8 right-8 z-20 flex items-center gap-2 text-xs text-neutral-500"
        >
          <span>스크롤하여 탐색</span>
          <LIcon name="lucide:arrow-down" class="w-4 h-4 animate-bounce" />
        </div>
      </Transition>

      <!-- Horizontal Strip -->
      <div
        class="flex h-full will-change-transform"
        :style="{ width: `${trends.length * 100}vw`, transform: `translateX(${horizontalTranslate}vw)` }"
      >
        <div
          v-for="(trend, panelIdx) in trends"
          :key="trend.category.slug"
          class="flex-none h-full flex flex-col justify-center"
          style="width: 100vw"
        >
          <div class="max-w-6xl mx-auto w-full px-8 lg:px-16 pt-20 pb-16">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-14 h-14 rounded-2xl bg-primary-500/20 flex items-center justify-center">
                <LIcon :name="trend.category.icon" class="w-7 h-7 text-primary-400" />
              </div>
              <div>
                <div class="text-xs text-neutral-500 uppercase tracking-widest mb-1">{{ panelIdx + 1 }}번째 카테고리</div>
                <h2 class="text-3xl lg:text-4xl font-bold">{{ trend.category.name }}</h2>
              </div>
              <NuxtLink
                :to="`/categories/${trend.category.slug}`"
                class="ml-auto text-sm text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors"
              >
                전체보기 <LIcon name="lucide:arrow-right" class="w-4 h-4" />
              </NuxtLink>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <NuxtLink
                v-for="(tool, toolIdx) in trend.tools"
                :key="tool.id"
                :to="`/tools/${tool.slug}`"
                class="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/40 rounded-xl p-4 transition-all"
              >
                <span
                  class="text-2xl font-black tabular-nums"
                  :class="toolIdx === 0 ? 'text-amber-400' : toolIdx === 1 ? 'text-neutral-400' : toolIdx === 2 ? 'text-amber-700' : 'text-neutral-600'"
                >{{ toolIdx + 1 }}</span>
                <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                  <img v-if="tool.logoUrl" :src="tool.logoUrl" :alt="tool.name" class="w-8 h-8 object-contain" @error="($event.target as HTMLImageElement).style.display = 'none'" />
                  <span v-else class="text-sm font-bold text-primary-400">{{ tool.name[0] }}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="font-semibold group-hover:text-primary-300 truncate text-sm transition-colors">{{ tool.name }}</div>
                  <div class="flex items-center gap-1 mt-0.5">
                    <LIcon name="lucide:star" fill="currentColor" class="w-3 h-3 text-amber-400" />
                    <span class="text-xs text-neutral-400">{{ tool.rating }}</span>
                    <span class="text-xs text-neutral-600 ml-1">({{ tool.reviewCount }})</span>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile fallback -->
  <section class="md:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
        <LIcon name="lucide:trending-up" class="w-6 h-6" /> 카테고리별 트렌드
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div v-for="trend in trends" :key="trend.category.slug" class="p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl">
        <div class="flex items-center gap-2 mb-4">
          <LIcon :name="trend.category.icon" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
          <h3 class="font-semibold text-neutral-900 dark:text-neutral-100">{{ trend.category.name }}</h3>
        </div>
        <div class="space-y-3">
          <NuxtLink
            v-for="(tool, i) in trend.tools.slice(0, 3)"
            :key="tool.id"
            :to="`/tools/${tool.slug}`"
            class="flex items-center gap-3 group"
          >
            <span class="text-xs font-bold text-neutral-400 w-4">{{ i + 1 }}</span>
            <div class="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 overflow-hidden">
              <img v-if="tool.logoUrl" :src="tool.logoUrl" :alt="tool.name" class="w-6 h-6 object-contain" @error="($event.target as HTMLImageElement).style.display = 'none'" />
              <span v-else class="text-xs font-bold text-primary-600">{{ tool.name[0] }}</span>
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 truncate">{{ tool.name }}</div>
              <div class="text-xs text-neutral-500">
                <LIcon name="lucide:star" fill="currentColor" class="w-3 h-3 text-amber-500 inline" /> {{ tool.rating }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
