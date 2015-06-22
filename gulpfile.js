var gulp = require('gulp');
var tap = require('gulp-tap');
var less = require('gulp-less');

gulp.task('test', function() {

    gulp.src('src/test.css')
        .pipe(less())
        .pipe(tap(function(file) {
            throw new Error('this error never shown due to less');
        }))
        .pipe(gulp.dest('dest/'));

});
