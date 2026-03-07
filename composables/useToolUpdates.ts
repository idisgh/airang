export interface ToolUpdate {
  id: number
  tool_slug: string
  updated_at: string
  title: string
  changes: string[]
  version: string | null
  created_at: string
}

export function useToolUpdates() {
  const client = useSupabaseClient()

  async function getUpdatesBySlug(slug: string): Promise<ToolUpdate[]> {
    const { data } = await client
      .from('tool_updates')
      .select('*')
      .eq('tool_slug', slug)
      .order('updated_at', { ascending: false })
      .limit(20)
    return (data as ToolUpdate[]) || []
  }

  return { getUpdatesBySlug }
}
