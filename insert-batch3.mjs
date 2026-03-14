import { createClient } from './node_modules/@supabase/supabase-js/dist/index.mjs';

const supabase = createClient(
  'https://fmjwwyygqseownpazypt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
);

const toolUpdates = [
  // ─── make ───
  {
    tool_slug: 'make',
    updated_at: '2022-08-09',
    title: 'Integromat에서 Make로 리브랜딩',
    changes: [
      '서비스명을 Integromat에서 Make로 공식 변경',
      '새로운 UI/UX 디자인 적용',
      '도메인 make.com으로 이전',
    ],
    version: null,
  },
  {
    tool_slug: 'make',
    updated_at: '2022-11-01',
    title: '무료 플랜 확장 및 1,000개 앱 통합 지원',
    changes: [
      '무료 플랜에 월 1,000 오퍼레이션 제공',
      '지원 앱 1,000개 이상 돌파',
      '팀 협업 기능 강화',
    ],
    version: null,
  },
  {
    tool_slug: 'make',
    updated_at: '2023-05-10',
    title: 'AI 시나리오 빌더 출시',
    changes: [
      'OpenAI GPT-4 연동 자동화 시나리오 제공',
      'AI를 활용한 자동화 워크플로우 제안 기능 추가',
      'ChatGPT 모듈 정식 출시',
    ],
    version: null,
  },
  {
    tool_slug: 'make',
    updated_at: '2023-09-20',
    title: 'Make AI Assistant 베타 출시',
    changes: [
      '자연어로 자동화 시나리오 생성하는 AI 어시스턴트 추가',
      '에러 감지 및 자동 수정 제안 기능 도입',
      '시나리오 템플릿 라이브러리 1,000+ 추가',
    ],
    version: null,
  },
  {
    tool_slug: 'make',
    updated_at: '2024-03-15',
    title: 'Enterprise 플랜 강화 및 SOC 2 인증',
    changes: [
      'SOC 2 Type II 인증 획득',
      'Enterprise 플랜에 전용 인프라 옵션 추가',
      'API Gateway 기능 베타 출시',
      'HIPAA 컴플라이언스 지원 추가',
    ],
    version: null,
  },
  {
    tool_slug: 'make',
    updated_at: '2024-10-01',
    title: 'Make AI 자동화 허브 출시',
    changes: [
      'AI 기반 워크플로우 자동 최적화 기능 추가',
      '400개 이상 신규 앱 통합 추가',
      '실시간 데이터 처리 속도 2배 향상',
    ],
    version: null,
  },

  // ─── mapify ───
  {
    tool_slug: 'mapify',
    updated_at: '2023-03-01',
    title: 'Mapify 공개 베타 출시',
    changes: [
      'AI 기반 마인드맵 자동 생성 서비스 공개 베타 시작',
      'PDF, 텍스트 입력으로 마인드맵 생성 지원',
      '웹 브라우저 기반 편집 인터페이스 제공',
    ],
    version: 'beta',
  },
  {
    tool_slug: 'mapify',
    updated_at: '2023-07-15',
    title: 'YouTube 영상 마인드맵 변환 기능 출시',
    changes: [
      'YouTube URL 입력만으로 마인드맵 자동 생성',
      '자막 기반 AI 요약 및 구조화',
      '한국어 포함 다국어 콘텐츠 지원',
    ],
    version: null,
  },
  {
    tool_slug: 'mapify',
    updated_at: '2023-11-20',
    title: '오디오/팟캐스트 지원 및 협업 기능 추가',
    changes: [
      '오디오 파일 및 팟캐스트 URL 마인드맵 변환 지원',
      '실시간 팀 협업 편집 기능 추가',
      '마인드맵 내보내기 포맷 확대 (PNG, PDF, Markdown)',
    ],
    version: null,
  },
  {
    tool_slug: 'mapify',
    updated_at: '2024-04-10',
    title: 'AI 채팅 기능 및 확장 템플릿 출시',
    changes: [
      '마인드맵 기반 AI 질의응답 채팅 기능 추가',
      '비즈니스, 교육, 연구 분야별 전문 템플릿 제공',
      'Notion, Google Drive 내보내기 연동 추가',
    ],
    version: null,
  },
  {
    tool_slug: 'mapify',
    updated_at: '2024-09-01',
    title: '웹 페이지 URL 요약 및 마인드맵 변환 출시',
    changes: [
      '웹 페이지 URL 직접 입력으로 마인드맵 생성 지원',
      'Chrome 확장 프로그램 출시로 원클릭 마인드맵 생성',
      '노드 스타일 및 색상 커스터마이징 강화',
    ],
    version: null,
  },

  // ─── meshy ───
  {
    tool_slug: 'meshy',
    updated_at: '2023-06-01',
    title: 'Meshy 공개 베타 출시',
    changes: [
      'AI 기반 텍스트-3D 모델 생성 서비스 공개',
      '이미지-3D 변환 기능 베타 제공',
      'OBJ, FBX, GLB 포맷 내보내기 지원',
    ],
    version: 'beta',
  },
  {
    tool_slug: 'meshy',
    updated_at: '2023-12-15',
    title: 'Meshy-2 출시 및 텍스처링 개선',
    changes: [
      '2세대 모델로 3D 생성 품질 대폭 향상',
      'AI 텍스처링 기능 정밀도 개선',
      'Unity, Unreal Engine 내보내기 지원 강화',
    ],
    version: '2.0',
  },
  {
    tool_slug: 'meshy',
    updated_at: '2024-03-20',
    title: 'Meshy-3 출시 - 고품질 지오메트리',
    changes: [
      '3세대 모델 출시로 지오메트리 정확도 향상',
      '스케치-3D 변환 기능 추가',
      'API 플랜 출시로 개발자 통합 지원',
    ],
    version: '3.0',
  },
  {
    tool_slug: 'meshy',
    updated_at: '2024-07-03',
    title: 'Meshy-3 Turbo 출시',
    changes: [
      '생성 속도 2배 향상된 Turbo 버전 출시',
      '빠른 프로토타이핑을 위한 경량 3D 생성 지원',
      'Apple Vision Pro 플랫폼 지원 추가',
    ],
    version: '3-turbo',
  },
  {
    tool_slug: 'meshy',
    updated_at: '2024-08-22',
    title: 'Meshy-4 출시 - 전문가급 지오메트리',
    changes: [
      '4세대 모델로 클린 하드서피스 지오메트리 구현',
      '텍스트-3D, 이미지-3D 워크플로우 새 UI 도입',
      '인트리케이트 디테일 캡처 능력 대폭 향상',
      'Discover 페이지에서 언텍스처 모델 미리보기 지원',
    ],
    version: '4.0',
  },
  {
    tool_slug: 'meshy',
    updated_at: '2025-07-15',
    title: 'Blender 공식 플러그인 출시',
    changes: [
      'Blender 내에서 직접 Meshy AI 3D 생성 가능',
      '블렌더 워크플로우에 원활한 AI 통합 지원',
      '플러그인을 통한 일괄 3D 생성 기능 제공',
    ],
    version: null,
  },
  {
    tool_slug: 'meshy',
    updated_at: '2026-01-18',
    title: 'Meshy-6 출시',
    changes: [
      '6세대 모델로 스마터 지오메트리 구현',
      '더 빠른 워크플로우 및 무한한 3D 창작 지원',
      '게임 에셋 품질의 3D 모델 생성 가능',
    ],
    version: '6.0',
  },

  // ─── copilot (GitHub Copilot) ───
  {
    tool_slug: 'copilot',
    updated_at: '2021-06-29',
    title: 'GitHub Copilot 기술 프리뷰 출시',
    changes: [
      'OpenAI Codex 기반 AI 코드 자동완성 기능 공개',
      'VS Code 확장 프로그램으로 제한적 테스터 대상 출시',
      '코드 컨텍스트 기반 전체 함수 제안 기능 제공',
    ],
    version: 'Technical Preview',
  },
  {
    tool_slug: 'copilot',
    updated_at: '2022-06-21',
    title: 'GitHub Copilot 정식 출시 (GA)',
    changes: [
      '월 $10 / 연 $100 유료 구독 플랜으로 정식 출시',
      '학생 및 오픈소스 메인테이너 무료 제공',
      'VS Code, JetBrains IDE, Neovim 지원',
    ],
    version: '1.0',
  },
  {
    tool_slug: 'copilot',
    updated_at: '2023-02-14',
    title: 'GitHub Copilot for Business 출시',
    changes: [
      '기업용 Copilot Business 플랜 정식 출시 (월 $19/인)',
      '조직 정책 관리 및 VPN 프록시 지원',
      '퍼블릭 코드 필터링 기능 기업 사용자 제공',
    ],
    version: 'Business',
  },
  {
    tool_slug: 'copilot',
    updated_at: '2023-03-22',
    title: 'GitHub Copilot X 발표 - 채팅 및 PR 지원',
    changes: [
      'GPT-4 기반 Copilot Chat 기능 발표',
      'PR 자동 설명 생성 기능 추가',
      '터미널 내 AI 명령어 제안 기능 도입',
      '문서화 자동 생성 기능 미리보기',
    ],
    version: 'X',
  },
  {
    tool_slug: 'copilot',
    updated_at: '2023-12-29',
    title: 'Copilot Chat 및 Enterprise 정식 출시',
    changes: [
      'GitHub Copilot Chat 일반 사용자 정식 제공',
      'GitHub Copilot Enterprise 발표 (월 $39/인)',
      '저장소 기반 맞춤형 AI 제안 기능 추가',
    ],
    version: null,
  },
  {
    tool_slug: 'copilot',
    updated_at: '2024-04-29',
    title: 'Copilot Workspace 발표',
    changes: [
      'GitHub Issue에서 풀 리퀘스트까지 end-to-end AI 지원',
      '자연어 기반 코드 계획 및 구현 워크플로우 도입',
      '멀티 파일 편집 및 코드 리뷰 AI 지원 강화',
    ],
    version: null,
  },
  {
    tool_slug: 'copilot',
    updated_at: '2025-02-19',
    title: 'Copilot 무료 플랜 출시',
    changes: [
      '무료 플랜으로 월 2,000 코드 완성 및 50 채팅 메시지 제공',
      'Claude 3.5 Sonnet 및 OpenAI o3-mini 모델 선택 지원',
      'GitHub.com에서 Copilot 직접 사용 가능',
    ],
    version: 'Free',
  },

  // ─── microsoft-designer ───
  {
    tool_slug: 'microsoft-designer',
    updated_at: '2022-10-12',
    title: 'Microsoft Designer 미리보기 출시',
    changes: [
      'AI 기반 그래픽 디자인 도구 공개 미리보기 시작',
      'DALL-E 기반 이미지 생성 및 디자인 제안 기능 제공',
      '소셜 미디어 포스트 자동 레이아웃 생성 지원',
    ],
    version: 'Preview',
  },
  {
    tool_slug: 'microsoft-designer',
    updated_at: '2023-03-21',
    title: 'Microsoft 365 통합 및 기능 확장',
    changes: [
      'Microsoft 365 구독자 우선 접근 제공',
      '커스텀 디자인 브랜드 키트 기능 추가',
      'Edge 브라우저 사이드바 통합 출시',
    ],
    version: null,
  },
  {
    tool_slug: 'microsoft-designer',
    updated_at: '2023-10-15',
    title: 'Microsoft Designer 정식 출시',
    changes: [
      '일반 사용자 대상 정식 서비스 출시',
      'DALL-E 3 모델 업그레이드로 이미지 품질 향상',
      '애니메이션 및 동영상 생성 기능 추가',
      'Windows 11 포토 앱 통합',
    ],
    version: '1.0',
  },
  {
    tool_slug: 'microsoft-designer',
    updated_at: '2024-01-15',
    title: '모바일 앱 출시 및 배경 제거 기능',
    changes: [
      'iOS 및 Android 모바일 앱 정식 출시',
      'AI 배경 제거 및 교체 기능 추가',
      'Bing Image Creator와 통합 강화',
    ],
    version: null,
  },
  {
    tool_slug: 'microsoft-designer',
    updated_at: '2024-07-01',
    title: 'Copilot+ PC 전용 기능 및 성능 개선',
    changes: [
      'Copilot+ PC에서 AI 디자인 기능 온디바이스 처리',
      '브랜드 일관성 유지를 위한 스타일 전이 기능 추가',
      '프레젠테이션 슬라이드 자동 디자인 기능 출시',
    ],
    version: null,
  },

  // ─── muapi ───
  {
    tool_slug: 'muapi',
    updated_at: '2023-04-01',
    title: 'MuAPI 베타 출시',
    changes: [
      'AI 음악 생성 REST API 베타 서비스 시작',
      '텍스트 프롬프트 기반 음악 트랙 생성 기능 제공',
      '다양한 장르 및 무드 파라미터 설정 지원',
    ],
    version: 'beta',
  },
  {
    tool_slug: 'muapi',
    updated_at: '2023-09-10',
    title: '음악 스타일 커스터마이징 및 BPM 제어 추가',
    changes: [
      'BPM, 조성, 악기 구성 세밀 조정 가능',
      'API 응답 속도 50% 향상',
      '상업적 라이선스 지원 플랜 출시',
    ],
    version: null,
  },
  {
    tool_slug: 'muapi',
    updated_at: '2024-02-20',
    title: '보컬 생성 및 가사 동기화 기능 추가',
    changes: [
      'AI 보컬 합성 및 가사 자동 생성 기능 추가',
      '생성된 음악의 MIDI 파일 내보내기 지원',
      'Webhook 기반 비동기 생성 API 출시',
    ],
    version: null,
  },
  {
    tool_slug: 'muapi',
    updated_at: '2024-08-01',
    title: '실시간 음악 스트리밍 생성 API 출시',
    changes: [
      '스트리밍 방식의 실시간 음악 생성 엔드포인트 추가',
      '짧은 지연시간의 실시간 반응형 음악 생성 지원',
      '기업용 SLA 및 전용 API 키 관리 도입',
    ],
    version: null,
  },

  // ─── musicfx ───
  {
    tool_slug: 'musicfx',
    updated_at: '2023-11-16',
    title: 'Google MusicFX 출시 - AI 음악 생성 실험',
    changes: [
      'Google Arts & Culture 실험으로 MusicFX 공개',
      '텍스트 프롬프트 기반 AI 음악 생성 기능 제공',
      'Google DeepMind의 MusicLM 모델 기반',
    ],
    version: null,
  },
  {
    tool_slug: 'musicfx',
    updated_at: '2024-01-24',
    title: 'MusicFX DJ 모드 출시',
    changes: [
      '실시간 믹싱 가능한 DJ 모드 추가',
      '두 개의 프롬프트를 블렌딩하는 크로스페이드 기능',
      '생성 음악의 루프 재생 및 BPM 조절 지원',
    ],
    version: null,
  },
  {
    tool_slug: 'musicfx',
    updated_at: '2024-05-14',
    title: 'Google I/O 2024 - MusicFX 기능 확장',
    changes: [
      'Google AI Test Kitchen에서 정식 서비스로 이전',
      '더 긴 음악 생성 시간 지원 (최대 70초)',
      '다양한 장르 및 악기 세밀 조정 옵션 추가',
    ],
    version: null,
  },
  {
    tool_slug: 'musicfx',
    updated_at: '2024-10-01',
    title: '음악 생성 품질 개선 및 스타일 확장',
    changes: [
      '음악 생성 모델 업그레이드로 자연스러운 사운드 개선',
      '클래식, 재즈, 일렉트로닉 등 장르 지원 확장',
      '사용자 피드백 기반 음악 재생성 기능 추가',
    ],
    version: null,
  },

  // ─── napkin-ai ───
  {
    tool_slug: 'napkin-ai',
    updated_at: '2024-01-10',
    title: 'Napkin AI 베타 출시',
    changes: [
      '텍스트를 비주얼 다이어그램으로 변환하는 AI 도구 베타 공개',
      '자동 인포그래픽 및 플로우차트 생성 기능 제공',
      '프레젠테이션용 비주얼 슬라이드 자동 생성 지원',
    ],
    version: 'beta',
  },
  {
    tool_slug: 'napkin-ai',
    updated_at: '2024-06-15',
    title: '커스텀 스타일 및 브랜드 키트 기능 추가',
    changes: [
      '브랜드 색상 및 폰트 적용 가능한 스타일 시스템 도입',
      '다양한 차트 유형 자동 생성 지원 확장',
      'PDF, PNG, SVG 내보내기 기능 추가',
    ],
    version: null,
  },
  {
    tool_slug: 'napkin-ai',
    updated_at: '2024-09-20',
    title: '정식 출시 및 팀 협업 기능 도입',
    changes: [
      '공개 베타 종료 및 정식 서비스 전환',
      '팀 공유 및 실시간 협업 편집 기능 추가',
      'Notion, Google Slides 내보내기 통합 지원',
    ],
    version: '1.0',
  },
  {
    tool_slug: 'napkin-ai',
    updated_at: '2025-02-01',
    title: '멀티모달 입력 및 데이터 시각화 강화',
    changes: [
      '스프레드시트 데이터 자동 차트 변환 기능 추가',
      'URL 및 PDF 콘텐츠 기반 인포그래픽 생성 지원',
      '애니메이션 비주얼 내보내기 기능 베타 출시',
    ],
    version: null,
  },

  // ─── notebooklm ───
  {
    tool_slug: 'notebooklm',
    updated_at: '2023-05-10',
    title: 'Project Tailwind (NotebookLM 전신) 발표',
    changes: [
      'Google I/O 2023에서 Project Tailwind 공개',
      '사용자 문서 기반 맞춤형 AI 어시스턴트 콘셉트 소개',
      '제한된 베타 테스터 모집 시작',
    ],
    version: null,
  },
  {
    tool_slug: 'notebooklm',
    updated_at: '2023-07-12',
    title: 'NotebookLM 미국 제한 베타 출시',
    changes: [
      'NotebookLM으로 이름 변경 후 미국 대상 베타 출시',
      'Google Docs 소스 업로드 및 AI Q&A 기능 제공',
      'Gemini 모델 기반 문서 이해 및 요약 지원',
    ],
    version: 'beta',
  },
  {
    tool_slug: 'notebooklm',
    updated_at: '2024-06-06',
    title: 'NotebookLM 글로벌 확장 및 소스 유형 추가',
    changes: [
      '전 세계 200개국 이상으로 서비스 확대',
      'PDF, 웹 URL, Google Slides 소스 추가 지원',
      'Gemini 1.5 Pro 모델로 업그레이드',
    ],
    version: null,
  },
  {
    tool_slug: 'notebooklm',
    updated_at: '2024-09-11',
    title: 'Audio Overview (AI 팟캐스트) 기능 출시',
    changes: [
      '두 AI 호스트가 대화하는 팟캐스트 형식 요약 기능 출시',
      '문서 내용을 자연스러운 대화로 변환하여 청취 가능',
      '인터넷에서 큰 화제가 된 "AI 팟캐스트" 기능',
    ],
    version: null,
  },
  {
    tool_slug: 'notebooklm',
    updated_at: '2024-10-22',
    title: 'NotebookLM Plus 및 YouTube 소스 지원',
    changes: [
      'NotebookLM Plus 유료 플랜 출시 (Google One AI Premium 포함)',
      'YouTube 영상 URL 소스로 직접 추가 지원',
      '오디오 파일 업로드 소스 지원 추가',
      '노트북당 소스 한도 상향 (최대 300개)',
    ],
    version: 'Plus',
  },

  // ─── notion-ai ───
  {
    tool_slug: 'notion-ai',
    updated_at: '2022-11-16',
    title: 'Notion AI 알파 테스트 시작',
    changes: [
      'Notion AI 기능 알파 버전 제한 사용자 대상 출시',
      '블록 기반 AI 텍스트 생성 및 요약 기능 제공',
      '영어 중심 콘텐츠 생성 지원',
    ],
    version: 'alpha',
  },
  {
    tool_slug: 'notion-ai',
    updated_at: '2023-02-22',
    title: 'Notion AI 정식 출시 (월 $10)',
    changes: [
      '모든 Notion 사용자 대상 Notion AI 정식 출시',
      '월 $10 추가 구독 플랜 적용',
      '텍스트 생성, 요약, 번역, 맞춤법 검사 기능 제공',
      '한국어 포함 다국어 지원',
    ],
    version: '1.0',
  },
  {
    tool_slug: 'notion-ai',
    updated_at: '2023-09-06',
    title: 'Notion AI Q&A 기능 출시',
    changes: [
      '워크스페이스 전체 문서 대상 AI 질의응답(Q&A) 기능 출시',
      '페이지 내용 기반 정확한 답변 및 참조 링크 제공',
      '팀 지식베이스 검색 효율 대폭 향상',
    ],
    version: null,
  },
  {
    tool_slug: 'notion-ai',
    updated_at: '2024-02-14',
    title: 'Notion AI 커넥터 및 슬랙 통합',
    changes: [
      'Slack, Google Drive 데이터 AI 검색 통합(AI Connectors)',
      '외부 앱 데이터 기반 Q&A 기능 확장',
      'Notion AI 응답 인용 및 참조 기능 강화',
    ],
    version: null,
  },
  {
    tool_slug: 'notion-ai',
    updated_at: '2024-06-20',
    title: 'Claude 3.5 Sonnet 모델 통합',
    changes: [
      'Anthropic Claude 3.5 Sonnet 모델 지원 추가',
      '긴 문서 처리 및 복잡한 질문 응답 능력 향상',
      'AI 기반 데이터베이스 자동 정리 기능 추가',
    ],
    version: null,
  },

  // ─── notta ───
  {
    tool_slug: 'notta',
    updated_at: '2020-09-01',
    title: 'Notta AI 음성 전사 서비스 출시',
    changes: [
      'AI 기반 음성-텍스트 자동 전사 서비스 정식 출시',
      '실시간 회의 녹음 및 전사 기능 제공',
      '영어 및 일본어 초기 지원',
    ],
    version: '1.0',
  },
  {
    tool_slug: 'notta',
    updated_at: '2022-03-15',
    title: '한국어 포함 다국어 지원 및 화자 구분 기능',
    changes: [
      '한국어, 중국어, 스페인어 등 다국어 전사 지원 확대',
      '화자 자동 구분(Speaker Identification) 기능 추가',
      'Zoom, Google Meet 연동 실시간 전사 지원',
    ],
    version: null,
  },
  {
    tool_slug: 'notta',
    updated_at: '2023-04-10',
    title: 'AI 요약 및 회의록 자동 생성 기능 출시',
    changes: [
      'GPT 기반 회의 내용 자동 요약 기능 추가',
      '액션 아이템 및 핵심 결정사항 자동 추출',
      '전사 텍스트 기반 AI Q&A 기능 제공',
    ],
    version: null,
  },
  {
    tool_slug: 'notta',
    updated_at: '2023-10-20',
    title: 'Notta AI 통화 봇 및 캘린더 통합',
    changes: [
      '회의 자동 참여 AI 봇(Notta Bot) 기능 출시',
      'Google 캘린더 연동으로 회의 자동 녹음 예약',
      'Salesforce, Notion 등 CRM 내보내기 통합',
    ],
    version: null,
  },
  {
    tool_slug: 'notta',
    updated_at: '2024-05-01',
    title: '영상 파일 전사 및 자막 생성 기능 추가',
    changes: [
      'MP4, MOV 등 영상 파일 자동 전사 지원',
      'SRT, VTT 자막 파일 자동 생성 및 내보내기',
      '유튜브 URL 직접 전사 기능 추가',
    ],
    version: null,
  },

  // ─── papago ───
  {
    tool_slug: 'papago',
    updated_at: '2016-08-31',
    title: 'Naver Papago 앱 정식 출시',
    changes: [
      '네이버 AI 번역 앱 Papago iOS/Android 정식 출시',
      '한국어-영어-일본어-중국어 번역 지원',
      '카메라 번역 및 음성 번역 기능 제공',
    ],
    version: '1.0',
  },
  {
    tool_slug: 'papago',
    updated_at: '2017-10-30',
    title: 'Papago 웹 서비스 및 API 출시',
    changes: [
      'papago.naver.com 웹 서비스 정식 출시',
      '개발자용 Papago 번역 API 공개',
      '신경망 기계번역(NMT) 기술 적용',
    ],
    version: null,
  },
  {
    tool_slug: 'papago',
    updated_at: '2020-06-01',
    title: '지원 언어 13개로 확대',
    changes: [
      '태국어, 인도네시아어, 힌디어 등 신규 언어 추가',
      '총 13개 언어 간 번역 지원',
      '번역 품질 개선을 위한 모델 업데이트',
    ],
    version: null,
  },
  {
    tool_slug: 'papago',
    updated_at: '2022-06-15',
    title: '문서 번역 및 웹사이트 번역 기능 강화',
    changes: [
      'PDF, Word 문서 파일 직접 번역 기능 추가',
      '웹페이지 URL 번역 기능 개선',
      'PC 웹 UI 대폭 리뉴얼',
    ],
    version: null,
  },
  {
    tool_slug: 'papago',
    updated_at: '2023-08-10',
    title: 'HyperCLOVA 기반 번역 품질 향상',
    changes: [
      '네이버 HyperCLOVA X 모델 기반 번역 품질 개선',
      '한국어 구어체 및 전문 용어 번역 정확도 향상',
      '실시간 대화 번역 기능 속도 개선',
    ],
    version: null,
  },

  // ─── pinokio ───
  {
    tool_slug: 'pinokio',
    updated_at: '2023-04-01',
    title: 'Pinokio 오픈소스 AI 브라우저 출시',
    changes: [
      '로컬 환경에서 AI 앱을 원클릭으로 설치·실행하는 Pinokio 공개',
      'Stable Diffusion, LLM 등 AI 모델 간편 설치 지원',
      'GitHub 저장소 기반 앱 탐색 및 설치 기능',
    ],
    version: '1.0',
  },
  {
    tool_slug: 'pinokio',
    updated_at: '2023-09-15',
    title: '앱 스토어 및 커뮤니티 기능 추가',
    changes: [
      'Pinokio 앱 스토어(Discover) 기능 출시',
      '커뮤니티 기여 AI 앱 스크립트 생태계 형성',
      'GPU 없는 CPU 전용 실행 지원 확대',
    ],
    version: null,
  },
  {
    tool_slug: 'pinokio',
    updated_at: '2024-01-20',
    title: '스크립트 자동화 및 멀티 앱 관리',
    changes: [
      'Pinokio Script를 통한 AI 앱 자동화 워크플로우 지원',
      '여러 AI 앱 동시 실행 및 프로세스 관리 기능',
      'Windows, macOS, Linux 크로스 플랫폼 지원 안정화',
    ],
    version: null,
  },
  {
    tool_slug: 'pinokio',
    updated_at: '2024-07-10',
    title: 'Pinokio 2.0 출시 - UI 리뉴얼',
    changes: [
      '완전히 새로운 대시보드 UI/UX로 리디자인',
      '앱 카탈로그 검색 및 필터 기능 강화',
      '설치 과정 자동화 및 의존성 관리 개선',
    ],
    version: '2.0',
  },

  // ─── playground-ai ───
  {
    tool_slug: 'playground-ai',
    updated_at: '2022-07-01',
    title: 'Playground AI 베타 출시',
    changes: [
      'Stable Diffusion 기반 이미지 생성 플랫폼 베타 공개',
      '무료 일일 이미지 생성 쿼터 제공',
      '다양한 AI 아트 스타일 프리셋 제공',
    ],
    version: 'beta',
  },
  {
    tool_slug: 'playground-ai',
    updated_at: '2023-02-14',
    title: '캔버스 기반 편집 및 인페인팅 기능 출시',
    changes: [
      '캔버스 기반 이미지 편집 인터페이스 도입',
      '이미지 특정 영역 수정하는 인페인팅 기능 추가',
      '아웃페인팅으로 이미지 영역 확장 기능 출시',
    ],
    version: null,
  },
  {
    tool_slug: 'playground-ai',
    updated_at: '2023-11-28',
    title: 'Playground v2 자체 모델 출시',
    changes: [
      'Playground 자체 개발 이미지 생성 모델 v2 출시',
      '미적 품질에서 SDXL 대비 우수한 성능 발표',
      '상업적 사용 가능한 라이선스 정책 제공',
    ],
    version: 'v2',
  },
  {
    tool_slug: 'playground-ai',
    updated_at: '2024-05-09',
    title: 'Playground v2.5 출시 - 사진 현실감 향상',
    changes: [
      'Playground v2.5 모델로 사진 현실감 및 인물 표현력 개선',
      '다양한 화면 비율 생성 지원',
      '리얼리스틱 이미지 생성 벤치마크 1위 달성',
    ],
    version: 'v2.5',
  },
  {
    tool_slug: 'playground-ai',
    updated_at: '2024-11-01',
    title: 'Playground v3 출시',
    changes: [
      'Playground v3 모델 출시로 텍스트 렌더링 능력 대폭 향상',
      '이미지 내 텍스트 정확한 표현 가능',
      '스타일 전이 및 캐릭터 일관성 유지 기능 강화',
    ],
    version: 'v3',
  },

  // ─── poe ───
  {
    tool_slug: 'poe',
    updated_at: '2022-12-21',
    title: 'Poe by Quora 비공개 베타 출시',
    changes: [
      'Quora가 개발한 AI 챗봇 플랫폼 Poe 비공개 베타 출시',
      'Claude(Anthropic) 및 GPT(OpenAI) 챗봇 통합 접근 제공',
      'iOS 앱 초기 버전 출시',
    ],
    version: 'beta',
  },
  {
    tool_slug: 'poe',
    updated_at: '2023-02-06',
    title: 'Poe 일반 공개 및 Android 앱 출시',
    changes: [
      'iOS 앱 공개 출시 및 Android 앱 추가 출시',
      'GPT-4 접근 지원 유료 구독 플랜 출시',
      '다양한 AI 모델 한 곳에서 사용 가능한 멀티봇 환경 제공',
    ],
    version: '1.0',
  },
  {
    tool_slug: 'poe',
    updated_at: '2023-03-08',
    title: '커스텀 봇 생성 기능 출시',
    changes: [
      '누구나 커스텀 AI 봇을 만들고 공유할 수 있는 기능 출시',
      '시스템 프롬프트 기반 봇 성격 및 역할 설정 지원',
      '봇 마켓플레이스 초기 버전 공개',
    ],
    version: null,
  },
  {
    tool_slug: 'poe',
    updated_at: '2023-09-27',
    title: 'Poe API 출시 및 봇 수익화 기능',
    changes: [
      '외부 LLM 서버를 Poe 봇으로 연결하는 Poe API 출시',
      '봇 크리에이터 수익화 프로그램 발표',
      '이미지 생성 봇 지원 추가',
    ],
    version: null,
  },
  {
    tool_slug: 'poe',
    updated_at: '2024-04-01',
    title: '멀티모달 및 파일 첨부 지원 확장',
    changes: [
      '이미지, PDF 파일 첨부 및 AI 분석 기능 추가',
      '웹 검색 기능 지원 봇 활성화',
      'Llama 3, Gemini Pro 등 최신 모델 통합',
    ],
    version: null,
  },
  {
    tool_slug: 'poe',
    updated_at: '2024-10-15',
    title: 'Poe 웹 검색 및 Canvas 기능 출시',
    changes: [
      '실시간 웹 검색 기반 답변 기능 정식 출시',
      '코드 및 텍스트를 미리보기로 렌더링하는 Canvas 기능 추가',
      '봇 공유 및 임베드 기능 강화',
    ],
    version: null,
  },

  // ─── recraft ───
  {
    tool_slug: 'recraft',
    updated_at: '2023-01-15',
    title: 'Recraft 베타 출시 - 벡터 AI 디자인 도구',
    changes: [
      'AI 기반 벡터 이미지 및 일러스트 생성 플랫폼 베타 출시',
      'SVG 형식 벡터 이미지 생성 지원',
      '브랜드 일관성을 위한 스타일 시스템 도입',
    ],
    version: 'beta',
  },
  {
    tool_slug: 'recraft',
    updated_at: '2023-08-10',
    title: '브랜드 키트 및 아이콘 생성 기능 추가',
    changes: [
      '브랜드 색상 및 스타일 저장하는 브랜드 키트 기능 출시',
      'UI 아이콘 세트 자동 생성 기능 추가',
      '텍스트 렌더링 이미지 생성 품질 개선',
    ],
    version: null,
  },
  {
    tool_slug: 'recraft',
    updated_at: '2024-07-01',
    title: 'Recraft 20B 모델 출시',
    changes: [
      '자체 개발 200억 파라미터 이미지 생성 모델 출시',
      '브랜드 일관성 및 텍스트 렌더링에서 업계 최고 수준',
      '이미지 스타일 전이 및 참조 이미지 기반 생성 지원',
    ],
    version: '20B',
  },
  {
    tool_slug: 'recraft',
    updated_at: '2024-10-09',
    title: 'Recraft V3 출시 - 이미지 생성 벤치마크 1위',
    changes: [
      'Recraft V3 모델 출시로 Hugging Face 이미지 생성 리더보드 1위 달성',
      'FLUX, DALL-E 3 대비 텍스트 렌더링 및 스타일 일관성 우수',
      'API를 통한 상업용 이미지 생성 지원',
    ],
    version: 'V3',
  },
  {
    tool_slug: 'recraft',
    updated_at: '2025-01-20',
    title: '영상 생성 기능 및 API 확장',
    changes: [
      '이미지-영상 변환 기능 베타 출시',
      'Replicate 및 fal.ai를 통한 API 제공 확대',
      '벡터 애니메이션 생성 기능 추가',
    ],
    version: null,
  },

  // ─── replicate ───
  {
    tool_slug: 'replicate',
    updated_at: '2021-10-01',
    title: 'Replicate 출시 - AI 모델 클라우드 플랫폼',
    changes: [
      'AI 모델을 클라우드에서 쉽게 실행하는 Replicate 서비스 출시',
      'Python, JavaScript 클라이언트 라이브러리 제공',
      'Stable Diffusion 등 오픈소스 모델 호스팅 지원',
    ],
    version: '1.0',
  },
  {
    tool_slug: 'replicate',
    updated_at: '2022-08-22',
    title: 'Stable Diffusion 공개 및 대규모 성장',
    changes: [
      'Stable Diffusion 모델 즉시 지원으로 사용자 폭발적 증가',
      '퍼블릭 모델 갤러리 기능 강화',
      '커스텀 모델 파인튜닝 기능 출시',
    ],
    version: null,
  },
  {
    tool_slug: 'replicate',
    updated_at: '2023-09-19',
    title: 'Deployments 기능 출시 - 전용 GPU 배포',
    changes: [
      '전용 GPU 리소스로 모델 배포하는 Deployments 기능 출시',
      '예측 가능한 비용 및 낮은 레이턴시의 프로덕션 배포 지원',
      '자동 스케일링 옵션 제공',
    ],
    version: null,
  },
  {
    tool_slug: 'replicate',
    updated_at: '2024-03-14',
    title: 'Cog 2.0 및 모델 학습 인프라 개선',
    changes: [
      '모델 패키징 도구 Cog 2.0 출시',
      '파인튜닝 및 학습 워크플로우 간소화',
      'FLUX.1 등 최신 이미지 생성 모델 빠른 통합',
    ],
    version: null,
  },
  {
    tool_slug: 'replicate',
    updated_at: '2025-11-15',
    title: 'MCP 서버 코드 모드 출시',
    changes: [
      'Claude AI와 연동하는 MCP(Model Context Protocol) 서버 출시',
      '코드 모드로 AI 모델 직접 호출 및 실행 지원',
      'VS Code 및 Claude Desktop 통합 간소화',
    ],
    version: null,
  },
  {
    tool_slug: 'replicate',
    updated_at: '2026-02-10',
    title: 'MCP 서버 자동 탐색 지원',
    changes: [
      '공식 MCP Registry를 통한 Replicate MCP 서버 자동 탐색 지원',
      '/.well-known/mcp/server.json 엔드포인트 추가',
      'VS Code Extensions 마켓에서 직접 설치 가능',
    ],
    version: null,
  },

  // ─── replit ───
  {
    tool_slug: 'replit',
    updated_at: '2016-12-01',
    title: 'Replit 서비스 출시',
    changes: [
      '브라우저 기반 코딩 환경 Replit(구 repl.it) 출시',
      '50개 이상의 프로그래밍 언어 실행 지원',
      '코드 공유 및 협업 기능 제공',
    ],
    version: '1.0',
  },
  {
    tool_slug: 'replit',
    updated_at: '2022-05-18',
    title: 'Ghostwriter AI 코드 자동완성 출시',
    changes: [
      'AI 기반 코드 자동완성 도구 Ghostwriter 출시',
      '컨텍스트 인식 코드 제안 및 설명 기능 제공',
      '월 $10 유료 플랜으로 제공',
    ],
    version: null,
  },
  {
    tool_slug: 'replit',
    updated_at: '2023-04-11',
    title: 'Replit AI 채팅 및 디버깅 기능 강화',
    changes: [
      'Replit AI Chat으로 코드 설명 및 디버깅 지원',
      '자연어 질문으로 코드 생성 기능 추가',
      'Replit AI를 GitHub Copilot 대안으로 포지셔닝',
    ],
    version: null,
  },
  {
    tool_slug: 'replit',
    updated_at: '2024-09-03',
    title: 'Replit Agent 정식 출시',
    changes: [
      '자연어 지시만으로 앱 전체를 구현하는 Replit Agent 출시',
      '프로젝트 계획, 코드 작성, 배포까지 자율 실행',
      '실시간 웹 미리보기 및 자동 오류 수정 지원',
    ],
    version: null,
  },
  {
    tool_slug: 'replit',
    updated_at: '2025-02-24',
    title: 'Replit Pro 플랜 출시 (월 $100)',
    changes: [
      '전문 빌더를 위한 Replit Pro 플랜 출시',
      '강화된 Agent 모드 및 크레딧 할인 혜택 제공',
      'Replit Core 플랜 가격 인하 및 협업 기능 강화',
      '최대 15명 팀 빌더 지원',
    ],
    version: 'Pro',
  },
  {
    tool_slug: 'replit',
    updated_at: '2026-03-06',
    title: 'Replit Animation - 앱 런치 비디오 생성',
    changes: [
      '앱 출시 홍보 영상을 AI로 자동 생성하는 Animation 기능 출시',
      '1,800명 이상 참여한 모바일 빌다톤 커뮤니티 성장',
      '모바일 퍼스트 앱 개발 지원 강화',
    ],
    version: null,
  },

  // ─── reweb ───
  {
    tool_slug: 'reweb',
    updated_at: '2023-06-01',
    title: 'ReWeb AI 웹사이트 빌더 출시',
    changes: [
      'AI 기반 웹사이트 자동 생성 서비스 ReWeb 출시',
      '텍스트 설명만으로 완성된 웹사이트 생성',
      'Webflow, Framer 등 호환 코드 내보내기 지원',
    ],
    version: '1.0',
  },
  {
    tool_slug: 'reweb',
    updated_at: '2023-11-10',
    title: '컴포넌트 편집 및 React 내보내기 지원',
    changes: [
      '생성된 웹사이트 구성 요소 세밀 편집 기능 추가',
      'React 및 Next.js 코드 내보내기 지원',
      '다크 모드 및 반응형 레이아웃 자동 생성',
    ],
    version: null,
  },
  {
    tool_slug: 'reweb',
    updated_at: '2024-03-20',
    title: '브랜드 기반 자동 디자인 시스템 생성',
    changes: [
      '브랜드 로고 및 색상 업로드로 일관된 디자인 자동 생성',
      '다국어 웹사이트 콘텐츠 자동 번역 생성 지원',
      '원클릭 Vercel/Netlify 배포 연동',
    ],
    version: null,
  },
  {
    tool_slug: 'reweb',
    updated_at: '2024-09-01',
    title: 'AI 랜딩 페이지 최적화 기능 추가',
    changes: [
      'A/B 테스트용 랜딩 페이지 변형 자동 생성',
      'SEO 최적화 메타데이터 자동 생성',
      '분석 대시보드 통합 및 전환율 개선 제안 기능',
    ],
    version: null,
  },

  // ─── scenario ───
  {
    tool_slug: 'scenario',
    updated_at: '2022-11-01',
    title: 'Scenario AI 게임 에셋 생성 베타 출시',
    changes: [
      '게임 개발용 AI 에셋 생성 플랫폼 Scenario 베타 출시',
      '게임 스타일 일관성 유지를 위한 커스텀 모델 파인튜닝 지원',
      '스프라이트, 캐릭터, 배경 등 게임 에셋 자동 생성',
    ],
    version: 'beta',
  },
  {
    tool_slug: 'scenario',
    updated_at: '2023-04-18',
    title: 'Scenario API 및 Unity 플러그인 출시',
    changes: [
      '게임 엔진 통합을 위한 Scenario API 공개',
      'Unity 에디터 플러그인 출시로 워크플로우 통합',
      '배치 생성 및 에셋 변형 기능 추가',
    ],
    version: null,
  },
  {
    tool_slug: 'scenario',
    updated_at: '2023-10-25',
    title: '3D 텍스처 생성 및 애니메이션 기능 추가',
    changes: [
      '3D 모델 텍스처 자동 생성 기능 베타 출시',
      '스프라이트 시트 및 애니메이션 프레임 시퀀스 생성 지원',
      'Unreal Engine 연동 플러그인 출시',
    ],
    version: null,
  },
  {
    tool_slug: 'scenario',
    updated_at: '2024-05-20',
    title: 'Scenario ControlNet 및 참조 이미지 생성',
    changes: [
      'ControlNet 기반 포즈 및 구도 제어 에셋 생성 지원',
      '참조 이미지 스타일 일관성 유지 생성 기능 강화',
      '팀 협업 에셋 라이브러리 및 에셋 버전 관리 추가',
    ],
    version: null,
  },
  {
    tool_slug: 'scenario',
    updated_at: '2024-11-15',
    title: '멀티모달 에셋 파이프라인 및 자동화 출시',
    changes: [
      '텍스트-이미지-3D 통합 에셋 생성 파이프라인 출시',
      'AI 에셋 생성 자동화 워크플로우 구성 기능 추가',
      '게임 씬 자동 배치 및 레벨 디자인 지원',
    ],
    version: null,
  },

  // ─── storytribe ───
  {
    tool_slug: 'storytribe',
    updated_at: '2023-02-01',
    title: 'StoryTribe AI 스토리텔링 플랫폼 출시',
    changes: [
      'AI 기반 인터랙티브 스토리 창작 플랫폼 출시',
      '캐릭터 설정 및 세계관 기반 스토리 자동 생성',
      '멀티플레이어 협동 스토리 창작 기능 제공',
    ],
    version: '1.0',
  },
  {
    tool_slug: 'storytribe',
    updated_at: '2023-08-15',
    title: '이미지 생성 통합 및 비주얼 스토리보드',
    changes: [
      '스토리 장면에 맞는 AI 일러스트 자동 생성 기능 추가',
      '비주얼 스토리보드로 이야기를 시각적으로 표현',
      '다양한 스토리 장르 및 판타지 세계관 템플릿 제공',
    ],
    version: null,
  },
  {
    tool_slug: 'storytribe',
    updated_at: '2024-01-20',
    title: '음성 내레이션 및 오디오북 변환 기능',
    changes: [
      'AI TTS 기반 스토리 자동 음성 내레이션 기능 추가',
      '다양한 캐릭터 목소리 선택 및 감정 표현 지원',
      '오디오북 형식 내보내기 기능 출시',
    ],
    version: null,
  },
  {
    tool_slug: 'storytribe',
    updated_at: '2024-06-10',
    title: '커뮤니티 스토리 공유 및 팬픽 기능',
    changes: [
      '창작 스토리 커뮤니티 공유 플랫폼 기능 추가',
      '다른 사용자 스토리 기반 팬픽 창작 지원',
      '스토리 열람 수 및 좋아요 기반 크리에이터 보상 시스템',
    ],
    version: null,
  },
  {
    tool_slug: 'storytribe',
    updated_at: '2024-11-01',
    title: 'AI 캐릭터 기억 및 장기 스토리 아크 관리',
    changes: [
      'AI 캐릭터가 이전 스토리 전개를 기억하는 장기 기억 기능',
      '복수 에피소드 걸친 장기 스토리 아크 관리 도구 추가',
      '스토리 일관성 자동 검사 및 교정 기능 출시',
    ],
    version: null,
  },
];

