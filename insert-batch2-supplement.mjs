import { createClient } from './node_modules/@supabase/supabase-js/dist/index.mjs';

const supabase = createClient(
  'https://fmjwwyygqseownpazypt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
);

// All verified 2025-2026 updates for batch 2 tools
const newRecords = [
  // =====================
  // KLING (last DB: 2025-03-01)
  // Source: Wikipedia / SCMP / Forbes
  // =====================
  {
    tool_slug: 'kling',
    updated_at: '2025-05-01',
    title: 'Kling 2.1 출시',
    changes: [
      'Standard(720p) 및 Professional(1080p) 두 가지 품질 모드 도입',
      '시작·끝 프레임 제어 기능 추가',
      '최대 5초 이상 영상 생성 지원',
    ],
    version: '2.1',
  },
  {
    tool_slug: 'kling',
    updated_at: '2026-02-07',
    title: 'Kling 3.0 출시',
    changes: [
      '씬 어웨어(Scene-aware) 멀티샷 생성 엔진 도입',
      '3~15초 분량의 다중 장면 영상 자동 생성',
      '네이티브 오디오·사운드 동기화 내장',
      '캐릭터·소품 일관성 및 카메라 무브먼트 제어 강화',
    ],
    version: '3.0',
  },

  // =====================
  // KREA (last DB: 2025-03-01)
  // Source: krea.ai/blog
  // =====================
  {
    tool_slug: 'krea',
    updated_at: '2025-03-26',
    title: 'Ship Week 공개',
    changes: [
      '일주일간 연속 신기능 출시 이벤트 "Ship Week" 진행',
      '다수의 실험적 AI 도구 및 기능 공개',
    ],
  },
  {
    tool_slug: 'krea',
    updated_at: '2025-04-02',
    title: 'Teams 기능 출시',
    changes: [
      '팀 협업을 위한 공유 워크스페이스 기능 출시',
      '멤버 초대, 공유 에셋 및 프로젝트 관리 지원',
    ],
  },
  {
    tool_slug: 'krea',
    updated_at: '2025-04-07',
    title: 'New Krea — 대규모 업데이트',
    changes: [
      'Krea 플랫폼 전체 UI/UX 리디자인',
      '새로운 Realtime Canvas 및 생성 도구 통합',
    ],
  },
  {
    tool_slug: 'krea',
    updated_at: '2025-07-31',
    title: 'FLUX.1 Krea 오픈 가중치 공개',
    changes: [
      'FLUX.1 기반 Krea 커스텀 모델 오픈 가중치 공개 (Apache 2.0)',
      '커뮤니티 파인튜닝 및 상업적 이용 허용',
    ],
  },
  {
    tool_slug: 'krea',
    updated_at: '2025-10-15',
    title: 'Krea Realtime 14B 출시',
    changes: [
      '140억 파라미터 기반 실시간 생성 모델 출시',
      '고해상도 이미지 실시간 렌더링 성능 대폭 향상',
    ],
  },
  {
    tool_slug: 'krea',
    updated_at: '2026-01-20',
    title: 'Realtime Edit 출시',
    changes: [
      '이미지를 실시간으로 편집하는 Realtime Edit 기능 출시',
      '브러시, 인페인팅, 아웃페인팅 실시간 적용 지원',
    ],
  },
  {
    tool_slug: 'krea',
    updated_at: '2026-02-10',
    title: 'Prompt-to-Workflow 출시',
    changes: [
      '텍스트 프롬프트만으로 자동 워크플로우 생성 기능 출시',
      '복잡한 AI 파이프라인을 자연어로 설계 가능',
    ],
  },
  {
    tool_slug: 'krea',
    updated_at: '2026-02-26',
    title: 'Nano Banana 2 출시',
    changes: [
      '경량 고속 이미지 생성 모델 Nano Banana 2 공개',
      '저지연·저비용으로 고품질 이미지 생성',
    ],
  },
  {
    tool_slug: 'krea',
    updated_at: '2026-03-02',
    title: 'Krea 리디자인 및 음성 모드 출시',
    changes: [
      'Krea 플랫폼 전면 재설계로 새로운 UX 경험 제공',
      '음성 입력 기반 이미지·영상 생성 Voice Mode 추가',
    ],
  },

  // =====================
  // LOVABLE (last DB: 2026-01-28)
  // Source: lovable.dev/blog
  // =====================
  {
    tool_slug: 'lovable',
    updated_at: '2025-04-24',
    title: 'Lovable 2.0 출시',
    changes: [
      'Lovable 2.0 대규모 플랫폼 업그레이드 출시',
      '코드 품질 및 프로젝트 구조 개선',
      '더 빠른 빌드 속도 및 배포 경험 제공',
    ],
    version: '2.0',
  },
  {
    tool_slug: 'lovable',
    updated_at: '2025-07-17',
    title: '$2억 시리즈 A 투자 유치',
    changes: [
      '기업가치 $18억(약 2.5조 원) 평가로 $2억 시리즈 A 투자 유치',
      'Accel 주도 라운드, 빠른 성장세로 AI 코딩 플랫폼 선두 입지 확보',
    ],
  },
  {
    tool_slug: 'lovable',
    updated_at: '2026-02-05',
    title: 'Claude 모델 통합 강화',
    changes: [
      '최신 Claude 모델 통합으로 코드 생성 품질 향상',
      '더욱 정교한 앱 생성 및 버그 수정 능력 강화',
    ],
  },

  // =====================
  // LUMA AI (last DB: 2025-03-01)
  // Source: lumalabs.ai/blog
  // =====================
  {
    tool_slug: 'luma-ai',
    updated_at: '2025-04-18',
    title: 'Ray2 — Camera Angle Concepts 출시',
    changes: [
      'Ray2 모델에 카메라 앵글 개념 제어 기능 추가',
      '팬, 틸트, 달리, 오르빗 등 다양한 카메라 무브먼트 지원',
    ],
  },
  {
    tool_slug: 'luma-ai',
    updated_at: '2025-05-09',
    title: 'Reframe 기능 출시',
    changes: [
      '영상 비율을 자유롭게 변환하는 Reframe 기능 출시',
      '16:9, 9:16, 1:1 등 다양한 종횡비로 자동 크롭 및 패딩',
    ],
  },
  {
    tool_slug: 'luma-ai',
    updated_at: '2025-06-02',
    title: 'Modify Video 출시',
    changes: [
      '기존 영상을 AI로 수정하는 Modify Video 기능 출시',
      '영상의 특정 요소를 텍스트 프롬프트로 변경 가능',
    ],
  },
  {
    tool_slug: 'luma-ai',
    updated_at: '2025-08-12',
    title: 'Modify with Instructions 출시',
    changes: [
      '자연어 지시로 영상의 내용·스타일을 정밀하게 수정 가능',
      '색상, 분위기, 오브젝트 등 세부 요소 개별 편집 지원',
    ],
  },
  {
    tool_slug: 'luma-ai',
    updated_at: '2025-10-14',
    title: 'Ray3 출시',
    changes: [
      '차세대 영상 생성 모델 Ray3 출시',
      '영상 일관성·현실감·프롬프트 준수도 대폭 향상',
      '더 긴 영상 클립 및 고해상도 생성 지원',
    ],
    version: 'Ray3',
  },
  {
    tool_slug: 'luma-ai',
    updated_at: '2025-11-19',
    title: 'Series C $9억 조달 및 Humain 파트너십',
    changes: [
      'Series C 라운드로 $9억(약 1.3조 원) 투자 유치',
      'AI 및 클라우드 기업 Humain과 전략적 파트너십 체결',
    ],
  },
  {
    tool_slug: 'luma-ai',
    updated_at: '2025-12-18',
    title: 'Ray3 Modify 출시',
    changes: [
      'Ray3 기반의 고급 Modify 기능 출시',
      '영상 구조를 유지하면서 스타일·콘텐츠 변환 가능',
    ],
    version: 'Ray3',
  },
  {
    tool_slug: 'luma-ai',
    updated_at: '2026-01-26',
    title: 'Ray3.14 출시 — Native 1080p',
    changes: [
      'Ray3.14 업데이트로 네이티브 1080p 해상도 영상 생성 지원',
      '영상 디테일·선명도 및 색감 표현 대폭 개선',
    ],
    version: 'Ray3.14',
  },

  // =====================
  // COPILOT / GitHub Copilot (last DB: 2025-02-19)
  // Source: Wikipedia / GitHub Blog
  // =====================
  {
    tool_slug: 'copilot',
    updated_at: '2025-02-06',
    title: 'GitHub Copilot Agent Mode 발표',
    changes: [
      'VS Code 내 자율 에이전트 모드(Agent Mode) 출시',
      'GPT-4o, o3-mini, Claude 3.5, Gemini 2.0 Flash 등 다양한 LLM 선택 지원',
      '복잡한 프로그래밍 태스크를 자동으로 계획·실행',
    ],
  },
  {
    tool_slug: 'copilot',
    updated_at: '2025-05-17',
    title: 'GitHub Copilot Coding Agent 발표',
    changes: [
      '비동기 코딩 에이전트 출시로 GitHub Actions 기반 클라우드 실행 지원',
      '이슈를 Copilot에 할당하면 자동으로 코드 작성·PR 생성',
      '작업 완료 후 사용자에게 코드 리뷰 요청 알림 발송',
    ],
  },

  // =====================
  // LE CHAT / Mistral (last DB: 2025-06-01)
  // Source: mistral.ai/news/voxtral (arxiv 2507.xxxxx = July 2025)
  // =====================
  {
    tool_slug: 'le-chat',
    updated_at: '2025-07-18',
    title: 'Voxtral 음성 이해 모델 출시',
    changes: [
      '최대 30분 오디오를 처리하는 음성 이해 AI 모델 Voxtral 출시',
      '오픈소스(Apache 2.0)로 24B 및 3B 크기 제공',
      '전사(transcription), Q&A, 요약 기능 내장',
      'Le Chat 및 API를 통해 통합 제공',
    ],
  },
];

