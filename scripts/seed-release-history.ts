/**
 * 실제 AI 도구 릴리스 히스토리 시딩
 * 실행: cd /Users/hkjeong/Desktop/workspace/airang && npx tsx scripts/seed-release-history.ts
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const envPath = resolve(__dirname, '../.env')
const envContent = readFileSync(envPath, 'utf-8')
const env: Record<string, string> = {}
for (const line of envContent.split('\n')) {
  const [key, ...rest] = line.split('=')
  if (key && rest.length) env[key.trim()] = rest.join('=').trim()
}

const SUPABASE_URL = env.SUPABASE_URL
const SUPABASE_KEY = env.SUPABASE_KEY

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const releaseHistory = [
  // ─── ChatGPT ───────────────────────────────────────────────────────
  {
    tool_slug: 'chatgpt',
    updated_at: '2026-03-05',
    title: 'GPT-5.4 출시',
    version: 'GPT-5.4',
    changes: [
      '가장 강력한 추론 능력과 속도를 동시에 갖춘 플래그십 모델',
      '멀티모달 입출력 성능 대폭 강화',
      'ChatGPT 기본 엔진으로 적용',
    ],
  },
  {
    tool_slug: 'chatgpt',
    updated_at: '2025-10-01',
    title: 'GPT-5.2 출시',
    version: 'GPT-5.2',
    changes: [
      'GPT-5 대비 향상된 코딩 및 수학 능력',
      '복잡한 다단계 추론 성능 개선',
      'Claude Code와 함께 최고의 AI 코딩 어시스턴트 평가',
    ],
  },
  {
    tool_slug: 'chatgpt',
    updated_at: '2025-05-01',
    title: 'GPT-5 출시',
    version: 'GPT-5',
    changes: [
      'GPT-4o 대비 추론·지식·코딩 능력 전반 향상',
      '확장된 컨텍스트 윈도우 지원',
      'ChatGPT 및 API를 통해 공개',
    ],
  },
  {
    tool_slug: 'chatgpt',
    updated_at: '2025-02-01',
    title: 'GPT-4.5 출시',
    version: 'GPT-4.5',
    changes: [
      'GPT-4o와 GPT-5 사이 브리지 모델',
      '창의적 글쓰기 및 대화 자연스러움 개선',
      'API 및 ChatGPT Pro 플랜 공개',
    ],
  },
  {
    tool_slug: 'chatgpt',
    updated_at: '2024-05-13',
    title: 'GPT-4o 출시',
    version: 'GPT-4o',
    changes: [
      '텍스트·오디오·이미지 통합 옴니 모달 처리',
      '실시간 음성 대화 기능(Advanced Voice Mode) 제공',
      'GPT-4 Turbo 대비 2배 빠른 속도, 50% 저렴한 API 가격',
    ],
  },
  {
    tool_slug: 'chatgpt',
    updated_at: '2023-03-14',
    title: 'GPT-4 출시',
    version: 'GPT-4',
    changes: [
      'GPT-3.5 대비 추론·지식·코딩 크게 향상',
      '멀티모달 지원 (이미지 입력)',
      '8K / 32K 컨텍스트 윈도우 버전 제공',
    ],
  },

  // ─── Claude ───────────────────────────────────────────────────────
  {
    tool_slug: 'claude',
    updated_at: '2026-02-17',
    title: 'Claude Sonnet 4.6 릴리스',
    version: 'Sonnet 4.6',
    changes: [
      '코딩 및 에이전트 작업 성능 대폭 향상',
      '클로드 4 계열 최신 소네트 모델',
      'Claude.ai 및 API 통해 접근 가능',
    ],
  },
  {
    tool_slug: 'claude',
    updated_at: '2026-02-05',
    title: 'Claude Opus 4.6 릴리스',
    version: 'Opus 4.6',
    changes: [
      '최고 성능 플래그십 모델 업데이트',
      '복잡한 멀티스텝 추론 및 분석 강화',
      'Claude Code와 결합 시 최고 수준의 코딩 어시스턴트',
    ],
  },
  {
    tool_slug: 'claude',
    updated_at: '2025-10-15',
    title: 'Claude Haiku 4.5 릴리스',
    version: 'Haiku 4.5',
    changes: [
      '초고속·저비용 경량 모델',
      '실시간 대화형 앱에 최적화',
      '이전 하이쿠 모델 대비 품질 대폭 향상',
    ],
  },
  {
    tool_slug: 'claude',
    updated_at: '2025-05-22',
    title: 'Claude 4 (Opus 4 / Sonnet 4) 출시',
    version: 'Claude 4',
    changes: [
      'Opus 4와 Sonnet 4 동시 출시',
      'Claude Code 정식 GA 전환',
      '확장 사고(Extended Thinking) 및 에이전트 능력 강화',
    ],
  },
  {
    tool_slug: 'claude',
    updated_at: '2024-10-22',
    title: 'Claude 3.5 Haiku 출시',
    version: 'Claude 3.5 Haiku',
    changes: [
      '빠른 속도와 낮은 비용의 3.5 계열 경량 모델',
      'Claude 3 Opus를 많은 벤치마크에서 능가',
      '개발자 API 및 Claude.ai 제공',
    ],
  },
  {
    tool_slug: 'claude',
    updated_at: '2024-06-20',
    title: 'Claude 3.5 Sonnet 출시',
    version: 'Claude 3.5 Sonnet',
    changes: [
      '코딩·수학 성능에서 Claude 3 Opus 능가',
      'Artifacts 기능 출시 — 코드·문서 인터랙티브 생성',
      '비전(Vision) 성능 대폭 향상',
    ],
  },
  {
    tool_slug: 'claude',
    updated_at: '2024-03-04',
    title: 'Claude 3 계열 출시 (Haiku / Sonnet / Opus)',
    version: 'Claude 3',
    changes: [
      'Haiku(초고속)·Sonnet(균형)·Opus(최고성능) 3종 동시 출시',
      '멀티모달 이미지 이해 기능 탑재',
      '200K 토큰 컨텍스트 윈도우 지원',
    ],
  },

  // ─── Gemini ───────────────────────────────────────────────────────
  {
    tool_slug: 'gemini',
    updated_at: '2026-03-03',
    title: 'Gemini 3.1 Pro / Flash / Flash Lite 출시',
    version: 'Gemini 3.1',
    changes: [
      'Gemini 3.1 Pro, Flash, Flash Lite 동시 공개',
      '모든 모델 성능 전반 업그레이드',
      '멀티모달 처리 능력 향상',
    ],
  },
  {
    tool_slug: 'gemini',
    updated_at: '2025-05-01',
    title: 'Gemini 2.5 Pro / Flash 출시',
    version: 'Gemini 2.5',
    changes: [
      '더욱 강화된 추론 능력과 코딩 성능',
      'Flash 버전은 빠른 응답과 저비용 제공',
      'Google AI Studio 및 Gemini API 통해 접근',
    ],
  },
  {
    tool_slug: 'gemini',
    updated_at: '2024-12-11',
    title: 'Gemini 2.0 Flash 출시',
    version: 'Gemini 2.0 Flash',
    changes: [
      'Google I/O 이후 실험 버전에서 일반 공개로 전환',
      '멀티모달 입출력 (오디오, 이미지, 코드) 강화',
      '에이전트 기반 태스크 처리 능력 개선',
    ],
  },
  {
    tool_slug: 'gemini',
    updated_at: '2024-05-14',
    title: 'Gemini 1.5 Pro 공개 발표 (Google I/O)',
    version: 'Gemini 1.5 Pro',
    changes: [
      '100만 토큰 컨텍스트 윈도우 지원 (업계 최대)',
      '영상·오디오·코드 혼합 입력 처리',
      '프리뷰에서 API 공식 지원으로 전환',
    ],
  },
  {
    tool_slug: 'gemini',
    updated_at: '2023-12-06',
    title: 'Gemini 1.0 출시',
    version: 'Gemini 1.0',
    changes: [
      'Ultra·Pro·Nano 3가지 모델 라인업 발표',
      '텍스트·이미지·오디오·비디오·코드 멀티모달 처리',
      'Bard 및 Pixel 8 Pro에 최초 통합',
    ],
  },

  // ─── Midjourney ───────────────────────────────────────────────────
  {
    tool_slug: 'midjourney',
    updated_at: '2025-04-04',
    title: 'Midjourney V7 알파 출시',
    version: 'v7',
    changes: [
      '일관된 캐릭터 묘사 및 정밀한 디테일 생성 대폭 향상',
      '프롬프트 해석 능력 새로 설계',
      '웹 인터페이스를 통한 전용 이미지 편집 도구 제공',
    ],
  },
  {
    tool_slug: 'midjourney',
    updated_at: '2024-07-31',
    title: 'Midjourney V6.1 출시',
    version: 'v6.1',
    changes: [
      '더욱 자연스러운 피부·텍스처 품질',
      '이미지 일관성 및 색상 표현 개선',
      '웹 인터페이스 정식 출시와 동시 릴리스',
    ],
  },
  {
    tool_slug: 'midjourney',
    updated_at: '2023-12-21',
    title: 'Midjourney V6 알파 출시',
    version: 'v6',
    changes: [
      '9개월에 걸쳐 처음부터 재훈련된 모델',
      '프롬프트를 더욱 문자 그대로 해석하는 능력 강화',
      '이미지 내 텍스트 렌더링 품질 대폭 개선',
    ],
  },
  {
    tool_slug: 'midjourney',
    updated_at: '2023-06-22',
    title: 'Midjourney V5.2 출시',
    version: 'v5.2',
    changes: [
      '새로운 미적 시스템 도입으로 이미지 품질 향상',
      '"Zoom Out" 기능 — 기존 이미지 주변 확장 생성',
      '스타일 참조(Style Reference) 기능 강화',
    ],
  },
  {
    tool_slug: 'midjourney',
    updated_at: '2023-03-15',
    title: 'Midjourney V5 출시',
    version: 'v5',
    changes: [
      '전작 대비 사실감과 디테일 획기적 개선',
      '더 넓은 색 범위와 향상된 조명 표현',
      'RAW 모드 지원으로 프롬프트 충실도 향상',
    ],
  },

  // ─── Cursor ───────────────────────────────────────────────────────
  {
    tool_slug: 'cursor',
    updated_at: '2025-06-01',
    title: 'Cursor 1.0 정식 출시',
    version: '1.0',
    changes: [
      'AI 에이전트 기반 자율 코딩(Background Agents) 기능',
      'Bug Bot — 코드베이스 자동 버그 탐지',
      'Pro+ $60/월, Ultra $200/월 플랜 추가',
    ],
  },
  {
    tool_slug: 'cursor',
    updated_at: '2025-01-01',
    title: 'Cursor 0.44 — 멀티파일 편집 강화',
    version: '0.44',
    changes: [
      '여러 파일을 동시에 수정하는 에이전트 모드 개선',
      'Claude Sonnet 4.5 및 GPT-5 모델 지원 추가',
      '코드 리뷰 및 PR 자동화 기능 베타 도입',
    ],
  },
  {
    tool_slug: 'cursor',
    updated_at: '2024-08-01',
    title: 'Cursor 0.40 — Composer 기능 도입',
    version: '0.40',
    changes: [
      'Composer: 자연어로 전체 기능 생성 및 리팩토링',
      '멀티모달 이미지 첨부 코드 생성',
      'Copilot++ 자동완성 정확도 향상',
    ],
  },
  {
    tool_slug: 'cursor',
    updated_at: '2024-01-01',
    title: 'Cursor — AI-first 코드 에디터 공개',
    version: '0.1',
    changes: [
      'VS Code 포크 기반 AI 통합 에디터 출시',
      'GPT-4 기반 대화형 코드 생성 및 수정',
      '코드베이스 전체 컨텍스트 이해 기능',
    ],
  },

  // ─── Perplexity ───────────────────────────────────────────────────
  {
    tool_slug: 'perplexity',
    updated_at: '2025-09-01',
    title: 'Perplexity Assistant & Comet 출시',
    version: 'Assistant',
    changes: [
      'Perplexity Assistant — 일정·예약·쇼핑 에이전트 기능',
      'Perplexity Comet 브라우저 발표 (웹 에이전트)',
      '기업 가치 $20억 달러 달성',
    ],
  },
  {
    tool_slug: 'perplexity',
    updated_at: '2025-06-01',
    title: 'Perplexity Pro 대규모 업데이트',
    version: 'Pro 2025',
    changes: [
      '실시간 웹 검색에 Claude·GPT-5·Gemini 모델 선택 지원',
      '파일 업로드 및 분석 기능 강화',
      '시리즈 D $5억 달러 투자 유치, 기업 가치 $140억',
    ],
  },
  {
    tool_slug: 'perplexity',
    updated_at: '2024-04-01',
    title: 'Perplexity Pro 출시',
    version: 'Pro',
    changes: [
      'Pro 구독 플랜 — 고급 모델 및 무제한 검색 제공',
      'Claude·GPT-4 모델 선택 기능 추가',
      '이미지 생성 기능 통합',
    ],
  },
  {
    tool_slug: 'perplexity',
    updated_at: '2022-12-07',
    title: 'Perplexity AI 정식 출시',
    version: '1.0',
    changes: [
      'AI 기반 실시간 웹 검색 엔진 공개',
      '출처 인용 기반 답변 생성',
      'iOS/Android 앱 및 Chrome 확장 프로그램 출시',
    ],
  },

  // ─── Runway ───────────────────────────────────────────────────────
  {
    tool_slug: 'runway',
    updated_at: '2025-07-01',
    title: 'Runway Gen-4.5 출시',
    version: 'Gen-4.5',
    changes: [
      'Act-Two: 모션 캡처 없이 배우 연기 전이 기능',
      'Aleph: 영상 세계 일관성 제어 모델',
      '4K 해상도 영상 생성 지원',
    ],
  },
  {
    tool_slug: 'runway',
    updated_at: '2025-02-01',
    title: 'Runway Gen-4 출시',
    version: 'Gen-4',
    changes: [
      '더욱 정확한 모션 제어 및 물리 기반 시뮬레이션',
      'Act-One: 얼굴 표정 및 제스처 전이 기능',
      '영상 일관성 및 품질 대폭 향상',
    ],
  },
  {
    tool_slug: 'runway',
    updated_at: '2024-06-17',
    title: 'Runway Gen-3 Alpha 출시',
    version: 'Gen-3 Alpha',
    changes: [
      '5초~10초 HD 영상 생성 품질 대폭 향상',
      '텍스트·이미지·비디오 입력 지원',
      '더 일관된 캐릭터·장면 표현',
    ],
  },
  {
    tool_slug: 'runway',
    updated_at: '2023-06-01',
    title: 'Runway Gen-2 공개',
    version: 'Gen-2',
    changes: [
      '텍스트/이미지로 새로운 영상 생성 지원',
      '최초 상업적으로 이용 가능한 텍스트→영상 모델 중 하나',
      '4초 영상 클립 생성',
    ],
  },

  // ─── Sora ───────────────────────────────────────────────────────
  {
    tool_slug: 'sora',
    updated_at: '2025-09-30',
    title: 'Sora 2 출시',
    version: 'Sora 2',
    changes: [
      '1분 이상 고화질 영상 생성 지원',
      'iOS 앱 동시 출시, Android 앱은 두 달 후 공개',
      '소셜 미디어 기능 통합 (공유·리믹스)',
    ],
  },
  {
    tool_slug: 'sora',
    updated_at: '2024-12-09',
    title: 'Sora 1세대 공개 출시',
    version: 'Sora 1',
    changes: [
      'ChatGPT Plus 및 Pro 구독자 대상 공개',
      '최대 1분 분량의 고화질 영상 생성',
      '미국·캐나다 우선 출시',
    ],
  },
  {
    tool_slug: 'sora',
    updated_at: '2024-02-15',
    title: 'Sora 공개 프리뷰',
    version: 'Preview',
    changes: [
      'OpenAI가 텍스트→영상 AI 모델 처음 공개',
      '도쿄 거리·골드러시 등 고화질 데모 영상 공개',
      '안전 테스트를 위한 제한적 접근 허용',
    ],
  },

  // ─── Suno ───────────────────────────────────────────────────────
  {
    tool_slug: 'suno',
    updated_at: '2025-10-21',
    title: 'Suno v4.5-all 출시',
    version: 'v4.5',
    changes: [
      'v4 기반 음질 및 다양성 추가 개선',
      '더 자연스러운 보컬 및 악기 표현',
      'Suno Studio와 병행 사용 가능',
    ],
  },
  {
    tool_slug: 'suno',
    updated_at: '2025-09-23',
    title: 'Suno v5 및 Suno Studio 출시',
    version: 'v5',
    changes: [
      '현재까지 가장 높은 음질과 자연스러운 보컬',
      'Suno Studio — 트랙별 편집 DAW 기능 제공',
      'WMG(워너뮤직그룹) 와 저작권 협약 체결',
    ],
  },
  {
    tool_slug: 'suno',
    updated_at: '2024-11-19',
    title: 'Suno v4 출시',
    version: 'v4',
    changes: [
      '더 긴 곡 구조와 자연스러운 마무리 생성',
      '음악 스타일 제어 옵션 세분화',
      '음질 및 가사 일치 정확도 향상',
    ],
  },
  {
    tool_slug: 'suno',
    updated_at: '2024-03-21',
    title: 'Suno v3 전체 공개',
    version: 'v3',
    changes: [
      '무료 계정으로 4분 분량 곡 생성 가능',
      '보컬 품질과 음악 일관성 대폭 향상',
      '모바일 앱 출시 (2024년 7월)',
    ],
  },
  {
    tool_slug: 'suno',
    updated_at: '2023-12-20',
    title: 'Suno 베타 공개 출시',
    version: 'Beta',
    changes: [
      '웹 앱 및 Microsoft Copilot 플러그인 출시',
      'AI 기반 팝송·가사·반주 생성 서비스 시작',
      '텍스트 프롬프트로 완성된 노래 제작 가능',
    ],
  },

  // ─── DALL-E ───────────────────────────────────────────────────────
  {
    tool_slug: 'dall-e',
    updated_at: '2023-10-01',
    title: 'DALL-E 3 ChatGPT 통합',
    version: 'DALL-E 3',
    changes: [
      'ChatGPT Plus/Enterprise 사용자에게 DALL-E 3 통합',
      '프롬프트 이해력 및 텍스트 렌더링 크게 향상',
      'Microsoft Bing Image Creator에도 적용',
    ],
  },
  {
    tool_slug: 'dall-e',
    updated_at: '2023-08-10',
    title: 'DALL-E 3 출시',
    version: 'DALL-E 3',
    changes: [
      'DALL-E 2 대비 훨씬 정밀한 프롬프트 해석',
      '이미지 내 텍스트 렌더링 지원',
      'OpenAI Labs 및 API 제공',
    ],
  },
  {
    tool_slug: 'dall-e',
    updated_at: '2022-04-06',
    title: 'DALL-E 2 출시',
    version: 'DALL-E 2',
    changes: [
      '고해상도 사실적 이미지 생성',
      '인페인팅(Inpainting) 및 아웃페인팅 기능',
      '이미지 편집·변형 기능 추가',
    ],
  },

  // ─── Stable Diffusion ───────────────────────────────────────────────────────
  {
    tool_slug: 'stable-diffusion',
    updated_at: '2024-10-22',
    title: 'Stable Diffusion 3.5 출시',
    version: 'SD 3.5',
    changes: [
      '이미지 품질·프롬프트 충실도 SD3 대비 향상',
      'Large·Large Turbo·Medium 3가지 모델 제공',
      'Stability AI 커뮤니티 라이선스 하에 공개',
    ],
  },
  {
    tool_slug: 'stable-diffusion',
    updated_at: '2024-06-01',
    title: 'Stable Diffusion 3 출시',
    version: 'SD 3',
    changes: [
      'Multimodal Diffusion Transformer(MMDiT) 아키텍처 도입',
      '이미지 내 텍스트 렌더링 대폭 개선',
      '8억~80억 파라미터 다양한 모델 크기 제공',
    ],
  },
  {
    tool_slug: 'stable-diffusion',
    updated_at: '2023-07-26',
    title: 'Stable Diffusion XL (SDXL) 출시',
    version: 'SDXL 1.0',
    changes: [
      '35억 파라미터로 이전 버전 대비 대형 모델',
      '더 높은 해상도와 품질의 이미지 생성',
      'Refiner 모델로 세부 디테일 향상',
    ],
  },
  {
    tool_slug: 'stable-diffusion',
    updated_at: '2022-08-22',
    title: 'Stable Diffusion 1.0 공개',
    version: 'SD 1.0',
    changes: [
      '오픈소스 텍스트→이미지 모델 최초 공개',
      '로컬 GPU에서 실행 가능 (VRAM 2.4GB~)',
      'DALL-E·Midjourney와 달리 완전 공개 가중치 제공',
    ],
  },

  // ─── GitHub Copilot ───────────────────────────────────────────────────────
  {
    tool_slug: 'github-copilot',
    updated_at: '2025-05-01',
    title: 'GitHub Copilot — 멀티모델 지원 및 에이전트 기능',
    version: '2025',
    changes: [
      'Claude·Gemini·Grok 모델 선택 지원',
      'Copilot Spaces — 코드베이스 기반 AI 협업 공간',
      'MCP(Model Context Protocol) 지원 추가',
    ],
  },
  {
    tool_slug: 'github-copilot',
    updated_at: '2024-11-01',
    title: 'GitHub Copilot Spark 및 확장 기능',
    version: '2024.11',
    changes: [
      'Copilot Spark — 자연어로 웹앱 생성',
      '멀티파일 편집 및 PR 자동 생성',
      'VS Code 외 Eclipse·JetBrains 지원 확대',
    ],
  },
  {
    tool_slug: 'github-copilot',
    updated_at: '2024-02-01',
    title: 'GitHub Copilot Enterprise 출시',
    version: 'Enterprise',
    changes: [
      '기업 코드베이스 인덱싱으로 맞춤형 자동완성',
      'Pull Request 자동 요약 기능',
      '월 $39/인 엔터프라이즈 플랜',
    ],
  },
  {
    tool_slug: 'github-copilot',
    updated_at: '2022-06-21',
    title: 'GitHub Copilot 정식 출시',
    version: '1.0',
    changes: [
      '기술 프리뷰 종료 후 구독 서비스 전환',
      'VS Code·Neovim·JetBrains IDEs 지원',
      '월 $10 개인 / 월 $19 비즈니스 플랜',
    ],
  },

  // ─── Kling AI ───────────────────────────────────────────────────────
  {
    tool_slug: 'kling',
    updated_at: '2025-03-01',
    title: 'Kling AI 2.0 출시',
    version: '2.0',
    changes: [
      '더욱 정교한 물리 법칙 기반 영상 생성',
      '인물 일관성 및 모션 품질 향상',
      '최대 3분 영상 생성 지원',
    ],
  },
  {
    tool_slug: 'kling',
    updated_at: '2024-09-01',
    title: 'Kling AI 1.5 출시',
    version: '1.5',
    changes: [
      '영상 일관성 및 배경 생성 개선',
      '텍스트→영상 프롬프트 이해도 향상',
      '국제 서비스 확장 (글로벌 API 출시)',
    ],
  },
  {
    tool_slug: 'kling',
    updated_at: '2024-06-01',
    title: 'Kling AI 1.0 공개 출시',
    version: '1.0',
    changes: [
      '중국 쾌수(快手) 개발 텍스트→영상 모델',
      '2분 분량 720p/1080p 영상 생성',
      'Sora에 비견되는 물리 시뮬레이션 품질',
    ],
  },

  // ─── Pika ───────────────────────────────────────────────────────
  {
    tool_slug: 'pika',
    updated_at: '2025-02-01',
    title: 'Pika 2.0 출시',
    version: '2.0',
    changes: [
      '스매시(Smash) 및 크러쉬(Crush) 영상 효과 기능',
      '더욱 사실적인 물리 기반 영상 생성',
      '최대 10초 고화질 영상 생성 지원',
    ],
  },
  {
    tool_slug: 'pika',
    updated_at: '2024-04-01',
    title: 'Pika 1.5 — Pikaffects 기능',
    version: '1.5',
    changes: [
      'Pikaffects — 폭발·녹음·팽창 등 영상 변형 효과',
      '영상 확장(Extend Video) 기능 추가',
      'Discord 봇에서 웹 플랫폼으로 전환 완료',
    ],
  },
  {
    tool_slug: 'pika',
    updated_at: '2023-11-01',
    title: 'Pika 1.0 출시',
    version: '1.0',
    changes: [
      '텍스트/이미지→영상 생성 플랫폼 정식 출시',
      '기존 영상 수정 및 인페인팅 기능',
      '시리즈 A $55M 투자 유치',
    ],
  },

  // ─── ElevenLabs ───────────────────────────────────────────────────────
  {
    tool_slug: 'elevenlabs',
    updated_at: '2025-11-01',
    title: 'Eleven v3 출시',
    version: 'Eleven v3',
    changes: [
      '지금까지 가장 자연스러운 TTS 품질',
      '감정 및 억양 제어 세분화',
      'ElevenLabs Agents — 실시간 대화 AI 에이전트',
    ],
  },
  {
    tool_slug: 'elevenlabs',
    updated_at: '2025-01-30',
    title: '시리즈 C $1.8억 조달 및 신제품 발표',
    version: '2025',
    changes: [
      '$1.8억 시리즈 C 펀딩, 기업 가치 $33억',
      'Agent Workflows — 멀티스텝 음성 에이전트 구축',
      '11ai — 개인 AI 음성 어시스턴트 서비스',
    ],
  },
  {
    tool_slug: 'elevenlabs',
    updated_at: '2024-01-22',
    title: '시리즈 B $8천만 조달 및 신기능 공개',
    version: '2024',
    changes: [
      '$8천만 시리즈 B, 기업 가치 $11억 (유니콘 등극)',
      'AI 더빙 스튜디오 및 Voice Marketplace 출시',
      '모바일 앱 (iOS/Android) 출시',
    ],
  },
  {
    tool_slug: 'elevenlabs',
    updated_at: '2023-01-01',
    title: 'ElevenLabs 베타 플랫폼 공개',
    version: 'Beta',
    changes: [
      '자연스러운 AI 음성 합성 서비스 공개',
      '음성 클로닝 기능 제공',
      '다국어 지원 및 감정 표현 가능 TTS',
    ],
  },
]

async function main() {
  console.log(`📋 총 ${releaseHistory.length}개 릴리스 기록 삽입 준비`)

  // 배치 삽입 (20개씩)
  const batchSize = 20
  let inserted = 0

  for (let i = 0; i < releaseHistory.length; i += batchSize) {
    const batch = releaseHistory.slice(i, i + batchSize)
    const { error } = await supabase.from('tool_updates').insert(batch)

    if (error) {
      console.error(`❌ 배치 ${i}-${i + batchSize} 삽입 실패:`, error.message)
      process.exit(1)
    }

    inserted += batch.length
    console.log(`✅ ${inserted}/${releaseHistory.length} 삽입 완료`)
  }

  console.log(`\n🎉 총 ${inserted}개 릴리스 히스토리 삽입 완료!`)

  // 도구별 카운트
  const toolCounts: Record<string, number> = {}
  for (const item of releaseHistory) {
    toolCounts[item.tool_slug] = (toolCounts[item.tool_slug] || 0) + 1
  }
  console.log('\n📊 도구별 릴리스 기록:')
  for (const [slug, count] of Object.entries(toolCounts).sort()) {
    console.log(`  ${slug}: ${count}개`)
  }
}

main().catch(err => {
  console.error('❌ 오류:', err)
  process.exit(1)
})
