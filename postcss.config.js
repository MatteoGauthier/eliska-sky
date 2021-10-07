const purgecss = require("@fullhuman/postcss-purgecss")

module.exports = {
	plugins: [
		"postcss-nested",
		purgecss({
			content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
		}),
	],
}
