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
 * @date      : 19-Dec-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : grunt-complexity
 * @build     : SEED™ — Skövde
 *              └────── A Sequømics Product — http://seed.sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "Slappé®".
 * ___________________________________________________________________________
 */

module.exports = {
  generic: {
    src: [
      // Slappé® script(s).
      './index.js', './lib/**/*.js',
      // Build script(s).
      './Gruntfile.js', './tasks/**/*.js'
    ],
    exclude: ['./bin/*.js'],
    options: {
      breakOnErrors        : true,
      jsLintXML            : './report/report.xml',     // create XML JSLint-like report.
      checkstyleXML        : './report/checkstyle.xml', // create checkstyle report.
      pmdXML               : './report/pmd.xml',        // create pmd report.
      errorsOnly           : false,                     // show only maintainability errors.
      cyclomatic           : [3, 9, 12],                // v(G) - or optionally a single value, like 3.
      halstead             : [8, 14, 20],               // or optionally a single value, like 8.
      maintainability      : 100,
      hideComplexFunctions : false,                     // only display maintainability.
      broadcast: false                                  // broadcast data over event-bus.
    }
  }
};
