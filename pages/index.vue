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
          class="card p-4 text-center hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all group"
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

    <!-- Newsletter -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="card p-8 sm:p-12 text-center bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-950/30 dark:to-accent-950/30 border-primary-200 dark:border-primary-800">
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">📧 주간 AI 도구 뉴스레터</h2>
        <p class="text-neutral-600 dark:text-neutral-400 mb-6">매주 새로운 AI 도구, 업데이트, 활용 팁을 받아보세요.</p>
        <form @submit.prevent class="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="이메일 주소"
            class="flex-1 px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button type="submit" class="px-6 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors shrink-0">
            구독하기
          </button>
        </form>
      </div>
    </section>
  </div>
</template>
