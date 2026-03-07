<script setup lang="ts">
import { tools as staticTools, getToolsByCategory as staticGetByCategory, getFeaturedTools as staticGetFeatured } from '~/data/tools'
import { categories as staticCategories } from '~/data/categories'

useHead({ title: 'AIrang - 한국어 AI 도구 검색 & 비교 플랫폼' })

const { getTools, getFeaturedTools } = useTools()
const { getCategories } = useCategories()

const searchQuery = ref('')

const { data: allTools } = await useAsyncData('tools', getTools, { default: () => staticTools })
const { data: featured } = await useAsyncData('featured-tools', getFeaturedTools, { default: () => staticGetFeatured() })
const { data: allCategories } = await useAsyncData('categories', getCategories, { default: () => staticCategories })

const recent = computed(() => [...(allTools.value || [])].reverse().slice(0, 6))

// 카테고리별 인기 도구 (트렌드)
const trendCategories = ['chatbot', 'image-generation', 'coding', 'video']
const trends = computed(() => {
  const tools = allTools.value || staticTools
  const cats = allCategories.value || staticCategories
  return trendCategories.map(slug => {
    const cat = cats.find(c => c.slug === slug)
    const catTools = tools.filter(t => t.categories.includes(slug)).sort((a, b) => b.rating - a.rating).slice(0, 3)
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

function onSearch() {
  if (searchQuery.value.trim()) {
    navigateTo({ path: '/tools', query: { q: searchQuery.value.trim() } })
  }
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950 py-20 sm:py-28">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
          한국어로 찾는
          <span class="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">AI 도구</span>
        </h1>
        <p class="mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          {{ (allTools || staticTools).length }}개 이상의 AI 도구를 한국어로 검색하고 비교하세요.<br class="hidden sm:block">
          가격, 기능, 한국어 지원 여부를 한눈에.
        </p>

        <!-- Search bar -->
        <form @submit.prevent="onSearch" class="mt-8 max-w-xl mx-auto">
          <div class="relative">
            <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="어떤 AI 도구를 찾고 계세요?"
              class="w-full pl-12 pr-4 py-4 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
            />
          </div>
        </form>

        <!-- Stats -->
        <div class="mt-6 flex items-center justify-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
          <span class="flex items-center gap-1.5"><LIcon name="lucide:package" class="w-4 h-4" /> {{ (allTools || staticTools).length }}+ 도구</span>
          <span class="flex items-center gap-1.5"><LIcon name="lucide:folder-open" class="w-4 h-4" /> {{ (allCategories || staticCategories).length }}개 카테고리</span>
          <span class="flex items-center gap-1.5"><LIcon name="lucide:globe" class="w-4 h-4" /> 한국어 리뷰</span>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2"><LIcon name="lucide:folder-open" class="w-6 h-6" /> 카테고리</h2>
        <NuxtLink to="/categories" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">전체보기 →</NuxtLink>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <NuxtLink
          v-for="cat in (allCategories || staticCategories)"
          :key="cat.id"
          :to="`/categories/${cat.slug}`"
          class="card p-4 flex flex-col items-center text-center hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all group"
        >
          <LIcon :name="cat.icon" class="w-8 h-8 text-primary-600 dark:text-primary-400 mb-2" />
          <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600">{{ cat.name }}</div>
          <div class="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{{ getCategoryToolCount(cat.slug) }}개 도구</div>
        </NuxtLink>
      </div>
    </section>

    <!-- Featured tools -->
    <section class="bg-neutral-50 dark:bg-neutral-900/50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">🔥 인기 도구</h2>
          <NuxtLink to="/tools" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">전체보기 →</NuxtLink>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ToolCard v-for="tool in (featured || [])" :key="tool.id" :tool="tool" />
        </div>
      </div>
    </section>

    <!-- Recent tools -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">🆕 최근 등록</h2>
        <NuxtLink to="/tools" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">전체보기 →</NuxtLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ToolCard v-for="tool in recent" :key="tool.id" :tool="tool" />
      </div>
    </section>

    <!-- 카테고리별 트렌드 -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
          <LIcon name="lucide:trending-up" class="w-6 h-6" /> 카테고리별 트렌드
        </h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="trend in trends" :key="trend.category!.slug" class="card p-5">
          <div class="flex items-center gap-2 mb-4">
            <LIcon :name="trend.category!.icon" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <h3 class="font-semibold text-neutral-900 dark:text-neutral-100">{{ trend.category!.name }}</h3>
          </div>
          <div class="space-y-3">
            <NuxtLink
              v-for="(tool, i) in trend.tools"
              :key="tool.id"
              :to="`/tools/${tool.slug}`"
              class="flex items-center gap-3 group"
            >
              <span class="text-xs font-bold text-neutral-400 w-4">{{ i + 1 }}</span>
              <div v-if="tool.logoUrl" class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                <img :src="tool.logoUrl" :alt="tool.name" class="w-6 h-6 object-contain">
              </div>
              <div v-else class="w-8 h-8 bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center text-xs font-bold text-primary-600 shrink-0">
                {{ tool.name[0] }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 truncate">{{ tool.name }}</div>
                <div class="text-xs text-neutral-500">⭐ {{ tool.rating }}</div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- AI 도구 비교 -->
    <section class="bg-neutral-50 dark:bg-neutral-900/50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center justify-center gap-2">
            <LIcon name="lucide:scale" class="w-6 h-6" /> AI 도구 비교
          </h2>
          <p class="text-neutral-600 dark:text-neutral-400 mt-2">어떤 도구가 나에게 맞을까? 인기 도구를 비교해보세요.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <NuxtLink
            v-for="pair in comparePairs"
            :key="`${pair.a.slug}-${pair.b.slug}`"
            :to="`/tools/${pair.a.slug}`"
            class="card p-5 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3 flex-1 min-w-0">
                <div v-if="pair.a.logoUrl" class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                  <img :src="pair.a.logoUrl" :alt="pair.a.name" class="w-8 h-8 object-contain">
                </div>
                <div v-else class="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center font-bold text-primary-600 shrink-0">
                  {{ pair.a.name[0] }}
                </div>
                <div class="min-w-0">
                  <div class="font-semibold text-neutral-900 dark:text-neutral-100 truncate">{{ pair.a.name }}</div>
                  <div class="text-xs text-neutral-500">⭐ {{ pair.a.rating }}</div>
                </div>
              </div>

              <div class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-bold shrink-0 mx-3">
                VS
              </div>

              <div class="flex items-center gap-3 flex-1 min-w-0 justify-end">
                <div class="min-w-0 text-right">
                  <div class="font-semibold text-neutral-900 dark:text-neutral-100 truncate">{{ pair.b.name }}</div>
                  <div class="text-xs text-neutral-500">⭐ {{ pair.b.rating }}</div>
                </div>
                <div v-if="pair.b.logoUrl" class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                  <img :src="pair.b.logoUrl" :alt="pair.b.name" class="w-8 h-8 object-contain">
                </div>
                <div v-else class="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-center font-bold text-primary-600 shrink-0">
                  {{ pair.b.name[0] }}
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
