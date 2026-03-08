# AIrang (아이랑)

한국어로 찾는 AI 도구 검색 & 비교 플랫폼

🔗 **[airang-nine.vercel.app](https://airang-nine.vercel.app/)**

---

## 소개

국내 서비스에 맞는 한국어 AI 도구 디렉토리입니다.  
단순 나열이 아닌 카테고리별 분류, 업데이트 히스토리, 자율 큐레이션 시스템을 갖추고 있습니다.

---

## 주요 기능

- 🔍 **AI 도구 검색 & 탐색** — 130개 이상의 도구, 12개 카테고리
- 📋 **도구 상세 페이지** — 설명, 태그, 업데이트 히스토리 타임라인
- 🤖 **자율 큐레이션 에이전트** — 매일 자동으로 신규 도구 발굴 및 정보 업데이트
- 🕐 **업데이트 히스토리** — 도구별 변경 이력 추적 (tool_updates 테이블)
- 🏷️ **카테고리 필터링** — 12개 카테고리로 목적에 맞는 도구 탐색
- 🌙 **다크모드 지원**

---

## 기술 스택

| 구분 | 기술 |
|------|------|
| Frontend | Nuxt 3.21, Vue 3.5, TypeScript |
| Styling | Tailwind CSS, nuxt-icon (Iconify / Lucide) |
| Database | Supabase (tools, categories, tool_updates) |
| Deployment | Vercel (GitHub push → 자동 배포) |

---

## 에이전트 시스템

`.agents/` 디렉토리에 역할별 에이전트가 정의되어 있습니다.

| 에이전트 | 역할 |
|----------|------|
| researcher | 신규 AI 도구 발굴 |
| writer | 도구 설명 한국어 작성 |
| publisher | Supabase DB 등록 |
| analyst | 트렌드 분석 |
| social | 소셜 공유 |
| updater | 기존 도구 정보 업데이트 |

**크론 스케줄**
- 도구 발굴: 매일 오전 9시
- 정보 업데이트: 매주 월·목 오전 10시

---

## 데이터 구조

```
Supabase
├── tools          — AI 도구 목록 (130개+)
├── categories     — 카테고리 (12개)
└── tool_updates   — 업데이트 히스토리
```

---

## 로컬 실행

```bash
pnpm install
pnpm dev   # http://localhost:3002
```

---

## GitHub

[github.com/idisgh/airang](https://github.com/idisgh/airang) — Push → Vercel 자동 배포
