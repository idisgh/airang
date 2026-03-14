/**
 * useTools - Supabase tools 테이블 조회 컴포저블
 * Supabase에 데이터가 없을 경우 정적 데이터(data/tools.ts)를 fallback으로 사용
 */
import {
  tools as staticTools,
  type Tool as StaticTool,
  getToolBySlug as staticGetBySlug,
  getToolsByCategory as staticGetByCategory,
  searchTools as staticSearch,
  getFeaturedTools as staticGetFeatured,
  getAlternatives as staticGetAlternatives,
} from '~/data/tools'

// Supabase row → 앱 Tool 타입 변환
function rowToTool(row: Record<string, unknown>): StaticTool {
  return {
    id: String(row.id),
    name: row.name as string,
    slug: row.slug as string,
    tagline: row.tagline as string,
    description: row.description as string,
    url: row.url as string,
    logoUrl: (row.logo_url as string) || '',
    categories: (row.categories as string[]) || [],
    pricingModel: row.pricing_model as StaticTool['pricingModel'],
    pricingDetail: (row.pricing_detail as string) || '',
    koreanSupport: row.korean_support as StaticTool['koreanSupport'],
    features: (row.features as string[]) || [],
    platforms: (row.platforms as string[]) || [],
    rating: Number(row.rating) || 0,
    reviewCount: Number(row.review_count) || 0,
    alternatives: (row.alternatives as string[]) || [],
    isFeatured: Boolean(row.is_featured),
    launchedAt: (row.launched_at as string) || '',
    // DB 등록일 (최근 등록 정렬 기준)
    createdAt: (row.created_at as string) || '',
  }
}

export function useTools() {
  const supabase = useSupabaseClient()

  /**
   * 전체 도구 목록 조회 (Supabase → fallback: 정적 데이터)
   */
  async function getTools(): Promise<StaticTool[]> {
    try {
      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .order('review_count', { ascending: false })

      if (error || !data || data.length === 0) {
        return staticTools
      }
      return data.map(rowToTool)
    } catch {
      return staticTools
    }
  }

  /**
   * slug로 단일 도구 조회
   */
  async function getToolBySlug(slug: string): Promise<StaticTool | undefined> {
    try {
      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .eq('slug', slug)
        .single()

      if (error || !data) {
        return staticGetBySlug(slug)
      }
      return rowToTool(data)
    } catch {
      return staticGetBySlug(slug)
    }
  }

  /**
   * 카테고리별 도구 목록 조회
   */
  async function getToolsByCategory(categorySlug: string): Promise<StaticTool[]> {
    try {
      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .contains('categories', [categorySlug])
        .order('review_count', { ascending: false })

      if (error || !data || data.length === 0) {
        return staticGetByCategory(categorySlug)
      }
      return data.map(rowToTool)
    } catch {
      return staticGetByCategory(categorySlug)
    }
  }

  /**
   * 텍스트 검색
   */
  async function searchTools(query: string): Promise<StaticTool[]> {
    try {
      const q = query.toLowerCase()
      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .or(`name.ilike.%${q}%,tagline.ilike.%${q}%,description.ilike.%${q}%`)
        .order('review_count', { ascending: false })

      if (error || !data || data.length === 0) {
        return staticSearch(query)
      }
      return data.map(rowToTool)
    } catch {
      return staticSearch(query)
    }
  }

  /**
   * 추천(featured) 도구 목록
   */
  async function getFeaturedTools(): Promise<StaticTool[]> {
    try {
      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .eq('is_featured', true)
        .order('review_count', { ascending: false })

      if (error || !data || data.length === 0) {
        return staticGetFeatured()
      }
      return data.map(rowToTool)
    } catch {
      return staticGetFeatured()
    }
  }

  /**
   * 대안 도구 목록
   */
  async function getAlternatives(toolSlug: string): Promise<StaticTool[]> {
    try {
      const tool = await getToolBySlug(toolSlug)
      if (!tool || tool.alternatives.length === 0) return staticGetAlternatives(toolSlug)

      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .in('slug', tool.alternatives)

      if (error || !data || data.length === 0) {
        return staticGetAlternatives(toolSlug)
      }
      return data.map(rowToTool)
    } catch {
      return staticGetAlternatives(toolSlug)
    }
  }

  return {
    getTools,
    getToolBySlug,
    getToolsByCategory,
    searchTools,
    getFeaturedTools,
    getAlternatives,
  }
}
