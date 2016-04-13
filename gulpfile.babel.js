import gulp from 'gulp';
import del from 'del';
import handlebars from 'gulp-compile-handlebars';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import size from 'gulp-size';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import cssnext from 'postcss-cssnext';
import atImport from 'postcss-import';
import apply from 'postcss-apply';
import reporter from 'postcss-reporter';
import stylelint from 'stylelint';
import uglify from 'gulp-uglify';
import jscs from 'gulp-jscs';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserSync from 'browser-sync';
import paths from './paths';

const bs = browserSync.create();

// Templates
/////////////////////////

gulp.task('handlebars', () => {
  const options = {
    ignorePartials: true,
    batch: [paths.views.components],
  };

  const hbsConfig = {
    base: './',
  };

  return gulp.src([paths.views.src, paths.views.ignore])
    .pipe(plumber())
    .pipe(handlebars(hbsConfig, options))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest(paths.build + '/'))
    .pipe(bs.stream());
});

// Scripts
/////////////////////////

const bundler = watchify(browserify(paths.js.src, watchify.args));

function bundle() {
  return bundler
    .transform(babelify)
    .bundle()
    .pipe(source('./bundle.js'))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(size({
        showFiles: true,
        gzip: true,
      }))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(bs.stream());
};

bundler.on('update', bundle);
gulp.task('scripts', bundle);

// Styles
/////////////////////////

gulp.task('styles', () => {
  const processors = [
    atImport,
    cssnext,
    apply
  ];
  return gulp.src(paths.css.src)
    .pipe(plumber())
    .pipe(postcss(processors))
    .pipe(size({
      showFiles: true,
      gzip: true,
    }))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest(paths.css.dest))
    .pipe(bs.stream());
});

// Image Processing
/////////////////////////

gulp.task('images', () => {
  return gulp.src(paths.img.src)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
    }))
    .pipe(size({
      showFiles: true,
      gzip: true,
    }))
    .pipe(gulp.dest(paths.img.dest));
});

// Linting
/////////////////////////

// Lint Styles
gulp.task('lint:css', () => {
  return gulp.src(paths.css.all)
    .pipe(postcss([
      stylelint,
      reporter({ clearMessages: true }),
    ]));
});

// Lint Scripts
gulp.task('lint:js', () => {
  return gulp.src(paths.js.src)
    .pipe(jscs())
    .pipe(jscs.reporter())
		.pipe(jscs.reporter('fail'));
});

gulp.task('lint', ['lint:css', 'lint:js']);

// Clean Build Directory
/////////////////////////

gulp.task('clean', () => {
  return del(paths.build);
});

// Server
/////////////////////////

gulp.task('connect', () => {
  return bs.init({
    server: {
      baseDir: paths.build,
    },
  });
});

// Watch
/////////////////////////

gulp.task('watch', () => {
  gulp.watch([paths.css.all], ['styles']);
  gulp.watch([paths.js.all], ['scripts']);
  gulp.watch(paths.views.all, ['handlebars']);
});

// Default
/////////////////////////

gulp.task('build', ['handlebars', 'styles', 'scripts', 'images']);
gulp.task('default', ['build', 'lint', 'watch', 'connect']);
