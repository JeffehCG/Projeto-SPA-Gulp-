//Aqui sera startado o servidor e monitorando as mudanças dos arquivos
//para que o servidor mude sempre que um arquivo mudar

const gulp = require('gulp')
const watch = require('gulp-watch') //monitora mudanças nos arquivos
const webserver = require('gulp-webserver') // webserver gulp

gulp.task('monitorarMudancas', () => { //monitorando os arquivos, sempre que mudar ira recompilar os arquivos e restartar o servidor
    watch('src/**/*.html', () => gulp.start('app.html')) //se for alterado um arquivo html sera chamado a task gulp.start() para restartar apenas o html
    watch('src/**/*.scss', () => gulp.start('app.css')) //monitorar mudanças arquivos css
    watch('src/**/*.js', () => gulp.start('app.js')) //monitorar mudanças arquivos js
    watch('src/assets/imgs/**/*.*', () => gulp.start('app.imgs')) //monitorar mudanças arquivos de imagem
})

gulp.task('servidor', ['monitorarMudancas'], () => { //startando o servidor 
    return gulp.src('build').pipe(webserver({ //monitorando a pasta build
        livereload: true, // ficar dando reload na pagina
        port: 8080, //porta do servidor
        open: true //quando for executado a build, e for startado o serve, abrir o browser
    }))
})