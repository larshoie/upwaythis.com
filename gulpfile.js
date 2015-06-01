// The packages we are using
// Not using gulp-load-plugins as it is nice to see whats here.
var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    prefix       = require('gulp-autoprefixer'),
    plumber      = require('gulp-plumber'),
//  concat       = require('gulp-concat');
    uglify       = require('gulp-uglify'),
    rename       = require('gulp-rename'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    minifyHTML   = require('gulp-minify-html'),
    svgSprite    = require('gulp-svg-sprite'),
    config       = {
        "svg": {
            "dimensionAttributes": false
        },
        "mode": {
            "symbol": {
                "example": true
            }
        }
    };

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

gulp.task('fonts', function() {
   gulp.src('src/fonts/**/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('dist/css/fonts'));
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

gulp.task('svgSprite', function () {
  return gulp.src('src/svg/*.svg')
      .pipe(plumber())
      .pipe(svgSprite(config)).on('error', function(error){ console.log(error); })
      .pipe(gulp.dest('dist'));
});

// Default task
// Runs sass, browser-sync, scripts and image tasks
// Watchs for file changes for images, scripts and sass/css
gulp.task('default', ['sass', 'fonts', 'browser-sync', 'scripts', 'minify-html', 'images', 'svgSprite'], function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/fonts', ['fonts']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/images/*', ['images']);
  gulp.watch('src/svg/*.svg', ['svgSprite']);
  gulp.watch('src/*.html', ['minify-html']);
});
