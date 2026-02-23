<script setup lang="ts">
import { getToolBySlug, getAlternatives } from '~/data/tools'

const route = useRoute()
const slug = route.params.slug as string
const tool = getToolBySlug(slug)

if (!tool) throw createError({ statusCode: 404, statusMessage: '도구를 찾을 수 없습니다' })

const alternatives = getAlternatives(slug)
useHead({
  title: `${tool.name} 대안 추천 TOP ${alternatives.length} (2026) - AIrang`,
  meta: [{ name: 'description', content: `${tool.name}의 대안을 찾고 있나요? 가격, 기능, 한국어 지원을 기준으로 비교한 TOP ${alternatives.length} 대안.` }],
})
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <nav class="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-6">
      <NuxtLink to="/" class="hover:text-primary-600">홈</NuxtLink><span>/</span>
      <span class="text-neutral-900 dark:text-neutral-100">{{ tool.name }} 대안</span>
    </nav>

    <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
      {{ tool.name }} 대안 추천 TOP {{ alternatives.length }}
    </h1>
    <p class="text-neutral-600 dark:text-neutral-400 mb-8">
      {{ tool.name }}이 맞지 않나요? 가격, 기능, 한국어 지원을 기준으로 비교한 대안을 확인하세요.
    </p>

    <!-- Quick comparison table -->
    <div class="card overflow-x-auto mb-8">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-neutral-200 dark:border-neutral-700">
            <th class="text-left p-4 font-medium text-neutral-500">도구</th>
            <th class="text-left p-4 font-medium text-neutral-500">가격</th>
            <th class="text-left p-4 font-medium text-neutral-500">한국어</th>
            <th class="text-center p-4 font-medium text-neutral-500">평점</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-neutral-100 dark:border-neutral-800 bg-primary-50/50 dark:bg-primary-950/20">
            <td class="p-4 font-medium text-neutral-900 dark:text-neutral-100">{{ tool.name }} (원본)</td>
            <td class="p-4 text-neutral-600 dark:text-neutral-400">{{ tool.pricingDetail }}</td>
            <td class="p-4">
              <span :class="['badge', tool.koreanSupport === 'full' ? 'badge-korean' : tool.koreanSupport === 'partial' ? 'badge-freemium' : 'badge-paid']">
                {{ tool.koreanSupport === 'full' ? '지원' : tool.koreanSupport === 'partial' ? '일부' : '미지원' }}
              </span>
            </td>
            <td class="p-4 text-center text-amber-500 font-medium">⭐ {{ tool.rating }}</td>
          </tr>
          <tr v-for="alt in alternatives" :key="alt.id" class="border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
            <td class="p-4">
              <NuxtLink :to="`/tools/${alt.slug}`" class="font-medium text-primary-600 dark:text-primary-400 hover:underline">{{ alt.name }}</NuxtLink>
            </td>
            <td class="p-4 text-neutral-600 dark:text-neutral-400">{{ alt.pricingDetail }}</td>
            <td class="p-4">
              <span :class="['badge', alt.koreanSupport === 'full' ? 'badge-korean' : alt.koreanSupport === 'partial' ? 'badge-freemium' : 'badge-paid']">
                {{ alt.koreanSupport === 'full' ? '지원' : alt.koreanSupport === 'partial' ? '일부' : '미지원' }}
              </span>
            </td>
            <td class="p-4 text-center text-amber-500 font-medium">⭐ {{ alt.rating }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Alternative cards -->
    <div class="space-y-4">
      <div v-for="(alt, i) in alternatives" :key="alt.id">
        <h2 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{{ i + 1 }}. {{ alt.name }}</h2>
        <ToolCard :tool="alt" />
      </div>
    </div>
  </div>
</template>
