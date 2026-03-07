<script setup lang="ts">
import { tools as staticTools, getToolBySlug as staticGetBySlug } from '~/data/tools'
import { categories as staticCategories } from '~/data/categories'

const route = useRoute()
const slugsParam = route.params.slugs as string
const [slugA, slugB] = slugsParam.split('-vs-')

const { getToolBySlug } = useTools()
const { getCategories } = useCategories()

const { data: toolA } = await useAsyncData(`compare-a-${slugA}`, () => getToolBySlug(slugA), {
  default: () => staticGetBySlug(slugA),
})
const { data: toolB } = await useAsyncData(`compare-b-${slugB}`, () => getToolBySlug(slugB), {
  default: () => staticGetBySlug(slugB),
})
const { data: allCategories } = await useAsyncData('categories', getCategories, {
  default: () => staticCategories,
})

const logoErrorA = ref(false)
const logoErrorB = ref(false)

if (!toolA.value || !toolB.value) {
  throw createError({ statusCode: 404, statusMessage: '도구를 찾을 수 없습니다' })
}

useHead({
  title: `${toolA.value?.name} vs ${toolB.value?.name} 비교 | AIrang`,
})

function getCategoryName(catSlug: string) {
  return (allCategories.value || staticCategories).find(c => c.slug === catSlug)?.name || catSlug
}

function pricingLabel(model: string) {
  const map: Record<string, string> = { free: '무료', freemium: '프리미엄', paid: '유료', enterprise: '엔터프라이즈' }
  return map[model] || model
}

function koreanLabel(support: string) {
  const map: Record<string, string> = { full: '완전 지원', partial: '부분 지원', none: '미지원' }
  return map[support] || support
}

const compareRows = computed(() => {
  const a = toolA.value!
  const b = toolB.value!
  return [
    { label: '평점', a: `${a.rating}`, b: `${b.rating}`, highlight: a.rating > b.rating ? 'a' : a.rating < b.rating ? 'b' : '' },
    { label: '리뷰 수', a: `${a.reviewCount}개`, b: `${b.reviewCount}개`, highlight: a.reviewCount > b.reviewCount ? 'a' : a.reviewCount < b.reviewCount ? 'b' : '' },
    { label: '가격', a: pricingLabel(a.pricingModel), b: pricingLabel(b.pricingModel), highlight: '' },
    { label: '가격 상세', a: a.pricingDetail, b: b.pricingDetail, highlight: '' },
    { label: '한국어', a: koreanLabel(a.koreanSupport), b: koreanLabel(b.koreanSupport), highlight: '' },
    { label: '플랫폼', a: a.platforms.join(', '), b: b.platforms.join(', '), highlight: '' },
    { label: '카테고리', a: a.categories.map(getCategoryName).join(', '), b: b.categories.map(getCategoryName).join(', '), highlight: '' },
    { label: '출시', a: a.launchedAt.slice(0, 4), b: b.launchedAt.slice(0, 4), highlight: '' },
  ]
})
</script>

