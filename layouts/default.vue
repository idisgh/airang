<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

function toggleDark() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const showSearch = ref(false)

function handleKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    showSearch.value = !showSearch.value
  }
  if (e.key === 'Escape') showSearch.value = false
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2">
            <span class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              AIrang
            </span>
            <span class="text-xs text-neutral-500 dark:text-neutral-400 hidden sm:block">아이랑</span>
          </NuxtLink>

          <!-- Nav -->
          <nav class="hidden md:flex items-center gap-6">
            <NuxtLink to="/tools" class="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              도구 탐색
            </NuxtLink>
            <NuxtLink to="/categories" class="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              카테고리
            </NuxtLink>
            <NuxtLink to="/blog" class="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              블로그
            </NuxtLink>
            <NuxtLink to="/submit" class="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              도구 등록
            </NuxtLink>
          </nav>

          <!-- Actions -->
          <div class="flex items-center gap-3">
            <button
              @click="showSearch = true"
              class="flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span class="hidden sm:inline">검색</span>
              <kbd class="hidden sm:inline text-xs px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-700 rounded">⌘K</kbd>
            </button>

            <button @click="toggleDark" class="p-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
              <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Search Modal -->
    <SearchModal v-if="showSearch" @close="showSearch = false" />

    <!-- Main -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-4">AIrang</h3>
            <p class="text-sm text-neutral-500 dark:text-neutral-400">한국어로 찾는 AI 도구 검색 & 비교 플랫폼</p>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-4">탐색</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/tools" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary-600">전체 도구</NuxtLink></li>
              <li><NuxtLink to="/categories" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary-600">카테고리</NuxtLink></li>
              <li><NuxtLink to="/blog" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary-600">블로그</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-4">참여</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/submit" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary-600">도구 등록</NuxtLink></li>
              <li><NuxtLink to="/about" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary-600">소개</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-4">법적 고지</h3>
            <ul class="space-y-2">
              <li><NuxtLink to="/privacy" class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary-600">개인정보처리방침</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500 dark:text-neutral-400">
          © {{ new Date().getFullYear() }} AIrang. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>
