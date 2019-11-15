let gulp = require('gulp')
    browserSync = require('browser-sync');

gulp.task('html', function() {
    return gulp.src('page_lid/page_lid.html').pipe(browserSync.reload({ stream: true }))
})

gulp.task('watch', function() {
    gulp.watch('page_lid/page_lid.html', gulp.parallel('html') )
})

gulp.task( 'default', gulp.parallel('browser-sync', 'watch') )