async function checkExistingAndInsert() {
  const toolSlugs = [...new Set(newRecords.map(r => r.tool_slug))];
  
  // Fetch existing records for dedup
  const { data: existing, error: fetchErr } = await supabase
    .from('tool_updates')
    .select('tool_slug, updated_at, title')
    .in('tool_slug', toolSlugs);

  if (fetchErr) {
    console.error('Fetch error:', fetchErr);
    process.exit(1);
  }

  // Build a set of existing keys
  const existingKeys = new Set(
    existing.map(r => `${r.tool_slug}::${r.updated_at}::${r.title}`)
  );

  // Filter out duplicates
  const toInsert = newRecords.filter(r => {
    const key = `${r.tool_slug}::${r.updated_at}::${r.title}`;
    if (existingKeys.has(key)) {
      console.log(`SKIP (dup): ${key}`);
      return false;
    }
    // Also check by date+slug (looser check)
    const dateKey = `${r.tool_slug}::${r.updated_at}`;
    const dateExists = existing.some(e => `${e.tool_slug}::${e.updated_at}` === dateKey);
    if (dateExists) {
      console.log(`SKIP (date exists): ${dateKey}`);
      return false;
    }
    return true;
  });

  if (toInsert.length === 0) {
    console.log('Nothing new to insert.');
    return;
  }

  console.log(`Inserting ${toInsert.length} new records...`);
  toInsert.forEach(r => console.log(`  + [${r.tool_slug}] ${r.updated_at} — ${r.title}`));

  const { data, error } = await supabase
    .from('tool_updates')
    .insert(toInsert)
    .select();

  if (error) {
    console.error('Insert error:', error);
    process.exit(1);
  }

  console.log(`\nSuccessfully inserted ${data.length} records.`);

  // Summary by tool
  const summary = {};
  data.forEach(r => {
    summary[r.tool_slug] = (summary[r.tool_slug] || 0) + 1;
  });
  console.log('\n=== Summary ===');
  Object.entries(summary).sort().forEach(([slug, count]) => {
    console.log(`  ${slug}: +${count} records`);
  });
}

checkExistingAndInsert().catch(console.error);
