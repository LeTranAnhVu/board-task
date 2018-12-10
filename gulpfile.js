const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const util = require('gulp-util');
const concat = require('gulp-concat');
const {
  reload
} = browserSync;
const config = require('./config/config');


const clean = require('gulp-clean');
const babel = require('gulp-babel');
var runSequence = require('run-sequence');

gulp.task('clean', () => {
  return gulp.src([
      './public/css',
      './public/js',
      './public/img',
    ], {
      read: false
    })
    .pipe(clean());
});

gulp.task('copy-js', () => {
  return gulp.src([
      './app/scripts/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('./public/js'))
})


gulp.task('copy-img', () => {
  return gulp.src([
      './app/img/**.*'
    ])
    .pipe(gulp.dest('./public/img'));
})


gulp.task('sass', () => {
  return gulp.src(['./app/sass/*.sass',
      '!./app/sass/{**/\_*,**/\_*/**}'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', function (err) {
      util.log(err);
    }))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({
      stream: true
    }));

});

gulp.task('concat-css', () => {
  return gulp.src([
      'bower_components/fortawesome-font-awesome/css/all.css',
    ])
    .pipe(concat('thuvien.css'))
    .pipe(gulp.dest('./public/css'));
})


gulp.task('concat-js', () => {
  return gulp.src([
      'bower_components/jquery/dist/jquery.slim.min.js',
      'bower_components/popper.js/dist/umd/popper.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'bower_components/Sortable/Sortable.min.js',

    ])
    .pipe(concat('thuvien.js'))
    .pipe(gulp.dest('./public/js'));
})


gulp.task('watch', () => {
  gulp.watch('./app/sass/**/**.sass', ['sass']);
  gulp.watch('./app/img/**/*.*', ['copy-img']);
  gulp.watch('./app/img', ['copy-img']);
  gulp.watch('./app/scripts/**/*.js', ['copy-js']);
  gulp.watch('./app/views/**/**.pug', ['nodemon']).on('change', browserSync.reload);
  gulp.watch("./public/**/*.*").on('change', browserSync.reload);
});

gulp.task('browser-sync', ['nodemon'], () => {
  return browserSync.init(null, {
    proxy: `http://localhost:${config.server.port}`,
    files: ['public/**/*.*', '**.js'],
    // browser: 'google chrome',
    port: 7000,
  });
});

gulp.task('nodemon', cb => nodemon({
    exec: 'node --inspect',
    script: 'app.js',
    ext: 'js pug sass',
    env: {
      NODE_ENV: 'development',
      DEBUG: 'myapp:*'
    },
  })
  .once('start', cb)
  .on('restart', () => {
    setTimeout(() => {
      browserSync.reload({
        stream: false
      });
    }, 1000);
  }));

gulp.task('default', function (callback) {
  runSequence(
    'clean',
    'copy-js',
    'copy-img',
    'concat-js',
    'concat-css',
    'sass',
    'nodemon',
    'watch',
    'browser-sync',
    callback
  )
});
