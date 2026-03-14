import { createClient } from './node_modules/@supabase/supabase-js/dist/index.mjs';

const supabase = createClient(
  'https://fmjwwyygqseownpazypt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
);

const records = [
  // ─── framer ───
  {
    tool_slug: 'framer',
    updated_at: '2022-10-05',
    title: 'Framer Sites 출시',
    changes: ['노코드 웹사이트 빌더로 전환', '프로토타이핑 도구에서 실제 퍼블리시 가능한 웹사이트 제작 지원', 'CMS 및 인터랙션 기능 포함'],
    version: null,
  },
  {
    tool_slug: 'framer',
    updated_at: '2023-05-15',
    title: 'Framer AI 출시',
    changes: ['텍스트 프롬프트로 웹사이트 레이아웃 자동 생성', 'AI 기반 카피 작성 및 번역 기능', 'AI 이미지 생성 통합'],
    version: null,
  },
  {
    tool_slug: 'framer',
    updated_at: '2024-01-22',
    title: '협업 및 CMS 기능 강화',
    changes: ['실시간 멀티플레이어 편집 지원', 'CMS 컬렉션 필터 및 정렬 개선', '팀 공유 컴포넌트 라이브러리 추가'],
    version: null,
  },
  {
    tool_slug: 'framer',
    updated_at: '2024-07-10',
    title: 'Series D 투자 유치',
    changes: ['대규모 시리즈 D 펀딩 완료', '마케팅 팀 대상 AI 웹사이트 빌더 포지셔닝 강화', '엔터프라이즈 플랜 확대'],
    version: null,
  },
  {
    tool_slug: 'framer',
    updated_at: '2025-02-01',
    title: 'Framer AI Wireframer 출시',
    changes: ['AI 와이어프레임 생성 기능 추가', '음성 설명으로 웹사이트 구조 자동 설계', 'Rolldown 번들러 적용으로 빌드 속도 향상'],
    version: null,
  },

  // ─── galileo ───
  {
    tool_slug: 'galileo',
    updated_at: '2023-02-01',
    title: 'Galileo AI 베타 출시',
    changes: ['텍스트 프롬프트로 UI 디자인 자동 생성', 'Figma 플러그인 연동 지원', '초기 사용자 대기 리스트 오픈'],
    version: null,
  },
  {
    tool_slug: 'galileo',
    updated_at: '2023-07-01',
    title: '일반 공개 출시',
    changes: ['베타 종료 후 정식 서비스 시작', '다양한 UI 컴포넌트 스타일 지원 확대', '팀 협업 기능 추가'],
    version: null,
  },
  {
    tool_slug: 'galileo',
    updated_at: '2024-03-15',
    title: '디자인 시스템 연동 강화',
    changes: ['기존 디자인 시스템 학습 및 적용 기능', '브랜드 가이드라인 기반 UI 생성', 'API 접근 베타 공개'],
    version: null,
  },
  {
    tool_slug: 'galileo',
    updated_at: '2025-01-15',
    title: 'Google Stitch로 전환',
    changes: ['Google에 인수 후 Stitch로 리브랜딩', 'Google 생태계와 통합', 'Material Design 기반 AI UI 생성 강화'],
    version: null,
  },

  // ─── gamma ───
  {
    tool_slug: 'gamma',
    updated_at: '2022-11-01',
    title: 'Gamma 베타 출시',
    changes: ['AI 기반 프레젠테이션 자동 생성', '텍스트 입력만으로 슬라이드 구성', '기존 PPT 대비 빠른 제작 지원'],
    version: null,
  },
  {
    tool_slug: 'gamma',
    updated_at: '2023-06-01',
    title: '정식 서비스 출시',
    changes: ['무료 플랜 포함 정식 출시', '다양한 템플릿 라이브러리 제공', '발표 모드 및 공유 링크 기능'],
    version: null,
  },
  {
    tool_slug: 'gamma',
    updated_at: '2023-10-15',
    title: 'AI 이미지 생성 통합',
    changes: ['슬라이드 내 AI 이미지 자동 삽입', 'DALL-E 및 자체 이미지 생성 통합', '비주얼 스타일 커스터마이징'],
    version: null,
  },
  {
    tool_slug: 'gamma',
    updated_at: '2024-03-01',
    title: '웹페이지 및 문서 생성 지원',
    changes: ['프레젠테이션 외 웹페이지 형식 출력 추가', 'AI 문서 생성 기능 확장', '임베드 및 공유 옵션 강화'],
    version: null,
  },
  {
    tool_slug: 'gamma',
    updated_at: '2024-09-10',
    title: '분석 및 협업 기능 업데이트',
    changes: ['조회수·참여율 Analytics 대시보드 출시', '실시간 팀 공동 편집 지원', '댓글 및 피드백 기능 추가'],
    version: null,
  },
  {
    tool_slug: 'gamma',
    updated_at: '2025-02-01',
    title: 'AI 슬라이드 재생성 및 스마트 편집',
    changes: ['선택 슬라이드 AI 재생성 기능', '콘텐츠 자동 요약 및 확장', '다국어 번역 슬라이드 출력 지원'],
    version: null,
  },

  // ─── genspark ───
  {
    tool_slug: 'genspark',
    updated_at: '2024-05-01',
    title: 'Genspark 베타 출시',
    changes: ['AI 검색 에이전트 서비스 시작', 'Sparkpage: 검색 결과를 맞춤형 페이지로 생성', '광고 없는 AI 큐레이션 검색'],
    version: null,
  },
  {
    tool_slug: 'genspark',
    updated_at: '2024-08-15',
    title: 'Auto-Mode 출시',
    changes: ['복잡한 태스크 자동 처리 에이전트 모드', '여러 단계 작업 자동화', '실시간 데이터 검색 및 요약'],
    version: null,
  },
  {
    tool_slug: 'genspark',
    updated_at: '2024-11-20',
    title: '멀티 에이전트 기능 강화',
    changes: ['다수의 AI 에이전트 병렬 실행 지원', '여행 계획, 쇼핑 비교 등 복잡한 사용 사례 지원', '사용자 맞춤 에이전트 설정'],
    version: null,
  },
  {
    tool_slug: 'genspark',
    updated_at: '2025-02-10',
    title: 'Genspark Super Agent 출시',
    changes: ['Super Agent: 자율적 웹 탐색 및 작업 수행', '코드 실행 및 파일 처리 능력 추가', '기업용 플랜 출시'],
    version: null,
  },

  // ─── grok ───
  {
    tool_slug: 'grok',
    updated_at: '2023-11-03',
    title: 'Grok-1 출시',
    changes: ['xAI의 첫 AI 챗봇 Grok 공개', 'X(트위터) Premium+ 구독자 전용 얼리 액세스', '실시간 X 데이터 검색 기능 포함', '유머러스하고 직설적인 응답 스타일'],
    version: 'Grok-1',
  },
  {
    tool_slug: 'grok',
    updated_at: '2024-03-17',
    title: 'Grok-1 오픈소스 공개',
    changes: ['Grok-1 가중치 및 아키텍처 Apache-2.0 라이선스로 공개', '314B 파라미터 MoE 모델', 'GitHub 및 HuggingFace에 업로드'],
    version: 'Grok-1',
  },
  {
    tool_slug: 'grok',
    updated_at: '2024-08-14',
    title: 'Grok-2 출시',
    changes: ['추론 능력 및 벤치마크 성능 대폭 향상', '이미지 생성 기능 추가 (FLUX 기반)', 'X Premium 구독자 전체 이용 가능'],
    version: 'Grok-2',
  },
  {
    tool_slug: 'grok',
    updated_at: '2025-02-17',
    title: 'Grok-3 출시',
    changes: ['DeepSearch: 심층 웹 검색 및 추론 기능', 'Think 모드: 단계적 추론 과정 표시', '수학·코딩 벤치마크 최고 수준 달성', '음성 모드 지원'],
    version: 'Grok-3',
  },
  {
    tool_slug: 'grok',
    updated_at: '2025-08-01',
    title: 'Grok.com 독립 서비스 출시',
    changes: ['X에서 독립한 grok.com 웹사이트 출시', '무료 사용자도 기본 기능 이용 가능', '멀티모달 파일 업로드 지원'],
    version: null,
  },

  // ─── groq ───
  {
    tool_slug: 'groq',
    updated_at: '2024-02-19',
    title: 'GroqCloud 공개 출시',
    changes: ['LPU(언어 처리 유닛) 기반 초고속 추론 API 공개', 'Llama 2, Mixtral 등 오픈소스 모델 지원', '초당 500+ 토큰 처리 속도로 화제'],
    version: null,
  },
  {
    tool_slug: 'groq',
    updated_at: '2024-08-20',
    title: '프롬프트 캐싱 도입',
    changes: ['반복 프롬프트 캐싱으로 비용 절감', '긴 시스템 프롬프트 재사용 지원', 'API 응답 속도 추가 향상'],
    version: null,
  },
  {
    tool_slug: 'groq',
    updated_at: '2025-03-26',
    title: 'TTS(텍스트-음성) 모델 출시',
    changes: ['Dialog 모델 기반 실시간 텍스트-음성 변환', '낮은 지연 시간의 음성 생성 API', '다양한 음성 스타일 지원'],
    version: null,
  },
  {
    tool_slug: 'groq',
    updated_at: '2025-04-05',
    title: 'Llama 4 추론 서비스 출시',
    changes: ['Meta Llama 4 모델 GroqCloud 지원', '업계 최저 비용으로 Llama 4 추론 제공', '멀티모달 입력 지원'],
    version: null,
  },
  {
    tool_slug: 'groq',
    updated_at: '2025-06-03',
    title: 'LoRA 파인튜닝 지원',
    changes: ['GroqCloud에서 LoRA 기반 모델 파인튜닝 지원', '기업 맞춤형 모델 적응 기능', '효율적인 파라미터 조정으로 비용 절감'],
    version: null,
  },
  {
    tool_slug: 'groq',
    updated_at: '2025-11-25',
    title: 'MCP 커넥터 베타 출시',
    changes: ['Model Context Protocol(MCP) 커넥터 지원', '외부 도구 및 데이터 소스 연결 가능', '에이전트 워크플로우 구축 간소화'],
    version: null,
  },

  // ─── hailuo-ai ───
  {
    tool_slug: 'hailuo-ai',
    updated_at: '2024-03-01',
    title: 'Hailuo AI 출시',
    changes: ['MiniMax의 AI 텍스트·음악 생성 플랫폼 공개', '멀티모달 LLM 기반 콘텐츠 생성', '중국 AI 스타트업 MiniMax 글로벌 진출'],
    version: null,
  },
  {
    tool_slug: 'hailuo-ai',
    updated_at: '2024-09-01',
    title: 'video-01 텍스트-비디오 모델 출시',
    changes: ['텍스트 및 이미지 입력으로 영상 생성', '현실감 있는 모션 표현', '무료 체험 티어 제공'],
    version: 'video-01',
  },
  {
    tool_slug: 'hailuo-ai',
    updated_at: '2025-01-20',
    title: '오디오 기능 추가',
    changes: ['AI 음성 합성 기능 통합', '영상에 AI 생성 배경음악 추가 가능', '음성 클로닝 기술 지원'],
    version: null,
  },
  {
    tool_slug: 'hailuo-ai',
    updated_at: '2025-07-01',
    title: 'Hailuo 02 출시',
    changes: ['2세대 비디오 생성 모델 공개', '더 긴 영상 및 높은 해상도 지원', '카메라 움직임 제어 기능 추가'],
    version: 'Hailuo-02',
  },
  {
    tool_slug: 'hailuo-ai',
    updated_at: '2026-01-09',
    title: 'MiniMax 홍콩 증시 IPO',
    changes: ['홍콩 증권거래소 상장 (SEHK: 100)', '중국 AI 기업 최초 대규모 홍콩 IPO 중 하나', '글로벌 투자자 유치 및 브랜드 인지도 확대'],
    version: null,
  },

  // ─── heygen ───
  {
    tool_slug: 'heygen',
    updated_at: '2022-09-01',
    title: 'HeyGen 앱 출시',
    changes: ['AI 아바타 비디오 생성 서비스 공개', '사용자 사진으로 개인 아바타 생성', '다국어 스크립트 음성 지원'],
    version: null,
  },
  {
    tool_slug: 'heygen',
    updated_at: '2023-11-29',
    title: '즉시 아바타 생성기 출시 및 투자 유치',
    changes: ['거의 실시간 아바타 비디오 생성 기능', 'Conviction으로부터 $5.6M 투자 유치', '아바타 생성 시간 대폭 단축'],
    version: null,
  },
  {
    tool_slug: 'heygen',
    updated_at: '2024-01-01',
    title: '영상 번역 및 입술 싱크 기능',
    changes: ['Video Translation: 영상 언어 자동 번역', '입술 움직임 AI 동기화 기술', '40개 이상 언어 지원'],
    version: null,
  },
  {
    tool_slug: 'heygen',
    updated_at: '2024-06-20',
    title: '$6천만 투자 유치 및 기업 가치 $5억 달성',
    changes: ['Benchmark 주도 시리즈 A $6천만 투자', '기업 가치 $5억 달러 달성', '40,000+ 기업 고객 확보'],
    version: null,
  },
  {
    tool_slug: 'heygen',
    updated_at: '2025-06-01',
    title: 'Avatar IV 출시',
    changes: ['4세대 포토리얼리스틱 아바타 기술', '자연스러운 표정·제스처 재현', '실시간 스트리밍 아바타 지원'],
    version: 'Avatar IV',
  },
  {
    tool_slug: 'heygen',
    updated_at: '2026-02-05',
    title: '크레딧 시스템 개편',
    changes: ['"Generative Credits"를 "Premium Credits"로 명칭 변경', '오디오 더빙 무제한 무료 제공', '생성 전 크레딧 비용 미리 표시'],
    version: null,
  },

  // ─── hugging-face ───
  {
    tool_slug: 'hugging-face',
    updated_at: '2019-10-09',
    title: 'Transformers 라이브러리 출시',
    changes: ['PyTorch/TensorFlow 호환 NLP 트랜스포머 라이브러리 오픈소스 공개', 'BERT, GPT-2 등 사전학습 모델 허브 구축', '커뮤니티 모델 공유 생태계 시작'],
    version: null,
  },
  {
    tool_slug: 'hugging-face',
    updated_at: '2022-07-11',
    title: 'BLOOM 다국어 LLM 발표',
    changes: ['176B 파라미터 다국어 대형 언어 모델 BLOOM 공개', '46개 자연어·13개 프로그래밍 언어 지원', 'BigScience 워크숍 결과물로 오픈소스 공개'],
    version: null,
  },
  {
    tool_slug: 'hugging-face',
    updated_at: '2023-02-01',
    title: 'AWS 전략적 파트너십',
    changes: ['Amazon Web Services와 파트너십 체결', 'HuggingFace 모델을 AWS 클라우드에서 직접 사용 가능', 'Trainium 칩에서 BLOOM 차세대 버전 학습 계획'],
    version: null,
  },
  {
    tool_slug: 'hugging-face',
    updated_at: '2023-08-24',
    title: '$2.35억 시리즈 D 투자 유치',
    changes: ['기업 가치 $45억으로 $2.35억 투자 유치', 'Google, Amazon, Nvidia 등 전략적 투자 참여', 'AI 모델 허브 플랫폼 1위 지위 공고화'],
    version: null,
  },
  {
    tool_slug: 'hugging-face',
    updated_at: '2024-06-01',
    title: 'EU AI 가속기 프로그램 출시',
    changes: ['Meta·Scaleway와 유럽 AI 스타트업 지원 프로그램 시작', 'STATION F(파리)에서 스타트업 멘토링 제공', '유럽 AI 생태계 강화를 위한 오픈 모델 보급'],
    version: null,
  },
  {
    tool_slug: 'hugging-face',
    updated_at: '2025-04-01',
    title: 'Pollen Robotics 인수',
    changes: ['프랑스 휴머노이드 로봇 스타트업 Pollen Robotics 인수', 'AI 로보틱스 오픈소스화 비전 발표', '로봇 AI 모델 및 데이터셋 공유 생태계 확장'],
    version: null,
  },

  // ─── ideogram ───
  {
    tool_slug: 'ideogram',
    updated_at: '2023-08-22',
    title: 'Ideogram 0.1 출시',
    changes: ['이미지 내 텍스트를 정확하게 렌더링하는 AI 이미지 생성 서비스', 'Andreessen Horowitz·Index Ventures로부터 $1650만 시드 투자', '미드저니 대비 뛰어난 타이포그래피 생성 능력'],
    version: '0.1',
  },
  {
    tool_slug: 'ideogram',
    updated_at: '2024-02-28',
    title: 'Ideogram 1.0 출시 및 $8천만 투자',
    changes: ['1.0 모델: 사실감·스타일 다양성 대폭 개선', '$8천만 시리즈 B 투자 유치', 'API 및 팀 기능 출시'],
    version: '1.0',
  },
  {
    tool_slug: 'ideogram',
    updated_at: '2024-08-21',
    title: 'Ideogram 2.0 출시',
    changes: ['Realistic, Design, 3D, Anime 등 스타일 지원', '텍스트 생성 정확도 추가 향상', '매직 프롬프트 기능으로 프롬프트 자동 최적화'],
    version: '2.0',
  },
  {
    tool_slug: 'ideogram',
    updated_at: '2025-02-28',
    title: 'Ideogram 2a 출시',
    changes: ['속도와 가성비 최적화된 경량 모델', '그래픽 디자인·사진 생성에 특화', 'API 및 파트너 플랫폼에 즉시 제공'],
    version: '2a',
  },
  {
    tool_slug: 'ideogram',
    updated_at: '2025-03-26',
    title: 'Ideogram 3.0 출시',
    changes: ['최고 수준의 사실감과 복잡한 텍스트 레이아웃 이해력', '일관된 스타일 유지 기능', '전체 사용자 무료 제공'],
    version: '3.0',
  },

  // ─── imagefx ───
  {
    tool_slug: 'imagefx',
    updated_at: '2024-02-01',
    title: 'ImageFX 출시',
    changes: ['Google의 Imagen 2 기반 AI 이미지 생성 도구 공개', 'Google One AI Premium 가입자 대상 우선 제공', '프롬프트 제안 기능으로 이미지 변형 용이'],
    version: null,
  },
  {
    tool_slug: 'imagefx',
    updated_at: '2024-05-14',
    title: 'Imagen 3 통합 (Google I/O)',
    changes: ['Google I/O에서 Imagen 3 기반 ImageFX 업그레이드 발표', '세부 묘사 및 사실감 대폭 향상', '더 많은 국가로 서비스 확대'],
    version: null,
  },
  {
    tool_slug: 'imagefx',
    updated_at: '2024-10-01',
    title: '실험적 기능 및 스타일 옵션 확장',
    changes: ['다양한 아트 스타일 프리셋 추가', '이미지 인페인팅(부분 편집) 기능 베타', '고해상도 출력 옵션 확대'],
    version: null,
  },
  {
    tool_slug: 'imagefx',
    updated_at: '2025-03-01',
    title: '글로벌 출시 및 무료 접근 확대',
    changes: ['Google 계정 보유 시 누구나 무료 사용 가능', 'Workspace 통합 기능 추가', '워터마크 정책 업데이트'],
    version: null,
  },

  // ─── invideo-ai ───
  {
    tool_slug: 'invideo-ai',
    updated_at: '2019-11-01',
    title: 'InVideo 출시',
    changes: ['온라인 비디오 편집 플랫폼 서비스 시작', '5000개 이상 템플릿 제공', '텍스트-비디오 자동 변환 기능'],
    version: null,
  },
  {
    tool_slug: 'invideo-ai',
    updated_at: '2023-06-01',
    title: 'InVideo AI 출시',
    changes: ['텍스트 프롬프트로 완성된 영상 자동 생성', 'AI 스크립트 작성 및 내레이션 생성', 'AI 에이전트 기반 영상 편집 지원'],
    version: null,
  },
  {
    tool_slug: 'invideo-ai',
    updated_at: '2024-03-15',
    title: 'AI 말하는 아바타 기능 추가',
    changes: ['AI Talking Avatar: 텍스트로 영상 속 발표자 생성', '사용자 얼굴 클론 아바타 지원', '다양한 언어 및 억양 지원'],
    version: null,
  },
  {
    tool_slug: 'invideo-ai',
    updated_at: '2024-09-01',
    title: '음성 복제 및 멀티 언어 출시',
    changes: ['Voice Clone: 본인 목소리로 영상 내레이션 생성', '50개 이상 언어 지원 확대', 'AI 자막 자동 생성 강화'],
    version: null,
  },
  {
    tool_slug: 'invideo-ai',
    updated_at: '2025-04-01',
    title: '워크플로우 자동화 에이전트 출시',
    changes: ['소셜 미디어 콘텐츠 배포 자동화', 'YouTube·TikTok·Reels 포맷 자동 변환', 'AI가 썸네일 및 타이틀 자동 생성'],
    version: null,
  },

  // ─── janus ───
  {
    tool_slug: 'janus',
    updated_at: '2024-11-11',
    title: 'Janus 멀티모달 모델 출시',
    changes: ['DeepSeek의 통합 멀티모달 이해·생성 모델 공개', '이미지 이해와 텍스트-이미지 생성 통합 아키텍처', '오픈소스 공개 (DeepSeek GitHub)'],
    version: 'Janus-1.3B',
  },
  {
    tool_slug: 'janus',
    updated_at: '2025-01-27',
    title: 'Janus-Pro 출시',
    changes: ['7B 파라미터 대형 버전 Janus-Pro 공개', '이미지 생성 품질 대폭 향상', 'DALL-E 3, Stable Diffusion 대비 경쟁력 강화', 'DeepSeek R1 공개 직후 추가 주목'],
    version: 'Janus-Pro-7B',
  },
  {
    tool_slug: 'janus',
    updated_at: '2025-03-01',
    title: 'Janus-Flow 출시',
    changes: ['Flow 매칭 기반 멀티모달 이미지 생성 개선 모델', '추론 속도 향상 및 품질 개선', '오픈소스 커뮤니티에 전체 공개'],
    version: 'Janus-Flow',
  },

  // ─── jasper ───
  {
    tool_slug: 'jasper',
    updated_at: '2021-02-01',
    title: 'Jarvis(현 Jasper) 출시',
    changes: ['GPT-3 기반 AI 마케팅 카피 생성 도구 출시', '광고 카피, 블로그 글, SNS 콘텐츠 자동 작성', '초기 베타 사용자 급속 성장'],
    version: null,
  },
  {
    tool_slug: 'jasper',
    updated_at: '2022-01-17',
    title: 'Jasper로 브랜드명 변경',
    changes: ['저작권 문제로 Jarvis에서 Jasper로 브랜드 변경', '콘텐츠 생성 플랫폼으로 기능 확장', '팀 협업 기능 추가'],
    version: null,
  },
  {
    tool_slug: 'jasper',
    updated_at: '2022-10-18',
    title: '$1.25억 시리즈 A 투자 유치',
    changes: ['기업 가치 $15억으로 $1.25억 투자 유치', '유니콘 기업 등극', '엔터프라이즈 마케팅 플랫폼으로 도약'],
    version: null,
  },
  {
    tool_slug: 'jasper',
    updated_at: '2023-03-22',
    title: 'Jasper Art 출시',
    changes: ['AI 이미지 생성 기능 Jasper Art 출시', '텍스트 프롬프트로 마케팅용 이미지 생성', '카피-이미지 통합 워크플로우 지원'],
    version: null,
  },
  {
    tool_slug: 'jasper',
    updated_at: '2023-09-01',
    title: 'Jasper Chat 및 캠페인 기능',
    changes: ['ChatGPT 스타일의 대화형 인터페이스 출시', '마케팅 캠페인 전체 자동 생성 기능', 'GPT-4 기반 향상된 글 품질'],
    version: null,
  },
  {
    tool_slug: 'jasper',
    updated_at: '2024-06-01',
    title: 'AI 마케팅 플랫폼 전환',
    changes: ['단순 카피 도구에서 종합 AI 마케팅 플랫폼으로 전환', '브랜드 보이스 학습 및 적용 기능', '성과 분석 및 콘텐츠 최적화 AI'],
    version: null,
  },

  // ─── jude ───
  {
    tool_slug: 'jude',
    updated_at: '2023-09-01',
    title: 'Jude AI 베타 출시',
    changes: ['스포츠 분석 특화 AI 어시스턴트 출시', '축구 경기 데이터 자동 분석 및 리포트 생성', '감독·코치용 전술 분석 도구'],
    version: null,
  },
  {
    tool_slug: 'jude',
    updated_at: '2024-01-15',
    title: '실시간 경기 분석 기능 추가',
    changes: ['라이브 경기 데이터 실시간 처리', '선수 퍼포먼스 지표 AI 자동 평가', '팀 전술 패턴 시각화'],
    version: null,
  },
  {
    tool_slug: 'jude',
    updated_at: '2024-07-01',
    title: '프리미어리그 클럽 파트너십',
    changes: ['복수의 유럽 축구 클럽과 데이터 파트너십 체결', '스카우팅 AI 보고서 자동화', '부상 위험 예측 모델 통합'],
    version: null,
  },
  {
    tool_slug: 'jude',
    updated_at: '2025-01-20',
    title: '멀티 스포츠 지원 확대',
    changes: ['농구, 야구, 럭비 등 다종목 분석 지원', '자연어 질의로 경기 데이터 조회', '모바일 앱 출시'],
    version: null,
  },

  // ─── krea ───
  {
    tool_slug: 'krea',
    updated_at: '2023-06-01',
    title: 'Krea AI 베타 출시',
    changes: ['AI 이미지 생성 및 강화 플랫폼 공개', '실시간 AI 이미지 생성 캔버스', '스케치를 이미지로 변환하는 Real-time 기능'],
    version: null,
  },
  {
    tool_slug: 'krea',
    updated_at: '2023-10-15',
    title: '실시간 생성 기능 공개',
    changes: ['드로잉 즉시 AI 이미지로 변환', '스타일 및 강도 슬라이더로 섬세한 제어', '커뮤니티에서 바이럴 화제'],
    version: null,
  },
  {
    tool_slug: 'krea',
    updated_at: '2024-05-01',
    title: 'AI 비디오 생성 베타',
    changes: ['정적 이미지를 동영상으로 변환', '텍스트 기반 비디오 생성 기능 추가', '프레임 보간 기술 적용'],
    version: null,
  },
  {
    tool_slug: 'krea',
    updated_at: '2024-10-01',
    title: 'AI 업스케일링 및 향상 기능',
    changes: ['이미지 해상도 최대 16배 업스케일', 'AI 기반 디테일 강화 및 노이즈 제거', '배치 처리 기능 출시'],
    version: null,
  },
  {
    tool_slug: 'krea',
    updated_at: '2025-03-01',
    title: 'Krea Video 정식 출시',
    changes: ['비디오 생성 정식 출시', '영상 스타일 전이 기능 추가', '4K 해상도 출력 지원'],
    version: null,
  },

  // ─── le-chat ───
  {
    tool_slug: 'le-chat',
    updated_at: '2024-02-26',
    title: 'Le Chat 출시',
    changes: ['Mistral AI의 ChatGPT 대항마 Le Chat 공개', 'Mistral Large, Mistral Small, Mixtral 8x7B 선택 가능', '프랑스어 포함 다국어 지원', '무료 플랜 제공'],
    version: null,
  },
  {
    tool_slug: 'le-chat',
    updated_at: '2024-11-19',
    title: '이미지 생성 기능 추가',
    changes: ['Black Forest Labs FLUX Pro 기반 이미지 생성 통합', '캔버스 기능으로 문서 실시간 편집', '웹 검색 기능 강화'],
    version: null,
  },
  {
    tool_slug: 'le-chat',
    updated_at: '2025-01-16',
    title: 'AFP 뉴스 콘텐츠 협약',
    changes: ['Agence France-Presse(AFP) 1983년부터 전체 아카이브 접근 계약', '실시간 뉴스 기반 최신 정보 응답 가능', '뉴스 검색 및 요약 기능 강화'],
    version: null,
  },
  {
    tool_slug: 'le-chat',
    updated_at: '2025-02-06',
    title: 'iOS/Android 앱 출시',
    changes: ['Le Chat 모바일 앱 정식 출시', '음성 모드 지원', '오프라인 기능 일부 제공'],
    version: null,
  },
  {
    tool_slug: 'le-chat',
    updated_at: '2025-06-01',
    title: 'Mistral Large 3 기반 업그레이드',
    changes: ['최신 Mistral Large 3 모델 적용', '코딩 및 수학 추론 능력 대폭 향상', '멀티모달 파일 업로드 지원'],
    version: null,
  },

  // ─── leonardo-ai ───
  {
    tool_slug: 'leonardo-ai',
    updated_at: '2023-01-01',
    title: 'Leonardo.Ai 베타 출시',
    changes: ['AI 이미지 생성 플랫폼 베타 공개', '게임 에셋 생성에 특화', '사용자 맞춤 모델 파인튜닝 지원'],
    version: null,
  },
  {
    tool_slug: 'leonardo-ai',
    updated_at: '2023-10-01',
    title: '$4700만 시리즈 A 투자 유치',
    changes: ['Blackbird Ventures 주도 A$4700만 투자 유치', 'Forbes 2024 AI 50 리스트 선정', '사용자 2900만 명 돌파'],
    version: null,
  },
  {
    tool_slug: 'leonardo-ai',
    updated_at: '2024-04-01',
    title: 'Leonardo for Teams 출시',
    changes: ['기업용 보안 콘텐츠 제작 솔루션 출시', '팀 공유 에셋 및 브랜드 가이드라인 관리', '권한 기반 접근 제어'],
    version: null,
  },
  {
    tool_slug: 'leonardo-ai',
    updated_at: '2024-06-01',
    title: 'Phoenix 파운데이션 모델 출시',
    changes: ['자체 개발 첫 번째 파운데이션 모델 Phoenix 공개', '고품질 이미지 생성 및 일관성 향상', '실시간 캔버스 기능 강화'],
    version: 'Phoenix',
  },
  {
    tool_slug: 'leonardo-ai',
    updated_at: '2024-07-30',
    title: 'Canva에 인수',
    changes: ['호주 디자인 플랫폼 Canva가 Leonardo.Ai 인수', 'Canva 생태계와 AI 이미지 생성 통합 예정', '기존 서비스는 독립 운영 유지'],
    version: null,
  },
  {
    tool_slug: 'leonardo-ai',
    updated_at: '2025-08-01',
    title: 'Lucid Origin 텍스트-이미지 모델 출시',
    changes: ['풀 HD 출력 지원 고품질 이미지 생성 모델', 'Artificial Analysis 텍스트-이미지 리더보드 7위 달성', '사진 사실감 및 세부 묘사 향상'],
    version: 'Lucid Origin',
  },

  // ─── lovable ───
  {
    tool_slug: 'lovable',
    updated_at: '2023-08-01',
    title: 'GPT Engineer 오픈소스 공개',
    changes: ['자연어로 소프트웨어를 생성하는 GPT Engineer 오픈소스 출시', 'GitHub 출시 후 수일 내 수만 스타 획득', 'AI 기반 풀스택 앱 생성 개념 증명'],
    version: null,
  },
  {
    tool_slug: 'lovable',
    updated_at: '2024-04-01',
    title: 'gptengineer.app 서비스 출시',
    changes: ['웹 기반 AI 앱 빌더 서비스 출시', '채팅으로 React 앱 즉시 생성', 'Supabase 백엔드 자동 연동'],
    version: null,
  },
  {
    tool_slug: 'lovable',
    updated_at: '2024-11-18',
    title: 'Lovable로 리브랜딩 출시',
    changes: ['gptengineer.app에서 Lovable로 브랜드 전환', '출시 1주년 기념', 'AI 앱 빌더 시장 본격 공략 선언'],
    version: null,
  },
  {
    tool_slug: 'lovable',
    updated_at: '2025-10-24',
    title: 'Lovable API 및 Build with URL 출시',
    changes: ['링크로 앱 빌드 시작하는 API 공개', '개발자 워크플로우 통합 지원', 'Shopify 통합 기능 추가'],
    version: null,
  },
  {
    tool_slug: 'lovable',
    updated_at: '2025-12-18',
    title: '$3.3억 시리즈 B 투자 유치',
    changes: ['3.3억 달러 규모 시리즈 B 펀딩 완료', '"빌더의 시대" 선언', '기업용 거버넌스·보안 기능 강화'],
    version: null,
  },
  {
    tool_slug: 'lovable',
    updated_at: '2026-01-28',
    title: '자율 빌드 기능 강화',
    changes: ['더 복잡한 앱 자율 구현 능력 향상', 'Claude Opus 최신 모델 통합', '빌드 큐 시스템으로 대기 없이 작업 진행'],
    version: null,
  },

  // ─── luma-ai ───
  {
    tool_slug: 'luma-ai',
    updated_at: '2023-01-01',
    title: 'Luma AI Genie 3D 생성 서비스',
    changes: ['텍스트·이미지로 3D 오브젝트 생성', '게임·XR 개발자용 3D 에셋 생성', 'NeRF 기술 기반 3D 재구성'],
    version: null,
  },
  {
    tool_slug: 'luma-ai',
    updated_at: '2024-06-12',
    title: 'Dream Machine 출시',
    changes: ['텍스트·이미지 입력으로 고품질 영상 생성', '5초 720p 영상 무료 생성 (1일 10개)', '자연스러운 움직임 표현으로 화제'],
    version: 'Dream Machine 1.0',
  },
  {
    tool_slug: 'luma-ai',
    updated_at: '2024-06-19',
    title: 'Dream Machine 영상 확장 기능',
    changes: ['생성된 영상을 추가로 연장하는 기능 출시', '영상 발견 및 공유 기능', '인-비디오 편집 기능 베타'],
    version: null,
  },
  {
    tool_slug: 'luma-ai',
    updated_at: '2024-09-01',
    title: 'Ray2 모델 출시',
    changes: ['2세대 Dream Machine 모델 Ray2 공개', '더 긴 영상 및 높은 해상도 지원', '물리 기반 현실감 향상'],
    version: 'Ray2',
  },
  {
    tool_slug: 'luma-ai',
    updated_at: '2025-03-01',
    title: 'Dream Machine API 출시',
    changes: ['개발자용 Dream Machine API 공개', '앱에 영상 생성 기능 통합 가능', '엔터프라이즈 플랜 출시'],
    version: null,
  },

  // ─── magnific ───
  {
    tool_slug: 'magnific',
    updated_at: '2023-11-01',
    title: 'Magnific AI 출시',
    changes: ['AI 이미지 업스케일링 및 디테일 강화 서비스 출시', '최대 16배 해상도 향상', '창의적 재해석 옵션으로 세부 묘사 추가 생성', 'X(트위터)에서 급속도로 바이럴'],
    version: null,
  },
  {
    tool_slug: 'magnific',
    updated_at: '2024-02-01',
    title: '크리에이티브 업스케일링 기능 강화',
    changes: ['다양한 스타일 프리셋 추가 (시네마틱, 애니메이션 등)', '얼굴 디테일 복원 특화 모드', 'HDR 출력 지원'],
    version: null,
  },
  {
    tool_slug: 'magnific',
    updated_at: '2024-06-01',
    title: '비디오 업스케일링 베타 출시',
    changes: ['영상 파일 업스케일링 기능 공개 베타', '프레임별 디테일 강화 처리', '배치 처리로 대용량 영상 지원'],
    version: null,
  },
  {
    tool_slug: 'magnific',
    updated_at: '2024-10-15',
    title: 'Magnific Transform 출시',
    changes: ['이미지 스타일 변환 기능 Transform 출시', '실사 이미지를 애니메이션 스타일로 변환', '일관성 있는 스타일 유지 기능'],
    version: null,
  },
  {
    tool_slug: 'magnific',
    updated_at: '2025-01-15',
    title: 'API 및 기업용 플랜 출시',
    changes: ['Magnific API 공개로 서비스 통합 지원', '기업용 고용량 처리 플랜', '어도비 플러그인 연동 지원'],
    version: null,
  },
];

async function insertRecords() {
  const results = {};
  
  // Group by tool_slug
  const byTool = {};
  for (const r of records) {
    if (!byTool[r.tool_slug]) byTool[r.tool_slug] = [];
    byTool[r.tool_slug].push(r);
  }
  
  for (const [slug, toolRecords] of Object.entries(byTool)) {
    const { data, error } = await supabase
      .from('tool_updates')
      .insert(toolRecords)
      .select();
    
    if (error) {
      console.error(`❌ ${slug}: ${error.message}`);
      results[slug] = { success: false, error: error.message };
    } else {
      console.log(`✅ ${slug}: ${data.length}개 삽입 완료`);
      results[slug] = { success: true, count: data.length };
    }
  }
  
  console.log('\n=== 최종 결과 ===');
  let total = 0;
  for (const [slug, r] of Object.entries(results)) {
    if (r.success) {
      console.log(`${slug}: ${r.count}개`);
      total += r.count;
    } else {
      console.log(`${slug}: 실패 - ${r.error}`);
    }
  }
  console.log(`\n총 삽입: ${total}개`);
}

insertRecords().catch(console.error);
