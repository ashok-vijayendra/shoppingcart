var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    reactify = require('reactify'),
    package = require('./package.json'),
    nodemon = require('nodemon'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(package.dest.css));
});

gulp.task('bundle', function() {
    return browserify(package.paths.app)
        .transform('reactify', {stripTypes: true, es6: true})
        .bundle()
        .pipe(source(package.dest.app))
        .pipe(gulp.dest(package.dest.dist))
        .pipe(livereload());
});

gulp.task('watch', function () {
    gulp.watch(['src/**/*.js', 'src/**/*.jsx'],['bundle']);
    gulp.watch(['src/**/*.scss'],['styles']);
});

gulp.task('nodemon', function () {
    nodemon({
        script: 'bin/www', ext: 'js jsx jade',ignore:["public/scripts/react/*"]
    });
});