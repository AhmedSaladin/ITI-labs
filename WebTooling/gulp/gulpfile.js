const gulp = require("gulp");
const { src, dest, watch, parallel, series } = require("gulp");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const babel = require("gulp-babel");
const sass = require("gulp-sass");
const cleanCss = require("gulp-clean-css");
const browserSync = require("browser-sync");
const sourcemaps = require("gulp-sourcemaps");

function imgMinify() {
  return src("src/pics/*").pipe(imagemin()).pipe(gulp.dest("dist/images"));
}

function htmlMinify() {
  return src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest("dist"));
}

function jsMinify() {
  return src("src/js/**/*.js", { sourcemaps: true })
    .pipe(concat("all.min.js"))
    .pipe(babel())
    .pipe(terser())
    .pipe(dest("dist/assets/js", { sourcemaps: "." }));
}

function sassMinify() {
  return src(["src/sass/**/*.scss", "src/css/**/*.css"], { sourcemaps: true })
    .pipe(sass())
    .pipe(concat("style.sass.min.css"))
    .pipe(cleanCss())
    .pipe(dest("dist/assets/css", { sourcemaps: "." }));
}

function serve(cb) {
  browserSync({
    server: {
      baseDir: "dist/",
    },
  });
  cb();
}

function reloadSync(cb) {
  browserSync.reload();
  cb();
}

function watchTask() {
  watch("src/*.html", series(htmlMinify, reloadSync));
  watch("src/js/**/*.js", series(jsMinify, reloadSync));
  watch(
    ["src/css/**/*.css", "src/sass/**/*.scss"],
    series(sassMinify, reloadSync)
  );
}

exports.default = series(
  parallel(imgMinify, jsMinify, sassMinify, htmlMinify),
  serve,
  watchTask
);
