const gulp = require('gulp')
const sass = require('gulp-sass')

sass.compiler = require('node-sass')

const scssTask = () =>
  gulp
    .src('./src/public/assets/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/public/assets/styles/compiled'))

const watch = () => {
  gulp.watch('./src/public/assets/styles/*.scss', gulp.series('scssTask'))
}

exports.scssTask = scssTask
exports.watch = watch

exports.default = gulp.parallel(scssTask)
