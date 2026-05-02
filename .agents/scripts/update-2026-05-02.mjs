import { createClient } from '@supabase/supabase-js'
import fs from 'node:fs'

const envText = fs.readFileSync(new URL('../../.env', import.meta.url), 'utf8')
const env = Object.fromEntries(
  envText
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#') && line.includes('='))
    .map(line => {
      const i = line.indexOf('=')
      return [line.slice(0, i), line.slice(i + 1)]
    })
)

const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY)
const TODAY = '2026-05-02'

const updates = [
  {
    slug: 'claude',
    toolName: 'Claude',
    fields: {
      description: 'Claude는 Anthropic이 개발한 AI 어시스턴트입니다. 1M 토큰 컨텍스트 윈도우로 장문서 분석에 탁월하며, 코딩과 논리적 추론에서 높은 성능을 보입니다. Claude Opus 4.7은 에이전틱 코딩, 컴퓨터 사용, 비전, 멀티스텝 작업에서 Anthropic의 최신 최고급 모델이며, Claude Code의 Agent Teams, Claude in Excel·PowerPoint, Adaptive Thinking, Managed Agents와 함께 확장되고 있습니다. 2026년 4월에는 Anthropic Labs의 Claude Design이 연구 프리뷰로 공개되어 디자인·프로토타입·슬라이드·원페이저를 대화형으로 만들고, 디자인 시스템 적용·PPTX/Canva/PDF/HTML export·Claude Code handoff까지 지원합니다. 이어 creative work용 공식 connectors가 추가되어 Adobe Creative Cloud 50개+ 툴, Affinity by Canva, Autodesk Fusion, Blender, SketchUp, Splice, Ableton, Resolume 같은 제작 도구와 직접 연결됩니다.',
      features: ['1M 토큰 컨텍스트', 'Claude Opus 4.7', 'Extended Thinking', 'Adaptive Thinking', 'Artifacts', 'Projects', 'Claude Code', 'Agent Teams', 'Managed Agents (퍼블릭 베타)', 'Claude Design', '디자인 시스템 적용', 'PPTX·Canva·PDF·HTML export', 'Claude Code handoff', 'creative work connectors', 'Adobe Creative Cloud 50+ 툴 연동', 'Affinity by Canva·Autodesk Fusion·Blender·SketchUp·Splice·Ableton·Resolume 연동', 'Computer Use', '/loop 반복 작업', 'Voice Mode', 'Cowork', 'Research', 'Claude in Excel·PowerPoint', 'MCP 연동']
    },
    changes: [
      'description: creative work용 공식 connectors와 Adobe Creative Cloud·Affinity by Canva·Autodesk Fusion·Blender·SketchUp·Splice·Ableton·Resolume 연동 반영',
      'features: creative work connectors, Adobe Creative Cloud 50+ 툴 연동, 주요 creative app 연동 추가'
    ]
  },
  {
    slug: 'midjourney',
    toolName: 'Midjourney',
    fields: {
      description: 'Midjourney는 텍스트 프롬프트로 고품질 이미지를 생성하는 AI 도구입니다. 2026년 4월 V8.1 Alpha로 업데이트되며 V7에 가까운 안정적인 미감, 기본 HD 3배 빠름·3배 저렴, 표준 해상도 50% 빠름·25% 저렴한 생성 흐름을 제공합니다. 이미지 프롬프트와 image weights가 복귀했고, Prompt Shortener와 개선된 Describe도 추가됐습니다. 예술적 스타일, 사실적 이미지, 일러스트 등 다양한 스타일을 지원하며, Style Reference와 무드보드로 일관된 스타일 유지가 가능합니다.',
      features: ['텍스트→이미지', 'V8.1 Alpha', '기본 HD 3배 빠름·3배 저렴', '표준 해상도 50% 빠름·25% 저렴', '이미지 프롬프트·image weights', 'Prompt Shortener', '개선된 Describe', 'Raw 모드', 'Style Reference', '무드보드', '업스케일', 'Niji 7']
    },
    changes: [
      'description: V8.1 Alpha의 기본 HD 3배 빠름·3배 저렴, 표준 해상도 50% 빠름·25% 저렴, Prompt Shortener·개선된 Describe 반영',
      'features: V8.1 Alpha, 이미지 프롬프트·image weights, Prompt Shortener, 개선된 Describe 추가'
    ]
  }
]

for (const update of updates) {
  const { error: updateError } = await supabase
    .from('tools')
    .update(update.fields)
    .eq('slug', update.slug)

  if (updateError) {
    console.error(`UPDATE_FAIL ${update.slug}: ${updateError.message}`)
    process.exitCode = 1
    continue
  }

  const { error: insertError } = await supabase
    .from('tool_updates')
    .insert({
      tool_slug: update.slug,
      updated_at: TODAY,
      title: `${update.toolName} 정보 업데이트`,
      changes: update.changes,
      version: null,
    })

  if (insertError) {
    console.error(`INSERT_FAIL ${update.slug}: ${insertError.message}`)
    process.exitCode = 1
    continue
  }

  console.log(`OK ${update.slug}`)
}
