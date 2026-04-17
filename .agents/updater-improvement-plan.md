# airang updater 개선안

## 현재 문제
1. 공식 홈페이지 fetch 1회 의존도가 높다.
2. 403/Cloudflare가 잦아도 상태상 error처럼 보인다.
3. researcher와 updater의 역할 경계가 겹친다.
4. delivery 실패가 작업 실패처럼 집계된다.

## 목표
- 403 내성이 있는 업데이트 파이프라인
- 도구별 대표 소스 기반 검증
- 발견/검증/반영 분리
- 작업 성공과 알림 성공을 분리

## 제안 구조
### A. Researcher
역할:
- 신규 도구 발굴
- 등록 도구 업데이트 신호 감지

변경 포인트:
- discovery 소스를 넓게 사용
- 업데이트 감지는 `possible_updates` 같은 중간 산출물로 저장
- 바로 반영하지 않고 후보만 모은다

예상 산출물:
- `.agents/memory/discovered.csv`
- `.agents/memory/possible-updates.json`

### B. Updater
역할:
- 가능한 업데이트 후보를 검증
- 대표 소스 맵 기준으로 확인
- High/Medium value만 반영

변경 포인트:
- 공식 URL 단일 시도 대신 대표 소스 우선
- 403은 skipped 처리
- skipped / checked / updated를 명확히 분리

### C. Publisher
역할:
- tools.ts / Supabase / tool_updates 반영
- git commit/push

변경 포인트:
- 신규 등록과 정보 업데이트를 같은 포맷으로 안정화
- 반영 결과만 요약

## 상태 처리 규칙
### success
- 반영 있음 / 반영 없음 상관없이 작업 자체는 수행됨
- 403/skip 포함 가능

### success_with_warning
- 작업 수행 성공
- 알림 실패 / 일부 소스 접근 실패

### error
- 스크립트 예외
- DB 반영 실패
- 파일 파싱 실패
- git push 실패

## 우선 구현 항목
### 1차 (빠른 개선)
- `source-strategy.md` 도입
- `update-source-map.md` 도입
- 텔레그램 delivery 실패를 best-effort로 처리
- 403를 skipped로 명시

### 2차 (구조 개선)
- researcher: possible-updates 후보 저장
- updater: 후보 검증 전용으로 변경
- update-log에 `skippedReasons` 요약 추가

### 3차 (정교화)
- 자주 막히는 도구별 대표 소스 자동 선택
- low value update 자동 무시
- source quality scoring 도입

## 추천 작업 순서
1. 현재 md 지침 수정
2. 대표 소스 맵을 우선 적용
3. 크론 1~2회 돌려서 skipped/error 비율 확인
4. 필요하면 researcher/updater 역할을 완전히 분리
