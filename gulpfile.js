
var gulp = require('gulp'),
	browserSync = require("browser-sync");
gulp.task('server',function (){
	browserSync({
		port: 3000,
		server: {
			baseDir: './'
		}
	});
});
gulp.task('watch', function() {
	gulp.watch([
		'index.html',
		'app/css/**/*.css',
		'app/js/**/*.js'
	]).on('change', browserSync.reload);
});
gulp.task('default', ['server', 'watch']);


