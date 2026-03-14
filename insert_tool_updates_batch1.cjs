const { createClient } = require('./node_modules/@supabase/supabase-js');

const supabase = createClient(
  'https://fmjwwyygqseownpazypt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
);

const toolUpdates = [
  // adobe-firefly
  { tool_slug: 'adobe-firefly', updated_at: '2023-03-21', title: 'Adobe Firefly 베타 출시', changes: ['텍스트-이미지 생성 기능 최초 공개 베타 제공', 'Adobe Stock 및 Creative Commons 데이터로 학습한 상업적으로 안전한 AI 모델'], version: null },
  { tool_slug: 'adobe-firefly', updated_at: '2023-06-22', title: 'Firefly Enterprise 출시', changes: ['기업용 Firefly 서비스 정식 출시', 'Mattel, IBM, Dentsu 등 주요 파트너십 체결'], version: null },
  { tool_slug: 'adobe-firefly', updated_at: '2023-09-13', title: 'Firefly 정식 출시 및 Creative Cloud 통합', changes: ['베타 종료 후 일반 사용자 대상 정식 출시', 'Photoshop Generative Fill에 Firefly 모델 통합', 'Illustrator, Premiere Pro, Express 등으로 확장'], version: 'Firefly 1' },
  { tool_slug: 'adobe-firefly', updated_at: '2024-03-18', title: 'Firefly Image 2 모델 출시', changes: ['이미지 품질 및 디테일 대폭 향상', '사진 설정(Photo Settings) 기능 추가로 전문 사진처럼 제어 가능', 'Content Credentials 지원으로 AI 생성 콘텐츠 투명성 확보'], version: 'Firefly Image 2' },
  { tool_slug: 'adobe-firefly', updated_at: '2024-09-11', title: 'Firefly Video 모델 오픈 베타', changes: ['텍스트-비디오 생성 기능 오픈 베타 공개', 'B-roll 자동 생성 및 영상 확장 기능 제공', 'Premiere Pro와 통합되어 영상 편집 워크플로우 지원'], version: 'Firefly Video' },
  { tool_slug: 'adobe-firefly', updated_at: '2025-04-10', title: 'Firefly Image 4 & 4 Ultra 출시', changes: ['최고 수준의 이미지 품질 구현', 'Ultra 버전은 복잡한 장면과 텍스트 렌더링 대폭 개선', '웹앱에서 바로 사용 가능'], version: 'Firefly Image 4' },
  { tool_slug: 'adobe-firefly', updated_at: '2025-10-14', title: 'Firefly Image 5 및 오디오 생성 기능 발표', changes: ['Adobe MAX에서 Image Model 5 공개', 'Generate Soundtrack으로 배경음악 AI 생성 지원', 'Generate Speech 기능으로 텍스트-음성 변환 추가', 'Firefly Video Editor 정식 출시'], version: 'Firefly Image 5' },

  // adobe-photoshop
  { tool_slug: 'adobe-photoshop', updated_at: '2023-05-23', title: 'Generative Fill 베타 추가', changes: ['Firefly 기반 Generative Fill 기능 베타 공개', '이미지 안에서 AI로 오브젝트 생성·삭제·변경 가능', '자연스러운 인페인팅 및 아웃페인팅 지원'], version: null },
  { tool_slug: 'adobe-photoshop', updated_at: '2023-11-01', title: 'Photoshop 25.0 출시 - AI 기능 정식 탑재', changes: ['Generative Fill 정식 버전 출시', 'Generative Expand로 캔버스 확장 기능 추가', 'Remove Tool로 복잡한 배경 오브젝트 원클릭 제거'], version: '25.0' },
  { tool_slug: 'adobe-photoshop', updated_at: '2024-04-23', title: 'AI 선택 및 조정 기능 강화', changes: ['Generative Fill에 참조 이미지(Reference Image) 기능 추가', 'Enhance Detail로 AI 기반 이미지 고해상도화', '콘텐츠 인증(Content Credentials) 자동 첨부'], version: '25.9' },
  { tool_slug: 'adobe-photoshop', updated_at: '2024-10-15', title: 'Photoshop 26.0 출시', changes: ['Generate Background 기능으로 배경 AI 생성 지원', 'Adjust Colors AI로 전체 색상 자동 보정', 'iPhone용 Photoshop 앱 출시'], version: '26.0' },
  { tool_slug: 'adobe-photoshop', updated_at: '2025-09-10', title: '차세대 AI 워크플로우 통합', changes: ['Firefly Image 4 모델로 업그레이드', 'AI 기반 스마트 오브젝트 생성 및 조정 기능 확대', '멀티 디바이스 편집 동기화 강화'], version: '27.0' },

  // aippt
  { tool_slug: 'aippt', updated_at: '2023-01-15', title: 'AIPPT 서비스 출시', changes: ['텍스트 입력만으로 PPT 자동 생성', '수백 개의 디자인 템플릿 제공', '중국어·영어 다국어 지원'], version: null },
  { tool_slug: 'aippt', updated_at: '2023-08-01', title: '테마 및 레이아웃 AI 자동화 강화', changes: ['PPT 내용에 맞는 이미지 자동 삽입 기능 추가', 'AI 기반 레이아웃 추천 기능 개선', '슬라이드 내 차트·그래프 자동 생성'], version: null },
  { tool_slug: 'aippt', updated_at: '2024-03-20', title: 'PDF·Word 문서 변환 기능 추가', changes: ['기존 PDF/Word 문서를 PPT로 자동 변환', '브랜드 키트 적용 기능 추가', '팀 협업 기능 베타 출시'], version: null },
  { tool_slug: 'aippt', updated_at: '2024-11-01', title: '멀티모달 입력 및 글로벌 서비스 확장', changes: ['음성 입력으로 PPT 생성 기능 추가', '영어·한국어 등 다국어 서비스 확장', '발표자 노트 자동 생성 기능 제공'], version: null },

  // anifusion
  { tool_slug: 'anifusion', updated_at: '2023-06-01', title: 'Anifusion 베타 출시', changes: ['AI 기반 애니메이션 이미지 생성 서비스 공개', '여러 캐릭터 이미지를 연속 프레임으로 생성', '애니메이션 스타일 특화 모델 적용'], version: null },
  { tool_slug: 'anifusion', updated_at: '2023-11-15', title: '캐릭터 일관성 유지 기능 추가', changes: ['동일 캐릭터를 다양한 포즈와 표정으로 일관성 있게 생성', 'ControlNet 통합으로 포즈 제어 기능 강화', '배경 분리 및 합성 자동화'], version: null },
  { tool_slug: 'anifusion', updated_at: '2024-07-10', title: '비디오 생성 기능 베타 공개', changes: ['정지 이미지를 짧은 애니메이션으로 변환', '커스텀 모션 경로 설정 기능 추가', '4K 출력 해상도 지원'], version: null },

  // arc
  { tool_slug: 'arc', updated_at: '2022-04-19', title: 'Arc 브라우저 베타 발표', changes: ['The Browser Company가 Arc 브라우저 공개 발표', '사이드바 기반 탭 관리 시스템 도입', 'Swift로 개발된 macOS 전용 브라우저'], version: null },
  { tool_slug: 'arc', updated_at: '2023-07-25', title: 'Arc 1.0 macOS 정식 출시', changes: ['초대장 없이 누구나 사용 가능한 퍼블릭 버전 출시', 'Spaces·Easels·Boosts 등 고유 기능 정식 제공', 'Chrome 확장 프로그램 호환'], version: '1.0' },
  { tool_slug: 'arc', updated_at: '2023-10-03', title: 'Arc for Windows 베타 출시', changes: ['Windows 사용자 대상 베타 버전 공개', 'macOS 버전과 동일한 사이드바·탭 관리 UI 제공', 'Windows 11 최적화'], version: null },
  { tool_slug: 'arc', updated_at: '2024-05-15', title: 'Arc AI 기능 강화 - Browse for Me', changes: ['AI가 웹페이지를 검색 후 요약해 주는 Browse for Me 기능 추가', '링크 미리보기 AI 요약 기능 추가', '탭 그룹 AI 자동 정리 기능 제공'], version: null },
  { tool_slug: 'arc', updated_at: '2025-02-14', title: 'Arc 개발 중단 및 Dia 전환 발표', changes: ['The Browser Company가 Arc 신규 개발 중단 발표', 'AI 네이티브 브라우저 Dia 개발에 집중', 'Arc는 Chromium 보안 업데이트만 지속 유지'], version: null },

  // bolt-new
  { tool_slug: 'bolt-new', updated_at: '2024-10-01', title: 'bolt.new 공개 출시', changes: ['StackBlitz의 AI 풀스택 웹앱 빌더 출시', '브라우저에서 바로 Node.js 환경 실행', 'Claude AI 기반 코드 생성 및 수정'], version: null },
  { tool_slug: 'bolt-new', updated_at: '2024-11-10', title: '멀티 AI 모델 지원 추가', changes: ['Claude, GPT-4, Gemini 등 여러 AI 모델 선택 가능', 'GitHub 저장소 연동 기능 추가', '프로젝트 배포 기능 강화'], version: null },
  { tool_slug: 'bolt-new', updated_at: '2025-02-01', title: '대형 프로젝트 지원 및 디자인 시스템 통합', changes: ['기존보다 1,000배 큰 프로젝트 처리 가능', '오류 자동 수정 및 리팩터링 기능 추가', '브랜드 디자인 시스템 가져오기 지원'], version: null },
  { tool_slug: 'bolt-new', updated_at: '2025-07-01', title: 'Bolt Cloud 인프라 출시', changes: ['엔터프라이즈급 호스팅·데이터베이스 내장', '사용자 인증 및 SEO 최적화 기능 기본 제공', 'Supabase·Stripe 등 서드파티 통합 간소화'], version: null },

  // canva-ai
  { tool_slug: 'canva-ai', updated_at: '2022-11-01', title: 'Magic Write 출시 (베타)', changes: ['AI 텍스트 생성 기능 Magic Write 베타 공개', '디자인 내 카피라이팅 자동화 지원', 'Canva Docs에 통합'], version: null },
  { tool_slug: 'canva-ai', updated_at: '2023-03-22', title: 'Text to Image 기능 추가', changes: ['텍스트 설명으로 이미지 자동 생성', 'Stable Diffusion 기반 이미지 생성 엔진 적용', '디자인 캔버스에 바로 삽입 가능'], version: null },
  { tool_slug: 'canva-ai', updated_at: '2023-10-04', title: 'Magic Studio 전면 출시', changes: ['Magic Studio로 AI 기능 통합 브랜드화', 'Magic Design·Magic Edit·Magic Eraser 등 AI 도구 모음 출시', 'Magic Switch로 콘텐츠 포맷 자동 변환'], version: 'Magic Studio' },
  { tool_slug: 'canva-ai', updated_at: '2024-09-17', title: 'Magic Studio 대폭 업그레이드', changes: ['Dream Lab(고품질 이미지 생성) 기능 추가', 'Canva AI로 동영상 자동 생성 기능 출시', '브랜드 키트 AI 자동 적용 강화'], version: null },
  { tool_slug: 'canva-ai', updated_at: '2025-03-01', title: 'Canva AI 에이전트 및 협업 기능 강화', changes: ['AI 에이전트가 디자인 작업을 자율적으로 수행', '팀 협업 실시간 AI 제안 기능 추가', '220만 사용자 기반으로 서비스 확대'], version: null },

  // capcut
  { tool_slug: 'capcut', updated_at: '2019-05-01', title: 'JianYing(剪映) 중국 출시', changes: ['ByteDance의 모바일 영상 편집 앱 중국 출시', '자동 자막 및 음악 동기화 기능 기본 제공', 'iOS·Android 지원'], version: null },
  { tool_slug: 'capcut', updated_at: '2020-04-01', title: 'CapCut으로 글로벌 출시', changes: ['ViaMaker에서 CapCut으로 브랜드 리뉴얼', '해외 시장 공식 진출 및 영어 지원', '틱톡 연동 편집 기능 강화'], version: null },
  { tool_slug: 'capcut', updated_at: '2022-06-01', title: '2억 명 활성 사용자 달성', changes: ['전 세계 2억 명 월간 활성 사용자 확보', '웹 버전 및 데스크탑 앱 출시', 'PC용 고급 편집 기능 추가'], version: null },
  { tool_slug: 'capcut', updated_at: '2023-06-01', title: 'AI 영상 편집 기능 본격 추가', changes: ['AI 배경 제거 및 자동 컷 편집', 'AI 텍스트-영상 스크립트 생성 기능 추가', '미국 앱스토어 2위 기록'], version: null },
  { tool_slug: 'capcut', updated_at: '2024-08-15', title: 'AI 비디오 생성 기능 출시', changes: ['텍스트 프롬프트로 영상 자동 생성', 'AI 아바타 및 클론 보이스 기능 추가', '클라우드 기반 협업 편집 기능 강화'], version: null },

  // character-ai
  { tool_slug: 'character-ai', updated_at: '2021-11-01', title: 'Character.AI 창립', changes: ['구글 LaMDA 개발자 Noam Shazeer·Daniel de Freitas가 공동 창업', '4,300만 달러 시드 투자 유치', '자체 대형언어모델(LLM) 개발 시작'], version: null },
  { tool_slug: 'character-ai', updated_at: '2022-09-16', title: '공개 베타 서비스 시작', changes: ['일반 대중 대상 베타 버전 공개', '사용자가 캐릭터를 직접 생성하고 대화 가능', '3주 만에 수십만 건의 사용자 인터랙션 기록'], version: null },
  { tool_slug: 'character-ai', updated_at: '2023-03-23', title: '1억 5천만 달러 시리즈 A 투자 유치', changes: ['Andreessen Horowitz 주도로 $150M 투자 유치', '기업 가치 10억 달러(유니콘) 달성', '서버 용량 및 모델 성능 확장'], version: null },
  { tool_slug: 'character-ai', updated_at: '2023-05-23', title: '모바일 앱 출시 (iOS·Android)', changes: ['iOS·Android 공식 앱 출시', '첫 주에 170만 건 이상 다운로드 기록', '앱 내 캐릭터 생성 기능 제공'], version: null },
  { tool_slug: 'character-ai', updated_at: '2024-08-02', title: 'Google 라이선스 계약 및 독립 운영', changes: ['Google이 기술 라이선스 계약으로 약 $27억 투자', 'Noam Shazeer 구글 복귀, 새 CEO 선임', '독립 기업으로 계속 운영 결정'], version: null },
  { tool_slug: 'character-ai', updated_at: '2024-09-05', title: '안전 기능 강화 및 서비스 개편', changes: ['청소년 보호를 위한 콘텐츠 필터 강화', '부모 통제 기능 신규 추가', '베타 버전 종료 및 새 UI 전면 개편'], version: null },

  // codev
  { tool_slug: 'codev', updated_at: '2023-09-01', title: 'CodeV AI 코딩 도구 출시', changes: ['AI 기반 자동 코드 생성 및 리뷰 기능 제공', '다양한 프로그래밍 언어 지원', '통합 개발 환경(IDE) 플러그인 제공'], version: null },
  { tool_slug: 'codev', updated_at: '2024-03-01', title: '멀티 파일 코드베이스 이해 기능 추가', changes: ['프로젝트 전체 코드베이스를 이해하여 맥락 있는 코드 생성', '버그 자동 감지 및 수정 제안 기능 강화', 'Git 변경사항 기반 코드 리뷰 자동화'], version: null },
  { tool_slug: 'codev', updated_at: '2024-09-15', title: 'AI 에이전트 모드 출시', changes: ['에이전트 모드로 복잡한 개발 작업 자율 수행', '터미널 명령 실행 및 파일 수정 자동화', 'CI/CD 파이프라인 통합 지원'], version: null },

  // comfyui
  { tool_slug: 'comfyui', updated_at: '2023-01-16', title: 'ComfyUI 최초 GitHub 공개', changes: ['노드 기반 Stable Diffusion UI 오픈소스 공개', 'comfyanonymous가 개발·배포', '기존 WebUI 대비 파이프라인 시각화 방식 도입'], version: null },
  { tool_slug: 'comfyui', updated_at: '2023-06-01', title: 'ControlNet 및 확장 노드 지원', changes: ['ControlNet 노드 통합으로 포즈·깊이 기반 이미지 생성', '커스텀 노드 생태계 확장', 'SDXL 모델 지원 추가'], version: null },
  { tool_slug: 'comfyui', updated_at: '2024-06-03', title: 'Comfy Org 설립 및 Stability AI 협력 종료', changes: ['핵심 개발자들이 Comfy Org 공식 조직 설립', 'Stability AI와의 협력 관계 종료 발표', 'ComfyUI Manager 공식 생태계 편입'], version: null },
  { tool_slug: 'comfyui', updated_at: '2024-08-07', title: 'Flux 모델 지원 추가', changes: ['Black Forest Labs의 Flux 이미지 생성 모델 지원', 'Open Model Initiative(Linux Foundation) 합류', 'NVIDIA RTX Remix와 ComfyUI 통합 발표'], version: null },
  { tool_slug: 'comfyui', updated_at: '2025-01-01', title: 'ComfyUI 데스크탑 앱 출시', changes: ['macOS·Windows용 공식 데스크탑 앱 출시', '설치 과정 간소화로 비개발자 접근성 향상', 'GitHub 스타 9만 개 돌파'], version: null },

  // consensus
  { tool_slug: 'consensus', updated_at: '2023-02-01', title: 'Consensus AI 검색 엔진 출시', changes: ['학술 논문 기반 AI 검색 엔진 공개 베타 시작', '2억 개 이상의 학술 논문 데이터베이스 검색', 'GPT-4 기반 논문 요약 및 결론 추출'], version: null },
  { tool_slug: 'consensus', updated_at: '2023-08-15', title: 'Consensus Meter 기능 출시', changes: ['특정 질문에 대한 과학적 합의 수준을 시각적으로 표시', '관련 연구의 연구 결과 집계 자동화', 'Pro 구독 플랜 출시'], version: null },
  { tool_slug: 'consensus', updated_at: '2024-04-01', title: 'GPT-4 Turbo 업그레이드 및 인용 기능 강화', changes: ['GPT-4 Turbo 모델 적용으로 요약 품질 향상', '논문 직접 인용 및 참고문헌 자동 생성', '개인화 검색 기록 저장 기능 추가'], version: null },
  { tool_slug: 'consensus', updated_at: '2024-11-01', title: 'AI 리서치 도구 확장', changes: ['연구 트렌드 분석 대시보드 추가', '팀 협업 및 공유 기능 출시', 'PubMed·Semantic Scholar 데이터 통합'], version: null },

  // copy-ai
  { tool_slug: 'copy-ai', updated_at: '2020-10-01', title: 'Copy.ai 창립 및 초기 출시', changes: ['GPT-3 기반 AI 카피라이팅 도구 출시', '마케팅 문구, 블로그 포스트, SNS 콘텐츠 자동 생성', '베타 서비스 무료 제공'], version: null },
  { tool_slug: 'copy-ai', updated_at: '2021-10-01', title: '2,900만 달러 시리즈 A 투자 유치', changes: ['Tiger Global 주도 $29M 시리즈 A 투자 유치', '팀 규모 확장 및 기능 고도화', '유료 구독 플랜 정식 출시'], version: null },
  { tool_slug: 'copy-ai', updated_at: '2023-03-01', title: 'Workflows 기능 출시', changes: ['반복 콘텐츠 작업을 자동화하는 Workflows 기능 추가', '여러 AI 생성 단계를 파이프라인으로 연결', 'SEO 최적화 콘텐츠 생성 워크플로우 제공'], version: null },
  { tool_slug: 'copy-ai', updated_at: '2024-01-15', title: 'Go-to-Market AI 플랫폼 전환', changes: ['단순 카피 생성에서 마케팅 운영 전반을 자동화하는 GTM 플랫폼으로 전환', 'CRM·마케팅 툴 연동 강화', '엔터프라이즈 전용 맞춤형 AI 에이전트 제공'], version: null },

  // creatie
  { tool_slug: 'creatie', updated_at: '2023-05-01', title: 'Creatie AI 디자인 도구 출시', changes: ['AI 기반 UI/UX 디자인 자동화 플랫폼 공개', '텍스트 설명으로 와이어프레임 및 목업 자동 생성', 'Figma 대비 AI 통합 디자인 흐름 제공'], version: null },
  { tool_slug: 'creatie', updated_at: '2023-11-01', title: '디자인-코드 변환 기능 추가', changes: ['생성된 디자인을 React/Vue 코드로 자동 변환', '디자인 토큰 자동 추출 기능 추가', '팀 협업 실시간 편집 기능 강화'], version: null },
  { tool_slug: 'creatie', updated_at: '2024-06-01', title: 'AI 컴포넌트 라이브러리 출시', changes: ['AI가 자동 추천하는 재사용 가능한 컴포넌트 라이브러리', '브랜드 가이드라인 자동 인식 및 적용', '프로토타입 인터랙션 자동 생성'], version: null },

  // deepl
  { tool_slug: 'deepl', updated_at: '2017-08-28', title: 'DeepL Translator 출시', changes: ['Linguee 팀이 개발한 신경망 기계번역 서비스 공개', '영어·독일어·프랑스어·스페인어·이탈리아어·폴란드어·네덜란드어 지원', '구글 번역·마이크로소프트 번역기 대비 높은 품질 주장'], version: null },
  { tool_slug: 'deepl', updated_at: '2018-12-05', title: '포르투갈어·러시아어 지원 추가', changes: ['포르투갈어 및 러시아어 번역 지원 시작', '총 9개 언어 페어 지원으로 확장'], version: null },
  { tool_slug: 'deepl', updated_at: '2019-09-01', title: 'Windows·macOS 데스크탑 앱 출시', changes: ['Windows와 macOS용 네이티브 데스크탑 앱 출시', '시스템 전역 단축키로 어디서든 번역 가능', 'Pro 구독 플랜 출시'], version: null },
  { tool_slug: 'deepl', updated_at: '2020-03-19', title: '중국어(간체)·일본어 지원 추가', changes: ['중국어 간체 및 일본어 번역 지원 시작', '아시아 시장 공략 본격화'], version: null },
  { tool_slug: 'deepl', updated_at: '2022-03-01', title: 'DeepL Write 출시 (베타)', changes: ['AI 기반 영문 교정 및 문체 개선 도구 DeepL Write 베타 공개', '문장 명확성, 어조, 스타일 자동 개선 제안', '독일어 지원으로 시작'], version: null },
  { tool_slug: 'deepl', updated_at: '2024-05-01', title: '시리즈 C 투자 유치 및 유니콘 등극', changes: ['$300M 시리즈 C 투자 유치, 기업가치 $20억 달성', '200만 개 이상 비즈니스 고객 확보', 'Fortune 500 기업의 주요 번역 서비스로 자리매김'], version: null },
  { tool_slug: 'deepl', updated_at: '2024-09-01', title: 'DeepL Voice 및 DeepL Agent 출시', changes: ['실시간 음성 번역 서비스 DeepL Voice 출시', 'AI 에이전트 기능 DeepL Agent 발표', '118개 언어 지원으로 확장'], version: null },

  // dify
  { tool_slug: 'dify', updated_at: '2023-03-01', title: 'Dify 오픈소스 공개', changes: ['LLM 앱 개발 플랫폼 Dify 오픈소스 공개', 'LangChain 기반 워크플로우 빌더 제공', 'GPT-4, Claude 등 다양한 LLM 모델 통합'], version: '0.1' },
  { tool_slug: 'dify', updated_at: '2023-10-01', title: 'RAG 파이프라인 및 지식베이스 기능 출시', changes: ['문서 기반 검색증강생성(RAG) 기능 추가', '사용자 데이터로 커스텀 지식베이스 구축 가능', 'GitHub 스타 빠르게 성장'], version: '0.5' },
  { tool_slug: 'dify', updated_at: '2024-04-01', title: '워크플로우 빌더 대폭 개선', changes: ['복잡한 AI 파이프라인을 시각적으로 구성하는 워크플로우 빌더 출시', '조건 분기·루프 등 고급 흐름 제어 추가', 'LLM-as-Judge 품질 평가 기능 도입'], version: '0.6' },
  { tool_slug: 'dify', updated_at: '2024-09-01', title: 'Dify 1.0 출시 및 에이전트 기능 강화', changes: ['정식 버전 1.0 출시', 'Agent 노드로 자율적 작업 수행 기능 추가', 'GitHub 6만 스타 달성, 엔터프라이즈 플랜 출시'], version: '1.0' },
  { tool_slug: 'dify', updated_at: '2025-02-14', title: 'Agent x Skills 기능 출시', changes: ['샌드박스 런타임에서 에이전트가 독립적으로 실행 가능', 'Skill Editor로 재사용 가능한 SOP 블록 생성', '협업 베타 기능(공유 편집·댓글·멘션) 추가'], version: '1.14' },

  // dora
  { tool_slug: 'dora', updated_at: '2023-01-01', title: 'Dora AI 웹사이트 빌더 출시', changes: ['텍스트 또는 피그마 디자인으로 웹사이트 자동 생성', '코딩 없이 인터랙티브 3D 웹 페이지 제작 가능', '애니메이션 및 트랜지션 자동 추가'], version: null },
  { tool_slug: 'dora', updated_at: '2023-10-01', title: '3D 애니메이션 및 파티클 효과 지원', changes: ['고품질 3D 요소 및 파티클 효과 내장', '스크롤 트리거 기반 인터랙션 자동화', 'Notion·Figma 등 외부 소스 가져오기 기능'], version: null },
  { tool_slug: 'dora', updated_at: '2024-06-01', title: 'AI 디자인 어시스턴트 강화', changes: ['텍스트 프롬프트로 전체 랜딩 페이지 자동 생성', '브랜드 색상·폰트 자동 적용', '커스텀 도메인 및 SEO 최적화 지원'], version: null },

  // fal-ai
  { tool_slug: 'fal-ai', updated_at: '2023-01-01', title: 'fal.ai 서비스 출시', changes: ['AI 모델 고속 추론 인프라 서비스 공개', 'Stable Diffusion 등 오픈소스 모델 API 제공', '밀리초 단위 초고속 이미지 생성 인프라'], version: null },
  { tool_slug: 'fal-ai', updated_at: '2023-10-01', title: 'Serverless GPU 서비스 확대', changes: ['서버리스 GPU 기반 추론 서비스 확장', 'LoRA 학습 및 배포 파이프라인 지원', '개발자 친화적 Python SDK 출시'], version: null },
  { tool_slug: 'fal-ai', updated_at: '2024-08-01', title: 'Flux 모델 최초 API 지원', changes: ['Black Forest Labs Flux.1 모델을 fal.ai에서 최초로 API 제공', 'Flux.1 [schnell]·[dev]·[pro] 버전 모두 지원', '업계 최저 지연시간 이미지 생성 달성'], version: null },
  { tool_slug: 'fal-ai', updated_at: '2025-01-01', title: 'AI 비디오 생성 모델 API 확대', changes: ['Kling, Veo 등 주요 비디오 생성 모델 API 통합', 'fal Workflows로 복잡한 AI 파이프라인 시각화 구성 가능', 'Nano Banana 고속 이미지 생성 모델 출시'], version: null },

  // felo
  { tool_slug: 'felo', updated_at: '2023-06-01', title: 'Felo AI 검색 서비스 출시', changes: ['일본에서 개발된 AI 기반 멀티언어 검색 엔진 출시', '검색 결과를 AI가 요약하여 직접 답변 제공', '한국어·일본어·영어 등 다국어 지원'], version: null },
  { tool_slug: 'felo', updated_at: '2023-12-01', title: '마인드맵 자동 생성 기능 추가', changes: ['검색 결과를 자동으로 마인드맵으로 시각화', '관련 토픽 자동 연결 및 확장 탐색', '슬라이드 자동 생성 기능 베타'], version: null },
  { tool_slug: 'felo', updated_at: '2024-06-01', title: '실시간 검색 및 PPT 자동 생성 기능 출시', changes: ['최신 뉴스 및 실시간 정보 검색 지원', '검색 내용 기반 PPT 자동 생성 기능 출시', '크롬 확장 프로그램 제공으로 접근성 강화'], version: null },

  // figma
  { tool_slug: 'figma', updated_at: '2016-09-27', title: 'Figma 1.0 공개 출시', changes: ['브라우저 기반 협업 UI 디자인 도구 정식 출시', '실시간 멀티플레이어 편집 기능 제공', '벡터 편집 및 프로토타이핑 기능 내장'], version: '1.0' },
  { tool_slug: 'figma', updated_at: '2019-04-01', title: 'FigJam 전신 기능 및 팀 라이브러리 출시', changes: ['조직 전체에서 공유 가능한 팀 라이브러리 기능 출시', '컴포넌트·스타일 중앙 관리 가능', '디자인 시스템 구축 기반 마련'], version: null },
  { tool_slug: 'figma', updated_at: '2021-04-21', title: 'FigJam 화이트보드 출시', changes: ['온라인 화이트보드 도구 FigJam 베타 출시', '스티키 노트·다이어그램·브레인스토밍 지원', '팀 협업 워크숍 진행 기능 제공'], version: null },
  { tool_slug: 'figma', updated_at: '2022-09-15', title: 'Adobe 인수 발표 ($20B)', changes: ['Adobe가 약 200억 달러에 Figma 인수 발표', '디자인 시장 역대 최대 규모 인수 시도', '개발자 및 디자이너 커뮤니티 큰 반향'], version: null },
  { tool_slug: 'figma', updated_at: '2023-12-18', title: 'Adobe 인수 최종 무산', changes: ['EU·영국 규제 당국의 반독점 우려로 인수 계약 파기', 'Adobe가 Figma에 위약금 10억 달러 지불', 'Figma 독립 기업으로 계속 운영'], version: null },
  { tool_slug: 'figma', updated_at: '2024-06-25', title: 'Config 2024: AI 기능 및 신제품 대거 발표', changes: ['Figma AI로 와이어프레임·목업 텍스트 자동 생성', 'Figma Slides 프레젠테이션 도구 출시', 'UI3 인터페이스 전면 리뉴얼'], version: null },
  { tool_slug: 'figma', updated_at: '2025-02-28', title: 'Figma IPO 및 신제품 출시', changes: ['NYSE 상장(티커: FIG), 매출 10억 달러 돌파', 'Figma Sites·Figma Make·Figma Draw 등 신제품 발표', 'Figma Weave AI로 디자인-데이터 연결 기능 추가'], version: null },

  // flux
  { tool_slug: 'flux', updated_at: '2024-08-01', title: 'FLUX.1 모델 공개 출시', changes: ['Black Forest Labs가 FLUX.1 텍스트-이미지 모델 공개', 'schnell(오픈소스)·dev(비상업)·pro(상업용) 세 가지 버전 제공', 'Stable Diffusion 개발자 출신 팀이 $3,100만 투자 유치 후 설립'], version: 'FLUX.1' },
  { tool_slug: 'flux', updated_at: '2024-08-08', title: 'Grok AI에 Flux 통합', changes: ['xAI의 Grok 챗봇에 Flux 이미지 생성 기능 통합', 'X(트위터) 프리미엄 사용자 대상 제공', '상업적 대규모 배포 첫 사례'], version: null },
  { tool_slug: 'flux', updated_at: '2024-10-01', title: 'FLUX.1 Fill·Depth·Redux 툴 출시', changes: ['인페인팅 기능 FLUX.1 Fill 출시', '깊이 제어 기능 Depth 모델 추가', '이미지 변형 기능 Redux 모델 공개'], version: 'FLUX.1 Tools' },
  { tool_slug: 'flux', updated_at: '2024-11-18', title: 'Mistral AI Le Chat과 파트너십', changes: ['Mistral AI의 Le Chat 챗봇에 Flux 이미지 생성 통합', 'Flux를 활용한 텍스트-이미지 생성 기능 내장', '유럽 AI 에코시스템 내 협력 확대'], version: null },
  { tool_slug: 'flux', updated_at: '2025-04-01', title: 'FLUX.1 Kontext 출시 - 이미지 편집 특화', changes: ['기존 이미지를 문맥 기반으로 편집하는 Kontext 모델 출시', '캐릭터 일관성 유지하며 장면 편집 가능', '텍스트 삽입 및 스타일 변환 기능 강화'], version: 'FLUX.1 Kontext' },
  { tool_slug: 'flux', updated_at: '2025-11-25', title: 'FLUX.2 모델 시리즈 출시', changes: ['차세대 FLUX.2 모델 시리즈 정식 출시', '이전 버전 대비 이미지 품질 및 텍스트 렌더링 개선', 'Pro 버전 API 상업 서비스 강화'], version: 'FLUX.2' },
];

