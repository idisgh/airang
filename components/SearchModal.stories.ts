import type { Meta, StoryObj } from '@storybook/vue3'
import { h, ref, defineComponent } from 'vue'
import SearchModal from './SearchModal.vue'
import { searchTools } from '~/data/tools'

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

// 기본: 항상 열림 상태
export const Default: Story = {
  name: '기본 (빈 상태)',
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

// 검색 결과 있음: SearchModal을 래핑해서 초기 query 주입
export const WithResults: Story = {
  name: '검색 결과 있음',
  render: () => ({
    setup() {
      // SearchModal이 내부적으로 query를 관리하므로
      // 실제 검색 결과를 보여주는 래퍼 컴포넌트 구성
      const previewResults = searchTools('chat').slice(0, 5)
      return () => h('div', { style: 'min-height:100vh;background:#111;padding:48px 16px' }, [
        h('div', {
          style: 'max-width:560px;margin:0 auto;background:#1a1a1a;border-radius:16px;border:1px solid #333;overflow:hidden',
        }, [
          // 검색창 영역
          h('div', { style: 'display:flex;align-items:center;gap:12px;padding:0 16px;border-bottom:1px solid #333' }, [
            h('span', { style: 'color:#6b7280;font-size:18px' }, '🔍'),
            h('input', {
              value: 'chat',
              readonly: true,
              style: 'flex:1;padding:16px 0;background:transparent;color:#f5f5f5;font-size:15px;border:none;outline:none',
              placeholder: 'AI 도구 검색...',
            }),
            h('kbd', { style: 'font-size:11px;padding:4px 8px;background:#262626;color:#6b7280;border-radius:4px' }, 'ESC'),
          ]),
          // 결과 목록
          h('div', { style: 'padding:8px' },
            previewResults.map(tool =>
              h('div', {
                key: tool.id,
                style: 'display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:8px;cursor:pointer',
                onMouseenter: (e: MouseEvent) => { (e.currentTarget as HTMLElement).style.background = '#262626' },
                onMouseleave: (e: MouseEvent) => { (e.currentTarget as HTMLElement).style.background = 'transparent' },
              }, [
                h('div', {
                  style: 'width:32px;height:32px;background:#262626;border-radius:8px;display:flex;align-items:center;justify-content:center;overflow:hidden',
                }, [
                  tool.logoUrl
                    ? h('img', { src: tool.logoUrl, alt: tool.name, style: 'width:24px;height:24px;object-fit:contain' })
                    : h('span', { style: 'font-size:13px;font-weight:700;color:#f06595' }, tool.name[0]),
                ]),
                h('div', { style: 'flex:1;min-width:0' }, [
                  h('div', { style: 'font-size:14px;font-weight:500;color:#f5f5f5' }, tool.name),
                  h('div', { style: 'font-size:12px;color:#6b7280;overflow:hidden;text-overflow:ellipsis;white-space:nowrap' }, tool.tagline),
                ]),
                h('span', {
                  style: `font-size:11px;font-weight:500;padding:3px 8px;border-radius:999px;${
                    tool.pricingModel === 'free' ? 'background:#d1fae5;color:#065f46' :
                    tool.pricingModel === 'freemium' ? 'background:#dbeafe;color:#1e40af' :
                    'background:#fef3c7;color:#92400e'
                  }`,
                }, tool.pricingModel === 'free' ? '무료' : tool.pricingModel === 'freemium' ? '프리미엄' : '유료'),
              ])
            )
          ),
        ]),
      ])
    },
  }),
}

// 결과 없음
export const EmptyState: Story = {
  name: '결과 없음',
  render: () => ({
    setup() {
      return () => h('div', { style: 'min-height:100vh;background:#111;padding:48px 16px' }, [
        h('div', {
          style: 'max-width:560px;margin:0 auto;background:#1a1a1a;border-radius:16px;border:1px solid #333;overflow:hidden',
        }, [
          h('div', { style: 'display:flex;align-items:center;gap:12px;padding:0 16px;border-bottom:1px solid #333' }, [
            h('span', { style: 'color:#6b7280;font-size:18px' }, '🔍'),
            h('input', {
              value: '존재하지않는도구xyz',
              readonly: true,
              style: 'flex:1;padding:16px 0;background:transparent;color:#f5f5f5;font-size:15px;border:none;outline:none',
            }),
          ]),
          h('div', { style: 'padding:32px;text-align:center;color:#6b7280;font-size:14px' },
            '"존재하지않는도구xyz"에 대한 결과가 없습니다'
          ),
        ]),
      ])
    },
  }),
}
