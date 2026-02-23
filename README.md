# AIrang (아이랑) 🇰🇷

한국어 AI 도구 검색 & 비교 플랫폼

## 현재 상태: v0.1 (뼈대)

### 완성된 것
- Nuxt 3 + Tailwind CSS + Vue 3.5
- 11개 페이지: 홈, 도구 목록/상세, 카테고리 목록/상세, 대안, 비교, 블로그, 등록, 소개, 개인정보
- 30개 AI 도구 한국어 데이터 (정적)
- 12개 카테고리
- Cmd+K 검색 모달, 다크모드
- SSR + SEO 메타태그
- Programmatic SEO 구조: `/alternatives/[slug]`, `/compare/[a]-vs-[b]`

### 한계 (v0.1)
- 정적 데이터 30개 — DB 없음
- 로고 이미지 없음 (첫 글자 아바타)
- 사용자 리뷰/평점 시스템 없음
- 뉴스레터/등록 폼 백엔드 없음
- 비교 페이지 콘텐츠 얕음

### 다음 단계 (v0.2)
1. Supabase 연동 (DB화)
2. 데이터 수집 파이프라인 (500개 도구)
3. 로고 크롤링
4. AI 추천 퀴즈 (킬러 피처)
5. 비교 페이지 콘텐츠 강화
6. Vercel 배포

## 실행

```bash
pnpm install
pnpm dev --port 3002
# → http://localhost:3002
```

## 기술 스택
- **Framework:** Nuxt 3.21
- **Styling:** Tailwind CSS 3.4
- **Language:** TypeScript + Vue 3.5
- **Target DB:** Supabase (미연동)
- **Target Deploy:** Vercel

## 참고 문서
- 프로젝트 플랜: `~/Desktop/workspace/directory-project-plan.md`
- 리서치: `~/.openclaw/workspace/ai-revenue-website-research.md`
