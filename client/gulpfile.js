const sass = require("gulp-sass");
const gulp = require("gulp");
const run = require('gulp-run');
const multiProcess = require('gulp-multi-process');

gulp.task("scss", function () {
    return gulp.src("./scss/*.scss")
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest("./src/scss_dist"))
});

gulp.task('react', function() {
  return run('npm start').exec();
})

gulp.task('watch', function() {
  return gulp.watch("./scss/*.scss", ['scss']);
})

gulp.task('default', ['scss'], function (cb) {
  return multiProcess(['react', 'watch'], cb);
});
