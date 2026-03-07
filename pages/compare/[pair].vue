<script setup lang="ts">
import { getToolBySlug as staticGetBySlug } from '~/data/tools'
import { categories as staticCategories } from '~/data/categories'

const route = useRoute()
const slugs = (route.params.pair as string).split('-vs-')

const { getToolBySlug } = useTools()
const { getCategories } = useCategories()

const { data: toolA } = await useAsyncData(`tool-${slugs[0]}`, () => getToolBySlug(slugs[0]), {
  default: () => staticGetBySlug(slugs[0]),
})
const { data: toolB } = await useAsyncData(`tool-${slugs[1]}`, () => getToolBySlug(slugs[1]), {
  default: () => staticGetBySlug(slugs[1]),
})
const { data: allCategories } = await useAsyncData('categories', getCategories, {
  default: () => staticCategories,
})

if (!toolA.value || !toolB.value) throw createError({ statusCode: 404, statusMessage: '비교할 도구를 찾을 수 없습니다' })

useHead({ title: `${toolA.value?.name} vs ${toolB.value?.name} 비교 - AIrang` })

function getCatName(slug: string) {
  return (allCategories.value || staticCategories).find(c => c.slug === slug)?.name || slug
}
function korLabel(v: string) { return v === 'full' ? '완전 지원' : v === 'partial' ? '부분 지원' : '미지원' }
function priceLabel(v: string) { return v === 'free' ? '무료' : v === 'freemium' ? '프리미엄' : v === 'paid' ? '유료' : '엔터프라이즈' }
</script>

<template>
  <div v-if="toolA && toolB" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <nav class="flex items-center gap-2 text-sm text-neutral-500 mb-6">
      <NuxtLink to="/" class="hover:text-primary-600">홈</NuxtLink><span>/</span>
      <span class="text-neutral-900 dark:text-neutral-100">{{ toolA.name }} vs {{ toolB.name }}</span>
    </nav>

    <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
      {{ toolA.name }} vs {{ toolB.name }} 비교
    </h1>

    <div class="card overflow-hidden">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
            <th class="text-left p-4 w-1/3 font-medium text-neutral-500">항목</th>
            <th class="text-center p-4 w-1/3 font-semibold text-neutral-900 dark:text-neutral-100">{{ toolA.name }}</th>
            <th class="text-center p-4 w-1/3 font-semibold text-neutral-900 dark:text-neutral-100">{{ toolB.name }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-neutral-100 dark:divide-neutral-800">
          <tr>
            <td class="p-4 font-medium text-neutral-600 dark:text-neutral-400">한줄 소개</td>
            <td class="p-4 text-center text-neutral-700 dark:text-neutral-300">{{ toolA.tagline }}</td>
            <td class="p-4 text-center text-neutral-700 dark:text-neutral-300">{{ toolB.tagline }}</td>
          </tr>
          <tr>
            <td class="p-4 font-medium text-neutral-600 dark:text-neutral-400">가격 모델</td>
            <td class="p-4 text-center"><span :class="['badge', toolA.pricingModel === 'free' ? 'badge-free' : 'badge-freemium']">{{ priceLabel(toolA.pricingModel) }}</span></td>
            <td class="p-4 text-center"><span :class="['badge', toolB.pricingModel === 'free' ? 'badge-free' : 'badge-freemium']">{{ priceLabel(toolB.pricingModel) }}</span></td>
          </tr>
          <tr>
            <td class="p-4 font-medium text-neutral-600 dark:text-neutral-400">가격 상세</td>
            <td class="p-4 text-center text-neutral-700 dark:text-neutral-300">{{ toolA.pricingDetail }}</td>
            <td class="p-4 text-center text-neutral-700 dark:text-neutral-300">{{ toolB.pricingDetail }}</td>
          </tr>
          <tr>
            <td class="p-4 font-medium text-neutral-600 dark:text-neutral-400">한국어 지원</td>
            <td class="p-4 text-center"><span class="badge badge-korean">{{ korLabel(toolA.koreanSupport) }}</span></td>
            <td class="p-4 text-center"><span class="badge badge-korean">{{ korLabel(toolB.koreanSupport) }}</span></td>
          </tr>
          <tr>
            <td class="p-4 font-medium text-neutral-600 dark:text-neutral-400">평점</td>
            <td class="p-4 text-center text-amber-500 font-bold"><LIcon name="lucide:star" fill="currentColor" class="w-3 h-3 text-amber-500 inline" /> {{ toolA.rating }}</td>
            <td class="p-4 text-center text-amber-500 font-bold"><LIcon name="lucide:star" fill="currentColor" class="w-3 h-3 text-amber-500 inline" /> {{ toolB.rating }}</td>
          </tr>
          <tr>
            <td class="p-4 font-medium text-neutral-600 dark:text-neutral-400">리뷰 수</td>
            <td class="p-4 text-center text-neutral-700 dark:text-neutral-300">{{ toolA.reviewCount }}개</td>
            <td class="p-4 text-center text-neutral-700 dark:text-neutral-300">{{ toolB.reviewCount }}개</td>
          </tr>
          <tr>
            <td class="p-4 font-medium text-neutral-600 dark:text-neutral-400">카테고리</td>
            <td class="p-4 text-center text-neutral-700 dark:text-neutral-300">{{ toolA.categories.map(getCatName).join(', ') }}</td>
            <td class="p-4 text-center text-neutral-700 dark:text-neutral-300">{{ toolB.categories.map(getCatName).join(', ') }}</td>
          </tr>
          <tr>
            <td class="p-4 font-medium text-neutral-600 dark:text-neutral-400">플랫폼</td>
            <td class="p-4 text-center text-neutral-700 dark:text-neutral-300">{{ toolA.platforms.join(', ') }}</td>
            <td class="p-4 text-center text-neutral-700 dark:text-neutral-300">{{ toolB.platforms.join(', ') }}</td>
          </tr>
          <tr>
            <td class="p-4 font-medium text-neutral-600 dark:text-neutral-400">주요 기능</td>
            <td class="p-4 text-neutral-700 dark:text-neutral-300"><ul class="space-y-1"><li v-for="f in toolA.features" :key="f" class="text-xs">✅ {{ f }}</li></ul></td>
            <td class="p-4 text-neutral-700 dark:text-neutral-300"><ul class="space-y-1"><li v-for="f in toolB.features" :key="f" class="text-xs">✅ {{ f }}</li></ul></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-8 flex gap-4">
      <NuxtLink :to="`/tools/${toolA.slug}`" class="flex-1 card p-4 text-center hover:border-primary-300 transition-all">
        <span class="text-sm font-medium text-primary-600">{{ toolA.name }} 자세히 보기 →</span>
      </NuxtLink>
      <NuxtLink :to="`/tools/${toolB.slug}`" class="flex-1 card p-4 text-center hover:border-primary-300 transition-all">
        <span class="text-sm font-medium text-primary-600">{{ toolB.name }} 자세히 보기 →</span>
      </NuxtLink>
    </div>
  </div>
</template>
