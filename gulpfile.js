'use strict'

var gulp        = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create()
var reload      = browserSync.reload

// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    gulp.watch('index.html').on('change', reload)
    gulp.watch('js/*').on('change', reload)
    gulp.watch('main.js').on('change', reload)
    gulp.watch('main.css').on('change', reload)
})

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
})
  
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass'])
})