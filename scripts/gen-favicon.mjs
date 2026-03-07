import { readFileSync, writeFileSync } from 'fs'
import sharp from 'sharp'

const svgBuffer = readFileSync('public/logo.svg')

// 32x32 favicon
await sharp(svgBuffer, { density: 300 })
  .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile('public/favicon-32.png')

// 180x180 apple-touch-icon
await sharp(svgBuffer, { density: 300 })
  .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile('public/apple-touch-icon.png')

// 192x192 for PWA
await sharp(svgBuffer, { density: 300 })
  .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile('public/icon-192.png')

// ICO from 32px (just use png as favicon.ico alternative)
await sharp(svgBuffer, { density: 300 })
  .resize(48, 48, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile('public/favicon.png')

console.log('✅ Favicons generated!')
