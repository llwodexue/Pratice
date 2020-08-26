const gulp = require("gulp");
const autoprefixer = require("autoprefixer");
const atImport = require("postcss-import");

// 指定任务名为 postcss
gulp.task("postcss", function () {
    var postcss = require("gulp-postcss");
    // 指定源文件来自 2_postcss.css
    return gulp
        .src("2_postcss.css")
        .pipe(
            postcss([
                atImport,
                autoprefixer({
                    overrideBrowserslist: [">=0%"],
                }),
            ])
        )
        .pipe(gulp.dest("3_post"));
});
