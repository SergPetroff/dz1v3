var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
 
gulp.task('default', function () {
  return gulp.src('app/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('app/'));
});


/*var ​gulp = require(​'​gulp'​),

var ConcatCss = require('gulp-concut-css');
gulp.task(​'​default'​, ​function​() {
​ 	return gulp.src('app/css/*.css') //фильтр поиска файлов
	.pipe(ConcatCss("bundle.css")) // файл в который будет производиться сборка
	.pipe(gulp.dest('app/css/')); // папка назнчения куда будет записан собранный файл

});
*/

