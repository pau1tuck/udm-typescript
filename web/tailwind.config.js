/** @type {import('tailwindcss').Config} */
module.exports = {
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
        },
    },
    plugins: [],
};
