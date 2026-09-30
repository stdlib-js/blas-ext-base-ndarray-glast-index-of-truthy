/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the last truthy element in a one-dimensional ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-glast-index-of-truthy
*
* @example
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var vector = require( '@stdlib/ndarray-vector-ctor' );
* var glastIndexOfTruthy = require( '@stdlib/blas-ext-base-ndarray-glast-index-of-truthy' );
*
* var x = vector( [ 0.0, 3.0, 0.0, 2.0 ], 'generic' );
*
* var fromIndex = scalar2ndarray( 3, {
*     'dtype': 'generic'
* });
*
* var v = glastIndexOfTruthy( [ x, fromIndex ] );
* // returns 3
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
