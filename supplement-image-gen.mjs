import { createClient } from './node_modules/@supabase/supabase-js/dist/index.mjs';

const supabase = createClient(
  'https://fmjwwyygqseownpazypt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
);

const tools = [
  // ─── Civitai ───
  {
    name: 'Civitai',
    slug: 'civitai',
    tagline: 'AI 아트 모델과 이미지를 공유하는 최대 커뮤니티 플랫폼',
    description: 'Civitai는 Stable Diffusion 기반의 AI 이미지 생성 모델(체크포인트, LoRA, Textual Inversion 등)을 공유하고 탐색할 수 있는 대형 커뮤니티 플랫폼이다. 수백만 개의 모델과 이미지가 공유되며 웹 기반 이미지 생성 기능도 제공한다. 크리에이터들이 자신의 모델을 배포하고 피드백을 주고받는 생태계 역할을 한다.',
    url: 'https://civitai.com',
    logo_url: '/logos/civitai.png',
    categories: ['image-generation'],
    pricing_model: 'freemium',
    pricing_detail: '무료 기본 사용, Buzz(크레딧) 구매로 고급 생성 가능',
    korean_support: 'partial',
    features: [
      'Stable Diffusion 모델 공유 및 다운로드',
      '웹 기반 AI 이미지 생성 (Buzz 크레딧)',
      'LoRA, 체크포인트, Textual Inversion 등 다양한 모델 지원',
      '커뮤니티 이미지 갤러리 및 피드',
      '모델 평가 및 리뷰 시스템',
      '이미지 생성 파라미터 공유',
    ],
    platforms: ['web'],
    rating: 4.6,
    review_count: 3200,
    alternatives: ['hugging-face', 'stable-diffusion', 'tensor-art'],
    is_featured: false,
    launched_at: '2022-11-01',
  },

  // ─── Clipdrop ───
  {
    name: 'Clipdrop',
    slug: 'clipdrop',
    tagline: 'Stability AI의 AI 이미지 편집 및 생성 도구 모음',
    description: 'Clipdrop은 Stability AI가 운영하는 AI 기반 이미지 편집 플랫폼으로, 배경 제거, 이미지 업스케일링, 인페인팅, 텍스트-이미지 생성 등 다양한 도구를 제공한다. Stable Diffusion 기술을 기반으로 빠르고 고품질의 이미지 처리가 가능하다. API를 통해 개발자들도 기능을 활용할 수 있다.',
    url: 'https://clipdrop.co',
    logo_url: '/logos/clipdrop.png',
    categories: ['image-generation'],
    pricing_model: 'freemium',
    pricing_detail: '일부 기능 무료, Pro 구독 월 $13부터',
    korean_support: 'none',
    features: [
      'AI 배경 제거 (Remove Background)',
      '이미지 업스케일링 및 해상도 향상',
      'AI 인페인팅 및 오브젝트 제거',
      'Stable Diffusion 기반 텍스트-이미지 생성',
      '이미지 리라이트 (스타일 변환)',
      'API 제공으로 앱 통합 가능',
      '조명 스튜디오 기능',
    ],
    platforms: ['web', 'api'],
    rating: 4.4,
    review_count: 1800,
    alternatives: ['adobe-photoshop', 'adobe-firefly', 'stable-diffusion'],
    is_featured: false,
    launched_at: '2021-06-01',
  },

  // ─── NightCafe ───
  {
    name: 'NightCafe',
    slug: 'nightcafe',
    tagline: '다양한 AI 모델로 예술적 이미지를 만드는 크리에이티브 플랫폼',
    description: 'NightCafe Creator는 Stable Diffusion, DALL-E, SDXL 등 여러 AI 모델을 지원하는 온라인 AI 아트 생성 플랫폼이다. 크레딧 기반의 무료 생성과 활발한 커뮤니티 기능을 갖추고 있으며, 이미지 대회나 챌린지 같은 소셜 기능이 특징이다. 초보자도 쉽게 접근할 수 있는 직관적인 인터페이스를 제공한다.',
    url: 'https://nightcafe.studio',
    logo_url: '/logos/nightcafe.png',
    categories: ['image-generation'],
    pricing_model: 'freemium',
    pricing_detail: '매일 무료 크레딧 제공, 구독 플랜 월 $5.99부터',
    korean_support: 'none',
    features: [
      'Stable Diffusion, DALL-E 등 다중 AI 모델 지원',
      '텍스트-이미지, 이미지-이미지 생성',
      '아트 스타일 프리셋 다양',
      '커뮤니티 갤러리 및 이미지 챌린지',
      '매일 무료 크레딧 제공',
      '출력 해상도 업스케일링',
    ],
    platforms: ['web', 'mobile'],
    rating: 4.3,
    review_count: 2100,
    alternatives: ['midjourney', 'stable-diffusion', 'mage-space'],
    is_featured: false,
    launched_at: '2021-10-01',
  },

  // ─── Artbreeder ───
  {
    name: 'Artbreeder',
    slug: 'artbreeder',
    tagline: 'AI 이미지를 합성하고 변형하는 협업 아트 플랫폼',
    description: 'Artbreeder는 GAN(생성적 적대 신경망) 기술을 활용해 이미지를 혼합하고 변형하는 독특한 AI 아트 플랫폼이다. 초상화, 풍경, 캐릭터 등 다양한 카테고리에서 이미지를 교배(breed)해 새로운 이미지를 만들 수 있다. 전 세계 크리에이터들과 이미지를 공유하고 협업할 수 있는 커뮤니티 공간도 제공한다.',
    url: 'https://www.artbreeder.com',
    logo_url: '/logos/artbreeder.png',
    categories: ['image-generation'],
    pricing_model: 'freemium',
    pricing_detail: '무료 기본 사용, Pro 구독 월 $8.99부터',
    korean_support: 'none',
    features: [
      'GAN 기반 이미지 혼합(Breeding) 기능',
      '초상화, 풍경, 캐릭터 등 다양한 카테고리',
      '슬라이더로 이미지 속성 세밀하게 조정',
      '텍스트 프롬프트로 이미지 생성',
      '콜라주 기능으로 요소 조합',
      '커뮤니티 갤러리 및 이미지 공유',
    ],
    platforms: ['web'],
    rating: 4.1,
    review_count: 1400,
    alternatives: ['midjourney', 'stable-diffusion', 'civitai'],
    is_featured: false,
    launched_at: '2019-07-01',
  },

  // ─── SeaArt ───
  {
    name: 'SeaArt',
    slug: 'seaart',
    tagline: '무료 AI 이미지·영상 생성과 모델 공유 커뮤니티',
    description: 'SeaArt는 AI 이미지 및 영상 생성 기능과 모델 공유 커뮤니티를 결합한 플랫폼이다. 다양한 스타일의 AI 모델을 무료로 사용할 수 있으며, 애니메이션, 실사, 판타지 등 폭넓은 장르를 지원한다. 자체 ComfyUI 워크플로우 기반의 앱 생태계를 통해 고급 이미지 생성 파이프라인을 웹에서 손쉽게 활용할 수 있다.',
    url: 'https://www.seaart.ai',
    logo_url: '/logos/seaart.png',
    categories: ['image-generation'],
    pricing_model: 'freemium',
    pricing_detail: '무료 크레딧 제공, Pro 구독으로 무제한 생성',
    korean_support: 'partial',
    features: [
      '다양한 AI 모델 무료 사용 (애니메이션, 실사 등)',
      'ComfyUI 기반 워크플로우 앱 생태계',
      'AI 영상 생성 지원 (Kling, Sora 등)',
      '모델 허브 및 커뮤니티 공유',
      '이미지 업스케일링 및 후처리',
      '텍스트-이미지, 이미지-이미지 생성',
    ],
    platforms: ['web'],
    rating: 4.2,
    review_count: 980,
    alternatives: ['civitai', 'stable-diffusion', 'tensor-art'],
    is_featured: false,
    launched_at: '2023-03-01',
  },

  // ─── Dzine.ai ───
  {
    name: 'Dzine',
    slug: 'dzine-ai',
    tagline: '500만 크리에이터가 선택한 올인원 AI 이미지·영상 스튜디오',
    description: 'Dzine(구 Stylar.ai)은 AI 이미지 생성, 영상 제작, 아바타 생성, 광고 제작 등을 하나의 플랫폼에서 제공하는 올인원 비주얼 스튜디오다. 500만 명 이상의 크리에이터가 사용하며, 세밀한 컨트롤이 가능한 AI 그래픽 디자인 편집기를 특징으로 한다. 립싱크 영상, 제품 광고, AI 스토리 영상 등 다양한 콘텐츠 제작이 가능하다.',
    url: 'https://www.dzine.ai',
    logo_url: '/logos/dzine-ai.png',
    categories: ['image-generation', 'video-generation'],
    pricing_model: 'freemium',
    pricing_detail: '무료 플랜 제공, Pro 구독 월 $14.99부터',
    korean_support: 'none',
    features: [
      'AI 이미지 생성 및 편집 (Chat Editor)',
      'AI 영상 생성 및 스토리 비디오 메이커',
      '립싱크 AI 아바타 생성',
      '제품 사진 및 광고 영상 자동 제작',
      'AI 캐릭터 생성',
      'IP 캐릭터 커스터마이징',
      'ControlNet 기반 정밀 이미지 제어',
    ],
    platforms: ['web'],
    rating: 4.3,
    review_count: 1200,
    alternatives: ['canva-ai', 'adobe-firefly', 'ideogram'],
    is_featured: false,
    launched_at: '2023-01-01',
  },

  // ─── Mage.space ───
  {
    name: 'Mage',
    slug: 'mage-space',
    tagline: '무료·무제한 AI 이미지 및 영상 생성기 (NSFW 지원)',
    description: 'Mage는 Stable Diffusion, Flux, Wan 등 최신 AI 모델을 무료로 무제한 사용할 수 있는 AI 이미지·영상 생성 플랫폼이다. LoRA, ControlNet, 업스케일링 등 고급 기능을 웹에서 제공하며, 검열 없는 자유로운 창작이 가능한 것이 특징이다. Midjourney와 DALL-E의 대안으로 인기를 얻고 있다.',
    url: 'https://www.mage.space',
    logo_url: '/logos/mage-space.png',
    categories: ['image-generation'],
    pricing_model: 'freemium',
    pricing_detail: '무료 무제한 생성 (표준 속도), Pro 구독으로 빠른 생성',
    korean_support: 'none',
    features: [
      'Stable Diffusion, Flux 등 다양한 최신 모델 지원',
      '무료 무제한 AI 이미지 생성',
      'AI 영상 생성 (Wan, Kling 모델)',
      'LoRA, ControlNet 고급 기능 지원',
      'AI 이미지 업스케일링',
      'GIF 및 애니메이션 생성',
      '검열 없는 자유로운 창작',
    ],
    platforms: ['web'],
    rating: 4.2,
    review_count: 850,
    alternatives: ['stable-diffusion', 'midjourney', 'nightcafe'],
    is_featured: false,
    launched_at: '2022-08-01',
  },

  // ─── Bing Image Creator ───
  {
    name: 'Bing Image Creator',
    slug: 'bing-image-creator',
    tagline: 'Microsoft의 무료 DALL-E 기반 AI 이미지 생성기',
    description: 'Bing Image Creator는 Microsoft가 DALL-E 3를 기반으로 제공하는 무료 AI 이미지 생성 서비스다. Bing 검색, Edge 브라우저, Microsoft Copilot에 통합되어 있어 별도 가입 없이 Microsoft 계정만으로 쉽게 이용할 수 있다. 하루 무료 생성 횟수가 제공되며 고품질의 사실적 이미지를 생성한다.',
    url: 'https://www.bing.com/images/create',
    logo_url: '/logos/bing-image-creator.png',
    categories: ['image-generation'],
    pricing_model: 'free',
    pricing_detail: '완전 무료 (Microsoft 계정 필요), 빠른 생성 부스트 일정 횟수 제공',
    korean_support: 'full',
    features: [
      'DALL-E 3 기반 고품질 이미지 생성',
      'Microsoft 계정으로 무료 사용',
      'Bing, Edge, Copilot에 통합',
      '한국어 프롬프트 완벽 지원',
      'AI 영상 생성 기능 (모바일)',
      '생성된 이미지 즉시 다운로드',
    ],
    platforms: ['web', 'mobile'],
    rating: 4.3,
    review_count: 3800,
    alternatives: ['dall-e', 'midjourney', 'imagefx'],
    is_featured: false,
    launched_at: '2023-10-01',
  },
];

