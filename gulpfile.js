/*
|--------------------------------------------------------------------------
| Gulpfile
|--------------------------------------------------------------------------
|
| buildfile for jquery.shares plugin
|
*/

var gulp              = require('gulp');
var concat            = require('gulp-concat');
var uglify            = require('gulp-uglify');
var rename            = require("gulp-rename");
var addsrc            = require('gulp-add-src');
var removeEmptyLines  = require('gulp-remove-empty-lines');
var beautify          = require('gulp-beautify');

gulp.task('build', function() {
	gulp.src(['./src/js/jquery.shares.js'])
		// default
		.pipe(concat('./dist/jquery.shares.js'))
		.pipe(beautify({indent_size: 2}))
		.pipe(removeEmptyLines({ removeComments: true }))
		.pipe(gulp.dest('.'))
		// min
		.pipe(uglify({ preserveComments: false }))
		.pipe(rename({ suffix : '.min' }))
		.pipe(gulp.dest('.'));
});