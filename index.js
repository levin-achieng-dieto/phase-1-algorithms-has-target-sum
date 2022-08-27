function hasTargetSum(array, target) {
  // Write your algorithm here
  var map = {};
  for(i=0; i<array.length; i++){
    var value = array[i];
    var complementPair = target - value;
    if(map[complementPair] !== undefined && array!== target){
      return false
    }
    else{
      return true
    }

  }
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  if the sum of the any pair of the array equals to target,
  return true, else return false
*/

/*
  Add written explanation of your solution here
  write a function that takes in two parameters, an array
  and a target value. loopthrough the array to find the 
  um of any pair whose sum will be equal to the target, if
  the pair exist, return true else, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
