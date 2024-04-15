// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/ui/tailwind.config.ts";

const config: Pick<Config, "presets"> = {
  // content: [
  //   "./src/app/**/*.tsx",
  //   "./src/**/*.tsx",
  //   "../.././node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  //   "../../packages/ui/**/*.tsx",
  // ],
  presets: [sharedConfig],
};

export default config;
