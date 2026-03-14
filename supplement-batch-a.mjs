import { createClient } from './node_modules/@supabase/supabase-js/dist/index.mjs';

const supabase = createClient(
  'https://fmjwwyygqseownpazypt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
);

// 출처: https://www.copy.ai/changelog (공식 changelog 확인)
// 출처: https://www.notta.ai/en/changelog (공식 changelog 확인)
const updates = [
  // ────────── copy-ai (2024-01-15 이후) ──────────
  {
    tool_slug: 'copy-ai',
    updated_at: '2025-01-31',
    title: '1월 업데이트: o3-mini 모델 및 통합 페이지 출시',
    version: null,
    changes: [
      'OpenAI o3-mini 모델이 Generate Text 액션에 추가되어 비용 효율적인 강력한 추론 제공',
      '"Research a Topic with AI" 액션이 Perplexity.ai 최신 모델로 업그레이드',
      '모든 사용자에게 통합(Integrations) 페이지가 정식 오픈되어 연결 관리 가능',
      '통합 연결을 워크플로우 수정 없이 새로고침할 수 있는 기능 추가',
    ],
  },
  {
    tool_slug: 'copy-ai',
    updated_at: '2025-02-28',
    title: '2월 업데이트: Claude 3.7 Sonnet 지원 및 번역 기능 개선',
    version: null,
    changes: [
      'Claude 3.7 Sonnet이 Generate Text 및 Extract Info from Text 액션에서 사용 가능',
      'Prospect Finder Agent에 Nubela 데이터 제공사 추가로 더 많은 잠재 고객 발굴 가능',
      '번역 액션 v2 출시 — 더 정확한 번역과 특수 지침 입력 옵션 지원',
      'Categorize Text / Extract Data에 o3-mini 기반 "추론 모델" 옵션 추가',
      'Extract Info from Text 액션에 o1, o1-mini, o3-mini 등 추가 모델 지원',
    ],
  },
  {
    tool_slug: 'copy-ai',
    updated_at: '2025-03-18',
    title: 'Google Docs 및 Microsoft OneDrive 통합 출시',
    version: null,
    changes: [
      '워크플로우 내에서 Google Docs 문서를 자동으로 생성하는 액션 추가',
      'Microsoft OneDrive 통합으로 워크플로우에서 OneDrive 문서 생성 지원',
      '콘텐츠 초안 작성 후 Slack으로 팀에 자동 알림 전송하는 자동화 가능',
      '콘텐츠 제작 → 문서화 → 팀 공유의 완전한 워크플로우 자동화 구현',
    ],
  },
  {
    tool_slug: 'copy-ai',
    updated_at: '2025-04-30',
    title: '4월 업데이트: Content Assistant 및 Salesforce 통합',
    version: null,
    changes: [
      'Content Assistant 출시 — 워크플로우 출력 결과를 AI 채팅으로 직접 편집·저장 가능',
      'Salesforce Managed Package 출시로 Salesforce 내에서 직접 Copy.ai 워크플로우 실행',
      'API Key Management 시스템 강화로 보안 및 제어 수준 향상',
      'Prospect Finder에 새로운 랭킹 시스템 도입으로 매칭 정확도 개선',
    ],
  },
  {
    tool_slug: 'copy-ai',
    updated_at: '2025-05-31',
    title: '5월 업데이트: 워크플로우 출력 숨기기 및 폴더 기능',
    version: null,
    changes: [
      '워크플로우 특정 단계의 출력을 숨겨 핵심 결과만 표시하는 기능 추가',
      '간소화된 내비게이션과 폴더로 워크플로우, 테이블, 채팅 정리 가능',
      'Google Docs / Microsoft OneDrive 연동으로 워크플로우에서 직접 문서 생성',
      '새 AI 모델 추가: Chat에 o3-mini, o1, Claude 3.7 Sonnet; Generate Text에 GPT-4.1, o3, o4-mini',
      'Tables 내보내기 한도 10만 건으로 증가, 다중 선택 기능 추가',
    ],
  },
  {
    tool_slug: 'copy-ai',
    updated_at: '2025-06-16',
    title: 'Content Agent Studio 출시 — 브랜드 맞춤형 콘텐츠 엔진',
    version: null,
    changes: [
      'Content Agent Studio 공개 — 마케팅 팀을 위한 엔터프라이즈급 콘텐츠 자동화 솔루션',
      '샘플 3개만으로 브랜드 톤·구조를 자동으로 학습하고 유지하는 AI 콘텐츠 엔진',
      '프롬프트 엔지니어링 없이 브랜드 일관성 유지 가능 (Jasper/ChatGPT 대비 차별화)',
      '재사용 가능한 콘텐츠 시스템과 기존 GTM 워크플로우 임베딩 지원',
    ],
  },

  // ────────── notta (2024-05-01 이후) ──────────
  {
    tool_slug: 'notta',
    updated_at: '2024-05-31',
    title: '5월 업데이트: 이중 언어 실시간 전사 및 댓글 기능',
    version: null,
    changes: [
      '이중 언어 실시간 전사·번역이 중국어, 영어, 일본어, 베트남어 지원으로 확대',
      '동일 도메인 사용자에게 워크스페이스 가입 권유 및 자동 도메인 검색 기능 추가',
      '전사 특정 텍스트에 댓글 달기 및 팀원 @멘션(이메일 알림 포함) 기능 출시',
      '공유 링크 만료 기간 설정 옵션 추가 (7일, 14일, 30일, 영구)',
    ],
  },
  {
    tool_slug: 'notta',
    updated_at: '2024-06-30',
    title: '6월 업데이트: Slack·HubSpot 통합 및 캘린더 자동 참여',
    version: null,
    changes: [
      'Slack 통합 출시 — 댓글 및 멘션 알림 지원',
      'HubSpot CRM 통합 추가로 워크플로우 연결성 강화',
      '캘린더 통합에서 예약된 회의에 봇이 자동 참여하는 기능 개선',
      '멤버 페이지에 그룹 열 추가로 소속 그룹 일목요연하게 확인 가능',
      '워크스페이스 내 AI 템플릿 및 프롬프트 권한 관리 기능 추가',
    ],
  },
  {
    tool_slug: 'notta',
    updated_at: '2024-08-31',
    title: '8월 업데이트: 다중 문서 Ask AI 및 CRM 통합 대폭 확대',
    version: null,
    changes: [
      'Ask AI가 여러 문서를 동시에 분석·처리하는 다중 문서 모드 지원',
      'Google Drive, Box, Dropbox, OneDrive에 전사 파일 수동 동기화 기능 추가',
      'Zoom 회의 자동 참여 및 소회의실 녹화 지원',
      'Zendesk Sell, Zoho CRM, Pipedrive, Freshsales, Salesflare 등 CRM 연동 추가',
      '모바일 앱에서 실시간 전사·번역 결과를 플로팅 자막으로 표시하는 기능 출시',
    ],
  },
  {
    tool_slug: 'notta',
    updated_at: '2024-10-31',
    title: '10월 업데이트: Google Docs·ClickUp·OneNote 통합 및 AI 노트 개선',
    version: null,
    changes: [
      'Google Docs, ClickUp, Microsoft OneNote 통합 추가로 문서 관리 확장',
      'Chrome 알림으로 전사 완료 시 대시보드 및 상세 링크 바로 연결',
      'Chrome 확장 프로그램에서 온라인 회의 중 북마크 기능 지원',
      'AI 노트에 발화자 정보 포함으로 더 상세한 회의록 제공',
      '워크스페이스 자동화 규칙 한도 200개 → 800개로 대폭 확대',
    ],
  },
  {
    tool_slug: 'notta',
    updated_at: '2024-11-30',
    title: '11월 업데이트: 이중 언어 전사 언어 확대 및 영상 재생 통합',
    version: null,
    changes: [
      '이중 언어 전사에 프랑스어, 독일어, 이탈리아어, 러시아어, 아랍어, 힌디어 추가',
      '가져온 동영상을 Notta 내에서 직접 재생하며 전사 기능 함께 사용 가능',
      '워크스페이스 멤버 일괄 삭제 기능 추가',
      '이중 언어 전사 후 번역 기능 지원으로 국제 사용자 유연성 강화',
      'AI Chat 응답이 30초 이내에 전달되도록 성능 최적화',
    ],
  },
  {
    tool_slug: 'notta',
    updated_at: '2025-01-31',
    title: '1월 업데이트: AI 글쓰기 도구 및 시맨틱 세그멘테이션',
    version: null,
    changes: [
      '블로그 글쓰기 효율 향상을 위한 AI 글쓰기 도구 추가',
      '정교한 비용 관리를 위한 맞춤형 인건비 설정 기능 도입',
      '대화 구조에 대한 AI 이해도를 높이는 시맨틱 세그멘테이션 기능 출시',
      'Notta Sales Agent 기능 강화 및 Zoom Web SDK 업그레이드로 전사 안정성 향상',
      'Agent 폴더로 이동된 파일의 자동 전사 기능 추가',
    ],
  },
];

async function insertAll() {
  const byTool = {};
  for (const u of updates) {
    if (!byTool[u.tool_slug]) byTool[u.tool_slug] = [];
    byTool[u.tool_slug].push(u);
  }

  for (const [slug, items] of Object.entries(byTool)) {
    const { error } = await supabase.from('tool_updates').insert(items);
    if (error) console.error(`❌ ${slug}: ${error.message}`);
    else console.log(`✅ ${slug}: ${items.length}건 삽입 완료`);
  }
}

insertAll().catch(console.error);
