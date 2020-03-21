let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.config.fileLoaderDirs.fonts = 'public/fonts';
mix.js('./src/js/app.js', 'public/js/')
    .sass('./src/sass/app.sass', 'public/styles/')
    .copy('./src/img', 'public/img', false)
    .copy('./src/video', 'public/video', false)
    .copy('./src/fonts', 'public/fonts', false)
    .setPublicPath('public')
    .browserSync('http://localhost:10000');
