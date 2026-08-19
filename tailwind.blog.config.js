/** Blog-only Tailwind entry — typography plugin CSS loads on blog routes only. */
module.exports = {
  presets: [require('./tailwind.config.js')],
  content: [
    './src/components/blog/**/*.{js,ts,jsx,tsx}',
    './src/pages/blogs/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('@tailwindcss/typography')],
}
