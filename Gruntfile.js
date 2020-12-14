module.exports = function(grunt) {

    //Plugins para grunt
grunt.loadNpmTasks('grunt-run');

grunt.initConfig({

    run: {
        install: {
            //No se necesita puesto que docker ya lo preinstala
            //cmd: 'npm',
            //args: [
            //  'install'
            //]  
        },

        build: {
            
        },

        test: {
            cmd: 'npm',
            args: [
                'run',
                'test'
            ]
        }
    },

});

//tarea default
grunt.registerTask('default', ['run:install']);
//Tareas
grunt.registerTask('build',   ['run:build']);
grunt.registerTask('install', ['run:install']);
grunt.registerTask('test',    ['run:test']);

}