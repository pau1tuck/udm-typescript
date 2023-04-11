/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: true,
    content: [
        // "./src/app/**/*.{js,ts,jsx,tsx}",
        // "./src/components/**/*.{js,ts,jsx,tsx}",
        // "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ["Quicksand", "ui-sans-serif", "Georgia"],
                body: ["Montserrat", "ui-sans-serif", "Georgia"],
            },
            colors: {
                darkGray: "rgba(18, 18, 18, 0.9)",
            },
            keyframes: {
                flashing: {
                    "0%": { opacity: "1" },
                    "50%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
            animation: {
                flashing: "flashing 4s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
