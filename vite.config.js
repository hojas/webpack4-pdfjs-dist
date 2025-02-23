import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: {
        'pdfjs': './src/pdfjs.js',
        'pdf.worker': './src/pdf.worker.js',
      },
      name: 'pdfjs',
      formats: ['es'],
    },
    outDir: './libs',
  },
})
