<script setup lang="ts">
import { tools as staticTools, getFeaturedTools as staticGetFeatured } from '~/data/tools'
import { categories as staticCategories } from '~/data/categories'

useHead({ title: 'AIrang - 한국어 AI 도구 검색 & 비교 플랫폼' })

const { getTools, getFeaturedTools } = useTools()
const { getCategories } = useCategories()

const searchQuery = ref('')

const { data: allTools } = await useAsyncData('tools', getTools, { default: () => staticTools })
const { data: featured } = await useAsyncData('featured-tools', getFeaturedTools, { default: () => staticGetFeatured() })
const { data: allCategories } = await useAsyncData('categories', getCategories, { default: () => staticCategories })

const recent = computed(() => {
  const tools = allTools.value || staticTools
  return [...tools]
    .sort((a, b) => new Date(b.launchedAt || 0).getTime() - new Date(a.launchedAt || 0).getTime())
    .slice(0, 6)
})

// 카테고리별 인기 도구 (트렌드) - sticky horizontal scroll용 6개
const trendCategories = ['chatbot', 'image-generation', 'coding', 'video']
const trends = computed(() => {
  const tools = allTools.value || staticTools
  const cats = allCategories.value || staticCategories
  return trendCategories.map(slug => {
    const cat = cats.find(c => c.slug === slug)
    const catTools = tools.filter(t => t.categories.includes(slug)).sort((a, b) => b.rating - a.rating).slice(0, 6)
    return { category: cat, tools: catTools }
  }).filter(t => t.category && t.tools.length > 0)
})

// 비교 추천 쌍
const comparePairs = computed(() => {
  const tools = allTools.value || staticTools
  const pairs = [
    ['chatgpt', 'claude'],
    ['midjourney', 'dall-e'],
    ['cursor', 'github-copilot'],
    ['runway', 'pika'],
  ]
  return pairs.map(([a, b]) => {
    const toolA = tools.find(t => t.slug === a)
    const toolB = tools.find(t => t.slug === b)
    return toolA && toolB ? { a: toolA, b: toolB } : null
  }).filter(Boolean) as { a: typeof tools[0], b: typeof tools[0] }[]
})

function getCategoryToolCount(catSlug: string) {
  return (allTools.value || staticTools).filter(t => t.categories.includes(catSlug)).length
}

function getCategoryTopTools(catSlug: string) {
  const tools = allTools.value || staticTools
  return tools
    .filter(t => t.categories.includes(catSlug))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
}

function onSearch() {
  if (searchQuery.value.trim()) {
    navigateTo({ path: '/tools', query: { q: searchQuery.value.trim() } })
  }
}

// ============================================================
// 1. Hero 배경 로고 플로팅
// ============================================================
const floatingSlugs = [
  'chatgpt', 'claude', 'midjourney', 'cursor', 'runway',
  'gemini', 'flux', 'kling', 'elevenlabs', 'stable-diffusion',
  'canva-ai', 'deepseek',
]

// 화면을 4×3 그리드로 나눠 균등 배치 + 셀 내 오프셋으로 자연스럽게
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
  // 셀 중심 기준 ±30% 오프셋
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

// ============================================================
// 2. 통계 카운터 애니메이션
// ============================================================
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

// ============================================================
// 3. 카테고리 카드 호버 프리뷰
// ============================================================
const hoveredCatSlug = ref<string | null>(null)
const isTouchDevice = ref(false)

// ============================================================
// 5. 스크롤 진입 애니메이션 (카테고리 / 인기도구 / 최근등록 / 비교)
// ============================================================
const catSectionRef = ref<HTMLElement | null>(null)
const featuredSectionRef = ref<HTMLElement | null>(null)
const recentSectionRef = ref<HTMLElement | null>(null)
const compareSectionRef = ref<HTMLElement | null>(null)

const catVisible = ref(false)
const featuredVisible = ref(false)
const recentVisible = ref(false)
const compareVisible = ref(false)

// Hero 텍스트 스크롤 페이드아웃
const heroRef = ref<HTMLElement | null>(null)
const heroScrollProgress = ref(0)

let _heroObserver: IntersectionObserver | null = null
let _sectionObservers: IntersectionObserver[] = []

// ============================================================
// 4. 카테고리별 트렌드 - Sticky Horizontal Scroll
// ============================================================
const trendWrapperRef = ref<HTMLElement | null>(null)
const horizontalTranslate = ref(0)
const currentTrendIndex = ref(0)
const trendBgOpacity = ref(0) // 0 = 투명, 1 = 완전 검정

