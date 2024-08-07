import { defineConfig } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData(source, filePath) {
            `@use "astro-breakpoints/use-breakpoints.scss" as *;`;
          },
        },
      },
    },
  },
  integrations: [icon({
    include: {
      bxl: ["*"],
      mdi: ["*"]
    }
  })]
});