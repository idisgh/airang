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
      <div class="flex items-end justify-between gap-4 mb-8">
        <div>
          <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <LIcon name="lucide:sparkles" class="w-6 h-6 text-amber-500" /> 최근 등록
          </h2>
          <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            새로 들어온 도구를 빠르게 훑어보고 변화를 체크할 수 있어.
          </p>
        </div>
        <NuxtLink to="/tools" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">전체보기 →</NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <NuxtLink
          v-for="(tool, i) in tools"
          :key="tool.id"
          :to="`/tools/${tool.slug}`"
          class="group rounded-2xl border border-neutral-200 bg-white p-4 transition-all hover:border-primary-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-primary-700 scroll-reveal"
          :style="{ transitionDelay: `${i * 60}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)' }"
        >
          <div class="flex items-start gap-3">
            <div class="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800 shrink-0">
              <img v-if="tool.logoUrl" :src="tool.logoUrl" :alt="tool.name" class="h-8 w-8 object-contain" @error="($event.target as HTMLImageElement).style.display = 'none'" />
              <span v-else class="text-sm font-bold text-primary-600 dark:text-primary-400">{{ tool.name[0] }}</span>
            </div>

            <div class="min-w-0 flex-1">
              <div class="flex items-center justify-between gap-3">
                <h3 class="truncate font-semibold text-neutral-900 group-hover:text-primary-600 dark:text-neutral-100 dark:group-hover:text-primary-400 transition-colors">
                  {{ tool.name }}
                </h3>
                <span class="shrink-0 text-xs text-amber-500">★ {{ tool.rating }}</span>
              </div>
              <p class="mt-1 line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400">{{ tool.tagline }}</p>
            </div>
          </div>

          <div class="mt-4 flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <span class="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 dark:bg-neutral-800">{{ tool.pricingDetail }}</span>
            <span class="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 dark:bg-neutral-800">출시 {{ tool.launchedAt }}</span>
          </div>

          <div class="mt-4 flex items-center justify-end gap-1 text-xs font-medium text-primary-600 dark:text-primary-400">
            <span>상세 보기</span>
            <LIcon name="lucide:arrow-right" class="w-3.5 h-3.5" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
