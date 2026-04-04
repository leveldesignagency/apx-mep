/**
 * Next.js only serves static files from `public/`. Hero photos live in the project-root
 * `images/` folder — copy them into `public/images` before dev/build so `/images/*.jpg` URLs work.
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

fs.mkdirSync(destDir, { recursive: true })
for (const name of fs.readdirSync(srcDir)) {
  if (!/\.(jpe?g|png|webp|gif|svg)$/i.test(name)) continue
  fs.copyFileSync(path.join(srcDir, name), path.join(destDir, name))
}
console.log(`[sync-public-images] Copied images/ → public/images/`)
