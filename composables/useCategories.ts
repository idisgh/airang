/**
 * useCategories - Supabase categories 테이블 조회 컴포저블
 * Supabase에 데이터가 없을 경우 정적 데이터(data/categories.ts)를 fallback으로 사용
 */
import {
  categories as staticCategories,
  type Category as StaticCategory,
  getCategoryBySlug as staticGetBySlug,
} from '~/data/categories'

// Supabase row → 앱 Category 타입 변환
function rowToCategory(row: Record<string, unknown>): StaticCategory {
  return {
    id: String(row.id),
    name: row.name as string,
    nameEn: row.name_en as string,
    slug: row.slug as string,
    icon: (row.icon as string) || '',
    description: (row.description as string) || '',
    toolCount: 0, // 동적으로 계산하려면 별도 쿼리 필요
  }
}

export function useCategories() {
  /**
   * 전체 카테고리 목록 조회 (순서는 data/categories.ts에서 관리)
   */
  async function getCategories(): Promise<StaticCategory[]> {
    return staticCategories
  }

  /**
   * slug로 단일 카테고리 조회
   */
  async function getCategoryBySlug(slug: string): Promise<StaticCategory | undefined> {
    const supabase = useSupabaseClient()
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('slug', slug)
        .single()

      if (error || !data) {
        return staticGetBySlug(slug)
      }
      return rowToCategory(data)
    } catch {
      return staticGetBySlug(slug)
    }
  }

  return {
    getCategories,
    getCategoryBySlug,
  }
}
