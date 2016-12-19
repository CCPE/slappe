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
 * @require   : grunt-contrib-coffee
 * @build     : SEED™ — Skövde
 *              └────── A Sequømics Product — http://seed.sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "Slappé®".
 * ___________________________________________________________________________
 */

module.exports = {
  // 1. Compile with maps files.
  compileWithMaps: {
    options: {
      sourceMap: true
    },
    files: {
      // 4:4 Compile.
      // './path/to/*.js'         : './core/path/to/*.coffee'
      './lib/module/index.js'     : './core/coffee/module/index.coffee',
      './lib/module/commands.js'  : './core/coffee/module/commands.coffee',
      './lib/module/config.js'    : './core/coffee/module/config.coffee',
      './lib/module/version.js'   : './core/coffee/module/version.coffee'
    }
  },
  // 2. Compile with maps directory and files.
  compileWithMapsDir: {
    options: {
      sourceMap: true,
      // source map files will be created here.
      sourceMapDir: './core/coffee/maps/'
    },
    files: {
      // 1:1 Compile.
      // Transcompiles in to JavaScript from main.coffee ——> a CoffeeScript.
      './lib/<%= pkg.name %>.js': './core/coffee/main.coffee',
      // 1:4 Compile and concat into single file.
      // Transcompiles in to JavaScript from module/*.coffee ——> some CoffeeScript(s).
      './lib/<%= pkg.name %>.compiled.js': [
        './core/coffee/module/index.coffee',
        './core/coffee/module/commands.coffee',
        './core/coffee/module/config.coffee',
        './core/coffee/module/version.coffee'
      ]
    }
  },
  // 3. glob to multiple files.
  // Compiled JavaScript for — intermediate work.
  glob_to_multiple: {
    expand: true,
    flatten: true,
    cwd: './lib/',
    src: ['*.coffee'],
    dest: './lib/out/',
    // output ——> ./lib/out/slappe-2016-12-19.js
    ext: '-<%= grunt.template.today("yyyy-mm-dd") %>.js'
  }
};
