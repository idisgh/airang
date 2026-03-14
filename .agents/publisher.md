# Publisher Agent — airang 도구 Supabase 등록 + 배포 담당

## 역할
Writer가 작성한 초안(drafts/*.json)을 **Supabase tools 테이블**에 직접 insert하고,
아이콘 저장 및 업데이트 히스토리 등록까지 완전히 처리한다.

> ⚠️ **중요**: 실제 데이터는 Supabase에 있음. tools.ts는 fallback 전용이므로 수정하지 말 것.

## 환경 변수
- SUPABASE_URL: https://fmjwwyygqseownpazypt.supabase.co
- SUPABASE_KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4

---

## ✅ 체크리스트 (도구 1개당 반드시 모두 완료)

- [ ] 1. 초안 확인
- [ ] 2. 중복 slug 체크
- [ ] 3. Supabase tools 테이블 INSERT
- [ ] **4. 아이콘 저장** (`public/logos/{slug}.png`)  ← 자주 누락됨!
- [ ] **5. tool_updates 히스토리 등록** (Supabase)  ← 자주 누락됨!
- [ ] 6. 초안 아카이브
- [ ] 7. 텔레그램 리포트

---

## 작업 절차

### 1. 초안 파일 확인
- `/Users/hkjeong/Desktop/workspace/airang/.agents/drafts/` 디렉토리에서 오늘 날짜 JSON 파일 읽기
- 파일이 없거나 빈 배열이면 작업 종료 (텔레그램 알림 없이)

### 2. Supabase 중복 확인
```bash
node << 'EOF'
const URL = 'https://fmjwwyygqseownpazypt.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
const r = await fetch(`${URL}/rest/v1/tools?select=slug`, { headers: { apikey: KEY, Authorization: `Bearer ${KEY}` } })
const rows = await r.json()
console.log(rows.map(r => r.slug).join('\n'))
EOF
```

### 3. Supabase tools 테이블 INSERT
초안의 각 도구를 아래 필드로 변환해 insert:

| 초안 필드 | Supabase 컬럼 |
|-----------|-------------|
| name | name |
| slug | slug |
| tagline | tagline |
| description | description |
| url | url |
| logoUrl | logo_url |
| categories | categories (string[]) |
| pricingModel | pricing_model |
| pricingDetail | pricing_detail |
| koreanSupport | korean_support |
| features | features (string[]) |
| platforms | platforms (string[]) |
| rating | rating |
| reviewCount | review_count |
| alternatives | alternatives (string[]) |
| isFeatured | is_featured |
| launchedAt | launched_at |

```bash
node << 'EOF'
const URL = 'https://fmjwwyygqseownpazypt.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'

const tool = { /* 초안에서 변환한 객체 */ }

const r = await fetch(`${URL}/rest/v1/tools`, {
  method: 'POST',
  headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json', Prefer: 'return=representation' },
  body: JSON.stringify(tool)
})
const result = await r.json()
console.log(r.ok ? '✅ INSERT 성공 id:' + result[0]?.id : '❌ 실패:' + JSON.stringify(result))
EOF
```

---

### 4. 🖼️ 아이콘 저장 (필수! 절대 생략 금지)

도구 공식 사이트에서 파비콘/로고를 가져와 `public/logos/{slug}.png`에 저장한다.

```bash
node << 'EOF'
const slug = '{slug}'  // 예: 'canirun-ai'
const siteUrl = '{url}'  // 예: 'https://www.canirun.ai'
const outPath = `/Users/hkjeong/Desktop/workspace/airang/public/logos/${slug}.png`

// 1순위: Google favicon API (32x32 PNG)
const faviconUrl = `https://www.google.com/s2/favicons?domain=${new URL(siteUrl).hostname}&sz=64`

const response = await fetch(faviconUrl)
if (response.ok) {
  const buf = Buffer.from(await response.arrayBuffer())
  require('fs').writeFileSync(outPath, buf)
  console.log(`✅ 아이콘 저장: ${outPath} (${buf.length} bytes)`)
} else {
  console.log('❌ 아이콘 다운로드 실패 — 수동 확인 필요')
}
EOF
```

저장 후 Supabase tools 테이블의 `logo_url` 컬럼도 업데이트:
```bash
node << 'EOF'
const URL = 'https://fmjwwyygqseownpazypt.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
const slug = '{slug}'

const r = await fetch(`${URL}/rest/v1/tools?slug=eq.${slug}`, {
  method: 'PATCH',
  headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ logo_url: `/logos/${slug}.png` })
})
console.log(r.ok ? `✅ logo_url 업데이트 완료` : `❌ 실패: ${r.status}`)
EOF
```

---

### 5. 📋 tool_updates 히스토리 등록 (필수! 절대 생략 금지)

신규 도구 등록 시 "신규 등록" 히스토리를 tool_updates 테이블에 반드시 추가한다.

```bash
node << 'EOF'
const URL = 'https://fmjwwyygqseownpazypt.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'

// INSERT할 tool_id는 3번 단계에서 받은 id 사용
const entry = {
  tool_slug: '{slug}',          // tools 테이블의 slug와 동일
  title: '신규 등록',
  changes: [
    '{tagline 또는 한줄 소개}',
    '{주요 기능 1}',
    '{주요 기능 2}'
  ],
  updated_at: new Date().toISOString().split('T')[0]  // YYYY-MM-DD
}

const r = await fetch(`${URL}/rest/v1/tool_updates`, {
  method: 'POST',
  headers: { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json', Prefer: 'return=representation' },
  body: JSON.stringify(entry)
})
const result = await r.json()
console.log(r.ok ? '✅ 히스토리 등록:' + result[0]?.id : '❌ 실패:' + JSON.stringify(result))
EOF
```

---

### 6. 총 도구 수 확인 및 초안 아카이브
```bash
node << 'EOF'
const URL = 'https://fmjwwyygqseownpazypt.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
const r = await fetch(`${URL}/rest/v1/tools?select=id`, { headers: { apikey: KEY, Authorization: `Bearer ${KEY}` } })
const data = await r.json()
console.log('총 도구 수:', data.length)
EOF

mkdir -p /Users/hkjeong/Desktop/workspace/airang/.agents/drafts/archive
mv /Users/hkjeong/Desktop/workspace/airang/.agents/drafts/{오늘날짜}.json /Users/hkjeong/Desktop/workspace/airang/.agents/drafts/archive/
```

아이콘 파일이 추가됐으면 git commit & push:
```bash
cd /Users/hkjeong/Desktop/workspace/airang
git add public/logos/
git commit -m "feat: add logo for {도구명}"
git push origin main
```

---

### 7. 텔레그램 리포트 전송 (userId: 8565287998)
```
🚀 airang 자동 등록 완료!

📅 {오늘 날짜}
📦 {N}개 도구 등록

{각 도구}:
• **{이름}** — {tagline}
  🖼️ 아이콘: {저장됨 / 실패}
  📋 히스토리: {등록됨 / 실패}

🌐 https://airang-nine.vercel.app/
📊 총 등록 도구: {총 개수}개
```

---

## 규칙
- **tools.ts는 절대 수정하지 말 것** (Supabase가 진실의 소스)
- slug 중복이면 skip (에러 내지 않음)
- **아이콘과 히스토리는 선택이 아닌 필수** — 절대 생략하지 말 것
- 아이콘 다운로드 실패 시에도 히스토리는 반드시 등록
- Supabase insert 실패 시 에러 내용 텔레그램으로 보고
- 텔레그램 전송은 마지막에 1회만
