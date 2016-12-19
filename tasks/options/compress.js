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
 * @require   : grunt-contrib-compress
 * @build     : SEED™ — Skövde
 *              └────── A Sequømics Product — http://seed.sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "Slappé®".
 * ___________________________________________________________________________
 */

module.exports = {
  main: {
    options: {
      // output ——> ./slappe-data-2016-12-19.zip
      archive   : '<%= pkg.name %>-data-<%= grunt.template.today("yyyy-mm-dd") %>.zip',
      mode      : 'zip',
      level     : 9,
      pretty    : true
    },
    files: [
      // Each of the files in the /data/ directory will be output to
      // the /root/ directory each with the extension [.zip].
      {
        expand  : true,
        src     : ['./lib/data/*.json']
      }
    ]
  }
};
