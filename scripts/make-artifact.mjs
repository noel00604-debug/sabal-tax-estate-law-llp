// Flattens dist-artifact/ into one self-contained dist/artifact.html:
// inline module script + inline stylesheet, no document skeleton (the Artifact
// host supplies doctype/html/head/body). Fonts still load from Google Fonts.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const dir = 'dist-artifact'
const html = readFileSync(join(dir, 'index.html'), 'utf8')
let head = html.match(/<head>([\s\S]*?)<\/head>/i)[1]
const body = html.match(/<body>([\s\S]*?)<\/body>/i)[1]

head = head
  .split('\n')
  .filter((l) => !/<meta charset|<meta name="viewport"/i.test(l))
  .join('\n')
  .replace(/<script type="module"[^>]*src="\.\/([^"]+)"><\/script>/g, (_, src) => {
    const js = readFileSync(join(dir, src), 'utf8').replace(/<\/script/gi, '<\\/script')
    return `<script type="module">\n${js}\n</script>`
  })
  .replace(/<link rel="stylesheet"[^>]*href="\.\/([^"]+)">/g, (_, href) => {
    const css = readFileSync(join(dir, href), 'utf8')
    return `<style>\n${css}\n</style>`
  })
  .replace(/href="\.\/favicon\.svg"/, 'href="favicon.svg"')

mkdirSync('dist', { recursive: true })
const out = `${head.trim()}\n${body.trim()}\n`
writeFileSync('dist/artifact.html', out)
console.log(`dist/artifact.html written (${(out.length / 1024).toFixed(0)} KB)`)
