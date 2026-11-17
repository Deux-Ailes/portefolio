// Writes the fully rendered page into each built HTML file, so search engines
// and link previews see the content without running JavaScript.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const ssrDir = `${root}dist-ssr`
const { render } = await import(pathToFileURL(`${ssrDir}/entry-server.js`).href)

const pages = [
  { locale: 'fr', file: `${root}dist/index.html` },
  { locale: 'en', file: `${root}dist/en/index.html` },
]

for (const { locale, file } of pages) {
  const html = await readFile(file, 'utf8')
  const placeholder = '<div id="app"></div>'
  if (!html.includes(placeholder)) throw new Error(`No app placeholder in ${file}`)
  const app = await render(locale)
  await writeFile(file, html.replace(placeholder, `<div id="app">${app}</div>`))
  console.log(`prerendered ${locale}: ${file.slice(root.length)}`)
}

await rm(ssrDir, { recursive: true, force: true })
