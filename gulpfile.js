var gulp = require('gulp');
var coffee = require('gulp-coffee');
var pug = require('gulp-pug');
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

gulp.task('pug', ['sass', 'coffee'], function(){
  gulp.src(['src/pug/**/*.pug', '!src/pug/**/_*.pug'])
    .pipe(pug())
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/coffee/**/*.coffee', ['coffee']);
  gulp.watch('src/pug/**/*.pug', ['pug']);
});

gulp.task('default', ['watch', 'sass', 'coffee', 'pug']);
