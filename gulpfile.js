var gulp        = require('gulp')
var browserSync = require('browser-sync').create()

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
})

// or...

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'yourlocal.dev'
    })
})

/*
* Dependencias
*/
var concat = require('gulp-concat'),
    uglify = require('gulp-uglify')

/*
* Configuración de la tarea 'demo'
*/
gulp.task('demo', function () {
    gulp.src('main.js')
        .pipe(concat('todo.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/build/'))
})