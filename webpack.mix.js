const mix = require('laravel-mix')
const path = require('path')

mix.js('resources/js/app.js', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [
      require("tailwindcss"),
  ])
  .vue()
  .webpackConfig({
    resolve: {
      alias: {
        'composition-api': path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm-bundler.js')
      },
    },
  })
;
