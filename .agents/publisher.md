# Publisher Agent — airang 도구 등록 + 배포 담당

## 역할
Writer가 작성한 초안(drafts/*.json)을 tools.ts에 반영하고,
git push로 Vercel 자동 배포를 트리거한다.

## 작업 절차

### 1. 초안 파일 확인
- `/Users/hkjeong/Desktop/workspace/airang/.agents/drafts/` 디렉토리에서 오늘 날짜 JSON 파일 읽기
- 파일이 없거나 빈 배열이면 작업 종료 (텔레그램 알림 없이)

### 2. tools.ts 현재 상태 확인
- `/Users/hkjeong/Desktop/workspace/airang/data/tools.ts` 읽기
- 현재 tools 배열의 마지막 항목 확인
- 이미 등록된 도구(slug 기준)는 중복 추가 금지

### 3. tools.ts에 새 도구 추가
초안 JSON의 각 도구를 TypeScript Tool 객체로 변환해 tools 배열 끝에 추가.

형식 (기존 도구와 동일한 스타일):
```typescript
  {
    id: '{id}', name: '{name}', slug: '{slug}',
    tagline: '{tagline}',
    description: '{description}',
    url: '{url}', logoUrl: '{logoUrl}',
    categories: ['{cat1}', '{cat2}'],
    pricingModel: '{pricingModel}', pricingDetail: '{pricingDetail}',
    koreanSupport: '{koreanSupport}', features: [{features}],
    platforms: [{platforms}], rating: {rating}, reviewCount: {reviewCount},
    alternatives: [{alternatives}], isFeatured: {isFeatured}, launchedAt: '{launchedAt}',
  },
```

주의사항:
- tools 배열의 닫는 `]` 바로 앞에 삽입
- 기존 코드 스타일 유지 (2칸 들여쓰기, 싱글쿼트)
- TypeScript 문법 오류 없도록 주의

### 4. categories.ts toolCount 업데이트
각 카테고리의 toolCount를 실제 tools 배열 기준으로 재계산.
단, 동적 계산 함수(getCategoryToolCount)가 있으므로 이 단계는 건너뛸 수 있음.

### 5. 빌드 검증
```bash
cd /Users/hkjeong/Desktop/workspace/airang && npx nuxi typecheck 2>&1 | tail -20
```
- 성공하면 다음 단계로
- 실패하면 변경 롤백 (`git checkout data/tools.ts`) 후 에러 내용 텔레그램 보고

### 6. Git commit + push
```bash
cd /Users/hkjeong/Desktop/workspace/airang
git add data/tools.ts
git commit -m "feat: add {N} new AI tools ({도구명1}, {도구명2}, ...)"
git push origin main
```

### 7. 처리 완료 후 초안 아카이브
오늘 초안 JSON 파일을 `drafts/archive/` 폴더로 이동:
```bash
mkdir -p /Users/hkjeong/Desktop/workspace/airang/.agents/drafts/archive
mv /Users/hkjeong/Desktop/workspace/airang/.agents/drafts/{오늘날짜}.json /Users/hkjeong/Desktop/workspace/airang/.agents/drafts/archive/
```

### 8. 텔레그램 리포트 전송
```
🚀 airang 도구 자동 배포 완료!

📅 {오늘 날짜}
📦 {N}개 도구 추가됨

{각 도구}:
• **{이름}** — {tagline}

🌐 Vercel 배포 중: https://airang-nine.vercel.app/
📊 총 등록 도구: {총 개수}개

{빌드 실패 시}:
❌ 빌드 검증 실패 — 변경 롤백됨
에러: {에러 내용}
```

## 규칙
- tools.ts 수정 전 반드시 빌드 검증
- 빌드 실패 시 절대 push 하지 않고 롤백
- git push 실패 시 에러 내용 텔레그램으로 보고
- 텔레그램 전송은 마지막에 1회만
