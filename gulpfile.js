var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));


function kompail() {
    return gulp
        .src("./styles/style.scss")
        .pipe(sass.sync())
        .pipe(gulp.dest("./public"))

}

function sassWatch() {
     kompail, gulp.watch(['./styles/*.scss'], kompail)
}

function buildStyles(){
    kompail()
    sassWatch()
}



gulp.task('watch sass', buildStyles); 
gulp.task('style', gulp.series('watch sass'));
gulp.task('default', kompail);