<template>
  <div v-if="toolA && toolB" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Breadcrumb -->
    <nav class="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-6">
      <NuxtLink to="/" class="hover:text-primary-600">홈</NuxtLink>
      <span>/</span>
      <span class="text-neutral-900 dark:text-neutral-100">도구 비교</span>
    </nav>

    <!-- Header -->
    <div class="text-center mb-10">
      <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
        {{ toolA.name }} vs {{ toolB.name }}
      </h1>
      <p class="text-neutral-600 dark:text-neutral-400 mt-2">두 AI 도구를 나란히 비교해보세요</p>
    </div>

    <!-- Tool Headers -->
    <div class="grid grid-cols-2 gap-4 mb-8">
      <NuxtLink :to="`/tools/${toolA.slug}`" class="card p-5 text-center hover:shadow-md transition-all">
        <div class="flex justify-center mb-3">
          <div v-if="toolA.logoUrl && !logoErrorA" class="w-14 h-14 flex items-center justify-center">
            <img :src="toolA.logoUrl" :alt="toolA.name" class="w-12 h-12 object-contain" @error="logoErrorA = true">
          </div>
          <div v-else class="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl flex items-center justify-center text-xl font-bold text-primary-700">
            {{ toolA.name[0] }}
          </div>
        </div>
        <h2 class="text-lg font-bold text-neutral-900 dark:text-neutral-100">{{ toolA.name }}</h2>
        <p class="text-sm text-neutral-500 mt-1 line-clamp-2">{{ toolA.tagline }}</p>
      </NuxtLink>

      <NuxtLink :to="`/tools/${toolB.slug}`" class="card p-5 text-center hover:shadow-md transition-all">
        <div class="flex justify-center mb-3">
          <div v-if="toolB.logoUrl && !logoErrorB" class="w-14 h-14 flex items-center justify-center">
            <img :src="toolB.logoUrl" :alt="toolB.name" class="w-12 h-12 object-contain" @error="logoErrorB = true">
          </div>
          <div v-else class="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl flex items-center justify-center text-xl font-bold text-primary-700">
            {{ toolB.name[0] }}
          </div>
        </div>
        <h2 class="text-lg font-bold text-neutral-900 dark:text-neutral-100">{{ toolB.name }}</h2>
        <p class="text-sm text-neutral-500 mt-1 line-clamp-2">{{ toolB.tagline }}</p>
      </NuxtLink>
    </div>

    <!-- Comparison Table -->
    <div class="card overflow-hidden mb-8">
      <div v-for="(row, i) in compareRows" :key="row.label"
        :class="['grid grid-cols-[120px_1fr_1fr] items-center', i % 2 === 0 ? 'bg-neutral-50 dark:bg-neutral-800/50' : '']"
      >
        <div class="px-4 py-3 text-sm font-medium text-neutral-600 dark:text-neutral-400">{{ row.label }}</div>
        <div :class="['px-4 py-3 text-sm text-center', row.highlight === 'a' ? 'font-bold text-primary-600' : 'text-neutral-900 dark:text-neutral-100']">
          {{ row.a }}
        </div>
        <div :class="['px-4 py-3 text-sm text-center', row.highlight === 'b' ? 'font-bold text-primary-600' : 'text-neutral-900 dark:text-neutral-100']">
          {{ row.b }}
        </div>
      </div>
    </div>

    <!-- Features Comparison -->
    <div class="grid grid-cols-2 gap-4 mb-8">
      <div class="card p-5">
        <h3 class="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">{{ toolA.name }} 주요 기능</h3>
        <ul class="space-y-1.5">
          <li v-for="f in toolA.features" :key="f" class="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-1.5">
            <LIcon name="lucide:check" class="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
            <span>{{ f }}</span>
          </li>
        </ul>
      </div>
      <div class="card p-5">
        <h3 class="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">{{ toolB.name }} 주요 기능</h3>
        <ul class="space-y-1.5">
          <li v-for="f in toolB.features" :key="f" class="text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-1.5">
            <LIcon name="lucide:check" class="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
            <span>{{ f }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Description Comparison -->
    <div class="grid grid-cols-2 gap-4 mb-8">
      <div class="card p-5">
        <h3 class="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">{{ toolA.name }} 소개</h3>
        <p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{{ toolA.description }}</p>
      </div>
      <div class="card p-5">
        <h3 class="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">{{ toolB.name }} 소개</h3>
        <p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{{ toolB.description }}</p>
      </div>
    </div>

    <!-- CTA -->
    <div class="grid grid-cols-2 gap-4">
      <a :href="toolA.url" target="_blank" class="block text-center px-6 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors">
        {{ toolA.name }} 바로가기 →
      </a>
      <a :href="toolB.url" target="_blank" class="block text-center px-6 py-3 bg-accent-600 text-white rounded-xl font-medium hover:bg-accent-700 transition-colors">
        {{ toolB.name }} 바로가기 →
      </a>
    </div>
  </div>
</template>