// 배경이 60% 이상 어두워진 후부터 컨텐츠 fade in
const colorMode = useColorMode()
const trendTextColor = computed(() => {
  if (colorMode.value === 'dark') {
    // 다크모드: 배경이 이미 어두우므로 항상 흰색
    return 'rgb(255, 255, 255)'
  }
  // 라이트모드: 배경 밝을 때 검정 → 어두워지면 흰색
  const v = Math.round(255 * trendBgOpacity.value)
  return `rgb(${v}, ${v}, ${v})`
})
let _rafId: number | null = null
let _scrollHandler: (() => void) | null = null

// 구간 구성: [앞 여백(fade)] [슬라이드] [뒤 여백(pause)]
// wrapper height = (n + 3) * 100vh → 앞 1패널 fade + n패널 슬라이드 + 뒤 2패널 pause
const TREND_FRONT = 1  // 앞 정지 패널 수
const TREND_BACK  = 1  // 뒤 정지 패널 수

function updateHScroll() {
  _rafId = null
  const wrapper = trendWrapperRef.value
  if (!wrapper) return
  const top = wrapper.getBoundingClientRect().top
  const wh = wrapper.offsetHeight
  const vh = window.innerHeight
  const scrollable = wh - vh
  if (scrollable <= 0) return
  // 섹션이 화면 아래에서 올라오기 시작할 때(top = vh)부터 페이드 시작
  const PRELOAD = vh * 0.8 // 뷰포트 80%만큼 일찍 배경 전환 시작
  const rawProgress = Math.max(0, Math.min(1, (-top + PRELOAD) / (scrollable + PRELOAD)))

  const n = trends.value.length
  const total = n + TREND_FRONT + TREND_BACK
  const FADE_END  = TREND_FRONT / total
  const SLIDE_END = (TREND_FRONT + n) / total

  // 배경: 섹션 진입 전부터 서서히
  trendBgOpacity.value = Math.min(1, rawProgress / FADE_END)

  // 슬라이드: FADE_END → SLIDE_END 구간에서만
  const slideProgress = Math.max(0, Math.min(1, (rawProgress - FADE_END) / (SLIDE_END - FADE_END)))
  horizontalTranslate.value = -(slideProgress * (n - 1) * 100)
  currentTrendIndex.value = Math.round(slideProgress * (n - 1))
}

onMounted(() => {
  isTouchDevice.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0

  // Stats IntersectionObserver
  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !statsAnimated.value) {
      statsAnimated.value = true
      animateCount((allTools.value || staticTools).length, 1100, v => { animatedTools.value = v })
      animateCount((allCategories.value || staticCategories).length, 1100, v => { animatedCats.value = v })
      io.disconnect()
    }
  }, { threshold: 0.3 })
  if (statsRef.value) io.observe(statsRef.value)

  // 섹션 진입 애니메이션 observers
  const makeObserver = (setter: (v: boolean) => void) =>
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setter(true)
      }
    }, { threshold: 0.1 })

  const catObs = makeObserver(v => { catVisible.value = v })
  const featObs = makeObserver(v => { featuredVisible.value = v })
  const recObs  = makeObserver(v => { recentVisible.value = v })
  const cmpObs  = makeObserver(v => { compareVisible.value = v })

  if (catSectionRef.value)      catObs.observe(catSectionRef.value)
  if (featuredSectionRef.value) featObs.observe(featuredSectionRef.value)
  if (recentSectionRef.value)   recObs.observe(recentSectionRef.value)
  if (compareSectionRef.value)  cmpObs.observe(compareSectionRef.value)
  _sectionObservers = [catObs, featObs, recObs, cmpObs]

  // Hero 텍스트 스크롤 페이드아웃
  const updateHeroScroll = () => {
    const vh = window.innerHeight
    // 스크롤 시작하자마자 반응, 30vh 스크롤하면 완료
    const progress = Math.max(0, Math.min(1, window.scrollY / (vh * 0.3)))
    heroScrollProgress.value = progress
  }
  window.addEventListener('scroll', updateHeroScroll, { passive: true })
  _sectionObservers.push({ disconnect: () => window.removeEventListener('scroll', updateHeroScroll) } as unknown as IntersectionObserver)

  // Sticky horizontal scroll
  _scrollHandler = () => {
    if (_rafId === null) {
      _rafId = requestAnimationFrame(updateHScroll)
    }
  }
  window.addEventListener('scroll', _scrollHandler, { passive: true })
  updateHScroll()
})

