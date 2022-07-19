const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('./public_html/');

mix.js('resources/js/app.jsx', 'public_html/js')
// mix.ts('resources/ts/app.tsx', 'public_html/js')
    .react()
    .sass('resources/sass/app.scss', 'public_html/css');
