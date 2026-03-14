import { createClient } from '/Users/hkjeong/Desktop/workspace/airang/node_modules/@supabase/supabase-js/dist/index.mjs';

const supabase = createClient(
  'https://fmjwwyygqseownpazypt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
);

const tools = [
  // ─── VIDEO ───────────────────────────────────────────────────────────────────
  {
    name: 'Google Veo',
    slug: 'veo',
    tagline: 'Google DeepMind의 최신 AI 영상 생성 모델',
    description: 'Google DeepMind가 개발한 최첨단 AI 영상 생성 모델로, 텍스트나 이미지에서 고품질 영상을 만들 수 있습니다. Veo 3는 네이티브 오디오 생성까지 지원하며 Google AI Studio와 Gemini를 통해 이용 가능합니다. 영화급 화질과 물리 법칙을 준수하는 사실적인 영상 생성이 특징입니다.',
    url: 'https://deepmind.google/models/veo/',
    logo_url: '/logos/veo.png',
    categories: ['video'],
    pricing_model: 'freemium',
    pricing_detail: '무료 (Google AI Studio 한정) / API 유료',
    korean_support: 'partial',
    features: ['텍스트→영상 생성', '이미지→영상 변환', '네이티브 오디오 생성', '고품질 영상 출력', 'Gemini 통합', '물리 법칙 준수 렌더링'],
    platforms: ['web', 'api'],
    rating: 4.7,
    review_count: 380,
    alternatives: ['sora', 'runway', 'kling', 'hailuo-ai'],
    is_featured: true,
    launched_at: '2024-05-14',
  },
  {
    name: 'Pixverse',
    slug: 'pixverse',
    tagline: '모두를 위한 차세대 AI 크리에이티브 영상 스튜디오',
    description: 'PixVerse는 텍스트와 이미지로 고품질 AI 영상을 생성하는 플랫폼으로, 한국어 인터페이스를 포함한 다국어를 지원합니다. 캐릭터 일관성 유지, 스타일 참조, 영상 확장 등 다양한 창작 기능을 무료로 이용할 수 있습니다. 모바일 앱과 웹 모두 지원하여 접근성이 높습니다.',
    url: 'https://pixverse.ai',
    logo_url: '/logos/pixverse.png',
    categories: ['video'],
    pricing_model: 'freemium',
    pricing_detail: '무료 / Pro $13/월',
    korean_support: 'full',
    features: ['텍스트→영상 생성', '이미지→영상 변환', '캐릭터 일관성 유지', '스타일 참조', '영상 확장(Extend)', '한국어 지원'],
    platforms: ['web', 'mobile'],
    rating: 4.5,
    review_count: 290,
    alternatives: ['kling', 'runway', 'hailuo-ai', 'vidu'],
    is_featured: false,
    launched_at: '2024-01-15',
  },
  {
    name: 'Haiper',
    slug: 'haiper',
    tagline: '누구나 쉽게 만드는 AI 영상 생성 플랫폼',
    description: 'Haiper는 텍스트 프롬프트나 이미지로 단 몇 초 만에 고품질 영상을 생성하는 AI 플랫폼입니다. DeepMind 출신 연구진이 개발했으며 이미지 애니메이션, 영상 리마스터링 등 다양한 기능을 제공합니다. 직관적인 인터페이스로 영상 제작 경험이 없어도 쉽게 사용할 수 있습니다.',
    url: 'https://haiper.ai',
    logo_url: '/logos/haiper.png',
    categories: ['video'],
    pricing_model: 'freemium',
    pricing_detail: '무료 (매주 크레딧 지급) / Pro $9.99/월',
    korean_support: 'none',
    features: ['텍스트→영상 생성', '이미지 애니메이션', '영상 리마스터링', '4초/8초 영상 생성', '빠른 생성 속도'],
    platforms: ['web'],
    rating: 4.3,
    review_count: 180,
    alternatives: ['kling', 'pixverse', 'pika', 'runway'],
    is_featured: false,
    launched_at: '2024-02-01',
  },

  // ─── CHATBOT ─────────────────────────────────────────────────────────────────
  {
    name: 'DeepSeek',
    slug: 'deepseek',
    tagline: '중국발 오픈소스 AI, GPT-4급 성능을 무료로',
    description: 'DeepSeek은 중국 AI 스타트업 DeepSeek이 개발한 대형언어모델로, GPT-4에 버금가는 성능을 오픈소스로 공개해 세계적인 주목을 받았습니다. DeepSeek-R1은 수학·코딩·추론 능력이 뛰어나며, 모델 가중치를 무료로 배포하여 누구나 자유롭게 활용할 수 있습니다. 저렴한 API 비용과 뛰어난 성능으로 개발자들에게 큰 인기를 얻고 있습니다.',
    url: 'https://chat.deepseek.com',
    logo_url: '/logos/deepseek.png',
    categories: ['chatbot', 'coding'],
    pricing_model: 'freemium',
    pricing_detail: '무료 (웹 채팅) / API $0.27/M tokens',
    korean_support: 'partial',
    features: ['고급 추론 능력(R1 모델)', '코딩 보조', '수학·과학 문제 풀이', '오픈소스 모델 공개', '저렴한 API 비용', '멀티턴 대화'],
    platforms: ['web', 'mobile', 'api'],
    rating: 4.7,
    review_count: 950,
    alternatives: ['chatgpt', 'claude', 'gemini', 'mistral'],
    is_featured: true,
    launched_at: '2023-11-02',
  },
  {
    name: 'Mistral',
    slug: 'mistral',
    tagline: '유럽 최고의 프론티어 AI, 개방성과 성능의 조화',
    description: 'Mistral AI는 프랑스 파리에서 설립된 AI 기업으로, 고성능 오픈소스 언어 모델과 상용 API를 제공합니다. Mistral Large, Mixtral 등 다양한 모델을 통해 기업의 프라이빗 배포부터 클라우드 서비스까지 폭넓게 지원합니다. 유럽의 데이터 프라이버시 기준을 준수하며 온프레미스 배포를 지원하는 것이 강점입니다.',
    url: 'https://mistral.ai',
    logo_url: '/logos/mistral.png',
    categories: ['chatbot'],
    pricing_model: 'freemium',
    pricing_detail: '무료 (Le Chat) / API $2/M tokens~',
    korean_support: 'partial',
    features: ['고성능 언어 모델', '오픈소스 모델 제공', '온프레미스 배포 지원', 'Le Chat 무료 챗봇', '기업용 에이전트', '다국어 지원'],
    platforms: ['web', 'api'],
    rating: 4.5,
    review_count: 420,
    alternatives: ['chatgpt', 'claude', 'deepseek', 'groq'],
    is_featured: false,
    launched_at: '2023-09-27',
  },
  {
    name: 'Qwen',
    slug: 'qwen',
    tagline: '알리바바의 강력한 오픈소스 AI 모델 시리즈',
    description: 'Qwen(통의천문)은 알리바바 클라우드가 개발한 대형언어모델 시리즈로, 텍스트·이미지·음성·비디오를 아우르는 멀티모달 AI입니다. Qwen2.5는 코딩·수학·언어 이해 벤치마크에서 최상위 성능을 기록하며, Apache 2.0 라이선스로 무료 공개되어 있습니다. chat.qwen.ai를 통해 누구나 무료로 이용할 수 있습니다.',
    url: 'https://chat.qwen.ai',
    logo_url: '/logos/qwen.png',
    categories: ['chatbot'],
    pricing_model: 'freemium',
    pricing_detail: '무료 (웹 채팅) / API 별도 과금',
    korean_support: 'partial',
    features: ['멀티모달 입력(텍스트·이미지·음성)', '코딩 보조', '수학·추론 능력', '오픈소스 모델 공개', '긴 컨텍스트(128K)', '중국어 최적화'],
    platforms: ['web', 'api'],
    rating: 4.5,
    review_count: 310,
    alternatives: ['deepseek', 'chatgpt', 'gemini', 'claude'],
    is_featured: false,
    launched_at: '2023-09-25',
  },
  {
    name: 'Meta AI',
    slug: 'meta-ai',
    tagline: 'Meta의 AI 어시스턴트, Llama 기반 무료 챗봇',
    description: 'Meta AI는 Meta(구 Facebook)가 개발한 AI 어시스턴트로, Llama 3 모델을 기반으로 합니다. WhatsApp, Instagram, Facebook, Messenger에 통합되어 있으며, meta.ai를 통해 독립적으로도 이용 가능합니다. 이미지 생성(Imagine), 실시간 인터넷 검색, 멀티모달 입력을 지원합니다.',
    url: 'https://www.meta.ai',
    logo_url: '/logos/meta-ai.png',
    categories: ['chatbot'],
    pricing_model: 'free',
    pricing_detail: '완전 무료',
    korean_support: 'partial',
    features: ['Llama 3 기반', 'AI 이미지 생성(Imagine)', '실시간 인터넷 검색', 'SNS 플랫폼 통합(WhatsApp·Instagram 등)', '멀티모달 입력', '무료 사용'],
    platforms: ['web', 'mobile'],
    rating: 4.2,
    review_count: 580,
    alternatives: ['chatgpt', 'gemini', 'claude', 'deepseek'],
    is_featured: false,
    launched_at: '2023-09-27',
  },

  // ─── VOICE ───────────────────────────────────────────────────────────────────
  {
    name: 'Fish Audio',
    slug: 'fish-audio',
    tagline: '1분 샘플로 완성하는 AI 음성 클로닝 플랫폼',
    description: 'Fish Audio는 1분 분량의 음성 샘플만으로 99% 정확도의 AI 음성 클로닝이 가능한 TTS 플랫폼입니다. 8개 이상의 언어를 지원하며, 전문적인 노이즈 제거와 음량 균일화를 통해 자연스러운 보이스오버를 제공합니다. 교육, 팟캐스트, 게임 등 다양한 분야에 활용할 수 있습니다.',
    url: 'https://fishaudio.net',
    logo_url: '/logos/fish-audio.png',
    categories: ['voice'],
    pricing_model: 'freemium',
    pricing_detail: '무료 (월 10만자) / Pro $9.9/월',
    korean_support: 'partial',
    features: ['AI 음성 클로닝', '텍스트→음성 변환(TTS)', '다국어 지원(8+언어)', '1분 샘플로 학습', '노이즈 제거 및 음질 향상', '빠른 생성(20초 이내)'],
    platforms: ['web', 'api'],
    rating: 4.5,
    review_count: 250,
    alternatives: ['elevenlabs', 'muapi', 'play-ht'],
    is_featured: false,
    launched_at: '2023-08-01',
  },
  {
    name: 'Play.ht',
    slug: 'play-ht',
    tagline: '900개 이상 AI 목소리, 최고의 TTS & 음성 클로닝',
    description: 'Play.ht는 900개 이상의 AI 목소리와 142개 언어를 지원하는 텍스트-음성 변환(TTS) 플랫폼입니다. 3초 분량의 음성 샘플만으로 개인 목소리 클로닝이 가능하며, 팟캐스트·오디오북·유튜브 제작자들에게 널리 사용됩니다. 실시간 스트리밍 음성 생성 API도 제공합니다.',
    url: 'https://play.ht',
    logo_url: '/logos/play-ht.png',
    categories: ['voice'],
    pricing_model: 'freemium',
    pricing_detail: '무료 (월 12,500자) / Creator $29/월',
    korean_support: 'partial',
    features: ['900+ AI 목소리', '142개 언어 지원', '목소리 클로닝(3초 샘플)', '실시간 스트리밍 API', '감정 표현 제어', '팟캐스트·오디오북 최적화'],
    platforms: ['web', 'api'],
    rating: 4.4,
    review_count: 320,
    alternatives: ['elevenlabs', 'fish-audio', 'muapi'],
    is_featured: false,
    launched_at: '2019-01-01',
  },

  // ─── MUSIC ───────────────────────────────────────────────────────────────────
  {
    name: 'Mubert',
    slug: 'mubert',
    tagline: '콘텐츠 제작자를 위한 AI 로열티 프리 음악 생성기',
    description: 'Mubert는 수백 명의 뮤지션이 제공한 샘플과 루프를 AI로 합성해 로열티 프리 음악을 실시간 생성하는 플랫폼입니다. 영상 길이와 무드에 맞는 배경음악을 즉시 만들 수 있어 유튜브·틱톡 크리에이터들에게 인기입니다. Render(크리에이터용), Studio(아티스트용), API(개발자용) 등 다양한 서비스를 제공합니다.',
    url: 'https://mubert.com',
    logo_url: '/logos/mubert.png',
    categories: ['music'],
    pricing_model: 'freemium',
    pricing_detail: '무료 (워터마크 포함) / Creator $14/월',
    korean_support: 'none',
    features: ['AI 음악 자동 생성', '로열티 프리 라이선스', '영상 길이에 맞는 자동 편집', '무드·장르 기반 생성', '실시간 스트리밍', 'API 제공'],
    platforms: ['web', 'api', 'mobile'],
    rating: 4.3,
    review_count: 210,
    alternatives: ['suno', 'udio', 'musicfx'],
    is_featured: false,
    launched_at: '2020-01-01',
  },

  // ─── DESIGN ──────────────────────────────────────────────────────────────────
  {
    name: 'Spline',
    slug: 'spline',
    tagline: '브라우저에서 바로 만드는 3D 인터랙티브 디자인',
    description: 'Spline은 브라우저에서 바로 3D 디자인과 인터랙티브 경험을 만들 수 있는 디자인 툴입니다. AI 기능을 통해 텍스트 프롬프트로 3D 오브젝트를 생성할 수 있으며, 실시간 협업과 웹사이트 직접 임베드가 가능합니다. 코딩 없이도 애니메이션과 물리 시뮬레이션을 구현할 수 있어 디자이너들에게 인기입니다.',
    url: 'https://spline.design',
    logo_url: '/logos/spline.png',
    categories: ['design'],
    pricing_model: 'freemium',
    pricing_detail: '무료 / Pro $9/월',
    korean_support: 'none',
    features: ['브라우저 기반 3D 디자인', 'AI 3D 오브젝트 생성', '실시간 협업', '웹 임베드 지원', '애니메이션 및 물리 시뮬레이션', '코드 없이 인터랙션 구현'],
    platforms: ['web', 'desktop'],
    rating: 4.6,
    review_count: 340,
    alternatives: ['figma', 'framer', 'canva-ai'],
    is_featured: false,
    launched_at: '2020-09-01',
  },

  // ─── CODING ──────────────────────────────────────────────────────────────────
  {
    name: 'Tabnine',
    slug: 'tabnine',
    tagline: '수백만 개발자가 신뢰하는 AI 코딩 어시스턴트',
    description: 'Tabnine은 AI 코드 자동완성 분야의 선구자로, 수백만 명의 개발자와 수천 개 기업이 사용하는 AI 코딩 어시스턴트입니다. 다양한 IDE를 지원하며, 개인화된 코드 제안과 엔터프라이즈 수준의 보안 및 프라이버시를 제공합니다. 자사 코드베이스를 학습해 팀 스타일에 맞는 코드를 생성합니다.',
    url: 'https://www.tabnine.com',
    logo_url: '/logos/tabnine.png',
    categories: ['coding'],
    pricing_model: 'freemium',
    pricing_detail: '무료 (Basic) / Pro $12/월',
    korean_support: 'none',
    features: ['AI 코드 자동완성', '주요 IDE 플러그인 지원', '팀 코드베이스 학습', '엔터프라이즈 보안', '30+ 프로그래밍 언어', '코드 리뷰 자동화'],
    platforms: ['desktop', 'api'],
    rating: 4.4,
    review_count: 460,
    alternatives: ['github-copilot', 'cursor', 'windsurf'],
    is_featured: false,
    launched_at: '2018-01-01',
  },

  // ─── PRODUCTIVITY ────────────────────────────────────────────────────────────
  {
    name: 'Otter.ai',
    slug: 'otter-ai',
    tagline: 'AI 회의록 자동 작성, 요약·액션 아이템까지',
    description: 'Otter.ai는 회의를 자동으로 녹취·전사·요약하는 AI 미팅 어시스턴트입니다. Zoom, Google Meet, Microsoft Teams와 통합되어 실시간 자막과 회의 요약을 자동 생성합니다. 발언자 구분, 액션 아이템 자동 추출, CRM 연동 등 기업용 기능도 탄탄하게 갖추고 있습니다.',
    url: 'https://otter.ai',
    logo_url: '/logos/otter-ai.png',
    categories: ['productivity'],
    pricing_model: 'freemium',
    pricing_detail: '무료 (월 300분) / Pro $16.99/월',
    korean_support: 'none',
    features: ['실시간 회의 전사', 'AI 회의 요약', '액션 아이템 자동 추출', '화상회의 플랫폼 통합(Zoom·Meet·Teams)', '발언자 자동 구분', 'CRM 연동'],
    platforms: ['web', 'mobile', 'desktop'],
    rating: 4.4,
    review_count: 520,
    alternatives: ['notta', 'clova-note', 'notebooklm'],
    is_featured: false,
    launched_at: '2018-02-01',
  },
];

