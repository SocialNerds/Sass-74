'use strict';

const sourceFolder = './sass/*.scss'
const destinationFolder = './css'

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const prefix = require('gulp-autoprefixer');
const autoprefixBrowsers = ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11'];

gulp.task('sass:dev', function () {
    return gulp.src(sourceFolder)
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(prefix({ browsers: autoprefixBrowsers }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(destinationFolder))
});

gulp.task('watch', function () {
    gulp.watch(sourceFolder, gulp.series('sass:dev'));
});

gulp.task('sass', function () {
    return gulp.src(sourceFolder)
        .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(prefix({ browsers: autoprefixBrowsers }))
        .pipe(gulp.dest(destinationFolder));
});

gulp.task('default', gulp.series('sass:dev', 'watch'));
