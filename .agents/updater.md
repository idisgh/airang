# Updater Agent — 도구 정보 최신화 담당

## 역할
등록된 AI 도구들의 정보를 주기적으로 최신 상태로 업데이트한다.

## 작업 절차

### 1. 업데이트 대상 선정
- `/Users/hkjeong/Desktop/workspace/airang/data/tools.ts` 전체 도구 목록 로드
- `.agents/memory/update-log.json` 확인 → 마지막 업데이트 날짜 기준으로 오래된 순 정렬
- 1회 실행당 **10개씩** 처리 (API 부하 방지)
- is_featured 도구 우선

### 2. 각 도구별 최신 정보 수집
**2단계 전략으로 수집:**

**1차: web_fetch** — 도구의 공식 url, 블로그, changelog 페이지
- {url}/blog, {url}/changelog, {url}/pricing 등 시도

**2차: web_search (1차 실패 시 또는 보완용)**
- 검색어: `"{도구이름}" 2026 update new features`
- 검색어: `"{도구이름}" latest version pricing`
- 뉴스, 블로그, 릴리스 노트 등 공개 정보 활용

수집할 정보:
- 최신 모델/버전 정보
- 가격 변경 여부
- 새로운 주요 기능
- 한국어 지원 변경
- 플랫폼 변경

### 3. 변경 사항 판별
수집한 정보와 현재 description/features를 비교:
- 모델명/버전이 outdated → description 업데이트
- 가격 변경 → pricingDetail 업데이트
- 새 기능 추가 → features 배열 업데이트
- 변경 없으면 skip

### 4. tools.ts 업데이트
변경된 도구만 수정. 기존 스타일 유지.

### 5. Supabase 업데이트
변경된 도구의 해당 필드만 update.
접속 정보: /Users/hkjeong/Desktop/workspace/airang/.env

변경이 감지된 도구는 `tool_updates` 테이블에도 INSERT한다:
```typescript
await supabase.from('tool_updates').insert({
  tool_slug: slug,
  updated_at: new Date().toISOString().slice(0, 10),
  title: `${toolName} 정보 업데이트`,
  changes: changesArray, // ["필드명: 변경 내용", ...]
  version: null,         // 버전 정보가 있으면 기입
})
```

### 6. update-log.json 갱신
```json
{
  "lastRun": "2026-03-07",
  "updated": [
    {"slug": "chatgpt", "date": "2026-03-07", "changes": ["description: GPT-4.5 → GPT-5.4"]}
  ],
  "checked": ["chatgpt", "claude", "gemini", ...]
}
```
저장: `/Users/hkjeong/Desktop/workspace/airang/.agents/memory/update-log.json`

### 7. 변경 있으면 git push
```bash
cd /Users/hkjeong/Desktop/workspace/airang
git add data/tools.ts .agents/memory/update-log.json
git commit -m "chore: update tool info ({변경된 도구 이름들})"
git push origin main
```

### 8. 텔레그램 리포트
변경 있을 때만:
```
🔄 도구 정보 업데이트 완료

📅 {날짜}
🔍 확인: {N}개 | ✏️ 수정: {M}개

{변경된 도구 목록}:
• **{이름}**: {변경 내용 요약}

📊 다음 업데이트 대상: {나머지 도구 수}개
```

## 규칙
- 기존 description의 톤과 스타일 유지
- 확실한 변경만 반영 (추측으로 수정 금지)
- web_fetch 실패 시 web_search로 반드시 재시도 (skip 금지)
- 하루 10개 제한 (10일이면 전체 순환)
