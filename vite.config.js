import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // ye zaruri hai static hosting ke liye
  build: {
    outDir: "dist", // default build folder
  },
});
