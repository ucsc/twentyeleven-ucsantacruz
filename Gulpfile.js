//
//  Set variables for included packages
//
var pkg = require('./package.json'),
    gulp = require('gulp'),
    changed = require('gulp-changed'),
    autoprefix = require('gulp-autoprefixer'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    minifycss = require('gulp-minify-css'),
    clean = require('gulp-clean'),
    replace = require('gulp-replace'),
    imagemin = require('gulp-imagemin'),
    moment = require('moment'),
    zip = require('gulp-zip');


//
// Set default file path variables for tasks
//
var paths = {
    styles: './sass/**.scss',
    files: ['./screenshot.png', './php/**/**'],
    images: ['./images/**', './images/**.**'],    
    theme: './wordpress/wp-content/themes/twentyeleven-ucsc'
};


//
// Clean the build folder so we start clean
//
gulp.task('clean', function() {
    gulp.src([paths.theme + 'images', paths.theme + 'css', paths.theme + '*.php'], {
        read: false
    })
        .pipe(clean());
});


//
// Compile sass into CSS without source map.
//
gulp.task('styles', function() {
    return gulp.src(paths.styles)
        .pipe(changed(paths.theme + 'style.css'))
        .pipe(sass({
            sourcemap: false,
            require: ['bourbon', 'neat']
        }))
        .pipe(autoprefix('last 4 versions'))        
        .pipe(gulp.dest(paths.theme));
});


//
// Optimize and copy images into the build folder.
//
gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe(changed(paths.theme + '/images/**.**'))
        .pipe(imagemin({
            optimizationLevel: 5
        }))
        .pipe(gulp.dest(paths.theme + '/images'));
});


//
// Copy PHP and screenshot files into theme folder.
//
gulp.task('files', function() {
    return gulp.src(paths.files)
        .pipe(gulp.dest(paths.theme));
});


//
// Create zip archive of static file assets
//
gulp.task('build', function() {
    return gulp.src([
            paths.theme + '**/**'
        ], {
            base: paths.theme
        })
        .pipe(zip('twentyeleven-ucsc.zip'))
        .pipe(gulp.dest('./'));
});


//
// Watch files for changes and run tasks as needed.
//
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['styles']);
    //gulp.watch('images/**/.**', ['images']);
    gulp.watch(['screenshot.png', 'php/*.php'], ['files']);
});


//
// The default task (called when you run `gulp`)
//
gulp.task('default', ['clean', 'styles', 'images', 'files', 'watch']);