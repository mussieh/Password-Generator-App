/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xl: { max: "1440px" },
            lg: { max: "1024px" },
            md: { max: "768px" },
            sm: { max: "425px" },
            xs: { max: "375px" },
            xxs: { max: "320px" },
        },
        extend: {
            colors: {
                red: "#F64A4A",
                orange: "#FB7C58",
                yellow: "#F8CD65",
                neonGreen: "#A4FFAF",
                almostWhite: "#E6E5EA",
                grey: "#817D92",
                darkGrey: "#24232C",
                veryDarkGrey: "#18171F",
            },
            fontFamily: {
                sans: ["JetBrains Mono", "monospace"],
            },
        },
    },
    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: "10px" },
            });
        }),
    ],
};
