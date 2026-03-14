import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: { layout: 'padded' },
}
export default meta

// ─── 컬러 팔레트 ──────────────────────────────────────────────
const primaryColors = [
  { name: '50', hex: '#fff0f6' }, { name: '100', hex: '#ffdeeb' },
  { name: '200', hex: '#fcc2d7' }, { name: '300', hex: '#faa2c1' },
  { name: '400', hex: '#f783ac' }, { name: '500', hex: '#f06595' },
  { name: '600', hex: '#e64980' }, { name: '700', hex: '#d6336c' },
  { name: '800', hex: '#c2255c' }, { name: '900', hex: '#a61e4d' },
  { name: '950', hex: '#8c1841' },
]
const accentColors = [
  { name: '50', hex: '#f3f0ff' }, { name: '100', hex: '#e5dbff' },
  { name: '200', hex: '#d0bfff' }, { name: '300', hex: '#b197fc' },
  { name: '400', hex: '#9775fa' }, { name: '500', hex: '#845ef7' },
  { name: '600', hex: '#7950f2' }, { name: '700', hex: '#7048e8' },
  { name: '800', hex: '#6741d9' }, { name: '900', hex: '#5f3dc4' },
]
const neutralColors = [
  { name: '50', hex: '#fafafa' }, { name: '100', hex: '#f5f5f5' },
  { name: '200', hex: '#e5e5e5' }, { name: '300', hex: '#d4d4d4' },
  { name: '400', hex: '#a3a3a3' }, { name: '500', hex: '#737373' },
  { name: '600', hex: '#525252' }, { name: '700', hex: '#404040' },
  { name: '800', hex: '#262626' }, { name: '900', hex: '#171717' },
  { name: '950', hex: '#0a0a0a' },
]

function colorSwatch(label: string, colors: { name: string; hex: string }[]) {
  return h('div', { style: 'margin-bottom:32px' }, [
    h('h3', { style: 'font-size:14px;font-weight:600;margin-bottom:8px;color:#374151' }, label),
    h('div', { style: 'display:flex;gap:4px;flex-wrap:wrap' },
      colors.map(({ name, hex }) =>
        h('div', { style: 'text-align:center' }, [
          h('div', {
            title: hex,
            style: `width:64px;height:48px;border-radius:8px;background:${hex};border:1px solid rgba(0,0,0,0.08);margin-bottom:4px`,
          }),
          h('div', { style: 'font-size:10px;color:#6b7280' }, name),
          h('div', { style: 'font-size:9px;color:#9ca3af;font-family:monospace' }, hex),
        ])
      )
    ),
  ])
}

export const Colors: StoryObj = {
  name: '🎨 컬러 팔레트',
  render: () => ({
    setup() {
      return () => h('div', { style: 'padding:8px' }, [
        colorSwatch('Primary (핑크)', primaryColors),
        colorSwatch('Accent (보라)', accentColors),
        colorSwatch('Neutral (회색)', neutralColors),
        // 시맨틱 컬러
        h('div', { style: 'margin-bottom:32px' }, [
          h('h3', { style: 'font-size:14px;font-weight:600;margin-bottom:8px;color:#374151' }, '시맨틱 컬러'),
          h('div', { style: 'display:flex;gap:8px;flex-wrap:wrap' }, [
            { label: '가격: 무료', bg: '#d1fae5', text: '#065f46', badge: 'bg-emerald-100 text-emerald-800' },
            { label: '가격: 프리미엄', bg: '#dbeafe', text: '#1e40af', badge: 'bg-blue-100 text-blue-800' },
            { label: '가격: 유료', bg: '#fef3c7', text: '#92400e', badge: 'bg-amber-100 text-amber-800' },
            { label: '한국어: full', bg: '#ede9fe', text: '#5b21b6', badge: 'bg-violet-100 text-violet-800' },
            { label: '한국어: partial', bg: '#fef9c3', text: '#713f12', badge: 'bg-yellow-100 text-yellow-800' },
          ].map(({ label, bg, text }) =>
            h('div', {
              style: `padding:6px 12px;border-radius:999px;background:${bg};color:${text};font-size:12px;font-weight:500`,
            }, label)
          )),
        ]),
      ])
    },
  }),
}

