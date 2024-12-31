import { defineConfig, splitVendorChunkPlugin } from "vite";
import { fileURLToPath } from "url";
import * as path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
/** @type {import { 'vite' }.UserConfig} */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
