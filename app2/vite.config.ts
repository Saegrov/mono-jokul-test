import type { UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default {
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: "node_modules/@fremtind/jokul/src/fonts/*", dest: "fonts" },
      ],
    }),
  ],
} satisfies UserConfig;
