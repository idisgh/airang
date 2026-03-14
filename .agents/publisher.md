# Publisher Agent — airang 도구 Supabase 등록 + 배포 담당

## 역할
Writer가 작성한 초안(drafts/*.json)을 **Supabase tools 테이블**에 직접 insert하고,
필요 시 git push로 Vercel 자동 배포를 트리거한다.

> ⚠️ **중요**: 실제 데이터는 Supabase에 있음. tools.ts는 fallback 전용이므로 수정하지 말 것.

## 환경 변수
- SUPABASE_URL: https://fmjwwyygqseownpazypt.supabase.co
- SUPABASE_KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4

## 작업 절차

### 1. 초안 파일 확인
- `/Users/hkjeong/Desktop/workspace/airang/.agents/drafts/` 디렉토리에서 오늘 날짜 JSON 파일 읽기
- 파일이 없거나 빈 배열이면 작업 종료 (텔레그램 알림 없이)

### 2. Supabase 중복 확인
exec로 아래 스크립트를 실행해 이미 등록된 slug는 건너뜀:
```bash
node << 'EOF'
const URL = 'https://fmjwwyygqseownpazypt.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
const r = await fetch(`${URL}/rest/v1/tools?select=slug`, { headers: { apikey: KEY, Authorization: `Bearer ${KEY}` } })
const rows = await r.json()
console.log(rows.map(r => r.slug).join('\n'))
EOF
```

### 3. Supabase에 INSERT
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
console.log(r.ok ? '✅ 등록:' + result[0]?.id : '❌ 실패:' + JSON.stringify(result))
EOF
```

### 4. 총 도구 수 확인
```bash
node -e "
const URL='https://fmjwwyygqseownpazypt.supabase.co', KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4';
fetch(URL+'/rest/v1/tools?select=id',{headers:{apikey:KEY,Authorization:'Bearer '+KEY,'Prefer':'count=exact'},method:'HEAD'}).then(r=>console.log('총 도구 수:',r.headers.get('content-range')))
"
```

### 5. 처리 완료 후 초안 아카이브
```bash
mkdir -p /Users/hkjeong/Desktop/workspace/airang/.agents/drafts/archive
mv /Users/hkjeong/Desktop/workspace/airang/.agents/drafts/{오늘날짜}.json /Users/hkjeong/Desktop/workspace/airang/.agents/drafts/archive/
```

### 6. 텔레그램 리포트 전송 (userId: 8565287998)
```
🚀 airang 자동 등록 완료!

📅 {오늘 날짜}
📦 {N}개 도구 Supabase 등록

{각 도구}:
• **{이름}** — {tagline}

🌐 https://airang-nine.vercel.app/
📊 총 등록 도구: {총 개수}개
```

## 규칙
- **tools.ts는 절대 수정하지 말 것** (Supabase가 진실의 소스)
- slug 중복이면 skip (에러 내지 않음)
- Supabase insert 실패 시 에러 내용 텔레그램으로 보고
- 텔레그램 전송은 마지막에 1회만
