/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: ["TTNorms", "sans-serif"],
    },
    extend: {
      colors: {
        site: "#FAF2E8",
        back: "#BED3CE", // D4E1DE
        accent: "#F8C188",
        primary: "#333333", // black
        secondary: "#737373", // grey a8a29e
        white: "#F4F4F4",
      },
      typography: ({ theme }) => ({
        mine: {
          css: {
            "--tw-prose-body": theme("colors.secondary"),
            "--tw-prose-headings": theme("colors.primary"),
            "--tw-prose-lead": theme("colors.secondary"),
            "--tw-prose-links": theme("colors.primary"),
            "--tw-prose-bold": theme("colors.primary"),
            "--tw-prose-counters": theme("colors.secondary"),
            "--tw-prose-bullets": theme("colors.secondary"),
            "--tw-prose-hr": theme("colors.secondary"),
            "--tw-prose-quotes": theme("colors.primary"),
            "--tw-prose-quote-borders": theme("colors.secondary"),
            "--tw-prose-captions": theme("colors.secondary"),
            "--tw-prose-code": theme("colors.primary"),
            "--tw-prose-pre-code": theme("colors.white"),
            "--tw-prose-pre-bg": theme("colors.primary"),
            "--tw-prose-th-borders": theme("colors.secondary"),
            "--tw-prose-td-borders": theme("colors.secondary"),
            "--tw-prose-invert-body": theme("colors.secondary"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.secondary"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.secondary"),
            "--tw-prose-invert-bullets": theme("colors.secondary"),
            "--tw-prose-invert-hr": theme("colors.secondary"),
            "--tw-prose-invert-quotes": theme("colors.white"),
            "--tw-prose-invert-quote-borders": theme("colors.secondary"),
            "--tw-prose-invert-captions": theme("colors.secondary"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.secondary"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.secondary"),
            "--tw-prose-invert-td-borders": theme("colors.secondary"),
          },
        },
      }),
    },
  },
  purge: {
    enabled: true,
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  },
  plugins: [require("@tailwindcss/typography")],
};
