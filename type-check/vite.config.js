import { defineConfig } from 'vite';
import { fileURLToPath, URL} from 'node:url';
import pluginReact from '@vitejs/plugin-react';

const viteConfig = defineConfig({
  base:'/',
  server:{
    host: 'localhost',
    port:3000,
  },
  plugins: [
    pluginReact(
     { jsxRuntime :'automatic'}
    ),
  ],
  resolve:{
    alias:{
      // 사용자가 @을 쓰게 되면 그것은 src 폴더를 가리키게 하겠다.
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});

export default viteConfig;