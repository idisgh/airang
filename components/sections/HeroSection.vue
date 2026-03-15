<script setup lang="ts">
const props = defineProps<{
  toolCount: number
  categoryCount: number
}>()

const searchQuery = ref('')

function onSearch() {
  if (searchQuery.value.trim()) {
    navigateTo({ path: '/tools', query: { q: searchQuery.value.trim() } })
  }
}

// 플로팅 로고
const floatingSlugs = [
  'chatgpt', 'claude', 'midjourney', 'cursor', 'runway',
  'gemini', 'flux', 'kling', 'elevenlabs', 'stable-diffusion',
  'canva-ai', 'deepseek',
]

function seededRand(seed: number): number {
  let s = seed * 2654435761
  s = ((s ^ (s >>> 16)) * 0x45d9f3b) & 0xffffffff
  s = ((s ^ (s >>> 16)) * 0x45d9f3b) & 0xffffffff
  return ((s ^ (s >>> 16)) >>> 0) / 0xffffffff
}

const COLS = 4
const ROWS = 3
const logoPositions = floatingSlugs.map((slug, i) => {
  const col = i % COLS
  const row = Math.floor(i / COLS)
  const cellW = 100 / COLS
  const cellH = 100 / ROWS
  const offsetX = (seededRand(i * 17 + 1) - 0.5) * cellW * 0.6
  const offsetY = (seededRand(i * 17 + 2) - 0.5) * cellH * 0.6
  return {
    slug,
    left: `${Math.max(3, Math.min(90, col * cellW + cellW / 2 + offsetX)).toFixed(1)}%`,
    top: `${Math.max(4, Math.min(88, row * cellH + cellH / 2 + offsetY)).toFixed(1)}%`,
    size: Math.floor(seededRand(i * 17 + 3) * 24 + 52),
    duration: `${(seededRand(i * 17 + 4) * 4 + 5).toFixed(1)}s`,
    delay: `${(seededRand(i * 17 + 5) * 4).toFixed(1)}s`,
    opacity: (seededRand(i * 17 + 6) * 0.05 + 0.06).toFixed(2),
  }
})

// 통계 카운터 애니메이션
const statsRef = ref<HTMLElement | null>(null)
const animatedTools = ref(0)
const animatedCats = ref(0)
const statsAnimated = ref(false)

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function animateCount(target: number, duration: number, setter: (v: number) => void) {
  const start = performance.now()
  function tick(now: number) {
    const t = Math.min((now - start) / duration, 1)
    setter(Math.round(target * easeOutCubic(t)))
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

// Hero 텍스트 스크롤 페이드아웃
const heroScrollProgress = ref(0)

const cleanupFns: Array<() => void> = []

onMounted(() => {
  // Stats observer
  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !statsAnimated.value) {
      statsAnimated.value = true
      animateCount(props.toolCount, 1100, v => { animatedTools.value = v })
      animateCount(props.categoryCount, 1100, v => { animatedCats.value = v })
      io.disconnect()
    }
  }, { threshold: 0.3 })
  if (statsRef.value) io.observe(statsRef.value)
  cleanupFns.push(() => io.disconnect())

  // Hero 스크롤 페이드아웃
  const updateHeroScroll = () => {
    const vh = window.innerHeight
    heroScrollProgress.value = Math.max(0, Math.min(1, window.scrollY / (vh * 0.3)))
  }
  window.addEventListener('scroll', updateHeroScroll, { passive: true })
  cleanupFns.push(() => window.removeEventListener('scroll', updateHeroScroll))
})

onUnmounted(() => {
  cleanupFns.forEach(fn => fn())
})
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950 py-28 sm:py-36">
    <!-- 플로팅 로고 레이어 -->
    <div class="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
      <img
        v-for="logo in logoPositions"
        :key="logo.slug"
        :src="`/logos/${logo.slug}.png`"
        :alt="logo.slug"
        :style="{
          position: 'absolute',
          left: logo.left,
          top: logo.top,
          width: `${logo.size}px`,
          height: `${logo.size}px`,
          opacity: logo.opacity,
          animation: `logo-float ${logo.duration} ease-in-out ${logo.delay} infinite`,
          objectFit: 'contain',
        }"
        @error="($event.target as HTMLImageElement).style.display = 'none'"
      />
    </div>

    <!-- Hero 콘텐츠 -->
    <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
        <span
          class="inline-block will-change-transform"
          :style="{ opacity: 1 - heroScrollProgress, transform: `translateX(${-heroScrollProgress * 80}px)` }"
        >한국어로 찾는</span>
        <br>
        <span
          class="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent inline-block will-change-transform"
          :style="{ opacity: 1 - heroScrollProgress, transform: `translateX(${heroScrollProgress * 80}px)` }"
        >AI 도구</span>
      </h1>
      <p class="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
        AI 도구를 한국어로 검색하고 비교하세요.<br class="hidden sm:block">
        가격, 기능, 한국어 지원 여부를 한눈에.
      </p>

      <!-- 검색창 -->
      <form @submit.prevent="onSearch" class="mt-8 max-w-xl mx-auto">
        <div class="relative">
          <LIcon name="lucide:search" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="어떤 AI 도구를 찾고 계세요?"
            class="w-full pl-12 pr-4 py-4 bg-white dark:bg-neutral-800 border-2 border-primary-400 dark:border-primary-500 rounded-2xl text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-400/30 dark:focus:ring-primary-500/30 focus:border-primary-500 dark:focus:border-primary-400 text-lg transition-all"
          />
        </div>
      </form>

      <!-- 통계 -->
      <div
        ref="statsRef"
        class="mt-6 flex items-center justify-center gap-8 text-base text-neutral-500 dark:text-neutral-400"
      >
        <span class="flex items-center gap-2">
          <LIcon name="lucide:package" class="w-5 h-5" />
          <span class="tabular-nums text-lg text-primary-600 dark:text-primary-400 inline-block min-w-[3ch] text-right">
            {{ statsAnimated ? animatedTools : toolCount }}
          </span>
          <span>개 도구</span>
        </span>
        <span class="flex items-center gap-2">
          <LIcon name="lucide:folder-open" class="w-5 h-5" />
          <span class="tabular-nums text-lg text-primary-600 dark:text-primary-400 inline-block min-w-[2ch] text-right">
            {{ statsAnimated ? animatedCats : categoryCount }}
          </span>
          <span>개 카테고리</span>
        </span>
        <span class="flex items-center gap-2">
          <LIcon name="lucide:globe" class="w-5 h-5" />
          <span class="text-lg text-primary-600 dark:text-primary-400">한국어</span>
          <span>리뷰</span>
        </span>
      </div>
    </div>
  </section>
</template>

<style>
@keyframes logo-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-12px) rotate(1deg); }
  66% { transform: translateY(-6px) rotate(-1deg); }
}
</style>
