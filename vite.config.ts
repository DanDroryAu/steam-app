/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  }
});