onUnmounted(() => {
  if (_scrollHandler) window.removeEventListener('scroll', _scrollHandler)
  if (_rafId !== null) cancelAnimationFrame(_rafId)
  _sectionObservers.forEach(o => o.disconnect())
})
</script>

<template>
  <div>
    <!-- =========================================================
         Hero
         ========================================================= -->
    <section ref="heroRef" class="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950 py-28 sm:py-36">

      <!-- 1. 플로팅 로고 레이어 (z-0) -->
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

      <!-- Hero 콘텐츠 (z-10) -->
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

        <!-- Search bar -->
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

        <!-- 2. Stats (카운터 애니메이션) -->
        <div
          ref="statsRef"
          class="mt-6 flex items-center justify-center gap-8 text-base text-neutral-500 dark:text-neutral-400"
        >
          <span class="flex items-center gap-2">
            <LIcon name="lucide:package" class="w-5 h-5" />
            <span class="tabular-nums text-lg text-primary-600 dark:text-primary-400 inline-block min-w-[3ch] text-right">{{ statsAnimated ? animatedTools : (allTools || staticTools).length }}</span>
            <span>개 도구</span>
          </span>
          <span class="flex items-center gap-2">
            <LIcon name="lucide:folder-open" class="w-5 h-5" />
            <span class="tabular-nums text-lg text-primary-600 dark:text-primary-400 inline-block min-w-[2ch] text-right">{{ statsAnimated ? animatedCats : (allCategories || staticCategories).length }}</span>
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

    <!-- =========================================================
         3. 카테고리 (호버 프리뷰 포함)
         ========================================================= -->
    <section ref="catSectionRef" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:bg-neutral-950">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
          <LIcon name="lucide:folder-open" class="w-6 h-6" /> 카테고리
        </h2>
        <NuxtLink to="/categories" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">전체보기 →</NuxtLink>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div
          v-for="(cat, catIdx) in (allCategories || staticCategories)"
          :key="cat.id"
          class="relative scroll-reveal"
          :style="{ transitionDelay: `${catIdx * 50}ms`, opacity: catVisible ? 1 : 0, transform: catVisible ? 'translateY(0)' : 'translateY(40px)' }"
          @mouseenter="!isTouchDevice && (hoveredCatSlug = cat.slug)"
          @mouseleave="hoveredCatSlug = null"
        >
          <NuxtLink
            :to="`/categories/${cat.slug}`"
            class="card p-4 flex flex-col items-center text-center hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all group block"
          >
            <LIcon :name="cat.icon" class="w-8 h-8 text-primary-600 dark:text-primary-400 mb-2" />
            <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600">{{ cat.name }}</div>
            <div class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{{ getCategoryToolCount(cat.slug) }}개 도구</div>
          </NuxtLink>

          <!-- 호버 프리뷰 팝업 (데스크탑만) -->
          <Transition name="cat-popup">
            <div
              v-if="hoveredCatSlug === cat.slug && !isTouchDevice"
              class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-52 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 p-3"
            >
              <!-- 말풍선 꼭지 -->
              <div class="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-neutral-800"></div>
              <div class="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2">인기 도구</div>
              <div class="space-y-2">
                <NuxtLink
                  v-for="tool in getCategoryTopTools(cat.slug)"
                  :key="tool.id"
                  :to="`/tools/${tool.slug}`"
                  class="flex items-center gap-2 group/tool p-1 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors"
                >
                  <div class="w-7 h-7 rounded-lg bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      v-if="tool.logoUrl"
                      :src="tool.logoUrl"
                      :alt="tool.name"
                      class="w-5 h-5 object-contain"
                      @error="($event.target as HTMLImageElement).style.display = 'none'"
                    />
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
    </section>

    <!-- Featured tools -->
    <section ref="featuredSectionRef" class="bg-neutral-50 dark:bg-neutral-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2"><LIcon name="lucide:flame" class="w-6 h-6 text-orange-500" /> 인기 도구</h2>
          <NuxtLink to="/tools" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">전체보기 →</NuxtLink>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ToolCard
            v-for="(tool, i) in (featured || [])"
            :key="tool.id"
            :tool="tool"
            class="scroll-reveal"
            :style="{ transitionDelay: `${i * 80}ms`, opacity: featuredVisible ? 1 : 0, transform: featuredVisible ? 'translateY(0)' : 'translateY(30px)' }"
          />
        </div>
      </div>
    </section>

    <!-- Recent tools -->
    <section ref="recentSectionRef" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:bg-neutral-950">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2"><LIcon name="lucide:sparkles" class="w-6 h-6 text-amber-500" /> 최근 등록</h2>
        <NuxtLink to="/tools" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">전체보기 →</NuxtLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ToolCard
          v-for="(tool, i) in recent"
          :key="tool.id"
          :tool="tool"
          class="scroll-reveal"
          :style="{ transitionDelay: `${i * 80}ms`, opacity: recentVisible ? 1 : 0, transform: recentVisible ? 'translateY(0)' : 'translateY(30px)' }"
        />
      </div>
    </section>

    <!-- =========================================================
         4. 카테고리별 트렌드 - Sticky Horizontal Scroll (데스크탑)
         ========================================================= -->

    <!-- Desktop: Sticky Horizontal Scroll -->
    <div
      ref="trendWrapperRef"
      class="relative hidden md:block"
      :style="{ height: `calc(${trends.length + TREND_FRONT + TREND_BACK} * 100vh)` }"
    >
      <div
        class="sticky top-0 h-screen overflow-hidden"
        :style="{ backgroundColor: `rgba(9, 9, 11, ${trendBgOpacity})`, color: trendTextColor }"
      >

        <!-- 섹션 헤더 (고정) -->
        <div
          class="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 lg:px-16 pt-6"
        >
          <div class="flex items-center gap-3">
            <LIcon name="lucide:trending-up" class="w-5 h-5" />
            <span class="text-sm font-semibold tracking-wider uppercase">카테고리별 트렌드</span>
          </div>
          <!-- 현재 인덱스 표시 -->
          <div class="text-sm">
            <span class="font-bold text-lg tabular-nums">{{ String(currentTrendIndex + 1).padStart(2, '0') }}</span>
            <span class="mx-1">/</span>
            <span>{{ String(trends.length).padStart(2, '0') }}</span>
          </div>
        </div>

        <!-- 진행 인디케이터 (하단 중앙) -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2" :style="{ opacity: trendBgOpacity }">
          <button
            v-for="(trend, i) in trends"
            :key="trend.category!.slug"
            class="transition-all duration-300 rounded-full cursor-default"
            :class="i === currentTrendIndex
              ? 'w-8 h-2 bg-primary-400'
              : 'w-2 h-2 bg-neutral-600'"
            :aria-label="trend.category!.name"
          />
        </div>

        <!-- 스크롤 힌트 (처음 패널에서만) -->
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
          :style="{
            width: `${trends.length * 100}vw`,
            transform: `translateX(${horizontalTranslate}vw)`,
          }"
        >
          <div
            v-for="(trend, panelIdx) in trends"
            :key="trend.category!.slug"
            class="flex-none h-full flex flex-col justify-center"
            style="width: 100vw"
          >
            <div class="max-w-6xl mx-auto w-full px-8 lg:px-16 pt-20 pb-16">
              <!-- 카테고리 헤더 -->
              <div class="flex items-center gap-4 mb-8">
                <div class="w-14 h-14 rounded-2xl bg-primary-500/20 flex items-center justify-center">
                  <LIcon :name="trend.category!.icon" class="w-7 h-7 text-primary-400" />
                </div>
                <div>
                  <div class="text-xs text-neutral-500 uppercase tracking-widest mb-1">{{ panelIdx + 1 }}번째 카테고리</div>
                  <h2 class="text-3xl lg:text-4xl font-bold">{{ trend.category!.name }}</h2>
                </div>
                <NuxtLink
                  :to="`/categories/${trend.category!.slug}`"
                  class="ml-auto text-sm text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors"
                >
                  전체보기 <LIcon name="lucide:arrow-right" class="w-4 h-4" />
                </NuxtLink>
              </div>

              <!-- 툴 카드 그리드 -->
              <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <NuxtLink
                  v-for="(tool, toolIdx) in trend.tools"
                  :key="tool.id"
                  :to="`/tools/${tool.slug}`"
                  class="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/40 rounded-xl p-4 transition-all"
                >
                  <!-- 순위 -->
                  <span class="text-2xl font-black tabular-nums"
                    :class="toolIdx === 0 ? 'text-amber-400' : toolIdx === 1 ? 'text-neutral-400' : toolIdx === 2 ? 'text-amber-700' : 'text-neutral-600'"
                  >{{ toolIdx + 1 }}</span>
                  <!-- 로고 -->
                  <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      v-if="tool.logoUrl"
                      :src="tool.logoUrl"
                      :alt="tool.name"
                      class="w-8 h-8 object-contain"
                      @error="($event.target as HTMLImageElement).style.display = 'none'"
                    />
                    <span v-else class="text-sm font-bold text-primary-400">{{ tool.name[0] }}</span>
                  </div>
                  <!-- 정보 -->
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

    <!-- Mobile fallback: 카테고리별 트렌드 (일반 세로 스크롤) -->
    <section class="md:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
          <LIcon name="lucide:trending-up" class="w-6 h-6" /> 카테고리별 트렌드
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div v-for="trend in trends" :key="trend.category!.slug" class="card p-5">
          <div class="flex items-center gap-2 mb-4">
            <LIcon :name="trend.category!.icon" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <h3 class="font-semibold text-neutral-900 dark:text-neutral-100">{{ trend.category!.name }}</h3>
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
                <div class="text-xs text-neutral-500"><LIcon name="lucide:star" fill="currentColor" class="w-3 h-3 text-amber-500 inline" /> {{ tool.rating }}</div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================
         AI 도구 비교
         ========================================================= -->
    <section ref="compareSectionRef" class="bg-neutral-50 dark:bg-neutral-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center justify-center gap-2">
            <LIcon name="lucide:scale" class="w-6 h-6" /> AI 도구 비교
          </h2>
          <p class="text-neutral-600 dark:text-neutral-400 mt-2">어떤 도구가 나에게 맞을까? 인기 도구를 비교해보세요.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <NuxtLink
            v-for="(pair, pairIdx) in comparePairs"
            :key="`${pair.a.slug}-${pair.b.slug}`"
            :to="`/compare/${pair.a.slug}-vs-${pair.b.slug}`"
            class="card p-5 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all overflow-hidden"
            :style="{ transitionDelay: `${pairIdx * 100}ms` }"
          >
            <div class="flex items-center justify-between">
              <!-- 왼쪽 툴: 왼쪽에서 슬라이드 인 -->
              <div
                class="flex items-center gap-3 flex-1 min-w-0 scroll-reveal"
                :style="{ transitionDelay: `${pairIdx * 100}ms`, opacity: compareVisible ? 1 : 0, transform: compareVisible ? 'translateX(0)' : 'translateX(-30px)' }"
              >
                <div class="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 overflow-hidden">
                  <img v-if="pair.a.logoUrl" :src="pair.a.logoUrl" :alt="pair.a.name" class="w-8 h-8 object-contain" @error="($event.target as HTMLImageElement).style.display = 'none'" />
                  <span v-else class="font-bold text-primary-600">{{ pair.a.name[0] }}</span>
                </div>
                <div class="min-w-0">
                  <div class="font-semibold text-neutral-900 dark:text-neutral-100 truncate">{{ pair.a.name }}</div>
                  <div class="text-xs text-neutral-500"><LIcon name="lucide:star" fill="currentColor" class="w-3 h-3 text-amber-500 inline" /> {{ pair.a.rating }}</div>
                </div>
              </div>

              <!-- VS 배지: scale 팝인 -->
              <div
                class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-bold shrink-0 mx-3 scroll-reveal"
                :style="{ transitionDelay: `${pairIdx * 100 + 200}ms`, opacity: compareVisible ? 1 : 0, transform: compareVisible ? 'scale(1)' : 'scale(0)' }"
              >
                VS
              </div>

              <!-- 오른쪽 툴: 오른쪽에서 슬라이드 인 -->
              <div
                class="flex items-center gap-3 flex-1 min-w-0 justify-end scroll-reveal"
                :style="{ transitionDelay: `${pairIdx * 100}ms`, opacity: compareVisible ? 1 : 0, transform: compareVisible ? 'translateX(0)' : 'translateX(30px)' }"
              >
                <div class="min-w-0 text-right">
                  <div class="font-semibold text-neutral-900 dark:text-neutral-100 truncate">{{ pair.b.name }}</div>
                  <div class="text-xs text-neutral-500"><LIcon name="lucide:star" fill="currentColor" class="w-3 h-3 text-amber-500 inline" /> {{ pair.b.rating }}</div>
                </div>
                <div class="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 overflow-hidden">
                  <img v-if="pair.b.logoUrl" :src="pair.b.logoUrl" :alt="pair.b.name" class="w-8 h-8 object-contain" @error="($event.target as HTMLImageElement).style.display = 'none'" />
                  <span v-else class="font-bold text-primary-600">{{ pair.b.name[0] }}</span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
/* 스크롤 진입 애니메이션 */
.scroll-reveal {
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

/* 1. 로고 플로팅 애니메이션 */
@keyframes logo-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-12px) rotate(1deg); }
  66% { transform: translateY(-6px) rotate(-1deg); }
}

/* 3. 호버 팝업 트랜지션 */
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

/* fade 트랜지션 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
