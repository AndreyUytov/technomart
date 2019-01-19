'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const del = require('del');
const newer = require ('gulp-newer');
const browserSync = require('browser-sync').create();
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('styles', function(){
    return gulp.src('src/styles/style.less')
    .pipe(plumber({
        errorHandler: notify.onError(function(err){
            return {
                title: 'Styles',
                message: err.message
            };
        })
    }))
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest('build/styles'));
});

gulp.task('clean', function() {
    return del('build');
});

gulp.task('copy', function(){
    return gulp.src('src/**/*.{html,png,jpg,svg,woff,woff2,js}', {base:'src'}, {since: gulp.lastRun('copy')})
    .pipe(newer('build'))
    .pipe(gulp.dest('build'));
})

gulp.task('build', gulp.series(
    'clean',
     gulp.parallel('styles', 'copy'))
     );

gulp.task('watch', function(){
    gulp.watch('src/styles/**/*.*', gulp.series('styles'));
    gulp.watch('src/**/*.{html,png,jpg,svg,woff,woff2,js}', gulp.series('copy'));
});

gulp.task('serve', function(){
    browserSync.init({
        server:'build'
    });
    browserSync.watch('build/**/*.*').on('change',browserSync.reload);
});

gulp.task('dev', 
gulp.series('build', gulp.parallel('watch','serve'))
);