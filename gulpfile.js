var { watch, src, dest, parallel, series } = require('gulp');
var browserSync = require('browser-sync'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    webpack = require('webpack-stream');

// Девсервер
function devServer(cb) {
    var params = {
        watch: true,
        reloadDebounce: 150,
        notify: false,
        server: { baseDir: './build' },
    };

    browserSync.create().init(params);
    cb();
}

// Сборка
function buildStyles() {
    return src(['src/styles/*.sass', 'src/styles/*.css'])
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(dest('build/styles/'));
}


function buildScripts() {
    return src('src/js/**/*.js')
        .pipe(dest('build/js/'));
}

function buildPages() {
    // Пути можно передавать массивами
    return src(['src/pages/*.pug', 'src/pages/*.html'])
        .pipe(pug({
            pretty: true
        }))
        .pipe(dest('build/'));
}

function buildAssets(cb) {
    // Уберём пока картинки из общего потока
    src('src/img/**/*.*')
        .pipe(dest('build/img/'));

    src('src/img/**/*.*')
        .pipe(imagemin())
        .pipe(dest('build/img'));

    // Раньше функция что-то вовзращала, теперь добавляем вместо этого искусственый колбэк
    // Это нужно, чтобы Галп понимал, когда функция отработала и мог запустить следующие задачи
    cb();
}

// Отслеживание
function watchFiles() {
    watch('src/pages/*.html', buildPages);
    watch('src/styles/*.css', buildStyles);
    watch('src/js/**/*.js', buildScripts);
    watch('src/img/**/*.*', buildAssets);
    watch(['src/pages/*.pug', 'src/pages/*.html'], buildPages);
    watch('src/styles/*.sass', buildStyles);
}

exports.default =
    parallel(
        devServer,
        series(
            parallel(buildPages, buildStyles, buildScripts, buildAssets),
            watchFiles
        )
    );