var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['scss:watch']);

gulp.task('scss', function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('scss:watch', function () {
  gulp.watch('./assets/scss/**/*.scss', ['scss']);
});