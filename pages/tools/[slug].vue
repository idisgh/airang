<script setup lang="ts">
import { getToolBySlug as staticGetBySlug, getAlternatives as staticGetAlternatives } from '~/data/tools'
import { categories as staticCategories } from '~/data/categories'

const route = useRoute()
const slug = route.params.slug as string
const detailLogoError = ref(false)

const { getToolBySlug, getAlternatives } = useTools()
const { getCategories } = useCategories()
const { getUpdatesBySlug } = useToolUpdates()

const { data: tool } = await useAsyncData(`tool-${slug}`, () => getToolBySlug(slug), {
  default: () => staticGetBySlug(slug),
})
const { data: alternatives } = await useAsyncData(`alternatives-${slug}`, () => getAlternatives(slug), {
  default: () => staticGetAlternatives(slug),
})
const { data: allCategories } = await useAsyncData('categories', getCategories, {
  default: () => staticCategories,
})
const { data: updates } = await useAsyncData(`updates-${slug}`, () => getUpdatesBySlug(slug), {
  default: () => [],
})

const showAllUpdates = ref(false)
const visibleUpdates = computed(() => {
  if (!updates.value) return []
  return showAllUpdates.value ? updates.value : updates.value.slice(0, 3)
})

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
}

if (!tool.value) {
  throw createError({ statusCode: 404, statusMessage: '도구를 찾을 수 없습니다' })
}

useHead({
  title: `${tool.value?.name} - 가격, 리뷰, 대안 비교 | AIrang`,
  meta: [
    { name: 'description', content: `${tool.value?.name}: ${tool.value?.tagline} 가격, 기능, 한국어 지원 여부, 대안 비교.` },
  ],
})

function getCategoryName(catSlug: string) {
  return (allCategories.value || staticCategories).find(c => c.slug === catSlug)?.name || catSlug
}

const pricingLabel = computed(() => {
  switch (tool.value?.pricingModel) {
    case 'free': return '무료'
    case 'freemium': return '프리미엄'
    case 'paid': return '유료'
    case 'enterprise': return '엔터프라이즈'
    default: return ''
  }
})

const koreanLabel = computed(() => {
  switch (tool.value?.koreanSupport) {
    case 'full': return '완전 지원'
    case 'partial': return '부분 지원'
    case 'none': return '미지원'
    default: return ''
  }
})
</script>

