/********************************************************************************
*                               Falsy Bouncer                                   *
* Remove all falsy values from an array. Falsy values in JavaScript are false,  *
* null, 0, "", undefined, and NaN.                                              *
********************************************************************************/

function destroyer(arr) {
/*
  console.log(arr[0]); //1
  console.log(arr[1]); //2
  console.log(arr[2]); //3
  console.log(arr[3]); //1
*/

  function weedOut(value) {
    console.log(args.length);

      if(value === args[0] || value === args[1]) {
        return false;
      }
      return true;
    }


  //var args = arr.slice.call(arguments,0);
  //[Array[6], 2, 3]
  var args = arr.slice.call(arguments,1);
  console.log(args);
  //[2, 3]


  var holdArray = arr.filter(weedOut);

  console.log(holdArray);
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
//console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
//console.log(destroyer([2, 3, 2, 3], 2, 3));
//console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
