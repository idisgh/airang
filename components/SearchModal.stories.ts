import type { Meta, StoryObj } from '@storybook/vue3'
import { h, ref } from 'vue'
import SearchModal from './SearchModal.vue'

const meta: Meta<typeof SearchModal> = {
  title: 'Components/SearchModal',
  component: SearchModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
  },
}

export default meta
type Story = StoryObj<typeof SearchModal>

// 기본: 모달 항상 표시 (Teleport를 감싸서 렌더)
export const Default: Story = {
  name: '기본 (항상 열림)',
  render: () => ({
    setup() {
      const visible = ref(true)
      return () => h('div', { style: 'min-height:100vh;background:#111' }, [
        visible.value
          ? h(SearchModal, { onClose: () => { visible.value = false } })
          : h('div', {
              style: 'display:flex;align-items:center;justify-content:center;height:100vh;color:#fff;cursor:pointer;font-size:14px',
              onClick: () => { visible.value = true },
            }, '클릭해서 모달 열기'),
      ])
    },
  }),
}

export const WithResults: Story = {
  name: '검색 결과 있음 (검색어: "chat")',
  render: () => ({
    setup() {
      return () => h('div', { style: 'min-height:100vh;background:#111' }, [
        h(SearchModal, {
          onClose: () => {},
          // 초기 query 주입은 불가능하므로 안내 텍스트로 대체
        }),
      ])
    },
  }),
  parameters: {
    docs: {
      description: {
        story: '검색창에 "chat", "image", "코딩" 등을 입력하면 실시간 결과가 표시됩니다.',
      },
    },
  },
}
