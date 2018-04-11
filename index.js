'use strict';

var shuffle = require( 'shuffle-array' );

// Polyfill
function isArray( arg ) {
    if ( ! Array.isArray ) {
        return '[object Array]' === Object.prototype.toString.call( arg );
    }
    return Array.isArray( arg );
}

/**
 * Shuffles the arrays of the given map.
 *
 * @param {object} map Maps string => array of values, e.g. `{ "foo": [ "x", "y" ], "bar": [ "a", "b", "c" ] }`.
 * @param {object} options All the options from [shuffle-array](https://github.com/pazguille/shuffle-array) plus:
 *                          - `copyNonArrays`: boolean -> If you want to copy non-array properties. Defaults to false.
 * @returns {object} A map with its arrays shuffled.
 */
function shuffleObjArrays( map, options ) {
    var newMap = !! options && true === options.copy ? {} : map;
    var copyNonArrays = !! options && true === options.copy && true === ( options.copyNonArrays || options.copyNonArray );
    var values = null;
    for ( var key in map ) {
        values = map[ key ];
        if ( isArray( values ) ) {
            newMap[ key ] = shuffle( values, options );
        } else if ( copyNonArrays ) {
            newMap[ key ] = map[ key ];
        }
    }
    return newMap;
}

module.exports = shuffleObjArrays;