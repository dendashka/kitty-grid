const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const csso = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

gulp.task("sass", function () {
  return gulp
    .src("./src/kitty-grid.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest("./build"))
    .pipe(browserSync.stream());
});

gulp.task("sass-example", function () {
  return gulp
    .src("./example/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest("./example"))
    .pipe(browserSync.stream());
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./example",
    },
  });
});

gulp.task("checkupdate", function () {
  gulp.watch("./**/*.scss", gulp.parallel("sass", "sass-example"));
});

gulp.task("build", gulp.parallel("sass", "sass-example"));

gulp.task(
  "watch",
  gulp.parallel("sass", "sass-example", "browser-sync", "checkupdate")
);
