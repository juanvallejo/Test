/**
 * Provided under the MIT License (c) 2014
 * See LICENSE @file for details.
 *
 * define and import all of the files in Test library
 *
 * @file index.js
 *
 * @author juanvallejo
 * @date 2/9/14
 */

require('fs').readdirSync('./contents').forEach(function(file) {
	require('./contents/' + file);
});