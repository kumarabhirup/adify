const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const sourcemaps = require('gulp-sourcemaps')

sass.compiler = require('node-sass')

const scssTask = () =>
  gulp
    .src('./src/public/assets/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/public/assets/styles/compiled'))

const watch = () => {
  gulp.watch('./src/public/assets/styles/*.scss', gulp.series('scssTask'))
}

exports.scssTask = scssTask
exports.watch = watch

exports.default = gulp.parallel(scssTask)
