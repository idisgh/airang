<script setup lang="ts">
import { getToolsByCategory as staticGetByCategory } from '~/data/tools'
import { getCategoryBySlug as staticGetCategoryBySlug } from '~/data/categories'

const route = useRoute()
const slug = route.params.slug as string

const { getToolsByCategory } = useTools()
const { getCategoryBySlug } = useCategories()

const { data: category } = await useAsyncData(`category-${slug}`, () => getCategoryBySlug(slug), {
  default: () => staticGetCategoryBySlug(slug),
})
const { data: categoryTools } = await useAsyncData(`category-tools-${slug}`, () => getToolsByCategory(slug), {
  default: () => staticGetByCategory(slug),
})

if (!category.value) throw createError({ statusCode: 404, statusMessage: '카테고리를 찾을 수 없습니다' })

useHead({ title: `${category.value?.name} AI 도구 모음 - AIrang` })
</script>

<template>
  <div v-if="category" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <nav class="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-6">
      <NuxtLink to="/" class="hover:text-primary-600">홈</NuxtLink><span>/</span>
      <NuxtLink to="/categories" class="hover:text-primary-600">카테고리</NuxtLink><span>/</span>
      <span class="text-neutral-900 dark:text-neutral-100">{{ category.name }}</span>
    </nav>

    <div class="mb-8">
      <Icon :name="category.icon" class="w-10 h-10 text-primary-600 dark:text-primary-400 mb-2" />
      <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100">{{ category.name }} AI 도구</h1>
      <p class="text-neutral-600 dark:text-neutral-400 mt-2">{{ category.description }}</p>
      <p class="text-sm text-neutral-500 mt-1">{{ (categoryTools || []).length }}개 도구</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ToolCard v-for="tool in (categoryTools || [])" :key="tool.id" :tool="tool" />
    </div>
  </div>
</template>
