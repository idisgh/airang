# airang 홈 화면 개편안

## 목표
`airang`을 예쁜 AI 디렉토리보다 **빠르게 찾고, 믿고, 비교할 수 있는 한국어 AI 도구 레퍼런스**로 더 분명하게 만든다.

## 이번 라운드 범위
1. Hero 개선
2. Featured / Recent 역할 분리
3. Compare 정보력 강화

## 이번 라운드 보류
- TrendSection 전면 재설계
- Tool detail / timeline 전체 리디자인

---

## 1. Hero 개선

### 현재 문제
- 첫인상은 좋지만 검색 진입성이 조금 약함
- 플로팅 로고와 gradient 존재감이 커서 디렉토리 신뢰감보다 연출감이 앞섬
- 사용자가 바로 탐색을 시작할 수 있는 quick entry가 부족함

### 개선 방향
- 검색창을 홈의 가장 강한 CTA로 만든다
- 추천 검색어 / 인기 탐색 chip을 추가한다
- 통계 문구를 단순 숫자보다 가치 중심으로 보여준다
- 플로팅 로고 강도는 조금 줄인다

### 적용안
- 검색창 하단 quick chips 추가
  - ChatGPT
  - 코딩
  - 영상 생성
  - 한국어 지원
  - 무료
  - 업데이트 많은 도구
- 통계 문구 수정
  - 130+ 도구
  - 12개 카테고리
  - 업데이트 히스토리 제공
- 플로팅 로고 opacity / motion 약화

---

## 2. Featured / Recent 역할 분리

### 현재 문제
- 둘 다 거의 동일한 카드 그리드 구조라 역할 차이가 약함
- Featured는 큐레이션처럼 느껴지지 않고
- Recent는 최신 변화 감지가 잘 드러나지 않음

### 개선 방향
- Featured = 선택 가이드
- Recent = 변화 로그

### Featured 적용안
- 첫 1개 카드는 크게 강조
- 나머지는 일반 카드/작은 카드로 배치
- 추천 이유 한 줄 추가
  - 한국어 사용자에게 특히 유용
  - 최근 기능 확장 활발
  - 비교 요청이 많은 도구
  - 이미지 생성 대표 도구

### Recent 적용안
- 카드 그리드 대신 compact list 스타일
- 등록일 / 출시일 / 업데이트 성격이 보이게 구성
- 제목 + 한 줄 설명 + 메타 정보 중심
- “최근 들어온 도구” 감각을 강화

---

## 3. Compare 정보력 강화

### 현재 문제
- 구조는 깔끔하지만 비교 클릭 유도가 약함
- rating 외에 차이점 정보가 부족함

### 개선 방향
- 카드에서 바로 비교 포인트를 읽을 수 있게 만든다
- 차이의 핵심을 한 줄로 요약한다

### 적용안
- 페어마다 짧은 비교 요약 추가
  - ChatGPT vs Claude → 범용성 vs 장문 추론
  - Midjourney vs DALL-E → 아트 퀄리티 vs 쉬운 접근성
  - Cursor vs GitHub Copilot → 에이전트 IDE vs GitHub 생태계
  - Runway vs Pika → 영상 제작 워크플로우 vs 빠른 숏폼 생성
- 하단에 CTA 느낌 보강
  - 어떤 차이가 있는지 보기

---

## 구현 순서
1. HeroSection 수정
2. FeaturedSection 수정
3. RecentSection 수정
4. CompareSection 수정
5. 로컬 확인 후 미세조정

---

## 기대 효과
- 첫 화면에서 바로 검색/탐색 시작 가능
- Featured / Recent 섹션 역할이 명확해짐
- Compare 클릭률 상승 가능
- airang이 더 신뢰감 있는 한국어 AI 도구 레퍼런스로 보임
