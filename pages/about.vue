<script setup lang="ts">
useHead({ title: '소개 - AIrang' })
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">AIrang에 대하여</h1>
    <div class="prose dark:prose-invert max-w-none">
      <p class="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
        <strong>AIrang(아이랑)</strong>은 한국 사용자를 위한 AI 도구 검색 & 비교 플랫폼입니다.
      </p>
      <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed mt-4">
        전 세계적으로 수만 개의 AI 도구가 쏟아져 나오고 있지만, 한국어로 정리되고 비교된 정보는 부족합니다. AIrang은 이 문제를 해결하기 위해 만들어졌습니다.
      </p>

      <div class="card p-6 mt-8 space-y-4">
        <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100"><LIcon name="lucide:compass" class="w-5 h-5 inline" /> 우리가 하는 일</h2>
        <ul class="space-y-2 text-neutral-700 dark:text-neutral-300">
          <li><LIcon name="lucide:check" class="w-4 h-4 text-primary-500 inline" /> AI 도구를 한국어로 소개하고 설명합니다</li>
          <li><LIcon name="lucide:check" class="w-4 h-4 text-primary-500 inline" /> 가격, 기능, 한국어 지원 여부를 기준으로 비교합니다</li>
          <li><LIcon name="lucide:check" class="w-4 h-4 text-primary-500 inline" /> 용도에 맞는 최적의 도구를 추천합니다</li>
          <li><LIcon name="lucide:check" class="w-4 h-4 text-primary-500 inline" /> 대안 도구를 제안하여 선택지를 넓혀줍니다</li>
          <li><LIcon name="lucide:check" class="w-4 h-4 text-primary-500 inline" /> 주간 뉴스레터로 새로운 도구와 트렌드를 전달합니다</li>
        </ul>
      </div>

      <div class="card p-6 mt-6">
        <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">📬 문의</h2>
        <p class="text-neutral-600 dark:text-neutral-400">
          도구 등록, 제휴, 광고, 기타 문의는 이메일로 연락주세요.<br>
          <a href="mailto:hello@airang.kr" class="text-primary-600 dark:text-primary-400 hover:underline">hello@airang.kr</a>
        </p>
      </div>
    </div>
  </div>
</template>
