-- tool_updates 테이블: 도구 업데이트 히스토리
-- 실행: Supabase SQL Editor에서 이 파일 실행

CREATE TABLE IF NOT EXISTS tool_updates (
  id SERIAL PRIMARY KEY,
  tool_slug TEXT NOT NULL REFERENCES tools(slug),
  updated_at DATE NOT NULL DEFAULT CURRENT_DATE,
  title TEXT NOT NULL,
  changes TEXT[] NOT NULL DEFAULT '{}',
  version TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_tool_updates_slug ON tool_updates(tool_slug);
CREATE INDEX IF NOT EXISTS idx_tool_updates_date ON tool_updates(updated_at DESC);

ALTER TABLE tool_updates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read tool_updates"
  ON tool_updates FOR SELECT USING (true);

CREATE POLICY "Allow insert tool_updates"
  ON tool_updates FOR INSERT WITH CHECK (true);
