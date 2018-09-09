const gulp = require('gulp')
const crx = require('gulp-crx-pack')
const execa = require('execa')
const { resolve } = require('path')
const asProm = require('gulp-stream-to-promise')
const fs = require('fs')

async function buildWeb () {
  await execa('npm', ['run', 'build'], { cwd: resolve(__dirname, 'packages/web'), stdio: 'inherit' })
}

async function copyFiles () {
  await asProm(gulp.src(resolve(__dirname, 'packages/web/build/**')).pipe(gulp.dest('dist')))
  await asProm(gulp.src('manifest.json').pipe(gulp.dest('dist')))
}

async function bundle () {
  await asProm(
    gulp.src('./dist')
      .pipe(crx({ filename: 'newtab.crx', privateKey: fs.readFileSync('./key.pem', 'utf8') }))
      .pipe(gulp.dest('.'))
  )
}

async function buildCrx () {
  await buildWeb()
  await copyFiles()
  await bundle()
}

gulp.task('buildWeb', buildWeb)
gulp.task('copyFiles', copyFiles)
gulp.task('bundle', bundle)
gulp.task('default', buildCrx)
