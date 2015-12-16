
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
		'app/index.html',
		'app/css/**/*.css',
		'app/js/**/*.js'
	]).on('change', browserSync.reload);
});
gulp.task('default', ['server', 'watch']);

/*var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
 
gulp.task('default', function () {
  return gulp.src('app/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('app/'));
});*/


/*var ​gulp = require(​'​gulp'​),

var ConcatCss = require('gulp-concut-css');
gulp.task(​'​default'​, ​function​() {
​ 	return gulp.src('app/css/*.css') //фильтр поиска файлов
	.pipe(ConcatCss("bundle.css")) // файл в который будет производиться сборка
	.pipe(gulp.dest('app/css/')); // папка назнчения куда будет записан собранный файл

});
*/

