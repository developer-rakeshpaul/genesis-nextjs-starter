const purge = require('@fullhuman/postcss-purgecss')({
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './layout/**/*.{js,jsx,ts,tsx}',
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          require('postcss-easy-import'),
          require('tailwindcss'),
          purge,
          require('autoprefixer'),
          require('cssnano'),
        ]
      : [
          require('postcss-easy-import'),
          require('tailwindcss'),
          require('autoprefixer'),
          require('cssnano'),
        ],
}
