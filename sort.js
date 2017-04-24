// Create a sort object for folks to use
var sort = function() {};

/*
 * Sorts three numbers using the bubble sort algorithm
 * and returns the results as an array.
 * @param {number} x - Number to sort.
 * @param {number} y - Number to sort.
 * @param {number} z - Number to sort.
 * @return {array} - Numbers x, y, and z sorted in ascending order.
 * @example
 *    sort.prototype.bubble(3, 2, 1); // Returns [1, 2, 3]
 *    var result = sort.prototype.bubble(3, -1, 1); // Returns [-1, 1, 3] and stores the value in result
 *    [x, y, z] = sort.prototype.bubble(3, 3, 1); // Returns [1, 3, 3] and stores 1, 3, and 3 in x, y, and z, respectively
 */
sort.prototype.bubble = function (x, y, z) {
  "use strict";
  
  var i = 0,
    j = 0,
    temporary,
    swapped = true,
    numbers = [x, y, z];
  
  // For each number in numbers...
  for (i = 0; i < numbers.length - 1; i++) {
    
    // Assume that no numbers are swapped
    swapped = false;
    
    // Again, for each number in numbers...
    for (j = 0; j < numbers.length - 1; j++) {

      // Is numbers[j] element greater than numbers[j + 1] element?
      if (numbers[j] > numbers[j + 1]) {

        // Swap numbers[j] element with numbers[i] element
        temporary = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temporary;
        
        // Remember that we swapped elements
        swapped = true;
      }
    }
    
    // Did we not swap anything? (Is swapped false?)
    if (!swapped) {
      // We didn't swap anything, so let's quit
      break;
    }
  }
    
  return numbers;
}

/*
 * Sorts three numbers using the quick sort algorithm
 * and returns the results as an array.
 * @param {number} x - Number to sort.
 * @param {number} y - Number to sort.
 * @param {number} z - Number to sort.
 * @return {array} - Numbers x, y, and z sorted in ascending order.
 * @example
 *    sort.prototype.quick(3, 2, 1); // Returns [1, 2, 3]
 *    var result = sort.prototype.quick(3, -1, 1); // Returns [-1, 1, 3] and stores the value in result
 *    [x, y, z] = sort.prototype.quick(3, 3, 1); // Returns [1, 3, 3] and stores 1, 3, and 3 in x, y, and z, respectively
 */
sort.prototype.quick = function (x, y, z) {
  "use strict";
  
  // Put x, y, and z into an array,
  // then use Oracle's built-in quick sort algorithm
  // to sort them numbers in ascending order.
  var numbers = [x, y, z].sort();
  
  return numbers;
}