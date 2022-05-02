import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://pokeapi.co",
        secure: false,
        cookieDomainRewrite: "pokeapi.co",
        changeOrigin: true,
      },
    },
  },
});
