/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				title: ["Six Caps", "sans-serif"],
				sans: ["Inter Variable", "sans-serif"],
			},
			borderRadius: {
				md: "5px",
			},
		},
	},
	plugins: [],
};
