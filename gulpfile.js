var gulp = require('gulp');
var coffee = require('gulp-coffee');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src(['src/sass/**/*.scss','!src/sass/**/_*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('public'));
});

gulp.task('coffee', function(){
  gulp.src(['src/coffee/**/*.coffee', '!src/coffee/**/_*.coffee'])
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('public'));
});

gulp.task('jade', ['sass', 'coffee'], function(){
  gulp.src(['src/jade/**/*.jade', '!src/jade/**/_*.jade'])
    .pipe(jade())
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/coffee/**/*.coffee', ['coffee']);
  gulp.watch('src/jade/**/*.jade', ['jade']);
});

gulp.task('default', ['watch', 'sass', 'coffee', 'jade']);
