/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0D12",
        raised: "#12151C",
        ink: "#ECEEF2",
        muted: "#99A1B3",
        line: "#7A97FF",
        "line-dim": "rgba(122, 151, 255, 0.14)",
        amber: "#FFB347",
        "amber-dim": "rgba(255, 179, 71, 0.14)",
        green: "#35D9B8",
        border: "#262B36",
        board: "#05060A",
        "board-amber": "#FFB347",
      },
      fontFamily: {
        display: ["'Archivo Black'", "'Arial Black'", "sans-serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
        led: ["'Silkscreen'", "'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
