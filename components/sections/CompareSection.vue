<script setup lang="ts">
import type { Tool } from '~/data/tools'

const props = defineProps<{
  pairs: Array<{ a: Tool; b: Tool }>
}>()

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const pairSummaries: Record<string, string> = {
  'chatgpt-vs-claude': '범용 활용도와 장문 추론/문서 작업 강점을 비교해보기 좋아.',
  'midjourney-vs-dall-e': '아트 퀄리티 중심인지, 쉬운 접근성과 범용성 중심인지 차이가 크다.',
  'cursor-vs-github-copilot': '에이전트 중심 IDE 경험과 GitHub 생태계 강점을 비교할 수 있다.',
  'runway-vs-pika': '영상 제작 워크플로우 중심인지, 빠른 숏폼 생성 중심인지 판단하기 좋다.',
}

function getPairSummary(a: Tool, b: Tool) {
  return pairSummaries[`${a.slug}-vs-${b.slug}`] || '두 도구의 강점과 사용 맥락 차이를 빠르게 확인해볼 수 있다.'
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
      <div class="text-center mb-10">
        <h2 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 flex items-center justify-center gap-2">
          <LIcon name="lucide:scale" class="w-6 h-6" /> AI 도구 비교
        </h2>
        <p class="text-neutral-600 dark:text-neutral-400 mt-2">헷갈리기 쉬운 인기 도구를 핵심 차이 중심으로 비교해보자.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <NuxtLink
          v-for="(pair, pairIdx) in props.pairs"
          :key="`${pair.a.slug}-${pair.b.slug}`"
          :to="`/compare/${pair.a.slug}-vs-${pair.b.slug}`"
          class="p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all overflow-hidden"
          :style="{ transitionDelay: `${pairIdx * 100}ms` }"
        >
          <div class="flex items-center justify-between">
            <!-- 왼쪽 -->
            <div
              class="flex items-center gap-3 flex-1 min-w-0 scroll-reveal"
              :style="{ transitionDelay: `${pairIdx * 100}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-30px)' }"
            >
              <div class="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 overflow-hidden">
                <img v-if="pair.a.logoUrl" :src="pair.a.logoUrl" :alt="pair.a.name" class="w-8 h-8 object-contain" @error="($event.target as HTMLImageElement).style.display = 'none'" />
                <span v-else class="font-bold text-primary-600">{{ pair.a.name[0] }}</span>
              </div>
              <div class="min-w-0">
                <div class="font-semibold text-neutral-900 dark:text-neutral-100 truncate">{{ pair.a.name }}</div>
                <div class="text-xs text-neutral-500">
                  <LIcon name="lucide:star" fill="currentColor" class="w-3 h-3 text-amber-500 inline" /> {{ pair.a.rating }}
                </div>
              </div>
            </div>

            <!-- VS -->
            <div
              class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-bold shrink-0 mx-3 scroll-reveal"
              :style="{ transitionDelay: `${pairIdx * 100 + 200}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'scale(1)' : 'scale(0)' }"
            >
              VS
            </div>

            <!-- 오른쪽 -->
            <div
              class="flex items-center gap-3 flex-1 min-w-0 justify-end scroll-reveal"
              :style="{ transitionDelay: `${pairIdx * 100}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(30px)' }"
            >
              <div class="min-w-0 text-right">
                <div class="font-semibold text-neutral-900 dark:text-neutral-100 truncate">{{ pair.b.name }}</div>
                <div class="text-xs text-neutral-500">
                  <LIcon name="lucide:star" fill="currentColor" class="w-3 h-3 text-amber-500 inline" /> {{ pair.b.rating }}
                </div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 overflow-hidden">
                <img v-if="pair.b.logoUrl" :src="pair.b.logoUrl" :alt="pair.b.name" class="w-8 h-8 object-contain" @error="($event.target as HTMLImageElement).style.display = 'none'" />
                <span v-else class="font-bold text-primary-600">{{ pair.b.name[0] }}</span>
              </div>
            </div>
          </div>

          <div class="mt-4 rounded-xl bg-neutral-50 px-3 py-3 text-sm text-neutral-600 dark:bg-neutral-800/60 dark:text-neutral-300">
            {{ getPairSummary(pair.a, pair.b) }}
          </div>

          <div class="mt-3 flex items-center justify-end gap-1 text-xs font-medium text-primary-600 dark:text-primary-400">
            <span>어떤 차이가 있는지 보기</span>
            <LIcon name="lucide:arrow-right" class="w-3.5 h-3.5" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
