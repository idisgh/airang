#!/usr/bin/env node
// tools.ts의 logoUrl을 /logos/{slug}.png 형식으로 업데이트
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'tools.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// slug → 새 logoUrl 매핑 (파일명이 slug와 다른 경우 처리 포함)
// 형식: [현재 logoUrl 값, 새 logoUrl 값]
const replacements = [
  // 간단히 .svg → .png (같은 파일명)
  ["/logos/chatgpt.svg", "/logos/chatgpt.png"],
  ["/logos/claude.svg", "/logos/claude.png"],
  ["/logos/gemini.svg", "/logos/gemini.png"],
  ["/logos/midjourney.svg", "/logos/midjourney.png"],
  ["/logos/perplexity.svg", "/logos/perplexity.png"],
  ["/logos/cursor.svg", "/logos/cursor.png"],
  ["/logos/jasper.svg", "/logos/jasper.png"],
  ["/logos/stable-diffusion.svg", "/logos/stable-diffusion.png"],
  ["/logos/runway.svg", "/logos/runway.png"],
  ["/logos/suno.svg", "/logos/suno.png"],
  ["/logos/lovable.svg", "/logos/lovable.png"],
  ["/logos/elevenlabs.svg", "/logos/elevenlabs.png"],
  ["/logos/deepl.svg", "/logos/deepl.png"],
  ["/logos/gamma.svg", "/logos/gamma.png"],
  ["/logos/pika.svg", "/logos/pika.png"],
  ["/logos/windsurf.svg", "/logos/windsurf.png"],
  ["/logos/kling.svg", "/logos/kling.png"],
  ["/logos/udio.svg", "/logos/udio.png"],
  ["/logos/writesonic.svg", "/logos/writesonic.png"],
  ["/logos/papago.svg", "/logos/papago.png"],
  ["/logos/wireframable.svg", "/logos/wireframable.png"],
  ["/logos/janus.svg", "/logos/janus.png"],
  ["/logos/muapi.svg", "/logos/muapi.png"],
  ["/logos/jude.svg", "/logos/jude.png"],
  ["/logos/grok.svg", "/logos/grok.png"],
  ["/logos/le-chat.svg", "/logos/le-chat.png"],
  ["/logos/poe.svg", "/logos/poe.png"],
  ["/logos/flux.svg", "/logos/flux.png"],
  ["/logos/ideogram.svg", "/logos/ideogram.png"],
  ["/logos/imagefx.svg", "/logos/imagefx.png"],
  ["/logos/recraft.svg", "/logos/recraft.png"],
  ["/logos/adobe-firefly.svg", "/logos/adobe-firefly.png"],
  ["/logos/magnific.svg", "/logos/magnific.png"],
  ["/logos/adobe-photoshop.svg", "/logos/adobe-photoshop.png"],
  ["/logos/microsoft-designer.svg", "/logos/microsoft-designer.png"],
  ["/logos/krea.svg", "/logos/krea.png"],
  ["/logos/playground-ai.svg", "/logos/playground-ai.png"],
  ["/logos/scenario.svg", "/logos/scenario.png"],
  ["/logos/clova-note.svg", "/logos/clova-note.png"],
  ["/logos/notta.svg", "/logos/notta.png"],
  ["/logos/hailuo-ai.svg", "/logos/hailuo-ai.png"],
  ["/logos/luma-ai.svg", "/logos/luma-ai.png"],
  ["/logos/sora.svg", "/logos/sora.png"],
  ["/logos/vidu.svg", "/logos/vidu.png"],
  ["/logos/capcut.svg", "/logos/capcut.png"],
  ["/logos/vrew.svg", "/logos/vrew.png"],
  ["/logos/veed.svg", "/logos/veed.png"],
  ["/logos/invideo-ai.svg", "/logos/invideo-ai.png"],
  ["/logos/heygen.svg", "/logos/heygen.png"],
  ["/logos/synthesia.svg", "/logos/synthesia.png"],
  ["/logos/tripo.svg", "/logos/tripo.png"],
  ["/logos/meshy.svg", "/logos/meshy.png"],
  ["/logos/notebooklm.svg", "/logos/notebooklm.png"],
  ["/logos/consensus.svg", "/logos/consensus.png"],
  ["/logos/hugging-face.svg", "/logos/hugging-face.png"],
  ["/logos/replicate.svg", "/logos/replicate.png"],
  ["/logos/fal-ai.svg", "/logos/fal-ai.png"],
  ["/logos/tost-ai.svg", "/logos/tost-ai.png"],
  ["/logos/anifusion.svg", "/logos/anifusion.png"],
  ["/logos/storytribe.svg", "/logos/storytribe.png"],
  ["/logos/dify.svg", "/logos/dify.png"],
  ["/logos/make.svg", "/logos/make.png"],
  ["/logos/replit.svg", "/logos/replit.png"],
  ["/logos/codev.svg", "/logos/codev.png"],
  ["/logos/reweb.svg", "/logos/reweb.png"],
  ["/logos/aippt.svg", "/logos/aippt.png"],
  ["/logos/genspark.svg", "/logos/genspark.png"],
  ["/logos/felo.svg", "/logos/felo.png"],
  ["/logos/arc.svg", "/logos/arc.png"],
  ["/logos/musicfx.svg", "/logos/musicfx.png"],
  ["/logos/pinokio.svg", "/logos/pinokio.png"],
  ["/logos/comfyui.svg", "/logos/comfyui.png"],
  ["/logos/napkin-ai.svg", "/logos/napkin-ai.png"],
  ["/logos/mapify.svg", "/logos/mapify.png"],
  ["/logos/figma.svg", "/logos/figma.png"],
  ["/logos/ugic.svg", "/logos/ugic.png"],
  ["/logos/creatie.svg", "/logos/creatie.png"],
  ["/logos/tldraw.svg", "/logos/tldraw.png"],
  ["/logos/character-ai.svg", "/logos/character-ai.png"],
  ["/logos/wrtn.svg", "/logos/wrtn.png"],
  ["/logos/groq.svg", "/logos/groq.png"],
  ["/logos/together-ai.svg", "/logos/together-ai.png"],
  ["/logos/wegic.svg", "/logos/wegic.png"],
  ["/logos/framer.svg", "/logos/framer.png"],
  ["/logos/dora.svg", "/logos/dora.png"],
  ["/logos/uizard.svg", "/logos/uizard.png"],
  ["/logos/galileo.svg", "/logos/galileo.png"],
  ["/logos/supervision.svg", "/logos/supervision.png"],
  ["/logos/transformers.svg", "/logos/transformers.png"],

  // 파일명이 slug와 다른 것들
  ["/logos/dalle.svg", "/logos/dall-e.png"],        // slug: dall-e
  ["/logos/copilot.svg", "/logos/github-copilot.png"], // slug: github-copilot
  ["/logos/notion.svg", "/logos/notion-ai.png"],    // slug: notion-ai
  ["/logos/canva.svg", "/logos/canva-ai.png"],      // slug: canva-ai
  ["/logos/bolt.svg", "/logos/bolt-new.png"],       // slug: bolt-new
  ["/logos/copyai.svg", "/logos/copy-ai.png"],      // slug: copy-ai
  ["/logos/leonardo.svg", "/logos/leonardo-ai.png"],// slug: leonardo-ai
  ["/logos/v0.svg", "/logos/v0-dev.png"],           // slug: v0-dev
  ["/logos/ms-copilot.svg", "/logos/copilot.png"],  // slug: copilot (Microsoft)
  ["/logos/surfer.svg", "/logos/surfer-seo.png"],   // slug: surfer-seo
];

let count = 0;
for (const [oldUrl, newUrl] of replacements) {
  const oldStr = `logoUrl: '${oldUrl}'`;
  const newStr = `logoUrl: '${newUrl}'`;
  if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    count++;
    console.log(`✓ ${oldUrl} → ${newUrl}`);
  } else {
    console.log(`✗ Not found: ${oldUrl}`);
  }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log(`\n총 ${count}개 교체 완료`);

// 검증
const svgRemaining = (content.match(/logoUrl: '\/logos\/[^']+\.svg'/g) || []);
const pngCount = (content.match(/logoUrl: '\/logos\/[^']+\.png'/g) || []).length;
console.log(`SVG 남음: ${svgRemaining.length}, PNG: ${pngCount}`);
if (svgRemaining.length > 0) {
  console.log('SVG 남은 것:', svgRemaining);
}
