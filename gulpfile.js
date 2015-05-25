// The packages we are using
// Not using gulp-load-plugins as it is nice to see whats here.
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var browserSync  = require('browser-sync');
var prefix       = require('gulp-autoprefixer');
var plumber      = require('gulp-plumber');
//var concat       = require('gulp-concat');
var uglify       = require('gulp-uglify');
var rename       = require("gulp-rename");
var imagemin     = require("gulp-imagemin");
var pngquant     = require('imagemin-pngquant');
var minifyHTML   = require('gulp-minify-html');

// Sass
// Compile
// Compress/Minify
// Catch errors (gulp-plumber)
// Autoprefixer
gulp.task('sass', function() {
  gulp.src('src/scss/style.scss')
    .pipe(sass())
    //return sass('src/scss/style.scss', { style: 'compressed' })
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(prefix('last 2 versions', '> 1%'))
    .pipe(plumber())
    .pipe(gulp.dest('dist/css'));
});

// HTML
// Minify that shit as well (why not?)
gulp.task('minify-html', function() {
  var opts = {
    //conditionals: true,
    //comments:true
  };

  return gulp.src('src/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('dist/'));
});

// BrowserSync.io
// Watch CSS, JS & HTML for changes
// View project at: localhost:3000
gulp.task('browser-sync', function() {
  browserSync.init(['dist/css/*.css', 'dist/js/**/*.js', 'dist/*.html'], {
    server: {
      baseDir: 'dist'
    }
  });
});

// Javascript
// Uglify/minify
// Coming soon, fuckin concat those files!
gulp.task('scripts', function() {
  gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(rename({
    suffix: ".min",
  }))
  .pipe(gulp.dest('dist/js'))
});

// Images
// Compress them!
// (Coming soon – responsive images, maybe)
gulp.task('images', function () {
  return gulp.src('src/images/*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('dist/images'));
});

// Default task
// Runs sass, browser-sync, scripts and image tasks
// Watchs for file changes for images, scripts and sass/css
gulp.task('default', ['sass', 'browser-sync', 'scripts', 'minify-html', 'images'], function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/images/*', ['images']);
  gulp.watch('src/*.html', ['minify-html']);
});
