// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar'); // { filter: function(), map: function(){} }

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./alex-aaron7.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/*
filter
    // best for problems when you are searching for items that meet a certain condition

map
    // best for problems when you want to return a new array with every item "modified"

reduce
    // best for when you want to accumulate some single return value

*/

var maleCount = function(array) {
    // use _.filter() to return an array of only the male customers
        // iterate through collection and pass each item to a "test function"
        // if "test function" returns true, item is pushed to output array
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    }); // [ {male}, {male}, {male} ]

    return males.length;
};

var femaleCount = function(array){
    // use _.reduce() to accumulate the number of female customers
    let females = _.reduce(array, function(accumulator, current){ // number of female customers | current item
        // accumulator = 1 | current = { name: 'Olga', gender: 'female' }

        if (current.gender === 'female'){
            accumulator += 1;
        }

        return accumulator; // should return 2 as in 2 female customers
    }, 0); // => number of female customers

    return females;
};


/*
// invoke reduce
    // seed is defined? TRUE
        // result = 0
        // iterate
            // 0
                // result = 1
            // 1
                // result = 2



*/

var oldestCustomer;

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
