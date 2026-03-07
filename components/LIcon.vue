<script setup lang="ts">
import {
  Search, Sun, Moon, Compass, Grid3x3, NotebookPen, PlusCircle,
  MessageCircle, ImagePlus, PenLine, Code2, Video, Music,
  TrendingUp, Zap, Palette, BarChart3, Languages, Mic,
  Package, FolderOpen, Globe, Scale,
} from 'lucide-vue-next'
import type { Component } from 'vue'

const props = defineProps<{
  name: string
}>()

const attrs = useAttrs()

const iconMap: Record<string, Component> = {
  'lucide:search': Search,
  'lucide:sun': Sun,
  'lucide:moon': Moon,
  'lucide:compass': Compass,
  'lucide:grid-3x3': Grid3x3,
  'lucide:notebook-pen': NotebookPen,
  'lucide:plus-circle': PlusCircle,
  'lucide:message-circle': MessageCircle,
  'lucide:image-plus': ImagePlus,
  'lucide:pen-line': PenLine,
  'lucide:code-2': Code2,
  'lucide:video': Video,
  'lucide:music': Music,
  'lucide:trending-up': TrendingUp,
  'lucide:zap': Zap,
  'lucide:palette': Palette,
  'lucide:bar-chart-3': BarChart3,
  'lucide:languages': Languages,
  'lucide:mic': Mic,
  'lucide:package': Package,
  'lucide:folder-open': FolderOpen,
  'lucide:globe': Globe,
  'lucide:scale': Scale,
}

const iconComponent = computed(() => iconMap[props.name] || null)
</script>

<template>
  <component v-if="iconComponent" :is="iconComponent" v-bind="attrs" />
</template>
