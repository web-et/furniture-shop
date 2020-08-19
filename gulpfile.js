const { series, src, dest } = require('gulp');
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');

function removeFolder() {
    return src('dist', { read: false, allowEmpty: true })
        .pipe(clean());
}

function minifyMainCSS() {
    return src('src/*.css')
        .pipe(cleanCSS())
        .pipe(dest('dist'));
}

function minifyCSS() {
    return src('src/styles/*.css')
        .pipe(cleanCSS())
        .pipe(dest('dist/styles'));
}

function minifyHTML() {
    return src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist'));
}

function minifyJS() {
    return src('src/js/*.js')
        .pipe(uglify())
        .pipe(dest('dist/js'));
}

function minifyImages() {
    return src('src/images/*')
        .pipe(imagemin())
        .pipe(dest('dist/images'))
}

exports.default = series(removeFolder, minifyMainCSS, minifyCSS, minifyHTML, minifyJS, minifyImages);