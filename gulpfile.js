//Arquivo principal da build
const gulp = require('gulp')
const util = require('gulp-util') //checar variavel de ambiente que sera passada ou não para o build
const sequence = require('run-sequence') //O gulp por padrão, executa as tasks em paralelo, o sequence serve para executalas em sequencia,
//Importante -- o sequence apenas ira funcinar se em todas as funções dos arquivos da build tenha return na frente de gulp.src

//Importando os outros arquivos que são parte build (separados da principal para ficar mais organizado)
require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

//Task principal
gulp.task('default', () => {
    if(util.env.production){// se for passado a flag production ao startar o servidor 'no terminal (gulp --production)' ou seja, ambiente de produção
        // sequence('deps', 'app') //seram executados as tarefas deps e app
        gulp.start('deps', 'app') //O gulp.start tem o mesmo papel que o sequence, porem é padrão do gulp
    }else{
        // sequence('deps', 'app', 'servidor') //Se não for ambiente de produção startar servmidor tbm
        //acima, usando o sequence, primeiro sera executado a task deps, terminando ela sera executada a app e assim por diante
        gulp.start('deps', 'app', 'servidor')
    }
})
