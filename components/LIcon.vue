<script setup lang="ts">
import * as icons from 'lucide-vue-next'

const props = defineProps<{
  name: string
  size?: number | string
}>()

const attrs = useAttrs()

const iconComponent = computed(() => {
  const raw = props.name.replace('lucide:', '')
  const pascal = raw
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
  return (icons as Record<string, any>)[pascal] || null
})
</script>

<template>
  <component v-if="iconComponent" :is="iconComponent" :size="size || 24" v-bind="attrs" />
</template>
