export interface Category {
  id: string
  name: string
  nameEn: string
  slug: string
  icon: string
  description: string
  toolCount: number
}

export const categories: Category[] = [
  { id: '1', name: '챗봇', nameEn: 'Chatbot', slug: 'chatbot', icon: 'lucide:message-circle', description: 'AI 대화 및 질의응답 도구', toolCount: 5 },
  { id: '2', name: '이미지 생성', nameEn: 'Image Generation', slug: 'image-generation', icon: 'lucide:image-plus', description: 'AI 이미지 생성 및 편집 도구', toolCount: 7 },
  { id: '3', name: '글쓰기', nameEn: 'Writing', slug: 'writing', icon: 'lucide:pen-line', description: 'AI 기반 글쓰기 및 콘텐츠 작성 도구', toolCount: 9 },
  { id: '4', name: '코딩', nameEn: 'Coding', slug: 'coding', icon: 'lucide:code-2', description: 'AI 코드 생성 및 개발 보조 도구', toolCount: 8 },
  { id: '5', name: '영상', nameEn: 'Video', slug: 'video', icon: 'lucide:video', description: 'AI 영상 생성 및 편집 도구', toolCount: 3 },
  { id: '6', name: '음악', nameEn: 'Music', slug: 'music', icon: 'lucide:music', description: 'AI 음악 생성 및 오디오 처리 도구', toolCount: 2 },
  { id: '7', name: '마케팅', nameEn: 'Marketing', slug: 'marketing', icon: 'lucide:trending-up', description: 'AI 마케팅 및 광고 자동화 도구', toolCount: 5 },
  { id: '8', name: '생산성', nameEn: 'Productivity', slug: 'productivity', icon: 'lucide:zap', description: 'AI 업무 생산성 향상 도구', toolCount: 4 },
  { id: '9', name: '디자인', nameEn: 'Design', slug: 'design', icon: 'lucide:palette', description: 'AI 디자인 및 UI/UX 도구', toolCount: 6 },
  { id: '10', name: '데이터 분석', nameEn: 'Data Analysis', slug: 'data-analysis', icon: 'lucide:bar-chart-3', description: 'AI 데이터 분석 및 시각화 도구', toolCount: 0 },
  { id: '11', name: '번역', nameEn: 'Translation', slug: 'translation', icon: 'lucide:languages', description: 'AI 번역 및 다국어 지원 도구', toolCount: 2 },
  { id: '12', name: '음성', nameEn: 'Voice & Speech', slug: 'voice', icon: 'lucide:mic', description: 'AI 음성 인식 및 TTS 도구', toolCount: 1 },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

// 실제 도구 데이터 기반으로 toolCount를 동적 계산
export function getCategoryToolCount(categorySlug: string, toolsList: { categories: string[] }[]): number {
  return toolsList.filter(t => t.categories.includes(categorySlug)).length
}
