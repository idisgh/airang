# airang 소스 수집 전략 (403 대응)

## 목표
공식 홈페이지 fetch 실패(403/Cloudflare/JS 의존)를 전제로, airang 업데이트 루틴을 **'사이트 크롤링'이 아니라 '업데이트 신호 추적'** 중심으로 운영한다.

## 핵심 원칙
1. 공식 랜딩페이지는 참고 소스일 뿐, 단일 진실 소스로 가정하지 않는다.
2. 403은 시스템 실패가 아니라 **정상 스킵 조건**으로 취급한다.
3. 업데이트 감지는 `발견 → 검증 → 반영` 3단계로 분리한다.
4. 반영 기준은 High / Medium value 업데이트 위주로 제한한다.
5. 도구별로 가장 안정적인 대표 소스를 미리 정한다.

## 소스 우선순위
### Tier 1 — 기본 소스 (가급적 여기서 확인)
- 공식 블로그
- 공식 changelog / release notes
- 공식 docs
- GitHub releases / repo changelog

### Tier 2 — 보조 소스
- Product Hunt
- There’s An AI For That
- GeekNews / Hacker News
- 창업자 X / LinkedIn / Discord announcement
- 주요 외신/테크 뉴스

### Tier 3 — 공식 랜딩페이지
- tagline
- pricing summary
- positioning 확인용
- 403/timeout 시 재시도 없이 skip

## 업데이트 가치 기준
### High
- pricing 변경
- major model / feature release
- product positioning 변경
- API / agent / workflow mode 추가

### Medium
- integration 추가
- supported platform 확대
- notable UX / capability 확장

### Low
- 사소한 카피 변경
- 홍보 문구 수정
- 반복 보도자료

자동 반영은 High / Medium 위주로 처리한다.

## 403 처리 정책
- 403 / Cloudflare / JS challenge / redirect loop / DNS 실패는 **error가 아니라 skipped**로 기록한다.
- 같은 도구가 3회 이상 연속으로 공식 URL에서 막히면, 대표 소스를 랜딩페이지가 아닌 블로그/문서/SNS로 전환한다.
- 스킵 이유는 update-log 또는 별도 skipped 리스트에 남긴다.

## 운영 구조
### 1. 발견 (Discovery)
넓은 소스에서 업데이트/신규 도구 신호를 찾는다.

### 2. 검증 (Verification)
대표 소스 1~2개로 실제 반영 가치가 있는지 확인한다.

### 3. 반영 (Publishing)
확실한 변경만 tools.ts / Supabase / tool_updates에 반영한다.

## 크론 상태 기준 재정의
- 수집/반영 성공 + 알림 실패 = 성공(경고)
- 수집 중 403 다수 = 성공(스킵 포함)
- 실제 작업 미수행 / 스크립트 실패 / DB 실패 = 실패

즉, **delivery 실패**와 **수집 실패**를 작업 실패와 분리해야 한다.

## 적용 우선순위
1. 텔레그램 delivery 실패 분리
2. 도구별 대표 소스 맵 도입
3. updater / researcher를 발견·검증·반영 구조로 재설계
4. 403 빈발 도구를 공식 랜딩페이지 의존에서 해방
