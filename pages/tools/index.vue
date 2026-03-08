<script setup lang="ts">
import { tools as staticTools, type Tool } from '~/data/tools'
import { categories as staticCategories } from '~/data/categories'

useHead({ title: '전체 AI 도구 탐색 - AIrang' })

const { getTools } = useTools()
const { getCategories } = useCategories()

const route = useRoute()
const q = ref((route.query.q as string) || '')
const selectedCategory = ref('')
const selectedPricing = ref('')
const selectedKorean = ref('')
const sortBy = ref('popular')

const { data: allTools } = await useAsyncData('tools', getTools, { default: () => staticTools })
const { data: categories } = await useAsyncData('categories', getCategories, { default: () => staticCategories })

const filteredTools = computed(() => {
  const toolList = allTools.value || staticTools
  let result: Tool[] = q.value
    ? toolList.filter(t => {
        const query = q.value.toLowerCase()
        return (
          t.name.toLowerCase().includes(query) ||
          t.tagline.toLowerCase().includes(query) ||
          t.description.toLowerCase().includes(query) ||
          t.categories.some(c => c.includes(query)) ||
          t.features.some(f => f.toLowerCase().includes(query))
        )
      })
    : [...toolList]

  if (selectedCategory.value) result = result.filter(t => t.categories.includes(selectedCategory.value))
  if (selectedPricing.value) result = result.filter(t => t.pricingModel === selectedPricing.value)
  if (selectedKorean.value) result = result.filter(t => t.koreanSupport === selectedKorean.value)

  switch (sortBy.value) {
    case 'popular': return result.sort((a, b) => b.reviewCount - a.reviewCount)
    case 'rating': return result.sort((a, b) => b.rating - a.rating)
    case 'name': return result.sort((a, b) => a.name.localeCompare(b.name))
    case 'newest': return result.sort((a, b) => b.launchedAt.localeCompare(a.launchedAt))
    default: return result
  }
})

function clearFilters() {
  q.value = ''
  selectedCategory.value = ''
  selectedPricing.value = ''
  selectedKorean.value = ''
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 flex items-center gap-2">
      <LIcon name="lucide:compass" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
      AI 도구 탐색
    </h1>

    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Sidebar Filters -->
      <aside class="lg:w-64 shrink-0">
        <div class="card p-5 space-y-6 sticky top-24">
          <!-- Search -->
          <div>
            <label class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">검색</label>
            <input v-model="q" type="text" placeholder="도구 검색..."
              class="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>

          <!-- Category -->
          <div>
            <label class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">카테고리</label>
            <select v-model="selectedCategory" class="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm">
              <option value="">전체</option>
              <option v-for="cat in (categories || staticCategories)" :key="cat.slug" :value="cat.slug">{{ cat.icon }} {{ cat.name }}</option>
            </select>
          </div>

          <!-- Pricing -->
          <div>
            <label class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">가격</label>
            <select v-model="selectedPricing" class="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm">
              <option value="">전체</option>
              <option value="free">무료</option>
              <option value="freemium">프리미엄</option>
              <option value="paid">유료</option>
            </select>
          </div>

          <!-- Korean support -->
          <div>
            <label class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 block">한국어 지원</label>
            <select v-model="selectedKorean" class="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm">
              <option value="">전체</option>
              <option value="full">완전 지원</option>
              <option value="partial">부분 지원</option>
              <option value="none">미지원</option>
            </select>
          </div>

          <button @click="clearFilters" class="w-full text-sm text-primary-600 dark:text-primary-400 hover:underline">
            필터 초기화
          </button>
        </div>
      </aside>

      <!-- Main content -->
      <div class="flex-1 min-w-0">
        <!-- Sort & count -->
        <div class="flex items-center justify-between mb-6">
          <p class="text-sm text-neutral-500 dark:text-neutral-400">{{ filteredTools.length }}개 도구</p>
          <select v-model="sortBy" class="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm">
            <option value="popular">인기순</option>
            <option value="rating">평점순</option>
            <option value="name">이름순</option>
            <option value="newest">최신순</option>
          </select>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          <ToolCard v-for="tool in filteredTools" :key="tool.id" :tool="tool" />
        </div>

        <div v-if="filteredTools.length === 0" class="text-center py-16 text-neutral-500">
          <p class="text-lg mb-2">검색 결과가 없습니다</p>
          <p class="text-sm">다른 키워드로 검색하거나 필터를 변경해보세요</p>
        </div>
      </div>
    </div>
  </div>
</template>
