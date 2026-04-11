# DESIGN.md — airang

한국어 AI 도구 검색/비교 플랫폼 `airang` 전용 디자인 가이드.
이 문서는 AI agent와 사람이 모두 읽는 **실행형 기준서**다.

## Product Intent
airang은 한국어 사용자에게 AI 도구를 **빠르게 찾고, 비교하고, 업데이트까지 신뢰할 수 있게 보여주는** 디렉토리다.
따라서 디자인의 목표는 화려함보다 아래 3가지다.

- **빠른 탐색**
- **쉬운 비교**
- **신뢰감 있는 큐레이션**

## Brand Keywords
- Korean-first
- curated
- trustworthy
- modern
- approachable
- not noisy

## UX Principles
- 첫 화면에서 “여기서 뭘 할 수 있는지” 바로 이해돼야 한다.
- 유저는 오래 감상하지 않고 빠르게 검색/탐색/비교한다.
- 디렉토리 서비스 특성상 **정보 구조와 스캔성**이 가장 중요하다.
- 도구 수가 늘어나도 복잡해 보이지 않게 category / featured / recent / trend 구조를 유지한다.
- 새 기능을 추가할 때도 검색/탐색 흐름을 방해하지 않는다.

## Visual Direction
### Overall Feel
- 밝고 선명한 프로덕트 UI
- startup directory 특유의 가벼움은 있되, 싸보이면 안 된다
- AI 서비스라고 해서 과도한 SF 느낌을 넣지 않는다
- 핑크(primary)와 퍼플(accent)은 브랜드 포인트로만 사용한다

### Color Usage
현재 Tailwind 색상 기준:
- `primary`: pink 계열
- `accent`: purple 계열

규칙:
- neutral 배경 위에 primary/accent를 제한적으로 사용한다.
- 큰 면적의 강한 색 배경은 최소화한다.
- 상태 표현보다 브랜딩 강조에 primary/accent를 우선 사용한다.
- 카드/리스트/상세 정보는 readability가 우선이다.

### Typography
- 제목은 짧고 명확하게.
- 설명문은 한국어로 자연스럽고 너무 광고 같지 않게.
- tool name / category / rating / pricing / updated info 구분이 명확해야 한다.
- meta 정보는 작지만 읽히는 수준을 유지한다.

## Layout Rules
### Home
홈은 아래 흐름이 자연스러워야 한다.
1. Hero — 서비스 가치와 검색 진입
2. Category — 탐색 시작점
3. Featured — 큐레이션 강조
4. Recent — 최신 등록/업데이트 감각
5. Trend — 분야별 대표 도구
6. Compare — 직접 비교 유도

각 섹션은 역할이 겹치지 않아야 한다.

### Tool Listing / Cards
- 한 카드에서 “이 도구가 뭔지” 3초 안에 이해돼야 한다.
- 로고, 이름, 한 줄 설명, 핵심 메타가 우선이다.
- badge를 너무 많이 붙이지 않는다.
- 카드 hover는 조용하게, 그러나 클릭 가능성은 분명하게.

### Tool Detail
- 신뢰감이 가장 중요하다.
- description, features, pricing, platforms, updates의 정보 계층을 명확히 나눈다.
- 업데이트 히스토리는 실제 관리되고 있다는 느낌을 줘야 한다.
- 상세 페이지는 블로그처럼 길게 읽는 느낌보다 “정리된 레퍼런스 페이지” 느낌이어야 한다.

### Compare
- 비교 화면은 재밌는 연출보다 **차이점이 바로 보이는 구조**가 중요하다.
- 동일 항목을 같은 순서와 같은 시각적 규칙으로 배치한다.
- 승부를 과장하는 표현보다 판단 가능한 정보 제공에 집중한다.

## Component Rules
### Search / Filter
- airang의 핵심 인터랙션이다.
- 가장 먼저 눈에 띄어야 한다.
- 복잡한 고급 필터보다 빠른 진입을 우선한다.
- 입력 즉시 반응하는 느낌을 주되, 시각적 소음은 적게 유지한다.

### Category Chips / Navigation
- 선택 상태가 명확해야 한다.
- chip이 너무 장난감처럼 보이면 안 된다.
- category는 색보다 구조와 레이블로 구분한다.

### Badges
- 필요한 정보만 badge 처리한다.
- badge 남발 금지.
- decorative badge보다 meaning-first badge.

### Timeline / Updates
- airang의 차별점 중 하나다.
- release log처럼 보여야 한다.
- 너무 화려한 타임라인보다 읽기 쉬운 기록형 UI를 우선한다.

## Copy Rules
- 한국어는 자연스럽고 실사용자가 이해하기 쉽게 쓴다.
- 과장 광고 문구 금지.
- “혁신적인”, “압도적인”, “세상을 바꾸는” 같은 표현 지양.
- 한 줄 설명은 도구의 category와 핵심 사용처가 immediately 보이게 작성.

## Do
- 검색과 탐색을 가장 먼저 고려한다.
- 유저가 도구를 비교 판단하기 쉽게 만든다.
- 실제 서비스 같은 정돈된 spacing을 유지한다.
- 업데이트/큐레이션의 신뢰감을 시각적으로 보여준다.
- 섹션별 역할 차이를 분명히 한다.

## Don’t
- AI/네온/SF 감성 과잉 금지
- gradient, glow, floating decoration 남발 금지
- 카드마다 다른 시각 언어 사용 금지
- 정보보다 브랜딩이 앞서는 화면 금지
- 상세 페이지를 블로그식 서사 UI로 만들지 말 것

## Implementation Notes
- Nuxt 3 + Vue 3 + Tailwind 기준
- 기존 `Sections*` 구조를 유지하면서 개선한다.
- 새 UI는 재사용 가능한 section/component로 분리한다.
- `nuxt-icon` / Lucide 스타일과 충돌하지 않게 icon usage를 통일한다.
- 다크모드에서도 contrast와 scanability를 우선한다.

## AI Agent Instructions
AI가 airang에서 UI를 수정/생성할 때:
1. 먼저 검색/탐색/비교 흐름에 도움이 되는지 판단한다.
2. 시각적 새로움보다 정보 전달 개선이 우선이다.
3. 기존 pink/purple brand system을 과도하게 확장하지 않는다.
4. 카드/상세/타임라인/카테고리 컴포넌트 간 규칙을 통일한다.
5. 결과물이 예쁘기만 하고 디렉토리답지 않으면 다시 절제한다.
