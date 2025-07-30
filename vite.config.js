import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repo = "my-portfolio";

export default defineConfig({
  base: `/${repo}/`,
  plugins: [react()],
});