// ─── 타이포그래피 ──────────────────────────────────────────────
export const Typography: StoryObj = {
  name: '✏️ 타이포그래피',
  render: () => ({
    setup() {
      const samples = [
        { label: 'text-3xl font-bold', style: 'font-size:30px;font-weight:700;line-height:1.2', text: '제목 Hero 텍스트 — AI 도구 검색' },
        { label: 'text-2xl font-bold', style: 'font-size:24px;font-weight:700;line-height:1.3', text: '섹션 제목 — 최근 등록' },
        { label: 'text-xl font-semibold', style: 'font-size:20px;font-weight:600;line-height:1.4', text: '카드 그룹 제목' },
        { label: 'text-base font-semibold', style: 'font-size:16px;font-weight:600;line-height:1.5', text: '도구 이름 — ChatGPT' },
        { label: 'text-sm (tagline)', style: 'font-size:14px;font-weight:400;color:#6b7280;line-height:1.5', text: '가장 널리 쓰이는 AI 챗봇 — 짧고 명확한 한 줄 설명' },
        { label: 'text-xs (badge)', style: 'font-size:12px;font-weight:500;line-height:1.4', text: '무료 · 프리미엄 · 한국어 · coding' },
      ]
      return () => h('div', { style: 'padding:8px;font-family:\'Noto Sans KR\',system-ui,sans-serif' },
        samples.map(({ label, style, text }) =>
          h('div', { style: 'margin-bottom:24px;border-bottom:1px solid #f3f4f6;padding-bottom:16px' }, [
            h('div', { style: 'font-size:11px;color:#9ca3af;font-family:monospace;margin-bottom:4px' }, label),
            h('div', { style }, text),
          ])
        )
      )
    },
  }),
}

// ─── 스페이싱 ──────────────────────────────────────────────────
export const Spacing: StoryObj = {
  name: '📐 스페이싱',
  render: () => ({
    setup() {
      const spacings = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24]
      return () => h('div', { style: 'padding:8px' }, [
        h('h3', { style: 'font-size:14px;font-weight:600;margin-bottom:16px;color:#374151' }, 'Tailwind Spacing Scale'),
        h('div', { style: 'display:flex;flex-direction:column;gap:8px' },
          spacings.map(s =>
            h('div', { style: 'display:flex;align-items:center;gap:12px' }, [
              h('span', { style: 'font-size:11px;color:#9ca3af;font-family:monospace;width:32px;text-align:right' }, s),
              h('div', { style: `height:8px;background:#f06595;border-radius:4px;width:${s * 4}px` }),
              h('span', { style: 'font-size:11px;color:#6b7280' }, `${s * 4}px`),
            ])
          )
        ),
      ])
    },
  }),
}

// ─── 보더 라디우스 ─────────────────────────────────────────────
export const BorderRadius: StoryObj = {
  name: '🔵 Border Radius',
  render: () => ({
    setup() {
      const radii = [
        { label: 'rounded-sm', px: '2px' }, { label: 'rounded', px: '4px' },
        { label: 'rounded-md', px: '6px' }, { label: 'rounded-lg', px: '8px' },
        { label: 'rounded-xl', px: '12px' }, { label: 'rounded-2xl', px: '16px' },
        { label: 'rounded-full', px: '9999px' },
      ]
      return () => h('div', { style: 'padding:8px;display:flex;gap:24px;flex-wrap:wrap;align-items:flex-end' },
        radii.map(({ label, px }) =>
          h('div', { style: 'text-align:center' }, [
            h('div', {
              style: `width:72px;height:72px;background:#f06595;border-radius:${px};margin-bottom:8px`,
            }),
            h('div', { style: 'font-size:11px;color:#6b7280' }, label),
            h('div', { style: 'font-size:10px;color:#9ca3af;font-family:monospace' }, px),
          ])
        )
      )
    },
  }),
}
