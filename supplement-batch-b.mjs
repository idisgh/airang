import { createClient } from './node_modules/@supabase/supabase-js/dist/index.mjs';

const supabase = createClient(
  'https://fmjwwyygqseownpazypt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
);

// 리서치 결과:
// - felo: 2025-06 이후 공식 블로그에서 날짜 확인된 업데이트들
// - pinokio: GitHub releases 페이지에서 날짜 확인된 릴리즈들
// - muapi: 공식 블로그에서 날짜 확인된 업데이트들
// - jasper, tost-ai, microsoft-designer, anifusion, uizard: 정확한 날짜 확인 불가로 건너뜀

const updates = [
  // ===== FELO =====
  // 출처: https://felo.ai/blog (2025-06-01 이후 확인)
  {
    tool_slug: 'felo',
    updated_at: '2025-06-20',
    title: 'Fact-Check AI 에이전트, 기업 SSO, Chat with Excel 출시',
    version: null,
    changes: [
      '신뢰할 수 있는 소스로 사실 확인하는 Fact-Check AI 에이전트 출시',
      '기업용 Felo AI Search에 SSO(싱글 사인온) 지원 추가',
      'Chat with Excel: AI로 스프레드시트와 대화하며 데이터 분석 기능 추가',
      '더 정확하고 실시간 인사이트를 제공하는 AI 검색 강화',
    ],
  },
  {
    tool_slug: 'felo',
    updated_at: '2025-07-04',
    title: '개인 구독 요금제 대폭 업그레이드',
    version: null,
    changes: [
      '개인 사용자 구독 플랜 대규모 개편으로 더 많은 혜택 제공',
      '포인트 기반 구독 모델로 전환하여 사용 유연성 향상',
      '다양한 AI 모델 접근 권한 확대',
    ],
  },
  {
    tool_slug: 'felo',
    updated_at: '2025-08-19',
    title: 'GPT-5 지원 - AI 검색 최초 도입',
    version: null,
    changes: [
      'Felo Search가 AI 검색 엔진 중 최초로 GPT-5 지원',
      '실시간 데이터와 결합된 GPT-5 기반의 더 정확한 검색 결과 제공',
      'DeepResearch Bench 평가에서 Gemini, OpenAI Deep Research 에이전트를 능가하는 성능 확인',
    ],
  },
  {
    tool_slug: 'felo',
    updated_at: '2025-08-20',
    title: 'Felo AI Create 종합 플랫폼 출시',
    version: null,
    changes: [
      'AI 검색부터 콘텐츠 생성까지 원스톱 AI 플랫폼 Felo AI Create 출시',
      'PPT, 리서치 보고서, 마인드맵을 원클릭으로 생성',
      'PDF to PPT 변환 기능 지원',
      'Felo AI Slides에 새로운 테마, 이미지 라이브러리, 프레젠테이션 모드 추가',
    ],
  },
  {
    tool_slug: 'felo',
    updated_at: '2025-10-17',
    title: 'Felo LiveDoc AI 문서 플랫폼 정식 출시',
    version: null,
    changes: [
      'AI 에이전트가 자동으로 콘텐츠를 업데이트·최적화하는 LiveDoc 플랫폼 출시',
      '무한 캔버스(Smart Canvas) 기반의 AI 에이전트 협업 공간 제공',
      'PPT 번역 기능 (레이아웃 보존하며 원클릭 번역)',
      '경쟁 분석 보고서, 프로젝트 관리 등 다양한 워크플로우 지원',
    ],
  },
  {
    tool_slug: 'felo',
    updated_at: '2025-11-14',
    title: 'LiveDoc 멀티유저 실시간 협업 & GPT-5.1 지원',
    version: null,
    changes: [
      'LiveDoc에서 여러 사용자가 AI 에이전트와 함께 실시간으로 공동 편집 가능',
      'OpenAI 최신 모델 GPT-5.1 무료 지원 추가',
      '문서 내 AI 이미지 생성·편집 기능 (Image to Image AI 포함)',
      'Nano Banana (Google Gemini 기반 이미지 모델) 통합',
    ],
  },
  {
    tool_slug: 'felo',
    updated_at: '2025-11-19',
    title: 'Google Gemini 3 Pro 무료 지원',
    version: null,
    changes: [
      'Google의 최신 플래그십 모델 Gemini 3 Pro 무료 지원 추가',
      'Felo Search와 LiveDoc에서 Gemini 3 Pro 기반의 정밀 인사이트 제공',
      'Nano Banana Pro (Gemini-3-Pro-Image-Preview) 이미지 생성 모델 한정 무료 제공',
    ],
  },
  {
    tool_slug: 'felo',
    updated_at: '2025-12-31',
    title: 'LiveDoc Voice Notes & 음성 명령 출시',
    version: null,
    changes: [
      'LiveDoc에 음성 메모(Voice Notes) 기능 추가 - 아이디어를 즉시 캡처',
      '음성 명령으로 문서 작성 및 AI 에이전트 제어 가능',
      'GPT-5.2 지원 추가 (12월 중 업데이트)',
      'AI 마인드맵 생성 기능 - 어떤 콘텐츠에서든 마인드맵 자동 생성',
    ],
  },
  {
    tool_slug: 'felo',
    updated_at: '2026-01-16',
    title: 'X Research (트위터 실시간 고급 검색) 출시',
    version: null,
    changes: [
      'X(트위터) 고급 검색을 실시간 소셜 인텔리전스로 전환하는 X Research 기능 출시',
      '브랜드 감성 모니터링, 리드 발굴, 트렌드 추적 지원',
      '소음 필터링으로 X에서 가치 있는 인사이트만 추출',
      '문서 자동 삽화 기능(Auto Illustration for Documents) 추가',
    ],
  },
  {
    tool_slug: 'felo',
    updated_at: '2026-01-31',
    title: 'Custom Brand Template 2.0 - 픽셀 완벽 PPTX 내보내기',
    version: null,
    changes: [
      '커스텀 브랜드 템플릿 2.0 출시 - 홈페이지에서 바로 접근 가능',
      '완전히 재설계된 템플릿 편집기 - 드래그앤드롭, 텍스트·이미지 편집, 마스터 슬라이드 재생성',
      '픽셀 완벽(Pixel-Perfect) PPTX 내보내기 - 폰트 손실 없이 모든 기기에서 동일하게 표시',
      '브랜드 일관성을 위한 조직 내 템플릿 공유 지원',
    ],
  },

  // ===== PINOKIO =====
  // 출처: https://github.com/pinokiocomputer/pinokio/releases
  {
    tool_slug: 'pinokio',
    updated_at: '2025-01-22',
    title: 'v3.3.0 대규모 안정화 업데이트',
    version: '3.3.0',
    changes: [
      'conda, pip, 패키지 요구사항 설치의 근본적인 버그 대량 수정',
      'PNPM 지원 추가 (기존 NPM 대비 훨씬 빠른 패키지 관리)',
      'Autolaunch 기능 추가 - 핀오키오 시작 시 앱 자동 실행 설정 가능',
      '다중 Python 버전 지원 - venv 생성 시 Python 3.10 외 3.11, 3.12 등 선택 가능',
      '"next" RPC 속성 추가 - 조건부 분기 스크립팅 지원',
    ],
  },
  {
    tool_slug: 'pinokio',
    updated_at: '2025-02-01',
    title: 'v3.6 Windows/CUDA/UV 환경 개선',
    version: '3.6',
    changes: [
      'Windows에서 ~/pinokio 폴더 전체 쓰기 권한 자동 부여 (EACCESS 오류 방지)',
      'CUDA_HOME을 ~/pinokio/bin/miniconda로 자동 설정',
      'shell.run의 build 속성 추가 - Visual Studio Build Tools 환경변수 자동 주입',
      'UV Python 격리 강화 - 시스템 Python 대신 관리형 Python 사용으로 완벽 격리',
      '포트 42000으로 모든 플랫폼 통일, 네트워크 연결 문제 수정',
    ],
  },
  {
    tool_slug: 'pinokio',
    updated_at: '2025-02-20',
    title: 'libsqlite 및 FFMPEG 호환성 픽스',
    version: null,
    changes: [
      'libsqlite 3.49.0 breaking change로 인한 conda 패키지 오류 수정 (sqlite 3.47.2로 고정)',
      'FFMPEG 최신 conda 패키지 충돌 문제 수정 (FFMPEG 5.1.2로 고정)',
      'Facefusion 등 비디오 처리 앱의 DLL 오류 해결',
      'Mac sudo 셸 수정 및 여러 아키텍처 지원 개선',
    ],
  },
  {
    tool_slug: 'pinokio',
    updated_at: '2025-12-25',
    title: 'Checkpoint 기능 및 주요 UI/UX 개선',
    version: null,
    changes: [
      'Checkpoint 기능 추가 - 앱 상태를 저장하고 복원 가능',
      'CUDA 및 Linux 호환성 대폭 개선',
      '수직 모드(Vertical Mode) UI 추가',
      '파일로 앱 생성(Create with Files) 기능 추가',
      '디스크 사용량 표시 기능 및 템플릿 추가',
    ],
  },
  {
    tool_slug: 'pinokio',
    updated_at: '2026-01-26',
    title: 'v6.0.0 정식 출시',
    version: '6.0.0',
    changes: [
      'v6.0.0 대규모 버전 업 정식 출시',
      '앱 페이지 로드 속도 대폭 향상',
      'Windows 레지스트리 관련 버그 수정',
      'conda 환경 및 Node.js 관련 버그 수정',
      'Mac/Windows/Linux 전반의 설치 안정성 개선',
    ],
  },
  {
    tool_slug: 'pinokio',
    updated_at: '2026-01-27',
    title: 'v6.0.9 FFMPEG 의존성 픽스',
    version: '6.0.9',
    changes: [
      'v6.0.0 이후 보고된 FFMPEG 의존성 오류 수정',
      'Mac conda 환경 설정 픽스',
      'Mac Xcode command line tools 설치 감지 로직 개선',
      'Linux CUDA 및 G++ 호환성 개선 (NVCC/G++ 버전 충돌 해결)',
      '포트 가용성 확인 로직 강화',
    ],
  },

  // ===== MUAPI =====
  // 출처: https://muapi.ai/blog
  {
    tool_slug: 'muapi',
    updated_at: '2025-06-02',
    title: 'Generative AI 워크플로우 빌더 (Infinite Canvas) 출시',
    version: null,
    changes: [
      'Infinite Canvas 기반의 Generative AI 워크플로우 빌더 출시',
      '단일 프롬프트를 넘어 복잡한 프로덕션급 AI 파이프라인 구축 가능',
      '이미지·영상·오디오 생성 모델을 연결하는 커스텀 워크플로우 지원',
      '20개 이상의 최적화된 AI 모델을 단일 API로 접근',
    ],
  },
  {
    tool_slug: 'muapi',
    updated_at: '2025-06-11',
    title: 'Google Veo 3.1 영상 생성 모델 통합',
    version: null,
    changes: [
      'Google의 최신 AI 영상 생성 모델 Veo 3.1 Muapi에 통합',
      '높은 서사 연속성과 네이티브 오디오를 지원하는 영화급 영상 생성',
      'Text to Video 및 Image to Video 두 가지 모드 지원',
      '초당 $0.6(Fast) ~ $2.5(Full) 요금제로 제공',
    ],
  },
  {
    tool_slug: 'muapi',
    updated_at: '2026-02-24',
    title: 'ByteDance Seedance 2.0 & Kling 3.0 통합',
    version: null,
    changes: [
      'ByteDance의 Seedance 2.0 - 멀티모달 혁신과 물리 엔진 기반 AI 영상 생성 지원',
      'Seedance 1.5의 안정성과 2.0의 멀티모달 혁신 모두 Muapi에서 사용 가능',
      'Midjourney V7 텍스트→이미지 및 이미지→영상 기능 추가',
      'OpenAI Sora 2 Pro (이미지→영상) 통합, FLUX Kontext Pro API 추가',
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
