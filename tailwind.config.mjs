/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            borderRadius: {
                'none': '0',
                'sm': '0',
                DEFAULT: '0',
                'md': '0',
                'lg': '0',
                'xl': '0',
                '2xl': '0',
                '3xl': '0',
                'full': '0',
            },
            colors: {
                primary: '#0F172A', // Deep Navy
                accent: '#DC2626', // Emergency Red
                secondary: '#334155', // Slate 700
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
	},
	plugins: [],
}
