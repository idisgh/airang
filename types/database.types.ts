// Supabase Database Types
// 실제 타입은 `npx supabase gen types typescript` 명령으로 생성하세요.
export type Database = {
  public: {
    Tables: {
      tools: {
        Row: {
          id: number
          name: string
          slug: string
          tagline: string
          description: string
          url: string
          logo_url: string
          categories: string[]
          pricing_model: 'free' | 'freemium' | 'paid' | 'enterprise'
          pricing_detail: string
          korean_support: 'full' | 'partial' | 'none'
          features: string[]
          platforms: string[]
          rating: number
          review_count: number
          alternatives: string[]
          is_featured: boolean
          launched_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['tools']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['tools']['Insert']>
      }
      categories: {
        Row: {
          id: number
          name: string
          name_en: string
          slug: string
          icon: string
          description: string
        }
        Insert: Omit<Database['public']['Tables']['categories']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['categories']['Insert']>
      }
    }
  }
}
