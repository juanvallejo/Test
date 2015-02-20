/**
 * Provided under the MIT License (c) 2014
 * See LICENSE @file for details.
 *
 * Authenticate library with a server, or api service. Services, such as this one
 * are called before running test cases requiring such authentication.
 *
 * @file Test.runAll.js
 *
 * @author juanvallejo
 * @date 2/20/14
 */

 // import dependencies
 var Test = require('./Test.js');

/**
 * Execute all defined test-case modules. If at least one module requires authentication,
 * the authentication service module is called first. A test-case object module
 * must abide by established parameters in the library documentation.
 *
 * @param testModule Function containing test-case object with required parameters.
 */
 Test.runAll = function(testModule) {

 }