import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { webcrypto } from 'crypto'; // ✅ esta es la clave

// https://vite.dev/config/
export default defineConfig({
  define:{
    globalThis: {
      crypto: webcrypto // ✅ aquí se inyecta correctamente
    }
  },
  base: "/gestion_citas_hook/",
  plugins: [
    react(),
    tailwindcss(),
  ],
})
