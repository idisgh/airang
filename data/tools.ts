export interface Tool {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  url: string
  logoUrl: string
  categories: string[]  // category slugs
  pricingModel: 'free' | 'freemium' | 'paid' | 'enterprise'
  pricingDetail: string
  koreanSupport: 'full' | 'partial' | 'none'
  features: string[]
  platforms: string[]
  rating: number
  reviewCount: number
  alternatives: string[]  // tool slugs
  isFeatured: boolean
  launchedAt: string
}

export const tools: Tool[] = [
  {
    id: '1', name: 'ChatGPT', slug: 'chatgpt',
    tagline: 'OpenAI의 대화형 AI. 글쓰기, 코딩, 분석을 하나로.',
    description: 'ChatGPT는 OpenAI가 개발한 대규모 언어 모델 기반 AI 챗봇입니다. 자연어로 대화하며 글쓰기, 코딩, 번역, 요약, 분석 등 다양한 작업을 수행합니다. GPT-4o, GPT-4.5 등 최신 모델을 지원하며 이미지 생성(DALL-E), 웹 브라우징, 코드 실행 기능도 제공합니다.',
    url: 'https://chat.openai.com', logoUrl: '/logos/chatgpt.svg',
    categories: ['chatbot', 'writing', 'coding'],
    pricingModel: 'freemium', pricingDetail: '무료 / Plus $20/월 / Pro $200/월',
    koreanSupport: 'full', features: ['대화형 AI', '이미지 생성', '코드 실행', '웹 브라우징', '파일 분석', 'GPT Store'],
    platforms: ['web', 'ios', 'android', 'desktop', 'api'], rating: 4.8, reviewCount: 1250,
    alternatives: ['claude', 'gemini', 'perplexity', 'copilot'], isFeatured: true, launchedAt: '2022-11-30',
  },
  {
    id: '2', name: 'Claude', slug: 'claude',
    tagline: 'Anthropic의 AI. 장문 분석과 코딩에 강점.',
    description: 'Claude는 Anthropic이 개발한 AI 어시스턴트입니다. 200K 토큰의 긴 컨텍스트 윈도우로 장문서 분석에 탁월하며, 코딩과 논리적 추론에서 높은 성능을 보입니다. Claude 3.5 Sonnet, Opus 등 다양한 모델을 제공합니다.',
    url: 'https://claude.ai', logoUrl: '/logos/claude.svg',
    categories: ['chatbot', 'writing', 'coding'],
    pricingModel: 'freemium', pricingDetail: '무료 / Pro $20/월 / Team $25/월',
    koreanSupport: 'partial', features: ['200K 컨텍스트', '코드 분석', 'Artifacts', 'Projects', 'MCP 연동', 'Computer Use'],
    platforms: ['web', 'ios', 'android', 'api'], rating: 4.7, reviewCount: 890,
    alternatives: ['chatgpt', 'gemini', 'perplexity'], isFeatured: true, launchedAt: '2023-03-14',
  },
  {
    id: '3', name: 'Gemini', slug: 'gemini',
    tagline: 'Google의 멀티모달 AI. 구글 서비스와 완벽 통합.',
    description: 'Gemini는 Google DeepMind가 개발한 멀티모달 AI입니다. 텍스트, 이미지, 오디오, 비디오를 모두 이해하고 생성할 수 있으며, Gmail, Docs, Drive 등 Google Workspace와 깊이 통합됩니다.',
    url: 'https://gemini.google.com', logoUrl: '/logos/gemini.svg',
    categories: ['chatbot', 'writing', 'image-generation'],
    pricingModel: 'freemium', pricingDetail: '무료 / Advanced $20/월 (Google One 포함)',
    koreanSupport: 'full', features: ['멀티모달', 'Google 연동', '이미지 생성', '코드 실행', 'Deep Research', 'Gems'],
    platforms: ['web', 'ios', 'android', 'api'], rating: 4.5, reviewCount: 670,
    alternatives: ['chatgpt', 'claude', 'perplexity'], isFeatured: true, launchedAt: '2023-12-06',
  },
  {
    id: '4', name: 'Midjourney', slug: 'midjourney',
    tagline: '최고 품질의 AI 이미지 생성. 아티스트의 선택.',
    description: 'Midjourney는 텍스트 프롬프트로 고품질 이미지를 생성하는 AI 도구입니다. 예술적 스타일, 사실적 이미지, 일러스트 등 다양한 스타일을 지원하며, Discord와 웹 인터페이스를 통해 사용합니다.',
    url: 'https://midjourney.com', logoUrl: '/logos/midjourney.svg',
    categories: ['image-generation', 'design'],
    pricingModel: 'paid', pricingDetail: 'Basic $10/월 / Standard $30/월 / Pro $60/월',
    koreanSupport: 'none', features: ['텍스트→이미지', '이미지 편집', '스타일 커스텀', '업스케일', 'Vary', 'Pan/Zoom'],
    platforms: ['web'], rating: 4.7, reviewCount: 980,
    alternatives: ['dall-e', 'stable-diffusion', 'leonardo-ai', 'ideogram'], isFeatured: true, launchedAt: '2022-07-12',
  },
  {
    id: '5', name: 'Perplexity', slug: 'perplexity',
    tagline: 'AI 검색 엔진. 출처가 명확한 답변.',
    description: 'Perplexity는 AI 기반 검색 엔진으로, 질문에 대해 실시간 웹 검색 결과를 기반으로 출처가 명확한 답변을 제공합니다. 학술 연구, 팩트 체크, 심층 리서치에 유용합니다.',
    url: 'https://perplexity.ai', logoUrl: '/logos/perplexity.svg',
    categories: ['chatbot', 'productivity'],
    pricingModel: 'freemium', pricingDetail: '무료 / Pro $20/월',
    koreanSupport: 'partial', features: ['AI 검색', '출처 표시', 'Focus 모드', 'Collections', 'Pro Search', 'API'],
    platforms: ['web', 'ios', 'android', 'api'], rating: 4.6, reviewCount: 540,
    alternatives: ['chatgpt', 'gemini', 'you-com'], isFeatured: true, launchedAt: '2022-12-07',
  },
  {
    id: '6', name: 'DALL-E 3', slug: 'dall-e',
    tagline: 'OpenAI의 이미지 생성 AI. ChatGPT에 내장.',
    description: 'DALL-E 3는 OpenAI의 최신 이미지 생성 모델로, 텍스트 프롬프트를 정확히 이해하고 고품질 이미지를 생성합니다. ChatGPT Plus에 내장되어 대화형으로 이미지를 생성하고 수정할 수 있습니다.',
    url: 'https://openai.com/dall-e-3', logoUrl: '/logos/dalle.svg',
    categories: ['image-generation'],
    pricingModel: 'freemium', pricingDetail: 'ChatGPT 무료 (제한) / Plus $20/월 / API 사용량 기반',
    koreanSupport: 'full', features: ['텍스트→이미지', 'ChatGPT 통합', '인페인팅', '아웃페인팅', 'API'],
    platforms: ['web', 'api'], rating: 4.4, reviewCount: 450,
    alternatives: ['midjourney', 'stable-diffusion', 'leonardo-ai'], isFeatured: false, launchedAt: '2023-10-03',
  },
  {
    id: '7', name: 'Cursor', slug: 'cursor',
    tagline: 'AI 코드 에디터. 코딩의 미래를 체험하세요.',
    description: 'Cursor는 VS Code 기반의 AI 코드 에디터입니다. AI가 코드를 자동 완성하고, 수정하고, 설명하며, 전체 프로젝트 맥락을 이해합니다. Tab 자동완성, Chat, Composer 등의 기능으로 개발 생산성을 크게 향상시킵니다.',
    url: 'https://cursor.com', logoUrl: '/logos/cursor.svg',
    categories: ['coding'],
    pricingModel: 'freemium', pricingDetail: '무료 (제한) / Pro $20/월 / Business $40/월',
    koreanSupport: 'partial', features: ['AI 코드 완성', 'AI Chat', 'Composer', '코드베이스 이해', '멀티모델 지원', 'Codebase indexing'],
    platforms: ['desktop'], rating: 4.8, reviewCount: 780,
    alternatives: ['github-copilot', 'windsurf', 'bolt-new'], isFeatured: true, launchedAt: '2023-03-01',
  },
  {
    id: '8', name: 'GitHub Copilot', slug: 'github-copilot',
    tagline: 'GitHub의 AI 페어 프로그래머. 코드를 자동으로 완성.',
    description: 'GitHub Copilot은 OpenAI와 GitHub이 공동 개발한 AI 코딩 어시스턴트입니다. VS Code, JetBrains 등 주요 IDE에서 코드 자동 완성, 함수 생성, 테스트 작성 등을 지원합니다.',
    url: 'https://github.com/features/copilot', logoUrl: '/logos/copilot.svg',
    categories: ['coding'],
    pricingModel: 'freemium', pricingDetail: '무료 (학생/오픈소스) / Individual $10/월 / Business $19/월',
    koreanSupport: 'partial', features: ['코드 자동완성', 'Chat', 'CLI 지원', '멀티 IDE', 'PR 요약', 'Workspace'],
    platforms: ['desktop', 'web'], rating: 4.5, reviewCount: 650,
    alternatives: ['cursor', 'windsurf', 'tabnine'], isFeatured: false, launchedAt: '2021-06-29',
  },
  {
    id: '9', name: 'Notion AI', slug: 'notion-ai',
    tagline: 'Notion에 내장된 AI. 문서 작성과 정리를 자동화.',
    description: 'Notion AI는 Notion 워크스페이스에 내장된 AI 어시스턴트입니다. 문서 요약, 글쓰기, 번역, 브레인스토밍, 액션 아이템 추출 등을 Notion 안에서 바로 수행합니다.',
    url: 'https://notion.so/product/ai', logoUrl: '/logos/notion.svg',
    categories: ['writing', 'productivity'],
    pricingModel: 'paid', pricingDetail: 'AI 애드온 $10/월 (Notion 구독 별도)',
    koreanSupport: 'full', features: ['문서 요약', '글쓰기 보조', '번역', '데이터베이스 자동화', 'Q&A', '커넥터'],
    platforms: ['web', 'desktop', 'ios', 'android'], rating: 4.3, reviewCount: 420,
    alternatives: ['chatgpt', 'jasper', 'writesonic'], isFeatured: false, launchedAt: '2023-02-22',
  },
  {
    id: '10', name: 'Jasper', slug: 'jasper',
    tagline: '마케팅 전문 AI. 브랜드 톤에 맞는 콘텐츠 생성.',
    description: 'Jasper는 마케팅 콘텐츠 생성에 특화된 AI 플랫폼입니다. 블로그, 소셜 미디어, 광고 카피, 이메일 등을 브랜드 보이스에 맞춰 자동 생성합니다. 팀 협업과 워크플로우 기능도 제공합니다.',
    url: 'https://jasper.ai', logoUrl: '/logos/jasper.svg',
    categories: ['writing', 'marketing'],
    pricingModel: 'paid', pricingDetail: 'Creator $49/월 / Pro $69/월 / Business 문의',
    koreanSupport: 'partial', features: ['마케팅 카피', '브랜드 보이스', '템플릿', '팀 협업', 'AI Art', '캠페인 관리'],
    platforms: ['web', 'api'], rating: 4.2, reviewCount: 380,
    alternatives: ['copy-ai', 'writesonic', 'rytr'], isFeatured: false, launchedAt: '2021-01-01',
  },
  {
    id: '11', name: 'Stable Diffusion', slug: 'stable-diffusion',
    tagline: '오픈소스 이미지 생성 AI. 로컬에서 무료 사용.',
    description: 'Stable Diffusion은 Stability AI가 개발한 오픈소스 이미지 생성 모델입니다. 로컬 PC에서 무료로 사용 가능하며, ComfyUI, Automatic1111 등 다양한 인터페이스를 지원합니다. SDXL, SD3 등 최신 모델을 사용할 수 있습니다.',
    url: 'https://stability.ai', logoUrl: '/logos/stable-diffusion.svg',
    categories: ['image-generation', 'design'],
    pricingModel: 'free', pricingDetail: '오픈소스 무료 / API 사용량 기반',
    koreanSupport: 'none', features: ['오픈소스', '로컬 실행', '커스텀 모델', 'LoRA', 'ControlNet', 'API'],
    platforms: ['desktop', 'api'], rating: 4.5, reviewCount: 720,
    alternatives: ['midjourney', 'dall-e', 'leonardo-ai'], isFeatured: false, launchedAt: '2022-08-22',
  },
  {
    id: '12', name: 'Runway', slug: 'runway',
    tagline: 'AI 영상 생성의 선두주자. Gen-3 Alpha로 영상 제작.',
    description: 'Runway는 AI 기반 영상 생성 및 편집 플랫폼입니다. Gen-3 Alpha 모델로 텍스트/이미지에서 영상을 생성하고, 배경 제거, 모션 브러시 등 다양한 AI 편집 도구를 제공합니다.',
    url: 'https://runwayml.com', logoUrl: '/logos/runway.svg',
    categories: ['video', 'image-generation'],
    pricingModel: 'freemium', pricingDetail: '무료 (125 크레딧) / Standard $12/월 / Pro $28/월',
    koreanSupport: 'none', features: ['텍스트→영상', '이미지→영상', '배경 제거', '모션 브러시', '인페인팅', 'API'],
    platforms: ['web', 'api'], rating: 4.4, reviewCount: 390,
    alternatives: ['pika', 'kling', 'sora'], isFeatured: true, launchedAt: '2018-01-01',
  },
  {
    id: '13', name: 'Suno', slug: 'suno',
    tagline: 'AI로 노래를 만들어보세요. 가사, 멜로디, 보컬까지.',
    description: 'Suno는 텍스트 프롬프트로 완성된 노래를 생성하는 AI 음악 플랫폼입니다. 가사 작성, 멜로디 생성, 보컬 합성을 모두 자동으로 처리하며, 다양한 장르와 스타일을 지원합니다.',
    url: 'https://suno.com', logoUrl: '/logos/suno.svg',
    categories: ['music'],
    pricingModel: 'freemium', pricingDetail: '무료 (10곡/일) / Pro $10/월 / Premier $30/월',
    koreanSupport: 'partial', features: ['AI 작곡', '가사 생성', '보컬 합성', '다양한 장르', '커버 생성', '상업적 사용권'],
    platforms: ['web', 'ios', 'android'], rating: 4.6, reviewCount: 510,
    alternatives: ['udio', 'soundraw', 'mubert'], isFeatured: true, launchedAt: '2023-09-01',
  },
  {
    id: '14', name: 'Canva AI', slug: 'canva-ai',
    tagline: '디자인 플랫폼에 AI를 더했다. 누구나 프로 디자이너.',
    description: 'Canva의 AI 기능은 매직 디자인, 매직 편집, 배경 제거, 텍스트→이미지 등을 포함합니다. 비디자이너도 전문적인 프레젠테이션, 소셜 미디어 게시물, 로고 등을 쉽게 만들 수 있습니다.',
    url: 'https://canva.com', logoUrl: '/logos/canva.svg',
    categories: ['design', 'image-generation', 'marketing'],
    pricingModel: 'freemium', pricingDetail: '무료 / Pro ₩13,000/월 / Teams ₩10,000/월/인',
    koreanSupport: 'full', features: ['매직 디자인', '배경 제거', 'AI 이미지 생성', '프레젠테이션', '영상 편집', '브랜드 키트'],
    platforms: ['web', 'desktop', 'ios', 'android'], rating: 4.6, reviewCount: 860,
    alternatives: ['figma-ai', 'adobe-firefly'], isFeatured: false, launchedAt: '2013-01-01',
  },
  {
    id: '15', name: 'Lovable', slug: 'lovable',
    tagline: '프롬프트만으로 풀스택 웹앱을 만드세요.',
    description: 'Lovable(구 GPT Engineer)은 자연어 프롬프트로 풀스택 웹 애플리케이션을 생성하는 AI 도구입니다. React + Supabase + Tailwind 기반으로 실제 배포 가능한 앱을 만들며, Stripe 결제 연동까지 지원합니다.',
    url: 'https://lovable.dev', logoUrl: '/logos/lovable.svg',
    categories: ['coding'],
    pricingModel: 'freemium', pricingDetail: '무료 (5 메시지/일) / Starter $20/월 / Launch $50/월',
    koreanSupport: 'none', features: ['프롬프트→웹앱', 'React 생성', 'Supabase 연동', 'Stripe 결제', '실시간 미리보기', 'GitHub 연동'],
    platforms: ['web'], rating: 4.5, reviewCount: 340,
    alternatives: ['bolt-new', 'cursor', 'v0-dev'], isFeatured: false, launchedAt: '2024-01-01',
  },
  {
    id: '16', name: 'Bolt.new', slug: 'bolt-new',
    tagline: 'StackBlitz의 AI 풀스택 빌더. 브라우저에서 바로 개발.',
    description: 'Bolt.new는 StackBlitz 위에서 동작하는 AI 풀스택 웹 개발 도구입니다. 브라우저 안에서 프롬프트로 앱을 생성하고, 실시간으로 편집하고, 바로 배포할 수 있습니다.',
    url: 'https://bolt.new', logoUrl: '/logos/bolt.svg',
    categories: ['coding'],
    pricingModel: 'freemium', pricingDetail: '무료 (제한) / Pro $20/월 / Team $40/월',
    koreanSupport: 'none', features: ['브라우저 내 개발', 'AI 코드 생성', '실시간 미리보기', '원클릭 배포', '멀티 프레임워크', 'npm 패키지 지원'],
    platforms: ['web'], rating: 4.4, reviewCount: 290,
    alternatives: ['lovable', 'cursor', 'v0-dev'], isFeatured: false, launchedAt: '2024-10-01',
  },
  {
    id: '17', name: 'ElevenLabs', slug: 'elevenlabs',
    tagline: '가장 자연스러운 AI 음성. TTS와 음성 복제.',
    description: 'ElevenLabs는 최고 품질의 AI 음성 합성(TTS) 서비스입니다. 감정 표현이 가능한 자연스러운 음성을 생성하며, 음성 복제, 더빙, 오디오북 생성 등을 지원합니다. 29개 언어를 지원합니다.',
    url: 'https://elevenlabs.io', logoUrl: '/logos/elevenlabs.svg',
    categories: ['voice'],
    pricingModel: 'freemium', pricingDetail: '무료 (10,000자/월) / Starter $5/월 / Creator $22/월',
    koreanSupport: 'full', features: ['TTS', '음성 복제', '감정 표현', '29개 언어', '오디오북', 'API'],
    platforms: ['web', 'api'], rating: 4.7, reviewCount: 460,
    alternatives: ['play-ht', 'murf-ai', 'speechify'], isFeatured: false, launchedAt: '2022-01-01',
  },
  {
    id: '18', name: 'DeepL', slug: 'deepl',
    tagline: '세계 최고 정확도의 AI 번역. 26개 언어 지원.',
    description: 'DeepL은 신경망 기반 AI 번역 서비스로, Google 번역보다 자연스럽고 정확한 번역을 제공합니다. 문서 파일 번역, 용어집 사전, 작문 보조 기능(Write)도 포함합니다.',
    url: 'https://deepl.com', logoUrl: '/logos/deepl.svg',
    categories: ['translation', 'writing'],
    pricingModel: 'freemium', pricingDetail: '무료 (제한) / Pro €8.74/월 / Business €27.99/월',
    koreanSupport: 'full', features: ['AI 번역', '문서 번역', '용어집', 'Write (작문)', 'API', '브라우저 확장'],
    platforms: ['web', 'desktop', 'ios', 'android', 'api'], rating: 4.8, reviewCount: 920,
    alternatives: ['google-translate', 'papago'], isFeatured: true, launchedAt: '2017-08-01',
  },
  {
    id: '19', name: 'Gamma', slug: 'gamma',
    tagline: 'AI로 프레젠테이션을 만드세요. 30초 안에.',
    description: 'Gamma는 AI로 프레젠테이션, 문서, 웹페이지를 자동 생성하는 도구입니다. 주제만 입력하면 전문적인 디자인의 슬라이드가 완성되며, 실시간 협업과 분석 기능도 제공합니다.',
    url: 'https://gamma.app', logoUrl: '/logos/gamma.svg',
    categories: ['productivity', 'design'],
    pricingModel: 'freemium', pricingDetail: '무료 (400 크레딧) / Plus $10/월 / Pro $20/월',
    koreanSupport: 'partial', features: ['AI 프레젠테이션', '문서 생성', '웹페이지 생성', '실시간 협업', '분석', '커스텀 테마'],
    platforms: ['web'], rating: 4.5, reviewCount: 370,
    alternatives: ['beautiful-ai', 'tome', 'slidebean'], isFeatured: false, launchedAt: '2022-01-01',
  },
  {
    id: '20', name: 'Copy.ai', slug: 'copy-ai',
    tagline: 'AI 카피라이팅. 광고, 이메일, SNS 카피를 자동 생성.',
    description: 'Copy.ai는 마케팅 카피를 자동 생성하는 AI 플랫폼입니다. 광고 카피, 이메일, 블로그 포스트, 소셜 미디어 게시물 등을 빠르게 작성하며, 워크플로우 자동화 기능도 제공합니다.',
    url: 'https://copy.ai', logoUrl: '/logos/copyai.svg',
    categories: ['writing', 'marketing'],
    pricingModel: 'freemium', pricingDetail: '무료 (2,000단어/월) / Pro $49/월 / Team $249/월',
    koreanSupport: 'partial', features: ['광고 카피', '이메일 생성', '블로그 작성', 'SNS 포스트', '워크플로우', 'Brand Voice'],
    platforms: ['web', 'api'], rating: 4.1, reviewCount: 310,
    alternatives: ['jasper', 'writesonic', 'rytr'], isFeatured: false, launchedAt: '2020-10-01',
  },
  {
    id: '21', name: 'Pika', slug: 'pika',
    tagline: 'AI 영상 생성. 아이디어를 영상으로 바꾸세요.',
    description: 'Pika는 텍스트나 이미지에서 짧은 영상을 생성하는 AI 도구입니다. Pika 2.0 모델로 자연스러운 모션과 효과를 적용한 영상을 만들 수 있으며, 립싱크, 사운드 이펙트 등도 지원합니다.',
    url: 'https://pika.art', logoUrl: '/logos/pika.svg',
    categories: ['video'],
    pricingModel: 'freemium', pricingDetail: '무료 (제한) / Standard $8/월 / Pro $28/월',
    koreanSupport: 'none', features: ['텍스트→영상', '이미지→영상', '립싱크', 'SFX', '영상 확장', 'Scene 편집'],
    platforms: ['web', 'ios'], rating: 4.3, reviewCount: 280,
    alternatives: ['runway', 'kling', 'sora'], isFeatured: false, launchedAt: '2023-06-01',
  },
  {
    id: '22', name: 'Leonardo AI', slug: 'leonardo-ai',
    tagline: '게임·디자인 특화 AI 이미지 생성. 일관된 캐릭터.',
    description: 'Leonardo AI는 게임 에셋, 디자인, 일러스트에 특화된 AI 이미지 생성 플랫폼입니다. 일관된 캐릭터 생성, 실시간 캔버스, 3D 텍스처 생성 등 프로 기능을 제공합니다.',
    url: 'https://leonardo.ai', logoUrl: '/logos/leonardo.svg',
    categories: ['image-generation', 'design'],
    pricingModel: 'freemium', pricingDetail: '무료 (150 토큰/일) / Apprentice $12/월 / Artisan $30/월',
    koreanSupport: 'none', features: ['이미지 생성', '실시간 캔버스', '3D 텍스처', '캐릭터 일관성', '모션', 'API'],
    platforms: ['web', 'ios', 'android', 'api'], rating: 4.4, reviewCount: 410,
    alternatives: ['midjourney', 'dall-e', 'stable-diffusion'], isFeatured: false, launchedAt: '2022-12-01',
  },
  {
    id: '23', name: 'Windsurf', slug: 'windsurf',
    tagline: 'Codeium의 AI IDE. 에이전틱 코딩의 시작.',
    description: 'Windsurf(구 Codeium)는 AI 기반 코드 에디터로, Cascade라는 에이전틱 AI 기능이 핵심입니다. 프로젝트 전체를 이해하고, 멀티 파일 수정, 터미널 명령 실행 등을 자율적으로 수행합니다.',
    url: 'https://codeium.com/windsurf', logoUrl: '/logos/windsurf.svg',
    categories: ['coding'],
    pricingModel: 'freemium', pricingDetail: '무료 / Pro $15/월 / Enterprise 문의',
    koreanSupport: 'none', features: ['AI 코드 완성', 'Cascade', '멀티파일 편집', '터미널 통합', '무료 tier', 'VS Code 호환'],
    platforms: ['desktop'], rating: 4.3, reviewCount: 250,
    alternatives: ['cursor', 'github-copilot', 'lovable'], isFeatured: false, launchedAt: '2024-11-01',
  },
  {
    id: '24', name: 'v0', slug: 'v0-dev',
    tagline: 'Vercel의 AI UI 생성기. 프롬프트로 React 컴포넌트를.',
    description: 'v0는 Vercel이 만든 AI UI 생성 도구입니다. 프롬프트로 React 컴포넌트와 페이지를 생성하며, shadcn/ui와 Tailwind CSS를 기본으로 사용합니다. 생성된 코드를 바로 프로젝트에 복사해서 사용할 수 있습니다.',
    url: 'https://v0.dev', logoUrl: '/logos/v0.svg',
    categories: ['coding', 'design'],
    pricingModel: 'freemium', pricingDetail: '무료 (제한) / Premium $20/월',
    koreanSupport: 'none', features: ['UI 생성', 'React 코드', 'shadcn/ui', 'Tailwind', '실시간 미리보기', 'Vercel 배포'],
    platforms: ['web'], rating: 4.4, reviewCount: 320,
    alternatives: ['lovable', 'bolt-new', 'cursor'], isFeatured: false, launchedAt: '2023-10-01',
  },
  {
    id: '25', name: 'Kling AI', slug: 'kling',
    tagline: '쾌영의 AI 영상 생성. 중국산 Sora 대항마.',
    description: 'Kling은 Kuaishou(쾌영)가 개발한 AI 영상 생성 도구입니다. 텍스트와 이미지에서 최대 2분 길이의 영상을 생성하며, 립싱크, 가상 시착 등 특수 기능도 제공합니다.',
    url: 'https://klingai.com', logoUrl: '/logos/kling.svg',
    categories: ['video'],
    pricingModel: 'freemium', pricingDetail: '무료 (66 크레딧/일) / Standard $5.99/월 / Pro $30.99/월',
    koreanSupport: 'partial', features: ['텍스트→영상', '이미지→영상', '립싱크', '가상 시착', '모션 브러시', '2분 영상'],
    platforms: ['web', 'ios', 'android'], rating: 4.3, reviewCount: 270,
    alternatives: ['runway', 'pika', 'sora'], isFeatured: false, launchedAt: '2024-06-01',
  },
  {
    id: '26', name: 'Udio', slug: 'udio',
    tagline: '프로 수준 AI 음악 생성. 2분 안에 완성곡.',
    description: 'Udio는 고품질 AI 음악 생성 서비스입니다. 장르, 분위기, 가사를 지정하면 보컬 포함 완성곡을 생성하며, 기존 곡의 리믹스나 확장도 가능합니다.',
    url: 'https://udio.com', logoUrl: '/logos/udio.svg',
    categories: ['music'],
    pricingModel: 'freemium', pricingDetail: '무료 (10곡/월) / Standard $10/월 / Pro $30/월',
    koreanSupport: 'partial', features: ['AI 작곡', '보컬 합성', '가사 생성', '리믹스', '장르 선택', '상업적 사용'],
    platforms: ['web'], rating: 4.5, reviewCount: 340,
    alternatives: ['suno', 'soundraw', 'mubert'], isFeatured: false, launchedAt: '2024-04-01',
  },
  {
    id: '27', name: 'Writesonic', slug: 'writesonic',
    tagline: 'SEO 최적화 AI 글쓰기. 블로그를 자동으로.',
    description: 'Writesonic은 SEO 최적화된 블로그 포스트, 광고 카피, 랜딩 페이지 등을 자동 생성하는 AI 라이팅 도구입니다. Chatsonic(AI 챗봇)과 Botsonic(커스텀 챗봇) 기능도 포함합니다.',
    url: 'https://writesonic.com', logoUrl: '/logos/writesonic.svg',
    categories: ['writing', 'marketing'],
    pricingModel: 'freemium', pricingDetail: '무료 (제한) / Individual $16/월 / Standard $79/월',
    koreanSupport: 'partial', features: ['블로그 생성', 'SEO 최적화', '광고 카피', 'AI 챗봇', '커스텀 봇', 'API'],
    platforms: ['web', 'api'], rating: 4.1, reviewCount: 290,
    alternatives: ['jasper', 'copy-ai', 'rytr'], isFeatured: false, launchedAt: '2021-01-01',
  },
  {
    id: '28', name: 'Microsoft Copilot', slug: 'copilot',
    tagline: 'Windows에 내장된 AI. Office 365와 완벽 통합.',
    description: 'Microsoft Copilot은 Windows, Edge, Office 365에 내장된 AI 어시스턴트입니다. Word에서 문서 작성, Excel에서 데이터 분석, PowerPoint에서 프레젠테이션 생성 등을 AI가 도와줍니다.',
    url: 'https://copilot.microsoft.com', logoUrl: '/logos/ms-copilot.svg',
    categories: ['chatbot', 'productivity'],
    pricingModel: 'freemium', pricingDetail: '무료 / Copilot Pro $20/월 / M365 Copilot $30/월',
    koreanSupport: 'full', features: ['대화형 AI', 'Office 통합', 'Windows 통합', '이미지 생성', '웹 검색', 'Plugins'],
    platforms: ['web', 'desktop', 'ios', 'android'], rating: 4.2, reviewCount: 380,
    alternatives: ['chatgpt', 'gemini', 'claude'], isFeatured: false, launchedAt: '2023-02-07',
  },
  {
    id: '29', name: 'Surfer SEO', slug: 'surfer-seo',
    tagline: 'AI SEO 최적화 도구. 검색 1위를 위한 콘텐츠.',
    description: 'Surfer SEO는 AI 기반 SEO 콘텐츠 최적화 도구입니다. 키워드 연구, 콘텐츠 에디터, SERP 분석, 내부 링크 제안 등으로 검색 엔진 상위 랭킹을 위한 콘텐츠를 작성할 수 있습니다.',
    url: 'https://surferseo.com', logoUrl: '/logos/surfer.svg',
    categories: ['marketing', 'writing'],
    pricingModel: 'paid', pricingDetail: 'Essential $89/월 / Scale $129/월 / Enterprise 문의',
    koreanSupport: 'partial', features: ['콘텐츠 에디터', '키워드 연구', 'SERP 분석', '내부 링크', 'AI Writer', '감사 도구'],
    platforms: ['web'], rating: 4.3, reviewCount: 310,
    alternatives: ['semrush', 'ahrefs', 'clearscope'], isFeatured: false, launchedAt: '2017-01-01',
  },
  {
    id: '30', name: 'Papago', slug: 'papago',
    tagline: '네이버의 AI 번역. 한국어 번역 최강자.',
    description: 'Papago는 네이버가 개발한 AI 번역 서비스로, 특히 한국어↔영어, 한국어↔일본어 번역에서 최고 수준의 정확도를 자랑합니다. 이미지 번역, 음성 번역, 문서 번역 등 다양한 기능을 제공합니다.',
    url: 'https://papago.naver.com', logoUrl: '/logos/papago.svg',
    categories: ['translation'],
    pricingModel: 'free', pricingDetail: '무료 / API 유료 (사용량 기반)',
    koreanSupport: 'full', features: ['텍스트 번역', '이미지 번역', '음성 번역', '문서 번역', '사전', 'API'],
    platforms: ['web', 'ios', 'android', 'api'], rating: 4.6, reviewCount: 750,
    alternatives: ['deepl', 'google-translate'], isFeatured: false, launchedAt: '2016-08-01',
  },
  {
    id: '31', name: 'Wireframable', slug: 'wireframable',
    tagline: 'URL 하나로 와이어프레임 즉시 생성',
    description: 'Wireframable은 URL을 붙여넣으면 AI가 페이지 구조를 자동 분석해 와이어프레임을 실시간으로 생성해주는 도구입니다. 브랜드 컬러·폰트·이미지를 자동으로 감지해 그대로 적용하고, 완성된 결과물은 프로덕션 코드로 바로 내보낼 수 있습니다. 에이전시와 개발자가 클라이언트 목업을 빠르게 만들어 공유하기에 최적화되어 있습니다.',
    url: 'https://wireframable.com', logoUrl: '/logos/wireframable.svg',
    categories: ['design'],
    pricingModel: 'freemium', pricingDetail: '월 3크레딧 무료 / Starter 10크레딧 $20 / Studio 20크레딧 $35 / Agency 30크레딧 $45',
    koreanSupport: 'none', features: ['URL 자동 크롤링', '브랜드 에셋 감지', '실시간 와이어프레임 생성', '무한 반복 수정', '프로덕션 코드 내보내기', '클라이언트 공유 링크'],
    platforms: ['web'], rating: 0, reviewCount: 0,
    alternatives: [], isFeatured: false, launchedAt: '2026-03-07',
  },
  {
    id: '32', name: 'Janus', slug: 'janus',
    tagline: '웹캠으로 즉시 AI 아바타 변신 스트리밍',
    description: 'Janus는 웹캠 하나로 실시간 AI 아바타 변신이 가능한 캐릭터 스트리밍 도구입니다. 1080p+ 고화질 렌더링을 클라우드 없이 로컬에서 처리해 지연 없이 방송할 수 있으며, Discord·Zoom·Twitch·YouTube 등 주요 플랫폼을 모두 지원합니다. 얼굴을 노출하지 않고도 개성 있는 캐릭터로 활동하려는 크리에이터에게 적합합니다.',
    url: 'https://janus.cam', logoUrl: '/logos/janus.svg',
    categories: ['video'],
    pricingModel: 'freemium', pricingDetail: '무료 플랜 (가입 시 25크레딧 제공, 무제한 스트리밍) / Pro 월 $4.99 (60fps, 그린스크린, 워터마크 제거)',
    koreanSupport: 'none', features: ['실시간 AI 아바타 변신', '1080p+ 로컬 렌더링', '무제한 스트리밍', '아바타 커스터마이징', 'Chrome 확장/OBS 연동', '그린스크린 지원(Pro)'],
    platforms: ['web'], rating: 0, reviewCount: 0,
    alternatives: [], isFeatured: false, launchedAt: '2026-03-07',
  },
  {
    id: '33', name: 'Muapi', slug: 'muapi',
    tagline: '20+ AI 모델을 단일 API로 연결',
    description: 'Muapi는 이미지·영상·오디오 생성 AI 모델 20개 이상을 하나의 API로 제공하는 개발자 플랫폼입니다. Midjourney V7, Seedance 2.0 등 최신 모델을 최저 비용으로 이용할 수 있으며, 워크플로우 빌더로 생성형 AI 앱을 빠르게 구축하고 배포할 수 있습니다. SNS 콘텐츠·이커머스·마케팅 등 다양한 비즈니스 용도에 특화된 워크플로우 템플릿도 제공합니다.',
    url: 'https://muapi.ai', logoUrl: '/logos/muapi.svg',
    categories: ['coding'],
    pricingModel: 'paid', pricingDetail: '사용량 기반 요금 (이미지 $0.03~/생성, 영상 $0.15~/생성)',
    koreanSupport: 'none', features: ['20+ AI 모델 API 통합', '이미지 생성 API', '영상 생성 API', '오디오 생성 API', '워크플로우 빌더', 'Seedance 2.0 지원'],
    platforms: ['web', 'api'], rating: 0, reviewCount: 0,
    alternatives: [], isFeatured: false, launchedAt: '2026-03-07',
  },
  {
    id: '34', name: 'Jude', slug: 'jude',
    tagline: '소규모 비즈니스를 위한 AI 운영 어시스턴트',
    description: 'Jude는 스케줄링·이메일·태스크 추적 등 반복적인 비즈니스 운영 업무를 AI가 대신 처리해주는 자동화 어시스턴트입니다. 소규모 팀과 1인 사업자가 행정 업무에 쓰는 시간을 줄이고 핵심 업무에 집중할 수 있도록 도와줍니다.',
    url: 'https://tomorrowatetoday.com/jude', logoUrl: '/logos/jude.svg',
    categories: ['productivity'],
    pricingModel: 'freemium', pricingDetail: '가격 정보 미공개 (문의 필요)',
    koreanSupport: 'none', features: ['스케줄링 자동화', '이메일 관리', '태스크 추적', '비즈니스 운영 자동화'],
    platforms: ['web'], rating: 0, reviewCount: 0,
    alternatives: [], isFeatured: false, launchedAt: '2026-03-07',
  },
]

// Helper functions
export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(t => t.slug === slug)
}

export function getToolsByCategory(categorySlug: string): Tool[] {
  return tools.filter(t => t.categories.includes(categorySlug))
}

export function getFeaturedTools(): Tool[] {
  return tools.filter(t => t.isFeatured)
}

export function getAlternatives(toolSlug: string): Tool[] {
  const tool = getToolBySlug(toolSlug)
  if (!tool) return []
  return tool.alternatives
    .map(slug => getToolBySlug(slug))
    .filter((t): t is Tool => t !== undefined)
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase()
  return tools.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.tagline.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q) ||
    t.categories.some(c => c.includes(q)) ||
    t.features.some(f => f.toLowerCase().includes(q))
  )
}
