import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    __ALTCHA_TYPE_BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  build: {
    outDir: 'src/Resources/public',
    emptyOutDir: false,
    rollupOptions: {
      input: 'src/Resources/assets/src/altcha-type.ts',
      output: {
        format: 'iife',
        entryFileNames: 'altcha-type.js',
        assetFileNames: 'altcha-type.[ext]',
      },
    },
    minify: true,
    sourcemap: false,
  },
  resolve: {
    extensions: ['.ts'],
  },
});
