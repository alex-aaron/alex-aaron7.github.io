// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    // look up method to determine if value is an array
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) { // { a: 1, b: 2 } // null // new Date()
    // YOUR CODE BELOW HERE //
     // YOUR CODE BELOW HERE //
    // if value is an object       AND   not null                AND  not a date             AND   is not an array
    if ((typeof value === 'object') && (typeof value !== 'null') && (!(value instanceof Date)) && (!(Array.isArray(value)))) {
        return true; // say true
    }
    else {
       return false; //otherwise say false
   };
   // YOUR CODE ABOVE HERE //
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
        //if value is an object         and is not null              and not a date           OR is an array
        if ((typeof value === 'object') && (value !== null) && (!(value instanceof Date)) || (Array.isArray(value))){
            return true; // return true
        }
            else { //otherwise it is false
           return false;
       }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array" // 
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null" // 
 *    - "function"
 *    - "date" // 
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
