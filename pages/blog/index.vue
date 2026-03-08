<script setup lang="ts">
useHead({ title: '블로그 - AIrang' })

const posts = [
  { slug: 'best-ai-chatbots-2026', title: '2026 최고의 AI 챗봇 비교: ChatGPT vs Claude vs Gemini', excerpt: '가장 인기 있는 AI 챗봇 3종을 가격, 성능, 한국어 지원 기준으로 비교합니다.', date: '2026-02-20', category: '비교' },
  { slug: 'free-ai-tools-guide', title: '무료로 쓸 수 있는 AI 도구 모음 (2026)', excerpt: '비용 없이 시작할 수 있는 AI 도구를 카테고리별로 정리했습니다.', date: '2026-02-15', category: '가이드' },
  { slug: 'ai-image-generation-guide', title: 'AI 이미지 생성 완전 가이드: 미드저니부터 DALL-E까지', excerpt: 'AI 이미지 생성 도구의 종류, 사용법, 장단점을 총정리합니다.', date: '2026-02-10', category: '가이드' },
  { slug: 'ai-coding-tools-for-beginners', title: '비개발자를 위한 AI 코딩 도구 추천', excerpt: 'Cursor, Lovable, Bolt.new 등 코딩 경험 없이도 쓸 수 있는 AI 도구를 소개합니다.', date: '2026-02-05', category: '추천' },
]
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2">
      <LIcon name="lucide:notebook-pen" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
      블로그
    </h1>
    <p class="text-neutral-600 dark:text-neutral-400 mb-8">AI 도구 비교, 가이드, 트렌드 소식</p>

    <div class="space-y-6">
      <article v-for="post in posts" :key="post.slug" class="card p-6 hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all">
        <div class="flex items-center gap-2 mb-2">
          <span class="badge badge-freemium">{{ post.category }}</span>
          <span class="text-xs text-neutral-500">{{ post.date }}</span>
        </div>
        <h2 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">{{ post.title }}</h2>
        <p class="text-neutral-600 dark:text-neutral-400 mb-3">{{ post.excerpt }}</p>
        <span class="text-sm text-primary-600 dark:text-primary-400">자세히 읽기 →</span>
      </article>
    </div>
  </div>
</template>
