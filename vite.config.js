import { defineConfig } from "vite";

export default defineConfig(async ({ command, mode }) => {
  return {
    build: {
      cssCodeSplit: false,
      outDir: "build"
    },
    server: {
      host:"0.0.0.0",
      port:3000,
      strictPort: false,
      hmr: {
        clientPort: 80
      }
    },
    optimizeDeps: {
      exclude: ['./settings.json']
    },
  };
});
