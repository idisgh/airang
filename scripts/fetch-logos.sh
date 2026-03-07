#!/bin/bash
# AI 도구 파비콘 다운로드 스크립트
# Google Favicon API (sz=128) 사용

set -e
cd "$(dirname "$0")/.."
mkdir -p public/logos

SUCCESS=0
FAIL=0
FAILED_LIST=""

download_favicon() {
  local slug="$1"
  local domain="$2"
  local out="public/logos/${slug}.png"

  echo -n "Downloading ${slug} (${domain})... "
  HTTP_CODE=$(curl -s -o "${out}" -w "%{http_code}" \
    --max-time 15 \
    --location \
    "https://www.google.com/s2/favicons?domain=${domain}&sz=128")

  if [ "$HTTP_CODE" -eq 200 ] && [ -s "${out}" ]; then
    SIZE=$(wc -c < "${out}")
    echo "OK (${SIZE} bytes)"
    SUCCESS=$((SUCCESS + 1))
  else
    echo "FAIL (HTTP ${HTTP_CODE})"
    rm -f "${out}"
    FAIL=$((FAIL + 1))
    FAILED_LIST="${FAILED_LIST} ${slug}"
  fi
  sleep 0.5
}

# --- 도구 목록 ---
download_favicon "chatgpt"            "chat.openai.com"
download_favicon "claude"             "claude.ai"
download_favicon "gemini"             "gemini.google.com"
download_favicon "midjourney"         "midjourney.com"
download_favicon "perplexity"         "perplexity.ai"
download_favicon "dalle"              "openai.com"
download_favicon "cursor"             "cursor.com"
download_favicon "copilot-github"     "github.com"
download_favicon "notion"             "notion.so"
download_favicon "jasper"             "jasper.ai"
download_favicon "stable-diffusion"   "stability.ai"
download_favicon "runway"             "runwayml.com"
download_favicon "suno"               "suno.com"
download_favicon "canva"              "canva.com"
download_favicon "lovable"            "lovable.dev"
download_favicon "bolt"               "bolt.new"
download_favicon "elevenlabs"         "elevenlabs.io"
download_favicon "deepl"              "deepl.com"
download_favicon "gamma"              "gamma.app"
download_favicon "copyai"             "copy.ai"
download_favicon "pika"               "pika.art"
download_favicon "leonardo"           "leonardo.ai"
download_favicon "windsurf"           "codeium.com"
download_favicon "v0"                 "v0.dev"
download_favicon "kling"              "klingai.com"
download_favicon "udio"               "udio.com"
download_favicon "writesonic"         "writesonic.com"
download_favicon "ms-copilot"         "copilot.microsoft.com"
download_favicon "surfer"             "surferseo.com"
download_favicon "papago"             "papago.naver.com"
download_favicon "wireframable"       "wireframable.com"
download_favicon "janus"              "janus.cam"
download_favicon "muapi"              "muapi.ai"
download_favicon "jude"               "tomorrowatetoday.com"
download_favicon "grok"               "grok.x.ai"
download_favicon "le-chat"            "chat.mistral.ai"
download_favicon "poe"                "poe.com"
download_favicon "flux"               "blackforestlabs.ai"
download_favicon "ideogram"           "ideogram.ai"
download_favicon "imagefx"            "aitestkitchen.withgoogle.com"
download_favicon "recraft"            "recraft.ai"
download_favicon "adobe-firefly"      "firefly.adobe.com"
download_favicon "magnific"           "magnific.ai"
download_favicon "adobe-photoshop"    "photoshop.adobe.com"
download_favicon "microsoft-designer" "designer.microsoft.com"
download_favicon "krea"               "krea.ai"
download_favicon "playground-ai"      "playground.com"
download_favicon "scenario"           "scenario.com"
download_favicon "clova-note"         "clovanote.naver.com"
download_favicon "notta"              "notta.ai"
download_favicon "hailuo-ai"          "hailuoai.com"
download_favicon "luma-ai"            "lumalabs.ai"
download_favicon "sora"               "sora.com"
download_favicon "vidu"               "vidu.studio"
download_favicon "capcut"             "capcut.com"
download_favicon "vrew"               "vrew.ai"
download_favicon "veed"               "veed.io"
download_favicon "invideo-ai"         "invideo.io"
download_favicon "heygen"             "heygen.com"
download_favicon "synthesia"          "synthesia.io"
download_favicon "tripo"              "tripo3d.ai"
download_favicon "meshy"              "meshy.ai"
download_favicon "notebooklm"         "notebooklm.google.com"
download_favicon "consensus"          "consensus.app"
download_favicon "hugging-face"       "huggingface.co"
download_favicon "replicate"          "replicate.com"
download_favicon "fal-ai"             "fal.ai"
download_favicon "tost-ai"            "tost.ai"
download_favicon "anifusion"          "anifusion.ai"
download_favicon "storytribe"         "storytribe.ai"
download_favicon "dify"               "dify.ai"
download_favicon "make"               "make.com"
download_favicon "replit"             "replit.com"
download_favicon "codev"              "codev.com"
download_favicon "reweb"              "reweb.so"
download_favicon "aippt"              "aippt.com"
download_favicon "genspark"           "genspark.ai"
download_favicon "felo"               "felo.ai"
download_favicon "arc"                "arc.net"
download_favicon "musicfx"            "aitestkitchen.withgoogle.com"
download_favicon "pinokio"            "pinokio.computer"
download_favicon "comfyui"            "comfyui.com"
download_favicon "napkin-ai"          "napkin.ai"
download_favicon "mapify"             "mapify.so"
download_favicon "figma"              "figma.com"
download_favicon "ugic"               "ugic.me"
download_favicon "creatie"            "creatie.ai"
download_favicon "tldraw"             "tldraw.com"
download_favicon "character-ai"       "character.ai"
download_favicon "wrtn"               "wrtn.ai"
download_favicon "groq"               "groq.com"
download_favicon "together-ai"        "together.ai"
download_favicon "wegic"              "wegic.ai"
download_favicon "framer"             "framer.com"
download_favicon "dora"               "dora.run"
download_favicon "uizard"             "uizard.io"
download_favicon "galileo"            "usegalileo.ai"
download_favicon "supervision"        "roboflow.com"
download_favicon "transformers"       "huggingface.co"

echo ""
echo "===== 완료 ====="
echo "성공: ${SUCCESS} / 실패: ${FAIL}"
if [ -n "$FAILED_LIST" ]; then
  echo "실패 목록:${FAILED_LIST}"
fi

TOTAL_SIZE=$(du -sh public/logos/ 2>/dev/null | cut -f1)
echo "총 로고 폴더 크기: ${TOTAL_SIZE}"
