<script setup lang="ts">
useHead({ title: '도구 등록 신청 - AIrang' })
const form = reactive({ name: '', url: '', category: '', description: '', email: '' })
const submitted = ref(false)

function onSubmit() {
  submitted.value = true
}
</script>

<template>
  <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2">
      <LIcon name="lucide:plus-circle" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
      AI 도구 등록 신청
    </h1>
    <p class="text-neutral-600 dark:text-neutral-400 mb-8">AIrang에 AI 도구를 등록하고 더 많은 한국 사용자에게 알리세요.</p>

    <div v-if="submitted" class="card p-8 text-center">
      <div class="mb-4 flex justify-center"><LIcon name="lucide:check-circle-2" class="w-14 h-14 text-emerald-500" /></div>
      <h2 class="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">등록 신청이 완료되었습니다!</h2>
      <p class="text-neutral-600 dark:text-neutral-400">검토 후 등록해드리겠습니다. 감사합니다.</p>
    </div>

    <form v-else @submit.prevent="onSubmit" class="card p-6 sm:p-8 space-y-5">
      <div>
        <label class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">도구 이름 *</label>
        <input v-model="form.name" required type="text" placeholder="예: ChatGPT"
          class="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" />
      </div>
      <div>
        <label class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">웹사이트 URL *</label>
        <input v-model="form.url" required type="url" placeholder="https://..."
          class="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" />
      </div>
      <div>
        <label class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">카테고리</label>
        <select v-model="form.category"
          class="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl">
          <option value="">선택하세요</option>
          <option>챗봇</option><option>이미지 생성</option><option>글쓰기</option><option>코딩</option>
          <option>영상</option><option>음악</option><option>마케팅</option><option>생산성</option>
          <option>디자인</option><option>데이터 분석</option><option>번역</option><option>음성</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">간단한 설명</label>
        <textarea v-model="form.description" rows="3" placeholder="도구에 대한 간단한 설명..."
          class="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" />
      </div>
      <div>
        <label class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">연락처 이메일</label>
        <input v-model="form.email" type="email" placeholder="email@example.com"
          class="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" />
      </div>
      <button type="submit" class="w-full py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors">
        등록 신청하기
      </button>
    </form>
  </div>
</template>
