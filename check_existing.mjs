import { createClient } from './node_modules/@supabase/supabase-js/dist/index.mjs';

const supabase = createClient(
  'https://fmjwwyygqseownpazypt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtand3eXlncXNlb3ducGF6eXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4MjA5ODQsImV4cCI6MjA4ODM5Njk4NH0.1OWIEWWWdMHx-zpmnxpFlgJDPdBuypCHsSVvuKo1ve4'
);

const tools = ['comfyui', 'consensus', 'copy-ai', 'creatie', 'dall-e', 'dify', 'dora', 'fal-ai', 'felo', 'figma', 'flux', 'framer', 'galileo', 'gamma', 'genspark', 'grok', 'groq', 'hailuo-ai', 'heygen', 'hugging-face'];

const { data, error } = await supabase
  .from('tool_updates')
  .select('tool_slug, updated_at, title, version')
  .in('tool_slug', tools)
  .order('updated_at', { ascending: false });

if (error) {
  console.error('Error:', error);
} else {
  console.log(JSON.stringify(data, null, 2));
}
