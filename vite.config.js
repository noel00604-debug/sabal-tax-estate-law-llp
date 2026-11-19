import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ARTIFACT=1 builds a single-file variant (images inlined as data URIs) that
// scripts/make-artifact.mjs then flattens into dist/artifact.html for publishing.
const artifact = process.env.ARTIFACT === '1'

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    assetsInlineLimit: artifact ? 100_000_000 : 0,
    cssCodeSplit: false,
    outDir: artifact ? 'dist-artifact' : 'dist',
    emptyOutDir: true,
  },
})
