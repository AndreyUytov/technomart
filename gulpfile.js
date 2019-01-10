var gulp = require("gulp");
var server = require("browser-sync").create();
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var del = require("del");
var minify = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var run = require("run-sequence");

gulp.task("images", function() {
    return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
        imagemin.optipng({optimizationLevel:3}),
        imagemin.jpegtran({progressive:true}),
        imagemin.svgo()
    ]))
    .pipe(gulp.dest("source/img"));
})

gulp.task ("style", function(){
    gulp.src("source/css/style.css")
    .pipe(minify())
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


gulp.task("serve", function () {
    server.init({
        server: "build/"
    });

    gulp.watch("source/css/**/*.css", ["style"]);
    gulp.watch("source/*.html")
        .on("change", server.reload);
});

gulp.task("build", function(done) {
    run(
        "clean",
        "copy",
        "style",
        done
    );
});