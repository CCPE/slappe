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
 * @purpose   : To create Alias Grunt Task(s).
 * @require   : Node.js®
 * @require   : NPM
 * @build     : SEED™ — Skövde
 *              └────── A Sequømics Product — http://seed.sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "Slappé®".
 * ___________________________________________________________________________
 */

module.exports = function(grunt) {
  
  // Invoking strict mode.
  "use strict";
  
  // To load required Node and NPM module.
  // -------------------------------------
  var os       = require('os');
  var fs       = require('fs');
  var chalk    = require('chalk');
  
  // To get build system(s) information.
  ///-----------------------------------
  var seed     = JSON.parse(fs.readFileSync('./seed.json', {
    encoding: "utf8"
  }));
  
  // About Build System License and Information.
  function about() {
    var license = [
      '/*!                                                                                                             ',
      ' * Build System — ' + chalk.green(seed.system) + ': ' + chalk.blue(seed.name) + ': ' + chalk.blue(seed.version)  ,
      ' * ' + chalk.cyan(seed.audience)                                                                                 ,
      ' * ---------------------------------------------------------------------------------                            ',
      ' * Copyright © 2015 - ' + new Date().getFullYear() + ', Sequømics Corporation, All rights reserved.             ',
      ' * Available via the Apache License, version 2.0. [http://www.apache.org/licenses/]                             ',
      ' * See: http://seed.sequomics.com/ — for details.                                                               ',
      ' * ---------------------------------------------------------------------------------                            ',
      ' * You are running O/S type —— ' + os.type() + ' and architecture is —— ' + os.arch()                            ,
      ' * ---------------------------------------------------------------------------------                            ',
      ' */                                                                                                             ',
      '\n',
    ].map(function(s) {
      return s.replace(/\s+$/, '');
    }).join("\n");
    
    // Printing about SEED™.
    grunt.log.writeln(license);
  }
  
  // About Build System Usage.
  function usage() {
    var help = [
      '/*!                                                                                                             ',
      ' * Build System — ' + chalk.green(seed.system) + ': ' + chalk.blue(seed.name)                                    ,
      ' * Usage: ————————————————————————————————————————————————————————————————                                      ',
      ' * 1. To clean   —— grunt clean    - remove any previously-created files.                                       ',
      ' * 2. To build   —— grunt build    - build all coffee and type script(s).                                       ',
      ' * 3. To lint    —— grunt lint     - lint all coffee and type script(s).                                        ',
      ' * 4. To test    —— grunt test     - Complexity Testing.                                                        ',
      ' * 5. To release —— grunt release  - release the ' + chalk.green("Slappé®")                                      ,
      ' * 6. Grunt Version —— ' + chalk.green(grunt.version)                                                            ,
      ' */                                                                                                             ',
      '\n',
    ].map(function(s) {
      return s.replace(/\s+$/, '');
    }).join("\n");
    
    // Printing about SEED™ — Help.
    grunt.log.writeln(help);
  }
  
  // A About Task of SEED™.
  grunt.registerTask('about', 'To know about the Build System.', function(){
    return about.call(this, grunt);
  });
  
  // A Help Task of SEED™.
  grunt.registerTask('help', 'To get help about the Build System.', function(){
    return usage.call(this, grunt);
  });
  
  // A task to clean build(s) or Temporary file(s) and default cache directories.
  grunt.registerTask('clean', ['clean']);
  
  // A task to build JavaScript and TypeScript.
  grunt.registerTask('build', ['coffee', 'typescript']);
  
  // A task to lint JavaScript, TypeScript and Build System - itself.
  grunt.registerTask('lint', ['jshint', 'tslint']);
  
  // A task for Complexity Testing.
  grunt.registerTask('test', ['complexity']);
  
  // A task for Slappé® Release.
  // Note: Run all before this task.
  grunt.registerTask('release', ['concat', 'compress', 'copy']);
