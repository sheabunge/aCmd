/*global module:false*/
module.exports = function (grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {

			styles: {
				files: ['scss/**/*.{scss,sass}'],
				tasks: ['postcss']
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

		postcss: {
			options: {
				map: true,
				processors: [
					require('precss')(),
					require('autoprefixer')(),
					require('cssnano')()
				]
			},
			dist: {
				cwd: 'scss',
				src: ['*.scss', '!_*.scss'],
				dest: 'css',
				expand: true,
				ext: '.css'
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

	grunt.registerTask('default', ['postcss']);
};
