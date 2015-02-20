/**
 * Provided under the MIT License (c) 2014
 * See LICENSE @file for details.
 *
 * Authenticate library with a server, or api service. Services, such as this one
 * are called before running test cases requiring such authentication.
 *
 * @file Test.run.js
 *
 * @author juanvallejo
 * @date 2/20/14
 */

 // import dependencies
 var Test = require('./Test.js');

/**
 * Execute a specific test-case module. If the module requires authentication,
 * the authentication service module is called prior to running. A test-case object module
 * must abide by established parameters in the library documentation.
 *
 * @param testModule Function containing test-case object with required parameters.
 */
 Test.run = function(testModule) {

 }