/**
 * Next.js only serves static files from `public/`. Source assets live in the project-root
 * `images/` folder — mirror them into `public/images` before dev/build so `/images/...` URLs work.
 * Copies recursively (e.g. `images/HVAC Equipment Logos/*.png`).
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const srcDir = path.join(root, "images")
const destDir = path.join(root, "public", "images")

if (!fs.existsSync(srcDir)) {
  console.warn(`[sync-public-images] Skip: no folder at ${srcDir}`)
  process.exit(0)
}

function copyRecursive(from, to) {
  const stat = fs.statSync(from)
  if (stat.isDirectory()) {
    fs.mkdirSync(to, { recursive: true })
    for (const name of fs.readdirSync(from)) {
      copyRecursive(path.join(from, name), path.join(to, name))
    }
    return
  }
  if (!/\.(jpe?g|png|webp|gif|svg)$/i.test(from)) return
  fs.mkdirSync(path.dirname(to), { recursive: true })
  fs.copyFileSync(from, to)
}

fs.mkdirSync(destDir, { recursive: true })
for (const name of fs.readdirSync(srcDir)) {
  copyRecursive(path.join(srcDir, name), path.join(destDir, name))
}
console.log(`[sync-public-images] Copied images/ → public/images/ (recursive)`)