<template>
  <div v-if="tool" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Breadcrumb -->
    <nav class="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-6">
      <NuxtLink to="/" class="hover:text-primary-600">홈</NuxtLink>
      <span>/</span>
      <NuxtLink to="/tools" class="hover:text-primary-600">도구</NuxtLink>
      <span>/</span>
      <span class="text-neutral-900 dark:text-neutral-100">{{ tool.name }}</span>
    </nav>

    <!-- Header -->
    <div class="card p-6 sm:p-8 mb-6">
      <div class="flex items-start gap-4 mb-6">
        <div v-if="tool.logoUrl && !detailLogoError" class="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
          <img :src="tool.logoUrl" :alt="tool.name" class="w-12 h-12 object-contain" @error="detailLogoError = true">
        </div>
        <div v-else class="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 rounded-2xl flex items-center justify-center text-2xl font-bold text-primary-700 dark:text-primary-300 shrink-0">
          {{ tool.name[0] }}
        </div>
        <div class="flex-1">
          <h1 class="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">{{ tool.name }}</h1>
          <p class="text-lg text-neutral-600 dark:text-neutral-400 mt-1">{{ tool.tagline }}</p>
        </div>
      </div>

      <!-- Badges -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span v-for="cat in tool.categories" :key="cat"
          class="text-sm px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full">
          {{ getCategoryName(cat) }}
        </span>
        <span :class="['badge text-sm', tool.pricingModel === 'free' ? 'badge-free' : tool.pricingModel === 'freemium' ? 'badge-freemium' : 'badge-paid']">
          {{ pricingLabel }}
        </span>
        <span class="badge badge-korean text-sm">{{ koreanLabel }}</span>
      </div>

      <!-- Meta grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div class="text-center p-3 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
          <div class="text-2xl font-bold text-amber-500 flex items-center justify-center gap-1"><LIcon name="lucide:star" fill="currentColor" class="w-5 h-5" /> {{ tool.rating }}</div>
          <div class="text-xs text-neutral-500 mt-1">평점</div>
        </div>
        <div class="text-center p-3 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
          <div class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">{{ tool.reviewCount }}</div>
          <div class="text-xs text-neutral-500 mt-1">리뷰 수</div>
        </div>
        <div class="text-center p-3 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
          <div class="text-lg font-bold text-neutral-900 dark:text-neutral-100">{{ tool.platforms.length }}</div>
          <div class="text-xs text-neutral-500 mt-1">플랫폼</div>
        </div>
        <div class="text-center p-3 bg-neutral-50 dark:bg-neutral-800 rounded-xl">
          <div class="text-lg font-bold text-neutral-900 dark:text-neutral-100">{{ tool.launchedAt.slice(0, 4) }}</div>
          <div class="text-xs text-neutral-500 mt-1">출시년도</div>
        </div>
      </div>

      <!-- CTA -->
      <a :href="tool.url" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors">
        {{ tool.name }} 바로가기
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
      </a>
    </div>

    <!-- Description -->
    <div class="card p-6 sm:p-8 mb-6">
      <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">소개</h2>
      <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">{{ tool.description }}</p>
    </div>

    <!-- Features -->
    <div class="card p-6 sm:p-8 mb-6">
      <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">주요 기능</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div v-for="feature in tool.features" :key="feature" class="flex items-center gap-2">
          <LIcon name="lucide:check" class="w-5 h-5 text-primary-500 shrink-0" />
          <span class="text-neutral-700 dark:text-neutral-300">{{ feature }}</span>
        </div>
      </div>
    </div>

    <!-- 업데이트 히스토리 -->
    <div v-if="updates && updates.length" class="card p-6 sm:p-8 mb-6">
      <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"><LIcon name="lucide:history" class="w-5 h-5 inline" /> 업데이트 히스토리</h2>
      <div class="space-y-4">
        <div v-for="update in visibleUpdates" :key="update.id" class="relative pl-6 border-l-2 border-primary-200 dark:border-primary-800">
          <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary-500 border-2 border-white dark:border-neutral-900"></div>
          <div class="flex items-center gap-2 mb-1">
            <span v-if="update.version" class="text-xs font-mono bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-0.5 rounded">{{ update.version }}</span>
            <time class="text-xs text-neutral-500">{{ formatDate(update.updated_at) }}</time>
          </div>
          <h3 class="text-sm font-medium text-neutral-900 dark:text-neutral-100">{{ update.title }}</h3>
          <ul class="mt-1 space-y-0.5">
            <li v-for="change in update.changes" :key="change" class="text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-1.5">
              <span class="text-primary-500 mt-0.5">•</span>
              <span>{{ change }}</span>
            </li>
          </ul>
        </div>
      </div>
      <button
        v-if="updates.length > 3 && !showAllUpdates"
        @click="showAllUpdates = true"
        class="mt-4 text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
      >
        전체 히스토리 보기 ({{ updates.length }}개)
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <button
        v-if="showAllUpdates && updates.length > 3"
        @click="showAllUpdates = false"
        class="mt-4 text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
      >
        접기
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
      </button>
    </div>

    <!-- Pricing -->
    <div class="card p-6 sm:p-8 mb-6">
      <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4"><LIcon name="lucide:wallet" class="w-5 h-5 inline" /> 가격</h2>
      <p class="text-neutral-700 dark:text-neutral-300">{{ tool.pricingDetail }}</p>
    </div>

    <!-- Platforms -->
    <div class="card p-6 sm:p-8 mb-6">
      <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">지원 플랫폼</h2>
      <div class="flex flex-wrap gap-2">
        <span v-for="p in tool.platforms" :key="p" class="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm text-neutral-700 dark:text-neutral-300 capitalize">
          {{ p }}
        </span>
      </div>
    </div>

    <!-- Alternatives -->
    <div v-if="alternatives && alternatives.length > 0" class="mb-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100"><LIcon name="lucide:repeat" class="w-5 h-5 inline" /> {{ tool.name }}의 대안</h2>
        <NuxtLink :to="`/alternatives/${tool.slug}`" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">
          전체 대안 보기 →
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ToolCard v-for="alt in alternatives" :key="alt.id" :tool="alt" />
      </div>
    </div>
  </div>
</template>
