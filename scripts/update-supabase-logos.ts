/**
 * Supabase tools 테이블의 logo_url을 /logos/{slug}.png로 업데이트
 * 실행: npx tsx scripts/update-supabase-logos.ts
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { tools } from '../data/tools.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const envPath = resolve(__dirname, '../.env')
const envContent = readFileSync(envPath, 'utf-8')
const env: Record<string, string> = {}
for (const line of envContent.split('\n')) {
  const [key, ...rest] = line.split('=')
  if (key && rest.length) env[key.trim()] = rest.join('=').trim()
}

const SUPABASE_URL = env.SUPABASE_URL
const SUPABASE_KEY = env.SUPABASE_KEY

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ SUPABASE_URL 또는 SUPABASE_KEY가 .env에 없습니다.')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function updateLogoUrls() {
  console.log(`🔄 Supabase logo_url 업데이트 시작 (${tools.length}개 도구)`)
  let success = 0
  let fail = 0

  for (const tool of tools) {
    const newLogoUrl = `/logos/${tool.slug}.png`
    const { error } = await supabase
      .from('tools')
      .update({ logo_url: newLogoUrl })
      .eq('slug', tool.slug)

    if (error) {
      console.error(`❌ ${tool.slug}: ${error.message}`)
      fail++
    } else {
      console.log(`✓ ${tool.slug} → ${newLogoUrl}`)
      success++
    }
  }

  console.log(`\n✅ 완료: 성공 ${success}, 실패 ${fail}`)
}

updateLogoUrls().catch(console.error)
