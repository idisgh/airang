import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import LIcon from './LIcon.vue'

const meta: Meta<typeof LIcon> = {
  title: 'Components/LIcon',
  component: LIcon,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    name: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof LIcon>

export const Single: Story = {
  args: { name: 'lucide:search', class: 'w-6 h-6 text-primary-500' },
}

// 전체 아이콘 갤러리
const allIcons = [
  'lucide:search', 'lucide:sun', 'lucide:moon', 'lucide:compass',
  'lucide:grid-3x3', 'lucide:notebook-pen', 'lucide:plus-circle',
  'lucide:message-circle', 'lucide:image-plus', 'lucide:pen-line',
  'lucide:code-2', 'lucide:video', 'lucide:music', 'lucide:trending-up',
  'lucide:zap', 'lucide:palette', 'lucide:bar-chart-3', 'lucide:languages',
  'lucide:mic', 'lucide:package', 'lucide:folder-open', 'lucide:globe',
  'lucide:scale', 'lucide:flame', 'lucide:sparkles', 'lucide:check',
  'lucide:star', 'lucide:history', 'lucide:wallet', 'lucide:repeat',
  'lucide:external-link', 'lucide:chevron-down', 'lucide:chevron-up',
]

export const Gallery: Story = {
  name: '전체 아이콘',
  render: () => ({
    setup() {
      return () => h('div', { style: 'padding: 16px' }, [
        h('div', {
          style: 'display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));gap:8px',
        }, allIcons.map(name =>
          h('div', {
            style: 'display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px 8px;border:1px solid #e5e7eb;border-radius:8px;cursor:default',
            title: name,
          }, [
            h(LIcon, { name, class: 'w-6 h-6 text-neutral-700' }),
            h('span', { style: 'font-size:10px;color:#6b7280;text-align:center;word-break:break-all' }, name.replace('lucide:', '')),
          ])
        )),
      ])
    },
  }),
}
