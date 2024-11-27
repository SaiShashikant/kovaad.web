/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            colors: {
                'kovaad-base': "#E4E9F2",
                'kovaad-white': "#FAF4F4",
                'kovaad-gray': "#5F5D52",
                'kovaad-red': "#EF3D3D",
                'kovaad-yellow': "#FBDE6F",
                'kovaad-font-dark': "#2B2929", // To be used
                'kovaad-blue': "#1D4D9F",
                'kovaad-font-gray': "#575757",
                'kovaad-bg-blue': "#f6f9ff",
                'kovaad-bg-hover-blue': "#0D2E66",
                'kovaad-bg-light-blue': "rgba(179,198,239,0.4)",
            },
            fontSize: {
                'font-size-sm': "12px",
                'font-size-med': "14px",
                'font-size-xs': "8px",
            },
            fontFamily: {
                sans: ['var(--font-avenir)'],
                twemoji: ['var(--font-twemoji_mozilla)'],
                wixFont :['var(--font-wix-sans)']
            },
        },
    },
    plugins: [],
}
