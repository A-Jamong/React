import { defineConfig } from 'vite';
import pluginReact from '@vitejs/plugin-react';

const viteConfig = defineConfig({
  plugins: [
    pluginReact(
      // jsxRuntime 
    )
  ]
});

export default viteConfig;