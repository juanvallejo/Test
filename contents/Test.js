/**
 * Provided under the MIT License (c) 2015
 * See LICENSE @file for details.
 *
 * Defines main object in Test library. Defines initial state, services, and fields.
 * Test.js is a general library for running api-specific test-cases
 *
 * @file Test.js
 *
 * @author juanvallejo
 * @date 2/20/14
 */

var Test = {

	// flag indicating whether or not the instance of the library
	// has been authenticated against 
	isAuthenticated						: false,

	// hold pointers to test modules that require authentication with a service
	// prior to executing
	modulesRequiringAuthentication 		: [],
	modulesNotRequiringAuthentication 	: [],

	// holds authentication information, such as login
	// credentials, authorization tokens, cookies, etc.
	authentication						: {},
	// defines service functions, usually run before any test cases
	services							: {}

};

 // export main library object
 module.exports = Test;