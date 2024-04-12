// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/ui/tailwind.config.ts";

const config: Pick<Config, "content" | "presets" | "plugins"> = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
