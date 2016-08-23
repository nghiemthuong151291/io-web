var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var inject = require('gulp-inject');

gulp.task('default', [], function () {
    console.log("Command:\n   serve - run live reload server");
});

gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("assets/css/"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', ['sass']); 
})

gulp.task('serve', ['sass', 'watch'], function () {
    browserSync({
        notify: false,
        server: {
            baseDir: '.'
        }
    });
    gulp.watch(['*.html'], reload);
    gulp.watch(['js/*.js'], reload);
    gulp.watch("sass/*.scss", ['sass']);
});