async function insertAll() {
  const results = {};
  
  // Group by tool_slug
  const byTool = {};
  for (const record of toolUpdates) {
    if (!byTool[record.tool_slug]) byTool[record.tool_slug] = [];
    byTool[record.tool_slug].push(record);
  }
  
  console.log(`Total records to insert: ${toolUpdates.length}`);
  console.log('Tools:', Object.keys(byTool).join(', '));
  
  // Insert in batches of 20
  const batchSize = 20;
  for (let i = 0; i < toolUpdates.length; i += batchSize) {
    const batch = toolUpdates.slice(i, i + batchSize);
    const { data, error } = await supabase
      .from('tool_updates')
      .insert(batch)
      .select('id, tool_slug');
    
    if (error) {
      console.error(`Error inserting batch ${i}-${i+batchSize}:`, error.message);
      // Try one by one
      for (const record of batch) {
        const { data: d, error: e } = await supabase
          .from('tool_updates')
          .insert(record)
          .select('id, tool_slug');
        if (e) {
          console.error(`Failed: ${record.tool_slug} - ${record.title}: ${e.message}`);
        } else {
          results[record.tool_slug] = (results[record.tool_slug] || 0) + 1;
        }
      }
    } else {
      for (const row of data) {
        results[row.tool_slug] = (results[row.tool_slug] || 0) + 1;
      }
      console.log(`Batch ${Math.floor(i/batchSize)+1} inserted: ${data.length} records`);
    }
  }
  
  console.log('\n=== Insertion Results ===');
  const tools = Object.keys(byTool);
  let total = 0;
  for (const tool of tools) {
    const inserted = results[tool] || 0;
    const expected = byTool[tool].length;
    console.log(`${tool}: ${inserted}/${expected} records`);
    total += inserted;
  }
  console.log(`\nTotal inserted: ${total}/${toolUpdates.length}`);
}

insertAll().catch(console.error);
