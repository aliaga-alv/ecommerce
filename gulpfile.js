var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));


function kompail() {
    return gulp
    .src("./styles/style.scss")
    .pipe(sass.sync())
    .pipe(gulp.dest("./public"))

}

function sassWatch(){
    return gulp.watch(['./styles/*.scss'], kompail)
}

exports.default = kompail
exports.style = sassWatch