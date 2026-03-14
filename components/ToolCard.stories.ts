import type { Meta, StoryObj } from '@storybook/vue3'
import ToolCard from './ToolCard.vue'
import type { Tool } from '~/data/tools'

const baseTool: Tool = {
  id: '1',
  name: 'ChatGPT',
  slug: 'chatgpt',
  tagline: '가장 널리 쓰이는 AI 챗봇',
  description: 'OpenAI가 만든 대화형 AI. 글쓰기, 코딩, 분석 등 다양한 작업을 자연어로 처리할 수 있다.',
  url: 'https://chat.openai.com',
  logoUrl: '/logos/chatgpt.png',
  categories: ['chatbot'],
  pricingModel: 'freemium',
  pricingDetail: '무료 플랜 + ChatGPT Plus $20/월',
  koreanSupport: 'full',
  features: ['대화형 AI', '코드 생성', '이미지 분석', '파일 업로드'],
  platforms: ['web', 'ios', 'android'],
  rating: 4.8,
  reviewCount: 1200,
  alternatives: ['claude', 'gemini'],
  isFeatured: true,
  launchedAt: '2022-11-30',
}

const meta: Meta<typeof ToolCard> = {
  title: 'Components/ToolCard',
  component: ToolCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    tool: { control: 'object' },
  },
}

export default meta
type Story = StoryObj<typeof ToolCard>

export const Default: Story = {
  args: { tool: baseTool },
}

export const Free: Story = {
  name: '무료 도구',
  args: {
    tool: { ...baseTool, name: 'Perplexity', slug: 'perplexity', pricingModel: 'free', pricingDetail: '완전 무료' },
  },
}

export const Paid: Story = {
  name: '유료 도구',
  args: {
    tool: { ...baseTool, name: 'Midjourney', slug: 'midjourney', pricingModel: 'paid', pricingDetail: '$10/월~', categories: ['image-generation'], koreanSupport: 'none' },
  },
}

export const NoKorean: Story = {
  name: '한국어 미지원',
  args: {
    tool: { ...baseTool, koreanSupport: 'none' },
  },
}

export const PartialKorean: Story = {
  name: '한국어 일부 지원',
  args: {
    tool: { ...baseTool, koreanSupport: 'partial' },
  },
}

export const NoLogo: Story = {
  name: '로고 없음',
  args: {
    tool: { ...baseTool, logoUrl: '' },
  },
}
