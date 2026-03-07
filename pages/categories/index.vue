<script setup lang="ts">
import { tools as staticTools, getToolsByCategory as staticGetByCategory } from '~/data/tools'
import { categories as staticCategories } from '~/data/categories'

useHead({ title: '카테고리 - AIrang' })

const { getTools } = useTools()
const { getCategories } = useCategories()

const { data: allTools } = await useAsyncData('tools', getTools, { default: () => staticTools })
const { data: allCategories } = await useAsyncData('categories', getCategories, { default: () => staticCategories })

function getToolCountByCategory(catSlug: string) {
  return (allTools.value || staticTools).filter(t => t.categories.includes(catSlug)).length
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">📂 카테고리</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <NuxtLink
        v-for="cat in (allCategories || staticCategories)" :key="cat.id"
        :to="`/categories/${cat.slug}`"
        class="card p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all group"
      >
        <LIcon :name="cat.icon" class="w-10 h-10 text-primary-600 dark:text-primary-400 mb-3" />
        <h2 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 mb-1">{{ cat.name }}</h2>
        <p class="text-sm text-neutral-500 dark:text-neutral-400 mb-3">{{ cat.description }}</p>
        <span class="text-xs text-primary-600 dark:text-primary-400">{{ getToolCountByCategory(cat.slug) }}개 도구 →</span>
      </NuxtLink>
    </div>
  </div>
</template>
