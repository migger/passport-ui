var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('concat', function() {
  return gulp
    .src(['./dist/passport-ui/runtime.js', './dist/passport-ui/polyfills.js', './dist/passport-ui/main.js'])
    .pipe(concat('passport-ui.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('rename', function() {
  return gulp.src('./dist/passport-ui/styles.css')
    .pipe(rename('passport-ui.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['concat', 'rename']);
