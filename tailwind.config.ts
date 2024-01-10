import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const plugin = require("tailwindcss/plugin");

const capitalizeFirst = plugin(function ({ addUtilities }: unknown) {
    const newUtilities = {
        ".capitalize-first:first-letter": {
            textTransform: "uppercase",
        },
    };
    addUtilities(newUtilities, ["responsive", "hover"]);
});

const dropcapFirst = plugin(function ({ addUtilities }: unknown) {
    const newUtilities = {
        ".dropcap-first:first-letter": {
            textTransform: "uppercase",
            float: "left",
            fontSize: "4.5rem",
            paddingRight: "2rem",
            fontWeight: "bold",
        },
    };
    addUtilities(newUtilities, ["responsive", "hover"]);
});

export default {
    content: ["./src/components/**/*.tsx"],
    darkMode: "class",
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            animation: {
                "loading-text": "dotty steps(1,end) 1s infinite",
            },
            maxWidth: {
                "8xl": "1536px",
            },

            screens: {
                sm: "600px",
                lg: "900px",
                xl: "1200px",
            },
            boxShadow: {
                newsLetter:
                    "0 1px 3px 0 rgba(0, 0, 0, 0.1) , 0 5px 15px 0 rgba(0, 0, 0, 0.05)",
            },
        },
    },
    plugins: [capitalizeFirst, dropcapFirst, require("@tailwindcss/forms")],
} satisfies Config;
