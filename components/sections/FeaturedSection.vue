<script setup lang="ts">
import type { Tool } from '~/data/tools'

const props = defineProps<{ tools: Tool[] }>()

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const featuredReasons: Record<string, string> = {
  chatgpt: '범용 활용도가 높고 한국어 사용자에게 가장 익숙한 대표 도구',
  claude: '장문 분석과 문서 작업에 강해 비교 요청이 많은 도구',
  gemini: 'Google 생태계 연동이 강점이라 실사용 문의가 많은 도구',
  cursor: '코딩 워크플로우에 바로 붙일 수 있어 개발자 관심도가 높음',
  midjourney: '이미지 생성 퀄리티 기준점처럼 쓰이는 대표 도구',
  runway: '영상 제작 워크플로우 중심으로 찾는 사용자가 많은 도구',
}

const primaryTools = computed(() => props.tools.slice(0, 2))
const secondaryTools = computed(() => props.tools.slice(2, 6))

function getFeaturedReason(tool: Tool) {
  return featuredReasons[tool.slug] || '최근 비교/탐색 수요가 높아 먼저 볼 만한 도구'
}

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
  <section ref="sectionRef" class="bg-neutral-50 dark:bg-neutral-900 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-end justify-between gap-4 mb-8">
        <div>
          <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <LIcon name="lucide:flame" class="w-6 h-6 text-orange-500" /> 추천 도구
          </h2>
          <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            지금 먼저 봐두면 좋은 대표 AI 도구를 큐레이션했어.
          </p>
        </div>
        <NuxtLink to="/tools" class="text-sm text-primary-600 dark:text-primary-400 hover:underline">전체보기 →</NuxtLink>
      </div>

      <div v-if="primaryTools.length" class="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-4">
        <div class="grid grid-cols-1 gap-4">
          <NuxtLink
            v-for="(tool, i) in primaryTools"
            :key="tool.id"
            :to="`/tools/${tool.slug}`"
            class="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:border-primary-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-primary-700 scroll-reveal"
            :style="{ transitionDelay: `${i * 70}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }"
          >
            <div class="flex items-start gap-4">
              <div class="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 shrink-0">
                <img :src="tool.logoUrl" :alt="tool.name" class="h-10 w-10 object-contain" @error="($event.target as HTMLImageElement).style.display = 'none'" />
              </div>
              <div class="min-w-0 flex-1">
                <div class="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                  {{ i === 0 ? '오늘의 추천' : '함께 보면 좋은 추천' }}
                </div>
                <h3 class="mt-3 text-2xl font-bold text-neutral-900 transition-colors group-hover:text-primary-600 dark:text-neutral-100 dark:group-hover:text-primary-400">
                  {{ tool.name }}
                </h3>
                <p class="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{{ tool.tagline }}</p>
                <p class="mt-4 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                  {{ getFeaturedReason(tool) }}
                </p>
                <div class="mt-5 flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                  <span class="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 dark:bg-neutral-800">평점 {{ tool.rating }}</span>
                  <span class="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 dark:bg-neutral-800">리뷰 {{ tool.reviewCount }}</span>
                  <span class="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 dark:bg-neutral-800">{{ tool.pricingDetail }}</span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 gap-3">
          <NuxtLink
            v-for="(tool, i) in secondaryTools"
            :key="tool.id"
            :to="`/tools/${tool.slug}`"
            class="group rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-primary-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-primary-700 scroll-reveal"
            :style="{ transitionDelay: `${(i + 2) * 70}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)' }"
          >
            <div class="flex items-start gap-3">
              <div class="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800 shrink-0">
                <img :src="tool.logoUrl" :alt="tool.name" class="h-8 w-8 object-contain" @error="($event.target as HTMLImageElement).style.display = 'none'" />
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center justify-between gap-3">
                  <h3 class="truncate font-semibold text-neutral-900 transition-colors group-hover:text-primary-600 dark:text-neutral-100 dark:group-hover:text-primary-400">
                    {{ tool.name }}
                  </h3>
                  <span class="shrink-0 text-xs text-amber-500">★ {{ tool.rating }}</span>
                </div>
                <p class="mt-1 line-clamp-1 text-sm text-neutral-500 dark:text-neutral-400">{{ tool.tagline }}</p>
                <p class="mt-2 line-clamp-1 text-xs text-neutral-600 dark:text-neutral-300">{{ getFeaturedReason(tool) }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
