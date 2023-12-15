// Higher Order Functions

/**
 * https://underscorejs.org/#arrays
 * Underscore.js, created in 2009 by Jeremy Ashkenas,
 * filled a crucial gap in JavaScript's capabilities before
 * the language evolved with ES6, offering a range of functional
 * programming utilities for tasks like array and object manipulation.
 * While modern JavaScript now incorporates many features once unique
 * to Underscore, learning to recreate it remains valuable.
 */

const bae = {};

// Return an array of the last n elements of an array. If n is undefined,
// return just the last element.
bae.last = function (array, n) {
  // Your code here
};

// Return an array of the first n elements of an array. If n is undefined,
// return just the first element.
bae.first = function (array, n) {
  // Your code here
};

// Call iterator(value, key, collection) for each element of collection
// a collection is an array or object
bae.each = function (collection, iterator) {
  // Your code here
};

// Returns the index at which value can be found in the array, or -1 if value
// is not present in the array.
// use the bae.each function you wrote above instead of a for loop
bae.indexOf = function (array, target) {
  // Your code here
};

// Return all elements of an array that pass a truth test.
// Collection is an array of object to filter
// test is a function that returns true or false for each item
bae.filter = function (collection, test) {
  // Your code here
};

// Return all elements of an array that don't pass a truth test.
bae.reject = function (collection, test) {
  // TIP: see if you can re-use bae.filter() here, without simply
  // copying code in and modifying it
};

// Produce a duplicate-free version of the array.
bae.uniq = function (array) {
  // Your code here
};

// Return the results of applying an iterator to each element.
// map() is a useful primitive iteration function that works a lot
// like each(), but in addition to running the operation on all
// the members, it also maintains an array of results.
bae.map = function (collection, iterator) {
  // Your code here
};

// Reduces an array or object to a single value by repetitively calling
// iterator(accumulator, item) for each item. accumulator should be
// the return value of the previous iterator call.
//
// You can pass in a starting value for the accumulator as the third argument
// to reduce. If no starting value is passed, the first element is used as
// the accumulator, and is never passed to the iterator. In other words, in
// the case where a starting value is not passed, the iterator is not invoked
// until the second element, with the first element as it's second argument.
//
// Example:
//   var numbers = [1,2,3];
//   var sum = bae.reduce(numbers, function(total, number){
//     return total + number;
//   }, 0); // should be 6
bae.reduce = function (collection, iterator, accumulator) {
  // Your code here
};

// Determine if the array or object contains a given value (using `===`).
bae.contains = function (collection, target) {
  // TIP: Many iteration problems can be most easily expressed in
  // terms of reduce().
};
