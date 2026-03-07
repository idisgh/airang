/**
 * tool_updates 테이블 초기 데이터 시딩 스크립트
 * 실행: npx tsx scripts/seed-updates.ts
 *
 * 사전 조건:
 * 1. Supabase SQL Editor에서 supabase/tool_updates.sql 실행
 * 2. .env 파일에 SUPABASE_URL, SUPABASE_KEY 설정
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// .env 파일 로드
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

// update-log.json 로드
const logPath = resolve(__dirname, '../.agents/memory/update-log.json')
const updateLog = JSON.parse(readFileSync(logPath, 'utf-8'))

// slug → 도구 이름 매핑 (tools 테이블에서 조회)
async function getToolNames(slugs: string[]): Promise<Record<string, string>> {
  const { data, error } = await supabase
    .from('tools')
    .select('slug, name')
    .in('slug', slugs)

  if (error) {
    console.error('❌ tools 테이블 조회 실패:', error.message)
    return {}
  }

  const map: Record<string, string> = {}
  for (const tool of data || []) {
    map[tool.slug] = tool.name
  }
  return map
}

async function main() {
  const updated: Array<{ slug: string; date: string; changes: string[] }> = updateLog.updated || []

  if (!updated.length) {
    console.log('📭 시딩할 업데이트 기록이 없습니다.')
    return
  }

  const slugs = [...new Set(updated.map(u => u.slug))]
  console.log(`📋 총 ${updated.length}개 업데이트 기록 발견 (${slugs.length}개 도구)`)

  // 도구 이름 조회
  const nameMap = await getToolNames(slugs)

  // 삽입할 레코드 생성
  const records = updated.map(item => ({
    tool_slug: item.slug,
    updated_at: item.date,
    title: `${nameMap[item.slug] || item.slug} 정보 업데이트`,
    changes: item.changes,
    version: null,
  }))

  console.log('\n📝 삽입할 레코드:')
  for (const r of records) {
    console.log(`  • [${r.updated_at}] ${r.title} (${r.changes.length}개 변경)`)
  }

  // 중복 체크 후 삽입 (같은 slug+updated_at 조합은 스킵)
  const { data: existing } = await supabase
    .from('tool_updates')
    .select('tool_slug, updated_at')

  const existingSet = new Set(
    (existing || []).map((e: { tool_slug: string; updated_at: string }) => `${e.tool_slug}::${e.updated_at}`)
  )

  const toInsert = records.filter(r => !existingSet.has(`${r.tool_slug}::${r.updated_at}`))

  if (!toInsert.length) {
    console.log('\n✅ 이미 모두 삽입된 데이터입니다. 스킵.')
    return
  }

  console.log(`\n🚀 ${toInsert.length}개 레코드 삽입 중...`)

  const { error } = await supabase.from('tool_updates').insert(toInsert)

  if (error) {
    console.error('❌ 삽입 실패:', error.message)
    process.exit(1)
  }

  console.log(`✅ ${toInsert.length}개 업데이트 기록 삽입 완료!`)
}

main().catch(err => {
  console.error('❌ 오류:', err)
  process.exit(1)
})
