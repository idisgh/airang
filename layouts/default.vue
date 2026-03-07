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
            <NuxtLink to="/tools" class="flex items-center gap-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Icon name="lucide:compass" class="w-4 h-4" />
              도구 탐색
            </NuxtLink>
            <NuxtLink to="/categories" class="flex items-center gap-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Icon name="lucide:grid-3x3" class="w-4 h-4" />
              카테고리
            </NuxtLink>
            <NuxtLink to="/blog" class="flex items-center gap-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Icon name="lucide:notebook-pen" class="w-4 h-4" />
              블로그
            </NuxtLink>
            <NuxtLink to="/submit" class="flex items-center gap-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <Icon name="lucide:plus-circle" class="w-4 h-4" />
              도구 등록
            </NuxtLink>
          </nav>

          <!-- Actions -->
          <div class="flex items-center gap-3">
            <button
              @click="showSearch = true"
              class="flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <Icon name="lucide:search" class="w-4 h-4" />
              <span class="hidden sm:inline">검색</span>
              <kbd class="hidden sm:inline text-xs px-1.5 py-0.5 bg-neutral-200 dark:bg-neutral-700 rounded">⌘K</kbd>
            </button>

            <button @click="toggleDark" class="p-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
              <Icon v-if="isDark" name="lucide:sun" class="w-5 h-5" />
              <Icon v-else name="lucide:moon" class="w-5 h-5" />
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
