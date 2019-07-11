"use strict";

const { dest } = require('gulp');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const rename = require('gulp-rename');

function theTask(cb) {
    const config = {
        src: './src/app.js',
        outputDir: './dist/',
        outputFile: 'app.js'
    };

    return browserify(config.src)
        .bundle()
        .pipe(source(config.src))
        .pipe(buffer())
        .pipe(rename(config.outputFile))
        .pipe(dest(config.outputDir));

}
  
exports.default = theTask;