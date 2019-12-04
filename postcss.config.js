// module.exports = {
//   plugins: [
//     require('postcss-easy-import'),
//     require('tailwindcss'),
//     require('@fullhuman/postcss-purgecss')({
//       content: [
//         './pages/**/*.{js,jsx,ts,tsx}',
//         './components/**/*.{js,jsx,ts,tsx}',
//         './layout/**/*.{js,jsx,ts,tsx}'
//       ],
//       defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
//     }),
//     require('autoprefixer'),
//     require('cssnano')
//   ]
// }
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')({
  preset: 'default'
})
// only needed if you want to purge
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './layout/**/*.{js,jsx,ts,tsx}'
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    tailwindcss('./tailwind.config.js'),
    // only needed if you want to purge
    ...(process.env.NODE_ENV === 'production'
      ? [purgecss, autoprefixer, cssnano]
      : [autoprefixer, cssnano])
  ]
}
