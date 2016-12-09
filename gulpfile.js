var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    minCSS      = require('gulp-minify-css'),
    watch       = require('gulp-watch'),
    browserSync = require('browser-sync'),
    imagemin    = require('gulp-imagemin'),
    localHost   = './';

gulp.task('serve', ['sass'], function () {

  browserSync.init({
    server: {
      baseDir: localHost
    }
  });

  gulp.watch('./styles/*.scss', ['sass']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('./styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minCSS({ keepSpecialComments : 1 }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('images', function () {
  return gulp.src('./images/*')
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('./images/min/'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
