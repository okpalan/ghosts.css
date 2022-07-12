const gulp=require("gulp");
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync").create();
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

gulp.task("serve", function (){

    browserSync.init({
        server: "./"
    });

    gulp.watch("./**/*.html").on('change', browserSync.reload)
    gulp.watch('./src/**/*.scss', gulp.parallel(['sass']));
})

gulp.task("default",gulp.parallel(["serve"]));