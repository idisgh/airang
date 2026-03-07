-- AIrang Supabase Migration
-- Run this in the Supabase SQL Editor: https://supabase.com/dashboard/project/fmjwwyygqseownpazypt/sql

-- tools 테이블
CREATE TABLE IF NOT EXISTS tools (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  tagline TEXT NOT NULL,
  description TEXT NOT NULL,
  url TEXT NOT NULL,
  logo_url TEXT DEFAULT '',
  categories TEXT[] NOT NULL DEFAULT '{}',
  pricing_model TEXT NOT NULL DEFAULT 'freemium' CHECK (pricing_model IN ('free', 'freemium', 'paid', 'enterprise')),
  pricing_detail TEXT DEFAULT '',
  korean_support TEXT NOT NULL DEFAULT 'none' CHECK (korean_support IN ('full', 'partial', 'none')),
  features TEXT[] NOT NULL DEFAULT '{}',
  platforms TEXT[] NOT NULL DEFAULT '{}',
  rating NUMERIC(2,1) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  alternatives TEXT[] DEFAULT '{}',
  is_featured BOOLEAN DEFAULT false,
  launched_at DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS 정책: 누구나 읽기 가능
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read tools" ON tools FOR SELECT USING (true);

-- categories 테이블
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  name_en TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  icon TEXT DEFAULT '',
  description TEXT DEFAULT ''
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read categories" ON categories FOR SELECT USING (true);
