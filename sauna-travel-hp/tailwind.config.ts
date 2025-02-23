import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        body: [
          'Avenir',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'Hiragino Sans',
          'ヒラギノ角ゴシック',
          'メイリオ',
          'Meiryo',
          'YuGothic',
          'Yu Gothic',
          'ＭＳ Ｐゴシック',
          'MS PGothic',
          'sans-serif'
        ]
      }
    },
  },
  plugins: [],
};

export default config;