<script setup lang="ts">
import { tools as staticTools, getFeaturedTools as staticGetFeatured } from '~/data/tools'
import { categories as staticCategories } from '~/data/categories'

useHead({ title: 'AIrang - 한국어 AI 도구 검색 & 비교 플랫폼' })

const { getTools, getFeaturedTools } = useTools()
const { getCategories } = useCategories()

const { data: allTools } = await useAsyncData('tools', getTools, { default: () => staticTools })
const { data: featured } = await useAsyncData('featured-tools', getFeaturedTools, { default: () => staticGetFeatured() })
const { data: allCategories } = await useAsyncData('categories', getCategories, { default: () => staticCategories })

const recent = computed(() => {
  return [...(allTools.value ?? staticTools)]
    .sort((a, b) => {
      const aDate = a.createdAt || a.launchedAt || '0'
      const bDate = b.createdAt || b.launchedAt || '0'
      return new Date(bDate).getTime() - new Date(aDate).getTime()
    })
    .slice(0, 6)
})

const trendCategories = ['chatbot', 'image-generation', 'coding', 'video']
const trends = computed(() => {
  const tools = allTools.value ?? staticTools
  const cats = allCategories.value ?? staticCategories
  return trendCategories.map(slug => {
    const cat = cats.find(c => c.slug === slug)
    const catTools = tools
      .filter(t => t.categories.includes(slug))
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6)
    return { category: cat!, tools: catTools }
  }).filter(t => t.category && t.tools.length > 0)
})

const comparePairs = computed(() => {
  const tools = allTools.value ?? staticTools
  const pairs: [string, string][] = [
    ['chatgpt', 'claude'],
    ['midjourney', 'dall-e'],
    ['cursor', 'github-copilot'],
    ['runway', 'pika'],
  ]
  return pairs
    .map(([a, b]) => {
      const toolA = tools.find(t => t.slug === a)
      const toolB = tools.find(t => t.slug === b)
      return toolA && toolB ? { a: toolA, b: toolB } : null
    })
    .filter(Boolean) as { a: typeof tools[0]; b: typeof tools[0] }[]
})
</script>

<template>
  <div>
    <SectionsHeroSection
      :tool-count="(allTools ?? staticTools).length"
      :category-count="(allCategories ?? staticCategories).length"
    />
    <SectionsCategorySection
      :categories="allCategories ?? staticCategories"
      :tools="allTools ?? staticTools"
    />
    <SectionsFeaturedSection :tools="featured ?? []" />
    <SectionsRecentSection :tools="recent" />
    <SectionsTrendSection :trends="trends" />
    <SectionsCompareSection :pairs="comparePairs" />
  </div>
</template>

<style>
.scroll-reveal {
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
