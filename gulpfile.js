var gulp = require("gulp");
var server = require("browser-sync").create();
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var del = require("del");

gulp.task ("style", function(){
    gulp.src("source/css/style.css")
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("copy", function() {
    return gulp.src([
        "source/fonts/**/*.{woff,woff2}",
        "source/img/**",
        "source/js/**"
    ], {
        base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
    return del("build");
});

gulp.task("build", function(done) {
    run(
        "clean",
        "copy",
        "style",
        done
    );
});

gulp.task("serve", function () {
    server.init({
        server: "build/"
    });

    gulp.watch("source/css/**/*.css", ["style"]);
    gulp.watch("source/*.html")
        .on("change", server.reload);
});