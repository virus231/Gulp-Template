const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp
        .src('src/sass/style.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('src/css'))
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', gulp.series('sass', 'reload'));
    gulp.watch('src/**/*.{html,js,css}', gulp.series('reload'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: './src'
    });
});

gulp.task('reload', function (done) {
    browserSync.reload();
    done();
});

gulp.task('default', gulp.parallel('serve', 'watch'));