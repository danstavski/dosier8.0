const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const terser = require("gulp-terser");

gulp.task("server", function () {
  browserSync({
    server: {
      baseDir: "dist",
    },
    port: 3000, // Можно указать любой порт
    notify: false,
  });

  gulp.watch("src/**/*.html").on("change", browserSync.reload);
});

gulp.task("styles", function () {
  return gulp
    .src("src/scss/**/*.+(scss|sass)")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename({ suffix: ".min", prefix: "" }))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("html", function () {
  return gulp
    .src("src/**/*.html") // Обрабатываем все HTML-файлы
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch("src/scss/**/*.+(scss|sass|css)", gulp.parallel("styles"));
  gulp.watch("src/**/*.html").on("change", gulp.parallel("html"));
  gulp.watch("src/js/**/*.js", gulp.parallel("scripts"));
});

gulp.task("scripts", function () {
  return gulp
    .src("src/js/**/*.js")
    .pipe(terser()) // Используем terser вместо uglify
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

gulp.task("fonts", function () {
  return gulp.src("src/fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

gulp.task("icons", function () {
  return gulp.src("src/icons/**/*").pipe(gulp.dest("dist/icons"));
});

gulp.task("images", function () {
  return gulp.src("src/img/**/*").pipe(imagemin()).pipe(gulp.dest("dist/img"));
});

gulp.task("videos", function () {
  return gulp
    .src("src/videos/**/*") // Все файлы в папке videos и её подпапках
    .pipe(gulp.dest("dist/videos")) // Копируем в dist с сохранением структуры
    .pipe(browserSync.stream()); // Обновляем браузер
});

gulp.task(
  "default",
  gulp.parallel(
    "watch",
    "server",
    "styles",
    "scripts",
    "fonts",
    "icons",
    "html",
    "images",
    "videos"
  )
);
