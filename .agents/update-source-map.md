# airang 대표 업데이트 소스 맵 (초안)

403 또는 랜딩페이지 불안정 이슈가 잦은 도구는 아래 순서대로 확인한다.

## 규칙
- 첫 번째 소스: 기본 확인 소스
- 두 번째 소스: 대체 확인 소스
- 랜딩페이지는 pricing / branding / positioning 확인용으로만 사용

## 주요 도구
- **ChatGPT / OpenAI**
  - 1순위: OpenAI blog / index posts
  - 2순위: OpenAI docs / newsroom
  - 랜딩: chatgpt.com

- **Claude / Anthropic**
  - 1순위: Anthropic blog
  - 2순위: Anthropic docs / API docs
  - 랜딩: claude.ai

- **Gemini**
  - 1순위: Google blog / Workspace updates
  - 2순위: Google AI blog / docs
  - 랜딩: gemini.google.com

- **Cursor**
  - 1순위: Cursor changelog
  - 2순위: Cursor blog / docs
  - 랜딩: cursor.com

- **Figma**
  - 1순위: Figma blog
  - 2순위: release/update announcements
  - 랜딩: figma.com

- **Notion AI**
  - 1순위: Notion releases / changelog
  - 2순위: Notion blog
  - 랜딩: notion.so

- **ElevenLabs**
  - 1순위: ElevenLabs blog
  - 2순위: docs / product pages
  - 랜딩: elevenlabs.io

- **Runway**
  - 1순위: Runway blog
  - 2순위: product updates / docs
  - 랜딩: runwayml.com

- **Perplexity**
  - 1순위: Perplexity blog / hub
  - 2순위: X account / press coverage
  - 랜딩: perplexity.ai (직접 fetch 의존 금지)

- **Midjourney**
  - 1순위: official X / Discord announcements
  - 2순위: press coverage / community release recap
  - 랜딩: midjourney.com (직접 fetch 의존 금지)

- **Canva AI**
  - 1순위: Canva newsroom / blog
  - 2순위: Canva docs / release articles
  - 랜딩: canva.com (403 시 즉시 skip)

- **Character.AI**
  - 1순위: company blog / announcements
  - 2순위: app store / press coverage
  - 랜딩: character.ai (직접 fetch 의존 금지)

- **Poe**
  - 1순위: Quora / Poe blog or announcements
  - 2순위: app updates / X
  - 랜딩: poe.com (403 시 skip)

- **Leonardo AI**
  - 1순위: blog / changelog / docs
  - 2순위: social announcement
  - 랜딩: leonardo.ai (403 시 skip)

- **Ideogram**
  - 1순위: official blog / X
  - 2순위: press coverage
  - 랜딩: ideogram.ai (403 시 skip)

- **Make**
  - 1순위: Make release notes / blog
  - 2순위: docs
  - 랜딩: make.com (403 시 skip)

- **NotebookLM**
  - 1순위: Google blog / Workspace updates
  - 2순위: help/docs
  - 랜딩: notebooklm.google.com (redirect loop 잦음)

- **Grok**
  - 1순위: xAI blog / docs
  - 2순위: X official account
  - 랜딩: grok.x.ai (Cloudflare 의존 강함)

- **Le Chat / Mistral**
  - 1순위: Mistral news/blog
  - 2순위: docs / API announcements
  - 랜딩: chat.mistral.ai (403 가능)

## 운영 팁
- 같은 도구가 403/redirect loop 3회 이상이면 updater 기본 소스를 이 문서 기준으로 바꾼다.
- 이 문서는 시작점이다. 실제 운영하면서 잘 먹히는 소스를 계속 갱신한다.
