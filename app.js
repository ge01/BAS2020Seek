/********************************************************************************
*                              Seek and Destroy                                 *
* There is an initial array (the first argument in the destroyer function),     *
* followed by one or more arguments. The destroyer function removes all         *
* elements from the initial array that are of the same value as the arguments   *
********************************************************************************/
function destroyer(arr) {
  // The arguments object is not an Array. However, it can be converted to a
  // real Array.
  var args = Array.prototype.slice.call(arguments,1);
  console.log(args); //[2, 3, 5]
  // The filter() method creates a new array with all elements that pass the
  // test implemented by the provided *function*.
  return arr.filter(
    function(element) {
      // The indexOf() method returns the first index at which a given element
      // can be found in the array, or -1 if it is not present.
      return args.indexOf(element) === -1;
    });
}

//console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
//console.log(destroyer([2, 3, 2, 3], 2, 3));
//console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
