import { createClient } from './node_modules/@supabase/supabase-js/dist/index.mjs';

const supabase = createClient(
  'https://fmjwwyygqseownpazypt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
);

const updates = [
  // ==================== supervision ====================
  {
    tool_slug: 'supervision',
    updated_at: '2023-03-20',
    title: 'supervision 초기 공개 릴리스',
    version: '0.1.0',
    changes: [
      'Roboflow의 컴퓨터 비전 유틸리티 라이브러리 supervision 첫 공개 버전 출시',
      'BoundingBoxAnnotator, MaskAnnotator 등 기본 어노테이터 포함',
      'YOLO, SAM 등 주요 모델의 감지 결과를 통합하는 Detections 클래스 제공',
    ],
  },
  {
    tool_slug: 'supervision',
    updated_at: '2023-10-12',
    title: 'ByteTrack 통합 및 추적 기능 추가',
    version: '0.14.0',
    changes: [
      'ByteTrack 알고리즘 기반 객체 추적(sv.ByteTrack) 지원 추가',
      'TraceAnnotator로 추적 궤적 시각화 기능 제공',
      'VideoSink를 통한 처리 영상 저장 유틸리티 추가',
      'SAHI(Small Object Detection) 슬라이싱 추론 지원',
    ],
  },
  {
    tool_slug: 'supervision',
    updated_at: '2024-02-08',
    title: '다양한 어노테이터 및 CSVSink/JSONSink 추가',
    version: '0.18.0',
    changes: [
      'CSVSink, JSONSink를 통한 감지 결과 파일 저장 기능 추가',
      'HaloAnnotator, PercentageBarAnnotator 등 신규 어노테이터 다수 추가',
      'supervision Cookbooks 오픈소스 예제 모음 공개',
      'Ultralytics, Transformers, RF-DETR 모델 통합 개선',
    ],
  },
  {
    tool_slug: 'supervision',
    updated_at: '2024-06-18',
    title: '키포인트 감지 및 VLM 지원 추가',
    version: '0.22.0',
    changes: [
      '키포인트(Keypoint) 감지 결과를 위한 KeyPoints 클래스 및 어노테이터 추가',
      'GPT-4V, LLaVA 등 VLM(비전 언어 모델) 출력 파싱 지원',
      'InferenceSlicer 성능 개선 및 병렬 처리 지원',
    ],
  },
  {
    tool_slug: 'supervision',
    updated_at: '2024-11-20',
    title: '세그멘테이션 및 유틸리티 확장',
    version: '0.25.0',
    changes: [
      'SAM2 세그멘테이션 모델 통합 지원',
      'sv.Detections.from_vlm으로 다양한 VLM 출력 파싱 통합',
      'PolygonZone 멀티 존 감지 기능 개선',
      'CLIP 기반 분류 통합 유틸리티 추가',
    ],
  },
  {
    tool_slug: 'supervision',
    updated_at: '2025-02-06',
    title: 'filter_segments_by_distance 및 퍼지 매칭 추가',
    version: '0.27.0',
    changes: [
      'filter_segments_by_distance: 세그멘테이션 마스크의 불필요한 연결 성분 제거 기능 추가',
      'sv.edit_distance로 Levenshtein 문자열 거리 계산 지원',
      'sv.fuzzy_match_index로 목록에서 근접 문자열 탐색 기능 추가',
      'Qwen3-VL 모델 지원 추가 (from_vlm)',
      'sv.tint_image, sv.grayscale_image 이미지 유틸리티 함수 추가',
    ],
  },

  // ==================== surfer-seo ====================
  {
    tool_slug: 'surfer-seo',
    updated_at: '2019-06-01',
    title: 'Surfer SEO 초기 출시',
    version: null,
    changes: [
      'SERP 분석 기반 콘텐츠 최적화 도구 Surfer SEO 공개 출시',
      '경쟁사 페이지 분석을 통한 키워드 밀도 및 구조 가이드 제공',
      '콘텐츠 점수(Content Score) 시스템 도입',
    ],
  },
  {
    tool_slug: 'surfer-seo',
    updated_at: '2021-06-15',
    title: 'Content Editor 출시',
    version: null,
    changes: [
      '실시간 SEO 점수를 확인하며 작성할 수 있는 Content Editor 도입',
      'Google Docs 및 WordPress 플러그인 연동 지원',
      'NLP 기반 관련 키워드 및 구문 추천 기능 추가',
    ],
  },
  {
    tool_slug: 'surfer-seo',
    updated_at: '2022-04-20',
    title: 'Grow Flow 기능 출시',
    version: null,
    changes: [
      'Grow Flow: 매주 맞춤 SEO 성장 과제를 제안하는 자동화 기능 출시',
      '내부 링크 추천 기능 강화',
      'Google Search Console 직접 연동 지원',
    ],
  },
  {
    tool_slug: 'surfer-seo',
    updated_at: '2023-03-10',
    title: 'AI 콘텐츠 생성 기능 추가',
    version: null,
    changes: [
      'AI Article Writer: SEO 최적화된 초안을 자동 생성하는 기능 출시',
      'GPT-4 기반 콘텐츠 생성 파이프라인 도입',
      'Topical Map 기능 베타 출시 - 주제 클러스터 전략 수립 지원',
    ],
  },
  {
    tool_slug: 'surfer-seo',
    updated_at: '2024-02-01',
    title: 'AI 기능 전면 강화 업데이트',
    version: null,
    changes: [
      'Surfer AI 2.0: 향상된 AI 글쓰기 엔진으로 업그레이드',
      '브랜드 보이스 설정을 통한 맞춤 톤 적용 기능 추가',
      'Humanize 기능으로 AI 생성 텍스트의 자연스러움 개선',
      '다국어 콘텐츠 최적화 지원 언어 확대',
    ],
  },

  // ==================== synthesia ====================
  {
    tool_slug: 'synthesia',
    updated_at: '2020-10-01',
    title: 'Synthesia 서비스 공식 출시',
    version: null,
    changes: [
      'AI 아바타를 활용한 기업용 영상 제작 플랫폼 출시',
      '40개 이상 언어 지원으로 다국어 영상 제작 가능',
      '브라우저 기반 인터페이스로 별도 영상 편집 소프트웨어 불필요',
    ],
  },
  {
    tool_slug: 'synthesia',
    updated_at: '2022-05-11',
    title: '커스텀 AI 아바타 기능 출시',
    version: null,
    changes: [
      '개인 맞춤형 AI 아바타 생성 기능(Custom Avatar) 출시',
      '기업 브랜드 아바타 제작 지원',
      '아바타 표정 및 제스처 개선',
    ],
  },
  {
    tool_slug: 'synthesia',
    updated_at: '2023-06-20',
    title: 'AI 스크린 레코더 및 미디어 라이브러리 추가',
    version: null,
    changes: [
      'AI Screen Recorder로 화면 녹화 후 자동 영상 편집 기능 출시',
      'Shutterstock 제휴 미디어 라이브러리 통합',
      '템플릿 갤러리 대폭 확장 (100+ 신규 템플릿)',
    ],
  },
  {
    tool_slug: 'synthesia',
    updated_at: '2024-01-15',
    title: '실시간 AI 아바타 베타 출시',
    version: null,
    changes: [
      '실시간(Real-time) AI 아바타 스트리밍 기능 베타 공개',
      'Interactive Avatar: 사용자 입력에 반응하는 대화형 아바타 출시',
      '1080p 고화질 영상 출력 지원',
    ],
  },
  {
    tool_slug: 'synthesia',
    updated_at: '2024-09-10',
    title: 'Synthesia 2.0 출시',
    version: '2.0',
    changes: [
      'Synthesia 2.0: 전면 재설계된 영상 편집 인터페이스 공개',
      '감정 표현이 강화된 Expressive Avatars 출시',
      'AI 영상 번역 기능 지원 언어 140개 이상으로 확대',
      'Collaboration 기능으로 팀 공동 편집 지원',
    ],
  },

  // ==================== tldraw ====================
  {
    tool_slug: 'tldraw',
    updated_at: '2021-11-23',
    title: 'tldraw 초기 공개',
    version: null,
    changes: [
      '무한 캔버스 기반 드로잉 툴 tldraw.com 공개 출시',
      '손으로 그린 듯한 스타일의 다이어그램 및 스케치 지원',
      '실시간 협업(멀티플레이어) 기능 포함',
    ],
  },
  {
    tool_slug: 'tldraw',
    updated_at: '2024-02-15',
    title: 'tldraw v2.0 안정 버전 출시',
    version: '2.0.0',
    changes: [
      'tldraw SDK v2.0 정식 출시 (오픈소스 MIT 라이선스)',
      '개발자를 위한 임베딩 가능한 화이트보드 컴포넌트 제공',
      '새로운 동기화(sync) 서버 아키텍처 도입',
      'React 기반 커스텀 Shape API 지원',
    ],
  },
  {
    tool_slug: 'tldraw',
    updated_at: '2024-07-22',
    title: 'tldraw v3.0: 새 라이선스 및 딥 링크 출시',
    version: '3.0.0',
    changes: [
      '새로운 tldraw 상용 라이선스 모델 도입',
      '딥 링크(Deep Link) 지원으로 특정 캔버스 위치 공유 가능',
      '커스텀 임베드(Custom Embeds) 기능 추가',
      '서버 사이드 캔버스 업데이트 API 제공',
    ],
  },
  {
    tool_slug: 'tldraw',
    updated_at: '2024-12-05',
    title: 'tldraw v4.0: 스타터 킷 및 접근성 개선',
    version: '4.0.0',
    changes: [
      'Starter Kits 도입으로 신규 프로젝트 시작 간소화',
      'WCAG 2.2 AA 접근성 기준 준수',
      '라이선스 업데이트 및 엔터프라이즈 플랜 개선',
    ],
  },
  {
    tool_slug: 'tldraw',
    updated_at: '2025-02-18',
    title: 'tldraw v4.3: 성능 대폭 향상',
    version: '4.3.0',
    changes: [
      'Shape 인디케이터를 SVG에서 2D 캔버스 렌더링으로 전환 (최대 25배 빠른 렌더링)',
      '빠른 줌 내비게이션(Quick Zoom) 기능 추가',
      'SQLite 기반 동기화 스토리지 지원',
      'Fill 스타일 드롭다운 UI 개선',
      'R-트리 공간 인덱싱으로 대형 캔버스 성능 향상',
    ],
  },

  // ==================== together-ai ====================
  {
    tool_slug: 'together-ai',
    updated_at: '2022-12-01',
    title: 'Together AI 창립 및 연구 시작',
    version: null,
    changes: [
      'Vipul Ved Prakash, Ce Zhang 등이 Together AI 창립',
      '분산 AI 인프라 및 오픈소스 모델 연구 시작',
      'FlashAttention 등 고성능 추론 최적화 연구 착수',
    ],
  },
  {
    tool_slug: 'together-ai',
    updated_at: '2023-06-14',
    title: 'Together Inference API 공개 출시',
    version: null,
    changes: [
      'Together Inference: 오픈소스 LLM 통합 API 서비스 공개',
      'Llama 2, Mistral, CodeLlama 등 주요 오픈소스 모델 지원',
      '단일 API로 다수 모델 접근 가능한 플랫폼 제공',
    ],
  },
  {
    tool_slug: 'together-ai',
    updated_at: '2023-10-25',
    title: '파인튜닝 API 출시',
    version: null,
    changes: [
      'Fine-tuning API: 오픈소스 모델 맞춤 학습 서비스 출시',
      'LoRA 기반 효율적 파인튜닝 지원',
      'Together Cloud GPU 인프라 기반 학습 제공',
    ],
  },
  {
    tool_slug: 'together-ai',
    updated_at: '2024-04-10',
    title: 'FlashAttention-3 연구 발표 및 추론 성능 개선',
    version: null,
    changes: [
      'FlashAttention-3 연구 논문 공개 (H100 GPU 최적화)',
      '추론 속도 최대 2배 향상',
      'Mixtral, DBRX 등 대형 MoE 모델 지원 추가',
    ],
  },
  {
    tool_slug: 'together-ai',
    updated_at: '2024-09-18',
    title: 'Dedicated Endpoints 및 엔터프라이즈 기능 출시',
    version: null,
    changes: [
      'Dedicated Container Inference: 전용 엔드포인트 서비스 출시',
      '엔터프라이즈 SLA 및 보안 강화 옵션 제공',
      'Together AI Native Cloud 플랫폼 확장',
      '이미지 생성 모델 (Flux, SDXL 등) 지원 추가',
    ],
  },

  // ==================== tost-ai ====================
  {
    tool_slug: 'tost-ai',
    updated_at: '2022-09-01',
    title: 'Tost.ai 서비스 출시',
    version: null,
    changes: [
      'GPU 클라우드 렌더링 및 AI 추론 서비스 tost.ai 출시',
      'Stable Diffusion 등 이미지 생성 모델 API 제공',
      '사용한 만큼 지불하는 종량제 GPU 크레딧 시스템 도입',
    ],
  },
  {
    tool_slug: 'tost-ai',
    updated_at: '2023-04-15',
    title: '배치 처리 및 대용량 AI 작업 지원',
    version: null,
    changes: [
      '대규모 배치 이미지 생성 작업 처리 지원',
      'ControlNet, LoRA 등 확장 모듈 지원 추가',
      'API 응답 속도 및 안정성 개선',
    ],
  },
  {
    tool_slug: 'tost-ai',
    updated_at: '2023-11-20',
    title: '영상 생성 모델 지원 추가',
    version: null,
    changes: [
      'AI 영상 생성 모델 지원 (AnimateDiff 등)',
      '커스텀 모델 업로드 및 실행 기능 제공',
      '처리 대기열 및 작업 상태 모니터링 대시보드 개선',
    ],
  },
  {
    tool_slug: 'tost-ai',
    updated_at: '2024-06-10',
    title: 'ComfyUI 워크플로우 지원 강화',
    version: null,
    changes: [
      'ComfyUI 워크플로우 직접 실행 지원',
      'SDXL, Flux 등 최신 이미지 생성 모델 통합',
      '팀 협업을 위한 워크스페이스 기능 추가',
    ],
  },

  // ==================== transformers ====================
  {
    tool_slug: 'transformers',
    updated_at: '2019-10-09',
    title: 'pytorch-transformers → transformers 라이브러리 공개',
    version: '2.0.0',
    changes: [
      'Hugging Face Transformers 2.0으로 명칭 변경 및 TensorFlow 지원 추가',
      'BERT, GPT-2, RoBERTa 등 주요 Transformer 모델 통합',
      '모델 허브(Model Hub) 연동으로 사전학습 가중치 간편 다운로드',
    ],
  },
  {
    tool_slug: 'transformers',
    updated_at: '2021-06-01',
    title: 'v4.7: CLIP, ViT 등 멀티모달 모델 지원',
    version: '4.7.0',
    changes: [
      'CLIP(이미지-텍스트 대조 모델) 공식 지원 추가',
      'ViT(Vision Transformer) 이미지 분류 모델 지원',
      'Trainer API 개선으로 분산 학습 설정 간소화',
    ],
  },
  {
    tool_slug: 'transformers',
    updated_at: '2022-11-29',
    title: 'v4.25: Whisper, OPT 모델 추가',
    version: '4.25.0',
    changes: [
      'OpenAI Whisper 음성 인식 모델 지원 추가',
      'Meta OPT 대형 언어 모델 통합',
      'Pipeline API에서 자동 음성 인식(ASR) 태스크 지원 강화',
    ],
  },
  {
    tool_slug: 'transformers',
    updated_at: '2023-07-19',
    title: 'v4.31: Llama 2 공식 지원',
    version: '4.31.0',
    changes: [
      'Meta Llama 2 시리즈 모델 공식 지원 (7B, 13B, 70B)',
      'CodeLlama 코드 생성 모델 통합',
      '4-bit 양자화(bitsandbytes) 통합으로 메모리 효율 향상',
    ],
  },
  {
    tool_slug: 'transformers',
    updated_at: '2024-01-31',
    title: 'v4.37: Mistral, Mixtral MoE 모델 지원',
    version: '4.37.0',
    changes: [
      'Mistral 7B, Mixtral 8x7B MoE 모델 공식 지원',
      'FlashAttention-2 통합으로 long-context 추론 속도 향상',
      'AWQ 양자화 지원 추가',
    ],
  },
  {
    tool_slug: 'transformers',
    updated_at: '2025-03-04',
    title: 'v4.50: EuroBERT, VibeVoice ASR 추가',
    version: '4.50.0',
    changes: [
      'EuroBERT: 유럽 다국어 지원 양방향 인코더 모델 추가 (최대 8192 토큰)',
      'VibeVoice ASR 음성 인식 모델 지원',
      'Qwen3-VL 비전 언어 모델 통합',
      '1M+ 모델 체크포인트가 Hugging Face Hub에서 지원',
    ],
  },

  // ==================== tripo ====================
  {
    tool_slug: 'tripo',
    updated_at: '2024-01-15',
    title: 'Tripo3D 플랫폼 출시',
    version: null,
    changes: [
      'AI 기반 3D 모델 생성 플랫폼 Tripo3D 공개 출시',
      '텍스트 및 이미지 입력으로 3D 에셋 자동 생성',
      '평균 8초 내 고품질 3D 메시 생성 가능',
    ],
  },
  {
    tool_slug: 'tripo',
    updated_at: '2024-03-05',
    title: 'TripoSR 오픈소스 모델 공개',
    version: null,
    changes: [
      'Stability AI와 공동 개발한 TripoSR 오픈소스 3D 생성 모델 공개',
      '단일 이미지에서 0.5초 내 3D 모델 생성 가능',
      'Hugging Face를 통해 모델 가중치 공개',
    ],
  },
  {
    tool_slug: 'tripo',
    updated_at: '2024-07-22',
    title: 'Tripo API 및 3D 리깅 기능 출시',
    version: null,
    changes: [
      '개발자를 위한 Tripo API 공개 출시',
      'AI 자동 리깅(Rigging) 기능으로 3D 캐릭터 애니메이션 지원',
      'PBR 텍스처 자동 생성 기능 추가',
    ],
  },
  {
    tool_slug: 'tripo',
    updated_at: '2024-12-10',
    title: 'Tripo v2.0: 품질 및 속도 대폭 개선',
    version: '2.0',
    changes: [
      'Tripo v2.0 출시: 기하학적 정확도 및 텍스처 품질 크게 향상',
      '멀티뷰(Multi-view) 이미지 입력 지원으로 정확도 개선',
      'GLB, FBX, USDZ 등 다양한 3D 포맷 내보내기 지원',
      '게임 엔진(Unity, Unreal) 플러그인 제공',
    ],
  },

  // ==================== udio ====================
  {
    tool_slug: 'udio',
    updated_at: '2024-04-10',
    title: 'Udio 공개 베타 출시',
    version: null,
    changes: [
      'AI 음악 생성 플랫폼 Udio 공개 베타 출시',
      '텍스트 프롬프트로 다양한 장르의 음악 생성 가능',
      '보컬 포함 완성된 곡 생성 지원 (최대 2분)',
    ],
  },
  {
    tool_slug: 'udio',
    updated_at: '2024-06-18',
    title: '곡 확장 및 편집 기능 추가',
    version: null,
    changes: [
      '생성된 음악 구간 확장(Extend) 기능 추가',
      '인트로, 아웃트로, 브릿지 등 구간별 편집 지원',
      '맞춤 가사 입력 기능 추가',
    ],
  },
  {
    tool_slug: 'udio',
    updated_at: '2024-09-25',
    title: 'Udio API 출시 및 음질 개선',
    version: null,
    changes: [
      '개발자용 Udio API 출시',
      '오디오 품질 및 음악 구조 일관성 개선',
      '곡 리믹스 및 커버 생성 기능 베타 공개',
    ],
  },
  {
    tool_slug: 'udio',
    updated_at: '2025-01-20',
    title: '음악 스타일 전환 및 장르 혼합 기능 추가',
    version: null,
    changes: [
      '스타일 전환(Style Transfer) 기능으로 기존 곡의 장르 변경 가능',
      '장르 혼합(Genre Blending) 프롬프트 지원 강화',
      '모바일 앱 출시 (iOS/Android)',
    ],
  },

  // ==================== ugic ====================
  {
    tool_slug: 'ugic',
    updated_at: '2022-04-01',
    title: 'ugic 지도 제작 플랫폼 출시',
    version: null,
    changes: [
      'AI 기반 인터랙티브 지도 제작 플랫폼 ugic 공개',
      '코딩 없이 데이터 시각화 지도 생성 가능',
      '다양한 지도 스타일 및 레이어 템플릿 제공',
    ],
  },
  {
    tool_slug: 'ugic',
    updated_at: '2023-02-15',
    title: 'AI 지도 생성 및 데이터 분석 기능 추가',
    version: null,
    changes: [
      '자연어 입력으로 지도 자동 생성 기능(AI Map Creator) 추가',
      'CSV, GeoJSON 데이터 직접 업로드 및 지도화 지원',
      '지역 분석 및 열지도(Heatmap) 기능 추가',
    ],
  },
  {
    tool_slug: 'ugic',
    updated_at: '2023-10-05',
    title: '협업 및 공유 기능 강화',
    version: null,
    changes: [
      '팀 협업을 위한 실시간 공동 편집 기능 출시',
      '공개 지도 임베딩 코드 생성 지원',
      'API를 통한 지도 데이터 연동 기능 추가',
    ],
  },
  {
    tool_slug: 'ugic',
    updated_at: '2024-05-20',
    title: '3D 지도 시각화 및 AI 인사이트 기능 추가',
    version: null,
    changes: [
      '3D 지형 및 빌딩 시각화 지원',
      'AI 기반 지역 데이터 인사이트 자동 분석 기능 추가',
      '모바일 반응형 지도 뷰어 개선',
    ],
  },

  // ==================== uizard ====================
  {
    tool_slug: 'uizard',
    updated_at: '2020-09-01',
    title: 'Uizard 공개 출시',
    version: null,
    changes: [
      'AI 기반 UI 디자인 자동화 도구 Uizard 정식 출시',
      '손으로 그린 스케치를 디지털 와이어프레임으로 자동 변환',
      '비개발자도 사용 가능한 드래그&드롭 UI 편집기 제공',
    ],
  },
  {
    tool_slug: 'uizard',
    updated_at: '2022-11-08',
    title: 'AI 테마 생성 및 컴포넌트 라이브러리 확장',
    version: null,
    changes: [
      'AI 기반 컬러 팔레트 및 UI 테마 자동 생성 기능 추가',
      'iOS, Android, Web 플랫폼별 디자인 컴포넌트 라이브러리 대폭 확장',
      '협업을 위한 실시간 다중 편집자 기능 개선',
    ],
  },
  {
    tool_slug: 'uizard',
    updated_at: '2023-05-16',
    title: 'Autodesigner: 텍스트로 앱 UI 생성 기능 출시',
    version: null,
    changes: [
      'Autodesigner: 텍스트 설명만으로 다중 화면 앱 UI 자동 생성',
      '프롬프트 기반 화면 레이아웃 및 컨텐츠 자동 배치',
      'GPT-4 연동으로 UI 개선 제안 기능 추가',
    ],
  },
  {
    tool_slug: 'uizard',
    updated_at: '2024-01-22',
    title: '스크린샷 → 편집 가능한 디자인 변환 기능 출시',
    version: null,
    changes: [
      'Screenshot to Design: 앱/웹 스크린샷을 편집 가능한 Uizard 프로젝트로 변환',
      'AI 기반 디자인 레이아웃 자동 인식 및 분류',
      'Figma 디자인 파일 가져오기(Import) 지원',
    ],
  },
  {
    tool_slug: 'uizard',
    updated_at: '2024-08-12',
    title: 'Uizard AI 전면 업그레이드',
    version: null,
    changes: [
      'AI 코파일럿(Copilot): 실시간 디자인 제안 및 자동 수정 기능 강화',
      '컴포넌트 간 스마트 오토레이아웃 지원',
      '프로토타입 인터랙션 자동 생성 기능 추가',
    ],
  },

  // ==================== v0-dev ====================
  {
    tool_slug: 'v0-dev',
    updated_at: '2023-09-28',
    title: 'v0 알파 출시',
    version: null,
    changes: [
      'Vercel의 AI UI 생성 도구 v0 알파 버전 출시',
      '텍스트 프롬프트로 React/Next.js UI 컴포넌트 자동 생성',
      'shadcn/ui 기반 Tailwind CSS 스타일 코드 출력',
    ],
  },
  {
    tool_slug: 'v0-dev',
    updated_at: '2023-12-13',
    title: 'v0 공개 베타 출시',
    version: null,
    changes: [
      'v0 공개 베타: 누구나 사용 가능하도록 접근 개방',
      '생성 결과에서 직접 코드 편집 기능 추가',
      'UI 변형(Variant) 여러 옵션 생성 후 선택 기능 제공',
    ],
  },
  {
    tool_slug: 'v0-dev',
    updated_at: '2024-06-11',
    title: 'v0 정식 출시 (GA)',
    version: null,
    changes: [
      'v0 정식 출시 및 월정액 구독 플랜 제공',
      '이미지 업로드로 UI 재현 기능 추가',
      'Next.js 프로젝트 직접 연동 및 배포 지원',
    ],
  },
  {
    tool_slug: 'v0-dev',
    updated_at: '2024-10-22',
    title: 'v0 API 및 멀티파일 지원',
    version: null,
    changes: [
      'v0 API 출시로 외부 애플리케이션 연동 가능',
      '멀티파일 프로젝트 생성 및 편집 지원',
      'Node.js 백엔드 코드 생성 기능 추가',
      'Claude 3.5 Sonnet 모델 기반 생성 품질 향상',
    ],
  },
  {
    tool_slug: 'v0-dev',
    updated_at: '2025-02-05',
    title: 'v0 채팅 기반 반복 편집 및 배포 강화',
    version: null,
    changes: [
      '채팅 기반 반복 수정으로 더욱 정교한 UI 구현 가능',
      'Vercel 원클릭 배포 통합 강화',
      '디자인 시스템 커스터마이징 지원',
    ],
  },

  // ==================== veed ====================
  {
    tool_slug: 'veed',
    updated_at: '2019-01-15',
    title: 'VEED.IO 서비스 출시',
    version: null,
    changes: [
      '브라우저 기반 온라인 영상 편집 서비스 VEED.IO 출시',
      '자막 추가, 트리밍, 합치기 등 기본 편집 기능 제공',
      '소셜 미디어용 영상 포맷 내보내기 지원',
    ],
  },
  {
    tool_slug: 'veed',
    updated_at: '2021-08-10',
    title: 'AI 자동 자막 기능 출시',
    version: null,
    changes: [
      'AI 음성 인식 기반 자동 자막 생성 기능 출시',
      '100개 이상 언어 자막 지원',
      '자막 스타일 커스터마이징 및 번역 기능 추가',
    ],
  },
  {
    tool_slug: 'veed',
    updated_at: '2022-11-15',
    title: 'AI 아바타 및 텍스트-투-비디오 기능 추가',
    version: null,
    changes: [
      'AI 아바타를 활용한 프레젠테이션 영상 제작 기능 출시',
      '텍스트 스크립트로 AI 보이스오버 자동 생성',
      '배경 제거(Background Remove) AI 기능 추가',
    ],
  },
  {
    tool_slug: 'veed',
    updated_at: '2023-10-18',
    title: 'AI 영상 생성 및 편집 기능 대폭 강화',
    version: null,
    changes: [
      'AI Video Translate: 영상 내 음성을 다국어로 자동 번역 및 더빙',
      'Eye Contact 보정: AI로 카메라 시선 자동 교정',
      'AI Magic Cut: 영상에서 침묵 구간 자동 제거',
    ],
  },
  {
    tool_slug: 'veed',
    updated_at: '2024-05-08',
    title: 'VEED 2.0 및 스튜디오 기능 출시',
    version: '2.0',
    changes: [
      'VEED 2.0: 전면 재설계된 편집 인터페이스 공개',
      'ElevenLabs 음성 합성 통합으로 자연스러운 AI 보이스 제공',
      '팀 브랜드 킷(Brand Kit) 관리 기능 추가',
      '화면 녹화 + AI 편집 워크플로우 출시',
    ],
  },

  // ==================== vidu ====================
  {
    tool_slug: 'vidu',
    updated_at: '2024-04-27',
    title: 'Vidu AI 영상 생성 플랫폼 출시',
    version: null,
    changes: [
      '중국 Shengshu Technology의 AI 영상 생성 플랫폼 Vidu 공개',
      '텍스트 및 이미지 기반 16초 HD 영상 생성 지원',
      '높은 일관성과 역동적인 카메라 무브먼트 구현',
    ],
  },
  {
    tool_slug: 'vidu',
    updated_at: '2024-09-10',
    title: 'Vidu 1.5 업데이트: 품질 및 길이 향상',
    version: '1.5',
    changes: [
      'Vidu 1.5: 영상 품질 및 모션 일관성 대폭 개선',
      '최대 4K 해상도 영상 생성 지원',
      '캐릭터 일관성 유지 기능 강화',
    ],
  },
  {
    tool_slug: 'vidu',
    updated_at: '2024-12-18',
    title: 'Vidu 2.0 및 레퍼런스 이미지 기능 출시',
    version: '2.0',
    changes: [
      'Vidu 2.0: 차세대 영상 생성 모델로 업그레이드',
      '레퍼런스 이미지를 활용한 스타일 일관성 유지 기능 추가',
      'Vidu API 공개로 개발자 통합 지원',
      '카메라 제어(Camera Control) 기능 베타 출시',
    ],
  },
  {
    tool_slug: 'vidu',
    updated_at: '2025-02-01',
    title: 'Vidu Studio 및 글로벌 확장',
    version: null,
    changes: [
      'Vidu Studio: 전문적인 영상 제작을 위한 통합 편집 환경 출시',
      '글로벌 서비스 확장 및 다국어 지원 강화',
      '음악 및 음성 동기화(Lip Sync) 기능 추가',
    ],
  },

  // ==================== vrew ====================
  {
    tool_slug: 'vrew',
    updated_at: '2019-01-24',
    title: 'Vrew 초기 버전 출시',
    version: null,
    changes: [
      'AI 기반 영상 편집 소프트웨어 Vrew 초기 버전 공개 (베타)',
      '음성 인식으로 자막 자동 생성 기능 제공',
      '자막 기반 영상 구간 편집 기능 지원',
    ],
  },
  {
    tool_slug: 'vrew',
    updated_at: '2021-05-20',
    title: 'AI 보이스오버 및 TTS 기능 추가',
    version: null,
    changes: [
      'AI TTS(Text-to-Speech) 기능 추가로 자막을 음성으로 변환',
      '다양한 AI 목소리 선택 지원',
      '배경 음악 자동 삽입 기능 추가',
    ],
  },
  {
    tool_slug: 'vrew',
    updated_at: '2022-08-10',
    title: '자동 영상 편집 및 자막 번역 기능 추가',
    version: null,
    changes: [
      '자막 자동 번역 기능 추가 (10개 이상 언어 지원)',
      '침묵 구간 자동 제거 기능 개선',
      '유튜브 영상 직접 불러오기 지원',
    ],
  },
  {
    tool_slug: 'vrew',
    updated_at: '2023-07-11',
    title: 'AI 원고 자동 생성 기능 출시',
    version: null,
    changes: [
      'AI 원고 생성: 주제 입력으로 영상 스크립트 자동 작성',
      'AI 이미지 삽입 기능 (영상 내 AI 생성 이미지 자동 배치)',
      '숏폼(Short-form) 편집 최적화 기능 추가',
    ],
  },
  {
    tool_slug: 'vrew',
    updated_at: '2024-03-05',
    title: 'Vrew AI 전면 강화 업데이트',
    version: null,
    changes: [
      'GPT-4 기반 원고 작성 품질 대폭 향상',
      'AI 아바타 스피커 기능 추가 (가상 발표자 생성)',
      '화면 녹화 기능 내장 및 AI 편집 자동화',
      '클라우드 동기화로 다기기 프로젝트 공유 지원',
    ],
  },

  // ==================== wegic ====================
  {
    tool_slug: 'wegic',
    updated_at: '2023-12-01',
    title: 'Wegic AI 웹사이트 빌더 출시',
    version: null,
    changes: [
      '대화형 AI로 웹사이트를 생성하는 Wegic 공개 출시',
      '텍스트 채팅만으로 전체 웹사이트 구조 및 디자인 생성',
      '코딩 없이 완성된 웹사이트 퍼블리싱 지원',
    ],
  },
  {
    tool_slug: 'wegic',
    updated_at: '2024-03-20',
    title: '대화형 웹 편집 및 다국어 지원 추가',
    version: null,
    changes: [
      '채팅으로 페이지 콘텐츠 및 레이아웃 실시간 수정 가능',
      '다국어 웹사이트 생성 지원 (30개 이상 언어)',
      'AI 이미지 생성 통합으로 맞춤 비주얼 자동 제작',
    ],
  },
  {
    tool_slug: 'wegic',
    updated_at: '2024-07-15',
    title: '커스텀 도메인 및 SEO 기능 강화',
    version: null,
    changes: [
      '커스텀 도메인 연결 기능 추가',
      'AI 기반 SEO 메타 태그 자동 생성',
      '구글 애널리틱스 연동 지원',
    ],
  },
  {
    tool_slug: 'wegic',
    updated_at: '2024-11-10',
    title: 'E-커머스 및 폼 기능 출시',
    version: null,
    changes: [
      '온라인 쇼핑몰 구축을 위한 E-커머스 기능 베타 출시',
      '문의 폼, 예약 폼 등 인터랙티브 폼 생성 지원',
      '팀 협업 및 클라이언트 공유 기능 추가',
    ],
  },

  // ==================== windsurf ====================
  {
    tool_slug: 'windsurf',
    updated_at: '2024-11-13',
    title: 'Windsurf IDE 공개 출시',
    version: null,
    changes: [
      'Codeium이 개발한 AI 코딩 IDE Windsurf 정식 출시',
      'Cascade: 멀티 파일 편집 및 코드베이스 이해 기반 AI 에이전트 도입',
      'Flow 패러다임: 개발자와 AI가 협력하는 새로운 코딩 경험 제공',
      'VS Code 기반 에디터로 기존 익스텐션 호환 지원',
    ],
  },
  {
    tool_slug: 'windsurf',
    updated_at: '2024-12-05',
    title: 'Windsurf 엔터프라이즈 및 Wave 2 업데이트',
    version: null,
    changes: [
      'Windsurf Enterprise: 팀 및 기업용 플랜 출시',
      'Wave 2: 터미널 통합, 브라우저 미리보기 등 신규 기능 추가',
      'Claude 3.5 Sonnet 모델 지원 추가',
    ],
  },
  {
    tool_slug: 'windsurf',
    updated_at: '2025-01-20',
    title: 'Wave 4: 멀티모델 지원 및 MCP 통합',
    version: null,
    changes: [
      'GPT-4o, Claude 3.5 등 멀티 AI 모델 선택 지원',
      'MCP(Model Context Protocol) 서버 통합 지원',
      'Windsurf Plugins 시스템 출시',
    ],
  },
  {
    tool_slug: 'windsurf',
    updated_at: '2025-02-19',
    title: 'Wave 6: SWE-bench 성능 향상 및 신규 기능',
    version: null,
    changes: [
      'SWE-bench Verified 최고 점수 달성 (Cascade Hard 기준)',
      'Windsurf Tab: 멀티라인 자동 완성 기능 대폭 개선',
      'Remote SSH 접속 지원',
      '웹 검색 통합 기능 추가',
    ],
  },

  // ==================== wireframable ====================
  {
    tool_slug: 'wireframable',
    updated_at: '2023-08-01',
    title: 'Wireframable 출시',
    version: null,
    changes: [
      'AI 기반 와이어프레임 생성 도구 Wireframable 출시',
      '텍스트 설명으로 UI 와이어프레임 자동 생성',
      '웹/모바일 앱 레이아웃 템플릿 제공',
    ],
  },
  {
    tool_slug: 'wireframable',
    updated_at: '2024-01-15',
    title: 'AI 개선 및 내보내기 기능 추가',
    version: null,
    changes: [
      'AI 와이어프레임 생성 품질 향상',
      'Figma 내보내기 지원 추가',
      '컴포넌트 재사용 라이브러리 기능 추가',
    ],
  },
  {
    tool_slug: 'wireframable',
    updated_at: '2024-06-10',
    title: '협업 및 프로토타입 기능 강화',
    version: null,
    changes: [
      '실시간 팀 협업 편집 기능 추가',
      '클릭 가능한 프로토타입 생성 지원',
      '주석(Annotation) 및 코멘트 기능 추가',
    ],
  },

  // ==================== writesonic ====================
  {
    tool_slug: 'writesonic',
    updated_at: '2021-03-01',
    title: 'Writesonic 출시',
    version: null,
    changes: [
      'GPT-3 기반 AI 글쓰기 도구 Writesonic 출시',
      '광고 카피, 블로그 포스트, 제품 설명 등 다양한 콘텐츠 유형 지원',
      '50개 이상 AI 글쓰기 템플릿 제공',
    ],
  },
  {
    tool_slug: 'writesonic',
    updated_at: '2022-05-18',
    title: 'Article Writer 5.0 및 Sonic Editor 출시',
    version: null,
    changes: [
      'Article Writer 5.0: 장문 블로그 글 자동 생성 기능 개선',
      'Sonic Editor: MS Word 스타일 AI 글쓰기 편집기 출시',
      'SEO 최적화 메타 설명 및 제목 자동 생성',
    ],
  },
  {
    tool_slug: 'writesonic',
    updated_at: '2023-01-30',
    title: 'Chatsonic 출시: AI 검색 기반 챗봇',
    version: null,
    changes: [
      'Chatsonic: 실시간 인터넷 검색 통합 AI 챗봇 출시 (ChatGPT 대안)',
      'Google 검색 연동으로 최신 정보 기반 답변 제공',
      '음성 입력 및 이미지 생성 기능 포함',
    ],
  },
  {
    tool_slug: 'writesonic',
    updated_at: '2023-10-05',
    title: 'Botsonic 및 AI 챗봇 빌더 출시',
    version: null,
    changes: [
      'Botsonic: 코드 없이 맞춤 AI 챗봇 구축 플랫폼 출시',
      '웹사이트 데이터 학습 기반 고객 지원 챗봇 생성 지원',
      'Zapier 등 다양한 통합(Integration) 지원',
    ],
  },
  {
    tool_slug: 'writesonic',
    updated_at: '2024-03-12',
    title: 'Writesonic 4.0: AI 에이전트 기능 강화',
    version: '4.0',
    changes: [
      'AI Article Writer 6.0: 사실 확인 및 최신 정보 반영 강화',
      'Surfer SEO 연동으로 SEO 최적화 통합 워크플로우 제공',
      'Brand Voice 기능으로 일관된 글쓰기 스타일 유지',
      '팀 협업 및 워크스페이스 기능 추가',
    ],
  },

  // ==================== wrtn ====================
  {
    tool_slug: 'wrtn',
    updated_at: '2022-10-20',
    title: '뤼튼(wrtn) 베타 서비스 출시',
    version: null,
    changes: [
      '한국어 특화 AI 글쓰기 플랫폼 뤼튼 베타 출시',
      'GPT-3.5 기반 블로그, 카피라이팅, 이메일 등 다양한 콘텐츠 생성 지원',
      '한국어 맞춤형 AI 글쓰기 템플릿 제공',
    ],
  },
  {
    tool_slug: 'wrtn',
    updated_at: '2023-03-28',
    title: '뤼튼 정식 서비스 출시',
    version: null,
    changes: [
      '뤼튼 정식 버전 출시 및 무료 서비스 개방',
      '채팅 형식의 AI 대화 기능(뤼튼 채팅) 추가',
      '다양한 글쓰기 도구 50개 이상 제공',
    ],
  },
  {
    tool_slug: 'wrtn',
    updated_at: '2023-09-14',
    title: 'GPT-4 지원 및 뤼튼 2.0 업데이트',
    version: '2.0',
    changes: [
      'GPT-4 모델 기반 고품질 콘텐츠 생성 지원',
      'AI 캐릭터 챗봇 기능 베타 출시',
      '이미지 생성 기능(Stable Diffusion) 통합',
      'Pro 플랜 출시로 고급 기능 제공',
    ],
  },
  {
    tool_slug: 'wrtn',
    updated_at: '2024-05-22',
    title: 'GPT-4o 및 멀티모달 기능 추가',
    version: null,
    changes: [
      'GPT-4o 모델 지원으로 이미지 인식 및 분석 기능 추가',
      '이미지를 업로드하여 AI 질문/분석 가능',
      'AI 캐릭터 챗봇 다양화 및 맞춤 설정 강화',
    ],
  },
  {
    tool_slug: 'wrtn',
    updated_at: '2024-11-07',
    title: '뤼튼 스튜디오 및 툴 마켓 출시',
    version: null,
    changes: [
      '뤼튼 스튜디오: 사용자 맞춤 AI 툴 직접 제작 기능 출시',
      '툴 마켓: 다른 사용자가 만든 AI 툴 검색 및 사용 가능',
      '플로우(Flow) 기능으로 AI 작업 자동화 파이프라인 구성 지원',
      'Claude, Gemini 등 멀티 LLM 모델 선택 지원',
    ],
  },

  // ==================== clova-note ====================
  {
    tool_slug: 'clova-note',
    updated_at: '2021-01-25',
    title: 'CLOVA Note 정식 출시',
    version: null,
    changes: [
      'NAVER CLOVA의 AI 회의 녹음·기록 서비스 CLOVA Note 정식 출시',
      '음성 자동 인식(STT) 기반 실시간 텍스트 변환',
      '스마트폰 앱(iOS/Android) 및 PC 웹 동시 지원',
    ],
  },
  {
    tool_slug: 'clova-note',
    updated_at: '2022-06-08',
    title: '화자 분리 및 키워드 추출 기능 추가',
    version: null,
    changes: [
      '화자 분리(Speaker Diarization) 기능으로 참여자별 발언 구분',
      'AI 키워드 및 핵심 문장 자동 추출',
      'Google Calendar, Zoom 등 외부 캘린더 연동',
    ],
  },
  {
    tool_slug: 'clova-note',
    updated_at: '2023-02-14',
    title: '다국어 지원 및 회의록 요약 기능 출시',
    version: null,
    changes: [
      '영어, 일본어 등 다국어 음성 인식 지원 추가',
      'AI 회의록 자동 요약(Summary) 기능 출시',
      '북마크 및 댓글 기능으로 중요 구간 표시 지원',
    ],
  },
  {
    tool_slug: 'clova-note',
    updated_at: '2023-11-20',
    title: 'CLOVA Note 2.0: AI 요약 강화',
    version: '2.0',
    changes: [
      'HyperCLOVA X 기반 회의 내용 고도화된 AI 요약 제공',
      '액션 아이템(To-do) 자동 추출 기능 추가',
      '팀 공유 및 협업 기능 강화',
      '파일 업로드(MP3, MP4 등) 후 자동 변환 지원',
    ],
  },
  {
    tool_slug: 'clova-note',
    updated_at: '2024-05-16',
    title: 'CLOVA Note API 및 엔터프라이즈 기능 출시',
    version: null,
    changes: [
      'CLOVA Note API 공개로 외부 서비스 연동 가능',
      '엔터프라이즈 플랜: 대용량 녹음 및 보안 강화 옵션 제공',
      '회의 분석 대시보드로 참여도 및 발언 시간 통계 제공',
    ],
  },
  {
    tool_slug: 'clova-note',
    updated_at: '2024-12-10',
    title: '실시간 통역 및 자막 기능 추가',
    version: null,
    changes: [
      '실시간 통역 기능 추가 (한국어-영어)',
      '화상 회의 플랫폼(Zoom, Teams) 연동 강화',
      'AI 기반 발음 교정 및 명확도 향상 기능 추가',
    ],
  },
];

async function insertAll() {
  const results = {};

  for (const update of updates) {
    const slug = update.tool_slug;
    if (!results[slug]) results[slug] = { success: 0, error: 0 };

    const { error } = await supabase.from('tool_updates').insert({
      tool_slug: update.tool_slug,
      updated_at: update.updated_at,
      title: update.title,
      changes: update.changes,
      version: update.version || null,
    });

    if (error) {
      console.error(`❌ [${slug}] ${update.title}: ${error.message}`);
      results[slug].error++;
    } else {
      results[slug].success++;
    }
  }

  console.log('\n===== 삽입 결과 요약 =====');
  let total = 0;
  for (const [slug, r] of Object.entries(results)) {
    console.log(`${slug}: ✅ ${r.success}건 성공, ❌ ${r.error}건 실패`);
    total += r.success;
  }
  console.log(`\n총 ${total}건 삽입 완료`);
}

insertAll();
