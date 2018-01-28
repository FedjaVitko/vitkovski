const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

browserSync = require('browser-sync').create(),
sass = require('gulp-sass');

// Static server & watch scss + html files
gulp.task('watch', ['sass', 'js'], function() {

    browserSync.init({
        server: './app'
    });

    gulp.watch('app/scss/**/*.scss', ['sass'], browserSync.reload);
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/js/**/*.js', ['js'], browserSync.reload);

});

// Compile Sass into CSS & inject into browsers
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
    gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('app'))
        .pipe(browserSync.stream());
})

// DIST
  
gulp.task('html', function(){
    gulp.src('app/*.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass-dist', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('css-dist', function () {
    return gulp.src('app/css/**/normalize.css')
        .pipe(gulp.dest('dist/css'))
});

gulp.task('js-dist', function () {
    return gulp.src('app/js/**/*.*')
        .pipe(gulp.dest('./dist/js'))
})

// minify images
gulp.task('images', function(){
    return gulp.src('app/img/**/*.*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['html', 'sass-dist', 'css-dist', 'js-dist', 'images']);

// default will also watch
gulp.task('default', ['watch']);