// ─── TOOL UPDATES ─────────────────────────────────────────────────────────────
const toolUpdates = [
  // veo
  {
    tool_slug: 'veo',
    updated_at: '2024-05-14',
    title: 'Google Veo 1 공개 발표',
    changes: ['Google I/O 2024에서 첫 공개', '텍스트→고화질 영상 생성 기능 선보임', '1080p 이상 영상 출력 지원'],
    version: 'Veo 1',
  },
  {
    tool_slug: 'veo',
    updated_at: '2024-12-16',
    title: 'Veo 2 출시 및 VideoFX 통합',
    changes: ['물리 법칙 이해도 대폭 향상', '세부 지시 사항 준수 능력 개선', 'Google VideoFX 실험적 도구에 통합'],
    version: 'Veo 2',
  },
  {
    tool_slug: 'veo',
    updated_at: '2025-05-20',
    title: 'Veo 3 & Flow 출시 — 오디오 네이티브 지원',
    changes: ['오디오(효과음·대사·배경음)를 영상과 함께 네이티브 생성', 'Google Flow 창작 도구에 통합', 'MovieGenBench T2V 전체 지표 1위 달성'],
    version: 'Veo 3',
  },

  // deepseek
  {
    tool_slug: 'deepseek',
    updated_at: '2024-01-05',
    title: 'DeepSeek V2 출시',
    changes: ['Mixture-of-Experts 아키텍처 적용으로 효율 극대화', 'GPT-4-Turbo 수준 성능 달성', '오픈소스로 모델 가중치 공개'],
    version: 'V2',
  },
  {
    tool_slug: 'deepseek',
    updated_at: '2025-01-20',
    title: 'DeepSeek-R1 출시 — 전 세계 충격',
    changes: ['Chain-of-Thought 추론 능력으로 OpenAI o1 수준 달성', 'MIT 라이선스 완전 오픈소스 공개', '훈련 비용 대폭 절감으로 AI 업계에 파장'],
    version: 'R1',
  },
  {
    tool_slug: 'deepseek',
    updated_at: '2025-05-07',
    title: 'DeepSeek-Prover V2 & V3 출시',
    changes: ['수학 증명 특화 Prover V2 공개', 'V3-0324 버전 코딩·추론 성능 추가 개선', 'GitHub Stars 10만 돌파'],
    version: 'V3',
  },

  // mistral
  {
    tool_slug: 'mistral',
    updated_at: '2023-09-27',
    title: 'Mistral 7B 공개',
    changes: ['7B 파라미터로 Llama 2 13B 능가하는 성능', 'Apache 2.0 라이선스 완전 오픈소스', 'Sliding Window Attention 기술 적용'],
    version: '7B',
  },
  {
    tool_slug: 'mistral',
    updated_at: '2024-04-17',
    title: 'Mistral Large 및 Le Chat 정식 출시',
    changes: ['GPT-4급 성능의 Mistral Large API 출시', '무료 챗봇 Le Chat 공개', '€600M 시리즈 B 투자 유치'],
    version: 'Large',
  },
  {
    tool_slug: 'mistral',
    updated_at: '2025-02-01',
    title: 'Mistral Small 3 & Le Chat 업그레이드',
    changes: ['비용 효율적인 Mistral Small 3 출시', 'Le Chat에 검색·캔버스·이미지 생성 기능 추가', '유럽 AI 규제 준수 강화'],
    version: 'Small 3',
  },

  // pixverse
  {
    tool_slug: 'pixverse',
    updated_at: '2024-01-15',
    title: 'PixVerse v1 정식 출시',
    changes: ['텍스트→영상 생성 서비스 공개', '이미지→영상 변환 기능 제공', '무료 플랜으로 접근성 강화'],
    version: 'v1',
  },
  {
    tool_slug: 'pixverse',
    updated_at: '2024-08-01',
    title: 'PixVerse v2 — 고품질 업그레이드',
    changes: ['영상 품질 및 일관성 대폭 향상', '캐릭터 일관성 유지 기능 추가', '영상 확장(Extend) 기능 출시'],
    version: 'v2',
  },
  {
    tool_slug: 'pixverse',
    updated_at: '2025-03-01',
    title: 'PixVerse v4 — 한국어 지원 및 신기능',
    changes: ['한국어 포함 다국어 인터페이스 지원', '스타일 참조 기능 강화', '모바일 앱 정식 출시'],
    version: 'v4',
  },

  // spline
  {
    tool_slug: 'spline',
    updated_at: '2021-01-01',
    title: 'Spline 정식 출시',
    changes: ['브라우저 기반 3D 디자인 도구 출시', '실시간 협업 기능 기본 제공', '웹 임베드 코드 내보내기'],
    version: null,
  },
  {
    tool_slug: 'spline',
    updated_at: '2023-10-01',
    title: 'AI 기능 통합 — AI Generate',
    changes: ['텍스트 프롬프트로 3D 오브젝트 자동 생성', 'AI 텍스처 생성 기능 추가', 'Three.js 내보내기 지원'],
    version: null,
  },
  {
    tool_slug: 'spline',
    updated_at: '2024-09-01',
    title: '물리 시뮬레이션 및 인터랙션 강화',
    changes: ['향상된 물리 엔진으로 현실감 있는 시뮬레이션', 'React 컴포넌트로 내보내기 지원', '커뮤니티 템플릿 1만 개 돌파'],
    version: null,
  },

  // tabnine
  {
    tool_slug: 'tabnine',
    updated_at: '2019-07-01',
    title: 'Tabnine (구 Codota) AI 자동완성 출시',
    changes: ['딥러닝 기반 코드 자동완성 서비스 공개', 'VS Code·IntelliJ 등 주요 IDE 지원', '오픈소스 코드 학습 모델 적용'],
    version: null,
  },
  {
    tool_slug: 'tabnine',
    updated_at: '2023-03-01',
    title: 'Tabnine Chat 및 개인화 모델 출시',
    changes: ['채팅 인터페이스로 코드 설명·생성·리뷰 가능', '팀 코드베이스 학습 개인화 기능 추가', '엔터프라이즈 온프레미스 배포 옵션 출시'],
    version: null,
  },
  {
    tool_slug: 'tabnine',
    updated_at: '2024-06-01',
    title: 'AI 에이전트 및 멀티 LLM 지원',
    changes: ['GPT-4, Claude, Mistral 등 멀티 LLM 선택 기능', '코드 리뷰 자동화 에이전트 출시', 'GitHub Actions 통합 CI/CD 코드 검토'],
    version: null,
  },

  // otter-ai
  {
    tool_slug: 'otter-ai',
    updated_at: '2018-02-01',
    title: 'Otter.ai 출시',
    changes: ['AI 음성 전사 서비스 공개 베타', '발언자 자동 구분 기능 제공', '모바일 앱(iOS·Android) 출시'],
    version: null,
  },
  {
    tool_slug: 'otter-ai',
    updated_at: '2021-09-01',
    title: 'Zoom·Google Meet 통합',
    changes: ['Zoom 공식 파트너십 및 자동 봇 참여', 'Google Meet 통합 출시', '팀 채널 기능 추가'],
    version: null,
  },
  {
    tool_slug: 'otter-ai',
    updated_at: '2024-01-23',
    title: 'OtterPilot 2.0 — AI 요약 및 CRM 연동',
    changes: ['회의 요약 품질 대폭 향상', 'Salesforce·HubSpot CRM 자동 연동', '"Hey Otter" 음성 활성화 기능 추가'],
    version: 'OtterPilot 2.0',
  },

  // fish-audio
  {
    tool_slug: 'fish-audio',
    updated_at: '2023-08-01',
    title: 'Fish Audio 정식 출시',
    changes: ['AI 음성 클로닝 플랫폼 공개', '1분 샘플로 목소리 학습 가능', '8개 언어 지원 TTS'],
    version: null,
  },
  {
    tool_slug: 'fish-audio',
    updated_at: '2024-04-01',
    title: 'Fish Speech 1.4 출시',
    changes: ['오픈소스 TTS 모델 Fish Speech 공개', '음성 품질 및 자연스러움 대폭 향상', '실시간 스트리밍 생성 지원'],
    version: '1.4',
  },
  {
    tool_slug: 'fish-audio',
    updated_at: '2025-01-01',
    title: 'Fish Speech 1.5 — 감정 제어 기능 추가',
    changes: ['감정 표현 및 톤 세밀 제어 기능 추가', '배치 처리 성능 개선', 'API 응답 속도 50% 향상'],
    version: '1.5',
  },

  // play-ht
  {
    tool_slug: 'play-ht',
    updated_at: '2019-01-01',
    title: 'Play.ht 출시',
    changes: ['웹 기반 텍스트-음성 변환 서비스 시작', '주요 TTS 엔진 통합(Google·Amazon·IBM)', '워드프레스 플러그인 출시'],
    version: null,
  },
  {
    tool_slug: 'play-ht',
    updated_at: '2023-03-01',
    title: 'PlayHT 2.0 — 감정 표현 AI 목소리',
    changes: ['자체 개발 TTS 모델 PlayHT 2.0 출시', '감정·억양 세밀 제어 가능', '3초 목소리 클로닝 기능 추가'],
    version: '2.0',
  },
  {
    tool_slug: 'play-ht',
    updated_at: '2024-05-01',
    title: 'PlayHT 3.0 Turbo — 초저지연 스트리밍',
    changes: ['실시간 스트리밍 API 지연시간 대폭 단축', '900개+ 목소리 라이브러리 확장', '에이전트·콜봇용 실시간 대화 음성 지원'],
    version: '3.0',
  },

  // mubert
  {
    tool_slug: 'mubert',
    updated_at: '2017-01-01',
    title: 'Mubert 서비스 시작',
    changes: ['AI 생성 음악 스트리밍 플랫폼 출시', '제너레이티브 음악 실시간 합성 시스템 개발', '모바일 앱 출시'],
    version: null,
  },
  {
    tool_slug: 'mubert',
    updated_at: '2022-06-01',
    title: 'Mubert Render — 크리에이터용 출시',
    changes: ['유튜브·틱톡 크리에이터 대상 Mubert Render 출시', '영상 길이에 딱 맞는 음악 자동 편집', '로열티 프리 라이선스 명확화'],
    version: null,
  },
  {
    tool_slug: 'mubert',
    updated_at: '2023-09-01',
    title: 'Mubert API 및 아티스트 수익 공유',
    changes: ['기업·개발자 대상 Mubert API 출시', '아티스트 샘플 기여 수익 공유 시스템 도입', 'B2B 파트너십 확대'],
    version: null,
  },

  // qwen
  {
    tool_slug: 'qwen',
    updated_at: '2023-09-25',
    title: 'Qwen 1.0 공개',
    changes: ['알리바바 클라우드의 Qwen LLM 오픈소스 공개', '7B·14B 파라미터 모델 제공', '중국어 최적화 모델로 높은 성능'],
    version: '1.0',
  },
  {
    tool_slug: 'qwen',
    updated_at: '2024-09-18',
    title: 'Qwen 2.5 시리즈 출시',
    changes: ['코딩·수학·언어 이해 벤치마크 최상위 달성', 'Qwen2.5-Coder·Math 특화 모델 공개', '오픈소스 모델로 GPT-4o 수준 성능 달성'],
    version: '2.5',
  },
  {
    tool_slug: 'qwen',
    updated_at: '2025-01-29',
    title: 'QwQ-32B 및 Qwen2.5-VL 출시',
    changes: ['추론 특화 QwQ-32B 모델, DeepSeek-R1 수준 달성', 'Qwen2.5-VL 멀티모달 비전-언어 모델 공개', '128K 컨텍스트 윈도우 지원'],
    version: 'QwQ-32B',
  },

  // meta-ai
  {
    tool_slug: 'meta-ai',
    updated_at: '2023-09-27',
    title: 'Meta AI 첫 공개',
    changes: ['Meta Connect 2023에서 Meta AI 발표', 'WhatsApp·Messenger·Instagram에 통합', 'Llama 2 기반 AI 어시스턴트 출시'],
    version: null,
  },
  {
    tool_slug: 'meta-ai',
    updated_at: '2024-04-18',
    title: 'Meta AI 글로벌 출시 — Llama 3 기반',
    changes: ['Llama 3 모델로 업그레이드', 'meta.ai 독립 웹사이트 출시', 'AI 이미지 생성(Imagine) 기능 추가'],
    version: null,
  },
  {
    tool_slug: 'meta-ai',
    updated_at: '2025-04-01',
    title: 'Meta AI 앱 독립 출시',
    changes: ['Meta AI 전용 독립 앱 iOS·Android 출시', '실시간 인터넷 검색 기능 강화', 'Llama 4 모델 탑재로 성능 향상'],
    version: null,
  },

  // haiper
  {
    tool_slug: 'haiper',
    updated_at: '2024-02-01',
    title: 'Haiper 베타 출시',
    changes: ['DeepMind 출신 팀의 AI 영상 생성 서비스 공개', '텍스트·이미지 기반 영상 생성 지원', '무료 플랜으로 주 600 크레딧 제공'],
    version: null,
  },
  {
    tool_slug: 'haiper',
    updated_at: '2024-10-01',
    title: 'Haiper 2.0 — 고화질 영상 업그레이드',
    changes: ['영상 품질 및 세부 표현 대폭 향상', '8초 영상 생성 지원', '영상 리마스터링(화질 개선) 기능 추가'],
    version: '2.0',
  },
  {
    tool_slug: 'haiper',
    updated_at: '2025-01-15',
    title: 'Haiper 2.5 — 영상 편집 및 캐릭터 일관성',
    changes: ['멀티샷 캐릭터 일관성 유지 기능 추가', '영상 인페인팅 및 편집 기능 출시', 'API 제공 시작'],
    version: '2.5',
  },
];

async function main() {
  console.log(`🚀 ${tools.length}개 툴 삽입 시작...`);
  const { data, error } = await supabase.from('tools').insert(tools).select('slug');
  if (error) {
    console.error('❌ tools 삽입 에러:', error.message);
    console.error('상세:', JSON.stringify(error, null, 2));
    return;
  }
  console.log(`✅ ${data.length}개 툴 삽입 완료:`, data.map(t => t.slug));

  console.log(`\n🚀 ${toolUpdates.length}개 tool_updates 삽입 시작...`);
  const { data: updates, error: updError } = await supabase.from('tool_updates').insert(toolUpdates).select('tool_slug, title');
  if (updError) {
    console.error('❌ tool_updates 삽입 에러:', updError.message);
    console.error('상세:', JSON.stringify(updError, null, 2));
    return;
  }
  console.log(`✅ ${updates.length}개 tool_updates 삽입 완료`);
}

main();
