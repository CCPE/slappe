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
 * @require   : grunt-contrib-jshint
 * @build     : SEED™ — Skövde
 *              └────── A Sequømics Product — http://seed.sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "Slappé®".
 * ___________________________________________________________________________
 */

module.exports = {
  options: {
    boss   : true,
    curly  : true,
    eqeqeq : true,
    eqnull : true,
    node   : true,
    undef  : true
  },
  all: [
    './index.js',
    '.lib/**/*.js',
    './Gruntfile.js',
    './tasks/**/*.js'
  ],
  with_overrides: {
    options: {
      noarg  : true,
      unused : true
    },
    files: {
      src: ['./lib/module/version.js']
    }
  }
};
