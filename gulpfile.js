var gulp = require('gulp');

var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

gulp.task('autoprefixer', function () {

    return gulp.src('./src/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest'));
});