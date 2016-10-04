'use strict';

var metal = require('gulp-metal');

metal.registerTasks(
	{
		bundleFileName: 'dropdown.js',
		globalName: 'metal',
		mainBuildJsTasks: ['build:globals'],
		moduleName: 'lexicon-dropdown',
		soyDeps: ['node_modules/*lexicon*/**/*.soy', 'node_modules/*metal*/**/*.soy']
	}
);
