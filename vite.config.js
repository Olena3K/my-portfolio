import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ghPages from "vite-plugin-gh-pages";

const repo = "my-portfolio";

export default defineConfig({
  base: `/${repo}/`,
  plugins: [react(), ghPages()],
});
