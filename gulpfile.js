const gulp=require("gulp");
const sass = require('gulp-sass')(require('sass'));

/**
 * Build SASS
 */
gulp.task("sass", function () {
    return gulp.src('./src/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist'));
})

gulp.task("uglify",function (){
    
})
gulp.task("sass:watch",function (){
    gulp.watch('./src/**/*.scss', gulp.parallel(['sass']));
})

gulp.task("default",gulp.parallel(["sass"]));