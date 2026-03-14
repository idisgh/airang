import { createClient } from './node_modules/@supabase/supabase-js/dist/index.mjs';

const supabase = createClient(
  'https://fmjwwyygqseownpazypt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
);

// 출처 확인된 날짜만 사용
// capcut: capcut.com/blog (블로그 게시 날짜 기준)
// deepl: deepl.com/en/blog (블로그 게시 날짜 기준)
// character-ai: blog.character.ai (공식 블로그 게시 날짜 기준)
// together-ai: together.ai/blog/rss.xml (RSS pubDate 기준)
// mapify, reweb, codev, make: 확인된 날짜 없음 → 건너뜀

const updates = [
  // ── CapCut ──────────────────────────────────────────────
  {
    tool_slug: 'capcut',
    updated_at: '2026-02-02',
    title: 'AI 이미지 번역기 출시',
    version: null,
    changes: [
      '200개 이상 언어로 이미지 내 텍스트를 자동 번역하는 AI 이미지 번역기 출시',
      'OCR 기술 기반으로 사진·문서·스크린샷 속 텍스트를 정확하게 인식 및 번역',
      '메뉴판, 간판, 문서 등 다양한 이미지의 언어 장벽 해소 지원',
    ],
  },
  {
    tool_slug: 'capcut',
    updated_at: '2026-02-02',
    title: 'AI 이미지 색상 변경 도구 출시 (Seedream 4.5 기반)',
    version: null,
    changes: [
      'Seedream 4.5 모델 기반 AI 이미지 색상 변경 도구 출시',
      '오브젝트 및 배경 색상을 포토리얼리스틱하게 즉시 변환 가능',
      '광고, 제품 비주얼, SNS 콘텐츠 제작에 활용 가능한 무료 온라인 도구',
    ],
  },
  {
    tool_slug: 'capcut',
    updated_at: '2026-02-02',
    title: 'AI 메이크업 필터 출시',
    version: null,
    changes: [
      'AI 메이크업 필터 온라인 도구 출시 (Seedream 4.5 & Nano Banana Pro 모델 탑재)',
      '셀피에 맞춤 메이크업 효과를 실시간으로 적용하는 AI 뷰티 기능',
      'No-Makeup 룩부터 풀 글램까지 다양한 스타일 지원',
    ],
  },
  {
    tool_slug: 'capcut',
    updated_at: '2026-03-06',
    title: 'AI 비디오 생성기 및 AI 디자인 기능 강화',
    version: null,
    changes: [
      'AI 아바타 100개 이상 및 원클릭 텍스트-비디오 생성 기능을 갖춘 AI 비디오 생성기 출시',
      'AI 브레인스토밍 도구로 주제·스토리보드·아이디어를 자동 생성',
      '스마트 AI 디자인 — Nano Banana Pro 및 Seedream 5.0 모델(AI 이미지 리더보드 1위)로 광고·배너·브랜드 콘텐츠 제작',
      '제품 배경 자동 생성·일괄 교체 및 모델 가상 착용 기능 추가',
    ],
  },

  // ── DeepL ────────────────────────────────────────────────
  {
    tool_slug: 'deepl',
    updated_at: '2026-01-12',
    title: '70개 이상 신규 언어 추가 — 총 100개 이상 언어 지원',
    version: null,
    changes: [
      '70개 이상의 신규 언어를 동시에 추가하여 DeepL 번역 지원 언어를 100개 이상으로 확대',
      '기존 대비 3배 이상 언어 수 증가로 글로벌 커버리지 대폭 강화',
      '새로운 언어 모델 및 사용자 경험 개선 작업 포함',
      '기업 고객의 다국어 로컬라이제이션 요구 대응력 향상',
    ],
  },
  {
    tool_slug: 'deepl',
    updated_at: '2026-02-02',
    title: 'DeepL Voice API 정식 출시 — 실시간 음성 번역 솔루션',
    version: null,
    changes: [
      'DeepL Voice API 정식(GA) 출시 — 컨택 센터용 실시간 음성 번역 API 제공',
      '언어 장벽 없이 글로벌 고객 지원 가능한 경계 없는 컨택 센터 실현',
      '에이전트 워크플로우 개선 및 글로벌 지원 규모 확장 지원',
      'DeepL Translator·Write와 연계하여 통합 언어 AI 플랫폼 구성 가능',
    ],
  },
  {
    tool_slug: 'deepl',
    updated_at: '2026-02-11',
    title: 'DeepL Agent 출시 — 고객 서비스 자동화 AI 에이전트',
    version: null,
    changes: [
      'DeepL Agent 출시 — 고객 서비스 팀을 위한 엔터프라이즈급 AI 에이전트',
      '코딩 없이 내부·외부 시스템을 브라우저처럼 탐색하여 복잡한 업무 자동화',
      '환불·반품·교환 등 반복 요청을 자동 처리하여 처리 속도 및 정확도 향상',
      'EU AI Act 및 ISO 27001 인증을 갖춘 엔터프라이즈 보안 표준 준수',
    ],
  },

  // ── Character.AI ─────────────────────────────────────────
  {
    tool_slug: 'character-ai',
    updated_at: '2025-10-29',
    title: '18세 미만 오픈 채팅 제한 및 안전 강화 조치',
    version: null,
    changes: [
      '18세 미만 사용자의 오픈 엔디드 AI 채팅 기능을 2025년 11월 25일부로 제한',
      '연령 확인 기능(Age Assurance) 도입 — 자체 개발 모델과 외부 Persona 도구 연계',
      '18세 미만 일일 채팅 시간 제한 시행 (초기 2시간 → 단계적 감소)',
      'AI Safety Lab 설립 — AI 엔터테인먼트 안전 연구를 위한 독립 비영리 기관 창설',
    ],
  },
  {
    tool_slug: 'character-ai',
    updated_at: '2025-11-25',
    title: 'Stories 기능 출시 — 인터랙티브 픽션 창작·공유',
    version: null,
    changes: [
      'Stories 출시 — 캐릭터와 함께 인터랙티브 픽션을 창작하고 공유하는 새로운 포맷',
      '캐릭터 2~3명 선택 후 장르 설정, 줄거리 직접 작성 또는 AI 자동 생성 가능',
      '분기형 스토리 구조로 매 플레이마다 다른 결말을 경험하는 리플레이 기능',
      '10대 사용자를 위한 안전 우선 창작 포맷으로 설계, 커뮤니티 공유(Feed) 지원',
    ],
  },
  {
    tool_slug: 'character-ai',
    updated_at: '2025-12-18',
    title: 'Charms 시스템 도입 — 퀘스트 기반 프리미엄 보상',
    version: null,
    changes: [
      'Charms 출시 — 퀘스트 완료 등 일상 활동으로 획득하여 프리미엄 기능을 유연하게 사용하는 보상 시스템',
      '일일 체크인·스타터 퀘스트·위클리 퀘스트로 Charms 획득 가능',
      '이미지 생성 추가 크레딧, 응답 속도 향상 등 프리미엄 기능에 Charms 사용 가능',
      'iOS 및 Android 먼저 출시, 웹 지원 순차 예정',
    ],
  },
  {
    tool_slug: 'character-ai',
    updated_at: '2026-02-04',
    title: 'c.ai labs 출시 — AI 엔터테인먼트 실험 플랫폼',
    version: null,
    changes: [
      'c.ai labs 출시 — 새로운 AI 엔터테인먼트 포맷을 빠르게 실험하고 커뮤니티와 함께 만들어가는 플랫폼',
      '완성 전 아이디어를 공개하여 사용자 피드백으로 빠르게 개선하는 오픈 이노베이션 방식',
      '혁신적·실험적 포맷 탐색으로 Character.AI 엔터테인먼트 비전 가속화',
    ],
  },

  // ── Together AI ─────────────────────────────────────────
  {
    tool_slug: 'together-ai',
    updated_at: '2025-12-01',
    title: '오픈소스 모델 최고속도 추론 달성',
    version: null,
    changes: [
      'Qwen, DeepSeek, Kimi 등 주요 오픈소스 모델에 대해 최대 2배 빠른 추론 속도 달성',
      'NVIDIA Blackwell 아키텍처 기반 GPU 최적화, 고급 투기적 디코딩(Speculative Decoding) 적용',
      'FP4 양자화 기술 도입으로 속도 벤치마크 1위 기록',
      'Artificial Analysis 3rd-party 벤치마크에서 속도 부문 최상위 등재',
    ],
  },
  {
    tool_slug: 'together-ai',
    updated_at: '2025-12-03',
    title: 'Meta PyTorch 강화학습 파트너십 및 TorchForge 통합',
    version: null,
    changes: [
      'Together AI × Meta 파트너십 — PyTorch 강화학습(RL) 파이프라인을 AI Native Cloud에 통합',
      'TorchForge RL 파이프라인으로 AI 에이전트 구축·학습·배포 원스톱 지원',
      'AutoJudge 출시 — 자동화된 데이터셋 큐레이션으로 추론 가속화 (최대 2× 속도 향상)',
    ],
  },
  {
    tool_slug: 'together-ai',
    updated_at: '2025-12-12',
    title: 'Together Python SDK v2.0 발표',
    version: 'v2.0',
    changes: [
      'Together Python SDK v2.0 정식 발표 — API 사용 편의성 전면 개선',
      '새로운 인터페이스와 구조로 개발자 워크플로우 간소화',
      'Together AI 플랫폼의 최신 기능(파인튜닝·추론·배치 처리)과 완전 호환',
    ],
  },
  {
    tool_slug: 'together-ai',
    updated_at: '2025-12-18',
    title: 'Rime 음성 모델 추가',
    version: null,
    changes: [
      'Rime 엔터프라이즈급 TTS 음성 모델 2종을 Together AI 플랫폼에 추가',
      'LLM·STT와 동일한 전용 인프라에 코-로케이션하여 지연 없는 음성 파이프라인 구축 가능',
      '수십억 건의 호출에서 검증된 엔터프라이즈 TTS 모델 제공',
    ],
  },
  {
    tool_slug: 'together-ai',
    updated_at: '2026-02-02',
    title: 'Together Evaluations v2 — 상업용 API vs 오픈소스 모델 비교',
    version: null,
    changes: [
      'Together Evaluations v2 업데이트 — OpenAI, Anthropic, Google 등 주요 상업용 API 비교 지원',
      '오픈소스 모델·파인튜닝 모델·상용 모델을 한 플랫폼에서 품질·비용·성능 기준으로 비교',
      '데이터 기반 모델 선택 의사결정 지원',
    ],
  },
  {
    tool_slug: 'together-ai',
    updated_at: '2026-02-12',
    title: 'Dedicated Container Inference 출시 — 커스텀 AI 모델 추론',
    version: null,
    changes: [
      'Dedicated Container Inference 출시 — 커스텀 AI 모델에 대해 1.4×~2.6× 빠른 추론 제공',
      '커스텀 컨테이너 기반 프로덕션급 오케스트레이션으로 자체 모델 배포 간소화',
      'Creatify, Hedra 등 주요 AI 기업이 이미 활용 중인 엔터프라이즈 인프라',
    ],
  },
  {
    tool_slug: 'together-ai',
    updated_at: '2026-03-05',
    title: 'AI Native Conf — FlashAttention-4, ThunderAgent 등 발표',
    version: null,
    changes: [
      'AI Native Conf에서 FlashAttention-4 공개 — 비대칭 하드웨어 확장을 위한 알고리즘·커널 파이프라이닝 공동 설계',
      'ThunderAgent 발표 — AI 네이티브 클라우드용 차세대 에이전트 시스템',
      'together.compile 공개 — 추론 최적화를 위한 새로운 컴파일러 프레임워크',
      '커널·RL·추론 최적화 전 영역에 걸친 연구 성과 동시 발표',
    ],
  },
];

async function insertAll() {
  const byTool = {};
  for (const u of updates) {
    if (!byTool[u.tool_slug]) byTool[u.tool_slug] = [];
    byTool[u.tool_slug].push(u);
  }

  console.log('\n📦 Supplement Batch C — Supabase 삽입 시작\n');

  for (const [slug, items] of Object.entries(byTool)) {
    const { error } = await supabase.from('tool_updates').insert(items);
    if (error) {
      console.error(`❌ ${slug}: ${error.message}`);
    } else {
      console.log(`✅ ${slug}: ${items.length}건 삽입 완료`);
    }
  }

  console.log('\n🎉 완료\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('건너뜀 (날짜 확인 불가): mapify, reweb, codev, make');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

insertAll().catch(console.error);
