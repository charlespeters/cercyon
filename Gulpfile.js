const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

gulp.task('styles', ()=> {
  return gulp.src()
    .pipe(postcss())
    .pipe(size())
    .pipe(gulp.dest());
});

gulp.task('build');
gulp.task('default');
