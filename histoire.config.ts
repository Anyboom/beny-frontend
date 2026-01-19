import { HstNuxt } from "@histoire/plugin-nuxt";
import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
  plugins: [HstNuxt(), HstVue()],
});
