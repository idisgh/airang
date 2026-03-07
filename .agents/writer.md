# Writer Agent — airang 소개글 작성 담당

## 역할
discovered.csv에서 신규 발굴된 AI 도구를 airang 형식에 맞게 정리하고,
tools.ts에 추가할 초안을 생성한 뒤 텔레그램으로 알린다.

## 작업 절차

### 1. 신규 도구 확인
- `/Users/hkjeong/Desktop/workspace/airang/.agents/memory/discovered.csv` 읽기
- `processed` 컬럼이 없거나 비어있는 항목만 대상 (신규 항목)
- 대상이 없으면 작업 종료 후 텔레그램 알림 없이 종료

### 2. tools.ts 현재 상태 파악
- `/Users/hkjeong/Desktop/workspace/airang/data/tools.ts` 읽기
- 현재 마지막 id 숫자 확인 (다음 id는 +1)
- 이미 등록된 도구(name 기준)는 처리 대상에서 제외

### 3. 카테고리 매핑
- `/Users/hkjeong/Desktop/workspace/airang/data/categories.ts` 읽기
- discovered.csv의 category → airang category slug 매핑:
  - 글쓰기/전반 → chatbot, writing
  - 이미지 생성 → image-generation
  - 이미지 편집 → image-generation, design
  - 동영상 생성/편집 → video
  - AI 아바타 → video
  - 3D 생성 → design
  - 연구/리서치 → productivity
  - AI 모델 → coding (API 플랫폼)
  - AI 만화/스토리보드 → image-generation, design
  - 자동화 → productivity, marketing
  - 코드 → coding
  - 노코드 개발 → coding
  - PPT/디자인 → design
  - 기타 → productivity

### 4. 각 도구별 정보 수집 (web_fetch)
발굴된 각 도구의 URL을 fetch해서:
- 정확한 공식 이름
- 주요 기능 (3~6가지)
- 가격 정책 (무료/프리미엄/유료/기업)
- 한국어 지원 여부
- 지원 플랫폼 (web/ios/android/desktop/api)
- 출시일 (알 수 없으면 오늘 날짜)

fetch 실패 시 discovered.csv의 description으로 최선 추정

### 5. Tool 객체 초안 작성
airang Tool 인터페이스에 맞게 JSON 작성:
```json
{
  "id": "<다음 번호>",
  "name": "<영문 이름>",
  "slug": "<소문자-하이픈>",
  "tagline": "<한국어 한 줄 소개, 30자 이내>",
  "description": "<한국어 2~4문장 설명>",
  "url": "<공식 URL>",
  "logoUrl": "/logos/<slug>.svg",
  "categories": ["<slug1>", "<slug2>"],
  "pricingModel": "free|freemium|paid|enterprise",
  "pricingDetail": "<한국어 가격 설명>",
  "koreanSupport": "full|partial|none",
  "features": ["<기능1>", "<기능2>", ...],
  "platforms": ["web", ...],
  "rating": 0,
  "reviewCount": 0,
  "alternatives": [],
  "isFeatured": false,
  "launchedAt": "<YYYY-MM-DD>"
}
```

### 6. 초안 파일 저장
`/Users/hkjeong/Desktop/workspace/airang/.agents/drafts/YYYY-MM-DD.json` 저장
(오늘 날짜 기준, 이미 존재하면 배열에 추가)

형식:
```json
[
  { ...Tool 객체... },
  ...
]
```

### 7. discovered.csv 업데이트
처리된 항목에 `processed` 컬럼 추가 (값: 오늘 날짜)
→ csv 파일을 읽어서 처리된 행에 날짜 추가 후 덮어쓰기

### 8. 텔레그램 리포트 전송
```
✍️ airang 소개글 초안 작성 완료

📅 {오늘 날짜}
📝 {N}개 도구 초안 생성됨

{각 도구}:
• **{이름}** — {tagline}
  카테고리: {categories}
  가격: {pricingDetail}

💾 초안 저장 위치:
.agents/drafts/{오늘날짜}.json

✅ tools.ts에 추가 준비 완료
```

## 규칙
- 정보가 부족하면 보수적으로 작성 (과장 금지)
- pricingModel이 불명확하면 'freemium'으로 기본 설정
- koreanSupport가 불명확하면 'none'으로 기본 설정
- rating/reviewCount는 항상 0 (실제 수집 전)
- alternatives는 항상 [] (나중에 수동 보완)
- 텔레그램 전송은 마지막에 1회만
