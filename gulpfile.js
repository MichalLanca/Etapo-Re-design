// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const replace = require('gulp-replace');
const browsersync = require('browser-sync').create();
const proxyMiddleware = require('http-proxy-middleware');
var config = require('./config.json');

const footerIncludes = {
  match: /<\/body>(?![\s\S]*<\/body>[\s\S]*$)/i,
  fn: function (req, res, match) {
    return '<script src="/main.js" type="text/javascript"></script>' + match;
  },
};

const headerIncludes = {
  match: /<body[^>]*>/i,
  fn: function (req, res, match) {
    return match + '<link rel="stylesheet" href="/style.css" type="text/css">';
  },
};

const removeProdScript = {
  match: new RegExp("<script src='" + config.prodJsFile + "'.*>", 'i'),
  fn: function () {
    return '';
  },
};

const removeProdLink = {
  match: new RegExp("<link href='" + config.prodCSSFile + "'.*>", 'i'),
  fn: function () {
    return '';
  },
};

const rewriteRules = [
  { ...headerIncludes },
  { ...footerIncludes },
  { ...removeProdScript },
  { ...removeProdLink },
];

// File paths
const files = {
  scssPath: 'app/scss/**/*.scss',
  jsPath: 'app/js/**/*.js',
};

// Sass task: compiles the style.scss file into style.css
function scssTask() {
  return src(files.scssPath, { sourcemaps: false }) // set source and turn on sourcemaps
    .pipe(sass()) // compile SCSS to CSS
    .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
    .pipe(dest('dist', { sourcemaps: '.' })); // put final CSS in dist folder with sourcemap
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask() {
  return src(
    [
      files.jsPath,
      //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
    ],
    { sourcemaps: false },
  )
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// Cachebust
function cacheBustTask() {
  var cbString = new Date().getTime();
  return src(['index.html'])
    .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
    .pipe(dest('.'));
}

// Browsersync to spin up a local server
function browserSyncServe(cb) {
  // initializes browsersync server
  browsersync.init({
    server: {
      baseDir: '.',
    },
    notify: {
      styles: {
        top: 'auto',
        bottom: '0',
      },
    },
  });
  cb();
}
function browserSyncReload(cb) {
  // reloads browsersync server
  browsersync.reload();
  cb();
}

// Middleware pro odstranění nežádoucích CSS a JS souborů
function removeUnwantedFiles(req, res, next) {
  const originalWrite = res.write;
  const originalEnd = res.end;
  let body = '';

  res.write = function (chunk) {
    body += chunk.toString();
  };

  res.end = function (chunk) {
    if (chunk) {
      body += chunk.toString();
    }

    // Odstranění souborů obsahujících 'assets.slusarcik.cz'
    body = body.replace(/<script[^>]*src=["'].*assets\.slusarcik\.cz.*<\/script>/g, '');
    body = body.replace(/<link[^>]*href=["'].*assets\.slusarcik\.cz.*>/g, '');

    originalWrite.call(res, body);
    originalEnd.call(res);
  };

  next();
}

// Browsersync to spin up a local server
function browserSyncProxyServe(cb) {
  // initializes browsersync server
  browsersync.init({
    proxy: {
      target: config.proxy,
      middleware: [removeUnwantedFiles], // Přidání middleware
    },
    serveStatic: ['./dist'],
    rewriteRules: rewriteRules.filter((value) => Object.keys(value).length !== 0),
    port: 3010,
    notify: {
      styles: {
        top: 'auto',
        bottom: '0',
      },
    },
  });
  cb();
}
function browserSyncReload(cb) {
  // reloads browsersync server
  browsersync.reload();
  cb();
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask() {
  watch(
    [files.scssPath, files.jsPath],
    { interval: 1000, usePolling: true }, //Makes docker work
    series(parallel(scssTask, jsTask), cacheBustTask),
  );
}

// Browsersync Watch task
// Watch HTML file for change and reload browsersync server
// watch SCSS and JS files for changes, run scss and js tasks simultaneously and update browsersync
function bsWatchTask() {
  watch('*.html', browserSyncReload);
  watch(
    [files.scssPath, files.jsPath],
    { interval: 1000, usePolling: true }, //Makes docker work
    series(parallel(scssTask, jsTask), cacheBustTask, browserSyncReload),
  );
}

async function handleStylesNScripts() {
  scssTask();
  jsTask();
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(parallel(scssTask, jsTask), cacheBustTask, watchTask);

// Runs all of the above but also spins up a local Browsersync server
// Run by typing in "gulp bs" on the command line
exports.shoptet = series(handleStylesNScripts, cacheBustTask, browserSyncProxyServe, bsWatchTask);

// Runs all of the above but also spins up a local Browsersync server
// Run by typing in "gulp bs" on the command line
exports.bs = series(handleStylesNScripts, cacheBustTask, browserSyncProxyServe, bsWatchTask);