async function insertAll() {
  const results = {};
  
  // Group by tool_slug for reporting
  for (const update of toolUpdates) {
    if (!results[update.tool_slug]) {
      results[update.tool_slug] = { attempted: 0, inserted: 0, errors: [] };
    }
    results[update.tool_slug].attempted++;
  }

  // Insert all at once in batches by tool
  const slugs = [...new Set(toolUpdates.map(u => u.tool_slug))];
  
  for (const slug of slugs) {
    const items = toolUpdates.filter(u => u.tool_slug === slug);
    const { data, error } = await supabase
      .from('tool_updates')
      .insert(items)
      .select('id');
    
    if (error) {
      results[slug].errors.push(error.message);
      console.error(`[${slug}] ERROR:`, error.message);
    } else {
      results[slug].inserted = data?.length || 0;
      console.log(`[${slug}] Inserted ${data?.length || 0} records`);
    }
  }

  console.log('\n=== SUMMARY ===');
  let total = 0;
  for (const [slug, r] of Object.entries(results)) {
    console.log(`${slug}: ${r.inserted}/${r.attempted} inserted${r.errors.length ? ' | ERRORS: ' + r.errors.join(', ') : ''}`);
    total += r.inserted;
  }
  console.log(`\nTOTAL: ${total} records inserted`);
}

insertAll().catch(console.error);
