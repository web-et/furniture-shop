const { series, src, dest, watch, parallel } = require('gulp');
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssImport = require('postcss-import');
const browserSync = require('browser-sync').create();
const webp = require('gulp-webp');
const fileinclude = require('gulp-file-include');
const rollup = require('rollup');

function removeFolder() {
    return src('dist', { read: false, allowEmpty: true })
        .pipe(clean());
}

function minifyCSS() {
    return src('dist/styles/*.css')
        .pipe(cleanCSS())
        .pipe(dest('dist/styles'));
}

function minifyHTML() {
    return src('dist/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist'));
}

function minifyJS() {
    return src('dist/js/*.js')
        .pipe(uglify())
        .pipe(dest('dist/js'));
}

function minifyImages() {
    return src('dist/images/*')
        .pipe(imagemin())
        .pipe(dest('dist/images'))
}

function javascript() {
    return rollup.rollup({
        input: './src/js/index.js',
    }).then(bundle => {
        return bundle.write({
            file: './dist/js/index.js',
            format: 'umd',
            name: 'library',
            sourcemap: true,
        });
    });
}

function css() {
    return src('./src/styles/index.css')
        .pipe(postcss([
            cssImport(),
            autoprefixer(),
        ]))
        .pipe(dest('dist/styles'));
}

function copyImages() {
    return src('src/images/*')
        .pipe(dest('dist/images'))
}

function html() {
    return src('src/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('dist'));
}

function watchCSS() {
    return watch('src/styles/*.css', css);
}

function watchJS() {
    return watch('src/js/*.js', javascript);
}

function watchHTML() {
    return watch('src/*.html', html);
}

function runServer() {
    return browserSync.init({
        server: 'dist',
    });
}

function getWebpImages() {
    return src(['src/images/*.jpg', 'src/images/*.png'])
        .pipe(webp())
        .pipe(dest('src/images'))
}

function createBuild() {
    return series(
        removeFolder,
        copyImages,
        html,
        css,
        javascript
    );
}

function watchChanges() {
    return parallel(
        watchCSS,
        watchJS,
        watchHTML,
        runServer
    );
}

function optimazeBuild() {
    return series(
        minifyCSS,
        minifyHTML,
        minifyJS,
        minifyImages
    );
}

exports.webp = getWebpImages;
exports.watch = series(createBuild(), watchChanges())
exports.build = series(createBuild(), optimazeBuild());
exports.check = series(createBuild(), optimazeBuild(), runServer);