<script setup lang="ts">
import type { Tool } from '~/data/tools'

defineProps<{ tools: Tool[] }>()

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => { if (entries[0].isIntersecting) isVisible.value = true },
    { threshold: 0.1 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <section ref="sectionRef" class="dark:bg-neutral-950 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
          <LIcon name="lucide:sparkles" class="w-6 h-6 text-amber-500" /> 최근 등록
        </h2>
        <NuxtLink to="/tools" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">전체보기 →</NuxtLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ToolCard
          v-for="(tool, i) in tools"
          :key="tool.id"
          :tool="tool"
          class="scroll-reveal"
          :style="{ transitionDelay: `${i * 80}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }"
        />
      </div>
    </div>
  </section>
</template>