const { data, error } = await supabase.from('tools').insert(tools).select();
if (error) {
  console.error('❌ tools 삽입 실패:', error.message);
  process.exit(1);
} else {
  console.log(`✅ ${data.length}개 삽입:`, data.map(t => t.slug));
}

// ─── tool_updates ───
const updates = [
  // civitai
  {
    tool_slug: 'civitai',
    updated_at: '2022-11-01',
    title: 'Civitai 서비스 출시',
    changes: ['Stable Diffusion 모델 공유 플랫폼 베타 오픈', 'AI 아트 커뮤니티 구축 시작', '무료 모델 다운로드 지원'],
    version: null,
  },
  {
    tool_slug: 'civitai',
    updated_at: '2023-07-01',
    title: 'Buzz 크레딧 시스템 도입',
    changes: ['웹 기반 이미지 생성 기능 추가', 'Buzz 가상 화폐 시스템 도입', '크리에이터 수익화 프로그램 시작'],
    version: null,
  },
  {
    tool_slug: 'civitai',
    updated_at: '2024-03-01',
    title: 'Flux 모델 지원 및 동영상 생성 추가',
    changes: ['Flux 이미지 생성 모델 통합', '온사이트 AI 영상 생성 기능 추가', '모델 평가 및 큐레이션 시스템 개선'],
    version: null,
  },

  // clipdrop
  {
    tool_slug: 'clipdrop',
    updated_at: '2021-06-01',
    title: 'Clipdrop 앱 출시',
    changes: ['배경 제거 및 오브젝트 추출 기능 출시', '모바일 AR 캡처 기능 제공', 'iOS/Android 앱 공개'],
    version: null,
  },
  {
    tool_slug: 'clipdrop',
    updated_at: '2023-03-01',
    title: 'Stability AI 인수 및 API 출시',
    changes: ['Stability AI에 인수됨', 'Stable Diffusion 기반 텍스트-이미지 생성 추가', 'Clipdrop API 공식 출시'],
    version: null,
  },
  {
    tool_slug: 'clipdrop',
    updated_at: '2024-01-15',
    title: '조명 스튜디오 및 리라이트 기능 추가',
    changes: ['AI 조명 스튜디오 기능 출시', '이미지 리라이트(스타일 변환) 기능 추가', 'SDXL 기반 고해상도 생성 지원'],
    version: null,
  },

  // nightcafe
  {
    tool_slug: 'nightcafe',
    updated_at: '2021-10-01',
    title: 'NightCafe Creator 정식 출시',
    changes: ['VQGAN+CLIP 기반 AI 아트 생성 서비스 오픈', '무료 크레딧 시스템 도입', '커뮤니티 갤러리 기능 제공'],
    version: null,
  },
  {
    tool_slug: 'nightcafe',
    updated_at: '2022-09-01',
    title: 'Stable Diffusion 지원 추가',
    changes: ['Stable Diffusion 모델 통합', 'DALL-E 2 지원 추가', '이미지 챌린지 대회 기능 출시'],
    version: null,
  },
  {
    tool_slug: 'nightcafe',
    updated_at: '2024-01-01',
    title: 'SDXL 및 DALL-E 3 지원',
    changes: ['Stable Diffusion XL 지원', 'DALL-E 3 통합', '모바일 앱 개선 및 UI 업데이트'],
    version: null,
  },

  // artbreeder
  {
    tool_slug: 'artbreeder',
    updated_at: '2019-07-01',
    title: 'Artbreeder 공개 출시',
    changes: ['GAN 기반 이미지 혼합 서비스 공개', '초상화, 풍경 카테고리 지원', '커뮤니티 이미지 공유 기능'],
    version: null,
  },
  {
    tool_slug: 'artbreeder',
    updated_at: '2022-11-01',
    title: '콜라주 및 Splicer 기능 추가',
    changes: ['이미지 요소 조합 콜라주 기능 출시', 'Splicer 도구로 여러 이미지 혼합', '애니메이션 캐릭터 카테고리 추가'],
    version: null,
  },
  {
    tool_slug: 'artbreeder',
    updated_at: '2024-06-01',
    title: 'Chat & Create 기능 출시',
    changes: ['텍스트 프롬프트 기반 이미지 생성 추가', 'AI 채팅으로 이미지 수정 가능', '고해상도 이미지 다운로드 지원'],
    version: null,
  },

  // seaart
  {
    tool_slug: 'seaart',
    updated_at: '2023-03-01',
    title: 'SeaArt 플랫폼 출시',
    changes: ['AI 이미지 생성 및 모델 공유 서비스 오픈', '다양한 Stable Diffusion 모델 무료 제공', '커뮤니티 갤러리 기능 출시'],
    version: null,
  },
  {
    tool_slug: 'seaart',
    updated_at: '2024-01-01',
    title: 'ComfyUI 워크플로우 앱 생태계 출시',
    changes: ['ComfyUI 기반 워크플로우 앱 마켓 오픈', 'AI 영상 생성 기능 추가', 'Flux 모델 지원'],
    version: null,
  },
  {
    tool_slug: 'seaart',
    updated_at: '2025-01-01',
    title: '자체 AI 모델 시리즈 출시',
    changes: ['SeaArt Ultra 3.0 자체 이미지 모델 출시', 'SeaArt Film 영상 모델 추가', 'Nano Banana 생성 모델 공개'],
    version: null,
  },

  // dzine-ai
  {
    tool_slug: 'dzine-ai',
    updated_at: '2023-01-01',
    title: 'Stylar.ai 서비스 출시',
    changes: ['AI 이미지 생성 및 스타일 제어 도구 출시', 'ControlNet 기반 정밀 편집 기능 제공', '5,000만+ 크리에이터 기반 구축 시작'],
    version: null,
  },
  {
    tool_slug: 'dzine-ai',
    updated_at: '2024-06-01',
    title: 'AI 영상 생성 기능 추가',
    changes: ['텍스트-영상, 이미지-영상 생성 기능 출시', 'AI 아바타 립싱크 기능 추가', '제품 광고 영상 자동 제작 도구 출시'],
    version: null,
  },
  {
    tool_slug: 'dzine-ai',
    updated_at: '2025-01-01',
    title: 'Dzine으로 리브랜딩 (구 Stylar.ai)',
    changes: ['Stylar.ai에서 Dzine으로 브랜드명 변경', '올인원 비주얼 스튜디오로 포지셔닝 강화', '500만+ 사용자 달성'],
    version: null,
  },

  // mage-space
  {
    tool_slug: 'mage-space',
    updated_at: '2022-08-01',
    title: 'Mage.space 출시',
    changes: ['Stable Diffusion 기반 무료 이미지 생성 서비스 공개', '무제한 무료 생성 정책 도입', '검열 없는 자유로운 창작 환경 제공'],
    version: null,
  },
  {
    tool_slug: 'mage-space',
    updated_at: '2023-06-01',
    title: 'SDXL 및 ControlNet 지원',
    changes: ['Stable Diffusion XL 모델 통합', 'ControlNet 고급 기능 추가', '이미지 업스케일링 도구 출시'],
    version: null,
  },
  {
    tool_slug: 'mage-space',
    updated_at: '2024-12-01',
    title: 'Flux 및 AI 영상 생성 추가',
    changes: ['Flux 이미지 생성 모델 지원', 'Wan, Kling 기반 AI 영상 생성 추가', 'GIF 및 애니메이션 생성 기능 출시'],
    version: null,
  },

  // bing-image-creator
  {
    tool_slug: 'bing-image-creator',
    updated_at: '2023-03-21',
    title: 'Bing Image Creator 출시',
    changes: ['DALL-E 기반 AI 이미지 생성 서비스 공개', 'Bing 검색 및 Edge 브라우저 통합', '무료 부스트 크레딧 시스템 도입'],
    version: null,
  },
  {
    tool_slug: 'bing-image-creator',
    updated_at: '2023-10-01',
    title: 'DALL-E 3로 업그레이드',
    changes: ['DALL-E 3 모델로 업그레이드', '이미지 품질 및 프롬프트 이해도 대폭 향상', 'Microsoft Copilot 통합'],
    version: null,
  },
  {
    tool_slug: 'bing-image-creator',
    updated_at: '2024-10-01',
    title: 'AI 영상 생성 기능 추가 (모바일)',
    changes: ['AI 영상 생성 기능 모바일 앱에 추가', '최대 8초 영상 생성 지원', '다양한 비율(9:16, 16:9) 지원'],
    version: null,
  },
];

const { error: e2 } = await supabase.from('tool_updates').insert(updates);
if (e2) console.error('❌ updates 삽입 실패:', e2.message);
else console.log(`✅ updates ${updates.length}건 삽입 완료`);
