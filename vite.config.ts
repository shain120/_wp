import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  base: "/_wp/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/@react-three/fiber")) {
            return "r3f-stack";
          }

          if (id.includes("node_modules/@react-three/drei")) {
            return "drei-stack";
          }

          if (
            id.includes("node_modules/@react-three/postprocessing") ||
            id.includes("node_modules/postprocessing")
          ) {
            return "post-stack";
          }

          if (id.includes("node_modules/three")) {
            return "three-core";
          }

          if (id.includes("node_modules/framer-motion") || id.includes("node_modules/gsap")) {
            return "motion-stack";
          }

          if (id.includes("node_modules/react") || id.includes("node_modules/zustand")) {
            return "core-stack";
          }

          return undefined;
        },
      },
    },
  },
});
