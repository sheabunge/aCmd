module.exports = function(grunt) {
	'use strict';

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {

			styles: {
				files: ['scss/**/*.{scss,sass}'],
				tasks: ['styles'],
				options: {
					debounceDelay: 500
				}
			},

			livereload: {
				options: {
					livereload: true
				},
				files: [
					'css/**/*.css',
					'*.html',
					'images/**/*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},

		compass: {
			dist: {}
		},

		autoprefixer: {
			dist: {
				expand: true,
				flatten: true,
				src: 'css/*.css',
				dest: 'css'
			}
		},

		csso: {
			dist: {
				expand: true,
				flatten: true,
				src: 'css/*.css',
				dest: 'css'
			}
		},

		imagemin: {
		    dist: {
		        options: {
		            optimizationLevel: 7,
		            progressive: true
		        },
		        files: [{
		            expand: true,
		            cwd: 'images/',
		            src: '**/*',
		            dest: 'images/'
		        }]
		    }
		}

	});

	grunt.registerTask( 'styles', ['compass', 'autoprefixer', 'csso'] );
	grunt.registerTask( 'default', ['styles'] );
};
