import { createClient } from './node_modules/@supabase/supabase-js/dist/index.mjs';

const supabase = createClient(
  'https://fmjwwyygqseownpazypt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
);

// 리서치 메모:
// - aippt: https://www.aippt.com/log-update 에서 직접 확인 (날짜 정확)
// - wrtn: Wayback Machine 스냅샷(wrtn.ai)으로 UI 변화 추적
//   - 2025-04-24 스냅샷: 구 UI (채팅/스튜디오/스토어)
//   - 2025-05-06 스냅샷: 신 UI (채팅/도구/혜택/저장됨) → 이 사이에 대규모 개편
//   - 2025-09-01 스냅샷: GPT-5, AI 밈, 이미지 생성, 완벽요약, 뤼튼스피킹 등 추가 확인
//   - 2025-10-31 스냅샷: 실시간 검색어 순위, 블로그, 자기소개서 도구 정규화 확인
//   - 2026-01-05 스냅샷: 운세/사주타로 탭 추가 확인
// - musicfx, storytribe, consensus, wegic, clova-note: 공개 changelog 없음 → 스킵

const updates = [
  // ─── AiPPT ────────────────────────────────────────────────────────────────
  {
    tool_slug: 'aippt',
    updated_at: '2025-01-15',
    title: '다국어 지원 확대 (4개 언어 추가)',
    version: null,
    changes: [
      '번체 중국어(Traditional Chinese) 지원 추가',
      '포르투갈어(Português Brasil) 지원 추가',
      '독일어(Deutsch) 지원 추가',
      '프랑스어(Français) 지원 추가',
      'PPT 합성 페이지에 해당 언어 기본 구문 표시 지원',
    ],
  },
  {
    tool_slug: 'aippt',
    updated_at: '2025-06-30',
    title: 'AI 파일 변환 도구 출시 (PDF·Word·Text → PPT)',
    version: null,
    changes: [
      'PDF to PPT with AI 페이지 공개 (AI 기반 자동 변환)',
      'Word to PPT with AI 페이지 공개',
      'Text to PPT with AI 페이지 공개',
      '스마트 콘텐츠 추출·테마 자동 적용 기능 제공',
      '푸터 > PPT Converter 메뉴에서 접근 가능',
    ],
  },
  {
    tool_slug: 'aippt',
    updated_at: '2025-07-07',
    title: 'AI 이미지 생성 기능 정식 출시',
    version: null,
    changes: [
      '텍스트 입력만으로 고품질 이미지 즉시 생성',
      '다양한 아트 스타일 및 이미지 크기 선택 지원',
      '워크스페이스 좌측 사이드바 또는 편집기 내에서 접근',
      '콘텐츠 크리에이터·디자인 영감·개인 창작용 최적화',
    ],
  },
  {
    tool_slug: 'aippt',
    updated_at: '2025-07-09',
    title: 'PDF→PPT 무료 변환 및 어필리에이트 프로그램 출시',
    version: null,
    changes: [
      'PDF to PPT 일반 변환 페이지 무료 공개 (1일 2회 무료)',
      '어필리에이트 프로그램 출시 - 건당 최대 40% 수수료',
      'impact.com 연동으로 실시간 수익 추적 및 즉시 지급',
      '크리에이터·블로거·교육자 등 대상',
    ],
  },
  {
    tool_slug: 'aippt',
    updated_at: '2025-08-06',
    title: '템플릿 선택 UX 개선',
    version: null,
    changes: [
      '선택 전 4개 핵심 슬라이드 미리보기 기능 추가',
      '"시나리오" 필터 추가 - 용도별 템플릿 빠른 탐색',
      '더 부드럽고 빠른 템플릿 선택 경험 제공',
    ],
  },
  {
    tool_slug: 'aippt',
    updated_at: '2025-11-09',
    title: '새 AiPPT 템플릿 사이트 오픈',
    version: null,
    changes: [
      '전문가 디자인 PPT 템플릿 컬렉션 공개',
      '주제·색상·스타일별 스마트 필터 제공',
      '원클릭 즉시 다운로드 지원',
    ],
  },
  {
    tool_slug: 'aippt',
    updated_at: '2025-11-24',
    title: 'Nano Banana Pro 정식 출시 (Gemini 3 Pro 기반)',
    version: null,
    changes: [
      '네이티브 4K 해상도·픽셀 수준 리얼리즘 지원',
      '영어 및 아시아 언어(한·중·일 등) 텍스트 완벽 렌더링',
      'Gemini 3 Pro 시맨틱 추론 엔진 + Google Search 연동',
      '정밀 인포그래픽 및 데이터 시각화 생성 지원',
      '심도·색보정 등 전문 파라미터 미세조정 가능',
    ],
  },

  // ─── wrtn ────────────────────────────────────────────────────────────────
  {
    tool_slug: 'wrtn',
    updated_at: '2025-05-06',
    title: '대규모 UI 개편 - 스튜디오·스토어 → 도구·혜택·저장됨 체계로 전환',
    version: null,
    changes: [
      '기존 스튜디오(Studio) 및 스토어(Store) 메뉴 통합 개편',
      '새로운 네비게이션 구조: 채팅 / 도구 / 혜택 / 저장됨',
      '도구 탭에서 다양한 AI 툴 중앙 관리 가능',
      '저장됨 탭을 통해 생성 결과물 보관 기능 추가',
      '혜택 탭에서 이벤트·캐시·리워드 통합 관리',
    ],
  },
  {
    tool_slug: 'wrtn',
    updated_at: '2025-09-01',
    title: 'GPT-5 지원 및 다수 AI 도구 추가',
    version: null,
    changes: [
      'GPT-5 모델 연동 지원',
      'AI 이미지 생성 기능 추가',
      '완벽요약 기능 추가',
      '뤼튼스피킹(AI 영어 말하기 연습) 기능 추가',
      'AI 밈 생성 도구(이후 쨈으로 리브랜딩) 추가',
    ],
  },
  {
    tool_slug: 'wrtn',
    updated_at: '2025-10-31',
    title: '실시간 검색어 순위 및 블로그·자기소개서 도구 강화',
    version: null,
    changes: [
      '실시간 검색어 순위 기능 메인 화면 정식 배치',
      '블로그 글쓰기 도구 정규화',
      'AI 자기소개서 작성 도구 업데이트',
      '이용약관 버전 갱신 (2025-04-28 기준)',
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
  console.log('\n완료.');
  console.log('스킵된 툴: musicfx, consensus, wegic, clova-note, storytribe');
  console.log('사유: 공개 changelog/릴리즈 노트에서 2025년 이후 날짜 확인 불가');
}

insertAll().catch(console.error);
