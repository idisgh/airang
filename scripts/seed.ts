/**
 * Supabase 데이터 시딩 스크립트
 * 실행: npx tsx scripts/seed.ts
 *
 * 사전 조건:
 * 1. Supabase SQL Editor에서 supabase/migration.sql 실행
 * 2. .env 파일에 SUPABASE_URL, SUPABASE_KEY 설정
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// .env 파일 로드
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

// data 파일에서 직접 import (tsx가 처리)
const { tools } = await import('../data/tools.js')
const { categories } = await import('../data/categories.js')

async function seedCategories() {
  console.log('📂 카테고리 시딩 시작...')
  const rows = categories.map(c => ({
    name: c.name,
    name_en: c.nameEn,
    slug: c.slug,
    icon: c.icon,
    description: c.description,
  }))

  const { error } = await supabase
    .from('categories')
    .upsert(rows, { onConflict: 'slug' })

  if (error) {
    console.error('❌ 카테고리 시딩 오류:', error.message)
  } else {
    console.log(`✅ 카테고리 ${rows.length}개 시딩 완료`)
  }
}

async function seedTools() {
  console.log('🔧 도구 시딩 시작...')
  const rows = tools.map(t => ({
    name: t.name,
    slug: t.slug,
    tagline: t.tagline,
    description: t.description,
    url: t.url,
    logo_url: t.logoUrl || '',
    categories: t.categories,
    pricing_model: t.pricingModel,
    pricing_detail: t.pricingDetail || '',
    korean_support: t.koreanSupport,
    features: t.features,
    platforms: t.platforms,
    rating: t.rating,
    review_count: t.reviewCount,
    alternatives: t.alternatives,
    is_featured: t.isFeatured,
    launched_at: t.launchedAt || null,
  }))

  // 50개씩 배치 upsert
  const batchSize = 50
  for (let i = 0; i < rows.length; i += batchSize) {
    const batch = rows.slice(i, i + batchSize)
    const { error } = await supabase
      .from('tools')
      .upsert(batch, { onConflict: 'slug' })

    if (error) {
      console.error(`❌ 도구 시딩 오류 (배치 ${i / batchSize + 1}):`, error.message)
    } else {
      console.log(`✅ 도구 ${Math.min(i + batchSize, rows.length)}/${rows.length} 시딩 완료`)
    }
  }
}

async function main() {
  console.log('🚀 AIrang Supabase 시딩 시작')
  console.log(`📡 URL: ${SUPABASE_URL}`)
  await seedCategories()
  await seedTools()
  console.log('🎉 시딩 완료!')
}

main().catch(err => {
  console.error('❌ 시딩 실패:', err)
  process.exit(1)
})
