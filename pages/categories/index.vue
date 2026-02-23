<script setup lang="ts">
import { categories } from '~/data/categories'
import { getToolsByCategory } from '~/data/tools'
useHead({ title: '카테고리 - AIrang' })
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">📂 카테고리</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <NuxtLink
        v-for="cat in categories" :key="cat.id"
        :to="`/categories/${cat.slug}`"
        class="card p-6 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all group"
      >
        <div class="text-4xl mb-3">{{ cat.icon }}</div>
        <h2 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 mb-1">{{ cat.name }}</h2>
        <p class="text-sm text-neutral-500 dark:text-neutral-400 mb-3">{{ cat.description }}</p>
        <span class="text-xs text-primary-600 dark:text-primary-400">{{ getToolsByCategory(cat.slug).length }}개 도구 →</span>
      </NuxtLink>
    </div>
  </div>
</template>
