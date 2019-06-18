//Aqui sera trabalhadas as dependencias que é precisso na aplicação
//Por exemplo, pegar as fontes e css do font Awasome (Que são fontes externas da aplicação)

const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.css', 'deps.fonts'])

gulp.task('deps.css', () => { //Copiando arquivo css, e minimizando ele
    return gulp.src([
        'node_modules/font-awesome/css/font-awesome.css' //arquivo que sera usado
    ])
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('build/assets/css'))
})

gulp.task('deps.fonts', () => { //Copiando todas as fontes da pasta fonts
    return gulp.src([
        'node_modules/font-awesome/fonts/*.*' //todos arquivos dentro da pasta fonts
    ])
    .pipe(gulp.dest('build/assets/fonts'))
})