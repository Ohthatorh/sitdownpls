const { src, dest, series, watch } = require('gulp')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const svgSprite = require('gulp-svg-sprite')
const uglify = require('gulp-uglify-es').default
const babel = require('gulp-babel')
const image = require('gulp-image')
const notify = require('gulp-notify')
const sourcemaps = require('gulp-sourcemaps')
const del = require('del')
const browserSync = require('browser-sync').create()

const resources = () => {
    return src('src/**')
        .pipe(dest('dist'))
}

const clean = () => {
    return del('dist')
}

const stylesDev = () => {
    return src('src/styles/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(sourcemaps.write())
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}

const htmlMinify = () => {
    return src('src/**/*.html')
    .pipe(htmlMin({
        collapseWhitespace:true
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const svgSprites = () => {
    return src('src/img/**/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            } 
        }))
        .pipe(dest('dist/img'))
}

const images = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/**/*.jpeg'
    ])
    .pipe(image())
    .pipe(dest('dist/img'))
}

const scriptsDev = () => {
    return src([
        'src/scripts/**/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('script.js'))
    .pipe(uglify({
        toplevel: true
    }).on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

watch('src/**/*.html', htmlMinify)
watch('src/**/*.css', stylesDev)
watch('src/img/svg/**/*.svg', svgSprites)
watch('src/**/.js', scriptsDev)
watch('src/**', resources)

exports.stylesDev = stylesDev
exports.scripts = scriptsDev
exports.htmlMinify = htmlMinify
exports.default = series(clean, resources, htmlMinify, scriptsDev, stylesDev, images, svgSprites, watchFiles)

const scriptsBuild = () => {
    return src([
        'src/scripts/**/*.js'
    ])
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('script.js'))
    .pipe(uglify({
        toplevel: true
    }).on('error', notify.onError()))
    .pipe(dest('dist'))
}

const stylesBuild = () => {
    return src('src/**/*.css')
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(dest('dist'))
}

exports.build = series(clean, resources, htmlMinify, scriptsBuild, stylesBuild, images, svgSprites, watchFiles)
