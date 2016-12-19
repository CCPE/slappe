#!/usr/bin/env node
/*!
 * -------
 * Slappé®
 * -------
 * @NPM — https://www.npmjs.com/package/slappe
 * ___________________________________________________________________________
 *
 * Grunt, http://gruntjs.com/ — The JavaScript Task Runner.
 * ___________________________________________________________________________
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Sequømics Research [http://research.sequomics.com/].
 * @copyright : Sequømics Corporation [http://sequomics.com/].
 * ___________________________________________________________________________
 *
 * @date      : 11-Dec-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : grunt-cli
 * @build     : SEED™ — Skövde
 *              └────── A Sequømics Product — http://seed.sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "Slappé®".
 * ___________________________________________________________________________
 */


// "requireSpaceAfterLineComment": { "allExcept": ["#", "="] }
// "disallowMultipleSpaces": {"allowEOLComments": true}
// "disallowSemicolons": false
// "requireSemicolons": true
// "disallowAnonymousFunctions": true

// global __dirname: true
// global require: true

// # Usage: $ node -v
// # Usage: $ npm -v
// # Usage: $ grunt -version

// Invoking strict mode.
"use strict";

// To load required Node module.
// -----------------------------
var os         = require('os');
var fs         = require('fs');

// To load required NPM modules.
// -----------------------------
var chalk      = require('chalk');
var glob       = require('glob');

// Default color defined.
// ----------------------
var noop       = chalk.red;
var yeep       = chalk.green;
var okay       = chalk.blue;
var boop       = chalk.cyan;
var goop       = chalk.gray;

///-------------------
// An object literals.
///-------------------
var build = {
  // Non-identifier property names are quoted.
  "system"     : "SEED™",
  "name"       : "Skövde",
  "year"       : "2016",
  "audience"   : "for all scientist and computational biologist."
};

// ----------------------------------------------------------------------------------------------------------
// All Grunt Operations Defined... |------------------------------------------| 18/Dec/2016 | SEED™ — Skövde.
//                           Copyright © 2016, Prabhat Kumar, All rights reserved.
// ----------------------------------------------------------------------------------------------------------

module.exports = function(grunt) {
  
  // Force use of Unix newlines.
  // http://gruntjs.com/api/grunt.util
  grunt.util.linefeed = '\n';
  
  // 1. time-grunt ——> $ npm install time-grunt --save-dev
  // Display the elapsed execution time of grunt tasks.
  require('time-grunt')(grunt);
  
  // Utility to load the different option files,
  // based on their names — @using `glob`.
  function loadConfig(path) {
    var object = {};
    var key;
    glob.sync('*', {
      cwd: path
    }).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
    });
    return object;
  }
  
  /// Initial Configurations.
  var config = {
    pkg: grunt.file.readJSON('./package.json')
  };
  
  /// Loading Externally-Defined Tasks.
  grunt.loadTasks('tasks');
  
  /// Loading all the tasks options in `tasks/options`,
  /// based on the name:
  /// \---------------- coffee.js => coffee{}
  grunt.util._.extend(config, loadConfig('./tasks/options/'));
  
  // Project configuration for -//Slappé®//- Build.
  grunt.initConfig(config);
  
  // 2. load-grunt-tasks ——> $ npm install load-grunt-tasks --save-dev
  // Load multiple grunt tasks using the globbing patterns.
  require('load-grunt-tasks')(grunt, {
    scope: [
      'dependencies',
      'devDependencies',
      'peerDependencies',
      'optionalDependencies'
    ],
    // Traverse up the file hierarchy looking for dependencies like `require()`.
    requireResolution: true
  });
  
  // A Default Task of SEED™.
  grunt.registerTask('default', 'To know about the Build System.', function(){
    // Build System License and Information.
    var license = [
      '/*!                                                                                                   ',
      ' * Build System — ' + yeep(build.system) + ': ' + okay(build.name)                                     ,
      ' * ' + boop(build.audience)                                                                            ,
      ' * ---------------------------------------------------------------------------------                  ',
      ' * Copyright © 2015 - ' + new Date().getFullYear() + ', Sequømics Corporation, All rights reserved.   ',
      ' * Available via the Apache License, version 2.0. [http://www.apache.org/licenses/]                   ',
      ' * See: http://seed.sequomics.com/ — for details.                                                     ',
      ' * ---------------------------------------------------------------------------------                  ',
      ' * You are running O/S type —— ' + boop(os.type()) + ' and architecture is —— ' + noop(os.arch())      ,
      ' * ---------------------------------------------------------------------------------                  ',
      ' */                                                                                                   ',
      '\n',
    ].map(function(s) {
      return s.replace(/\s+$/, '');
    }).join("\n");
    
    // Printing about SEED™.
    grunt.log.writeln(goop(license));
  
  });
