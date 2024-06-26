import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  define: {
    "process.env": process.env,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/testSetup.ts"],
  },
});
