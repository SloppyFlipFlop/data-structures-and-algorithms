/*
Program explanation:
  For the Constant time Big O Notation function in this example, no matter how big the array is. The function is going to to immediately grab and print out the first box in the given array

  This function counts as a constant time Big O Notation complexity because it grabs the first item, regardless of given array size. Therefore, the complexity curve will always be 1 no matter how big the given array is, because of the constant(1) time it will take to get the first item in the given array.
*/

const arr = ["box 1", "box 2", "box 3", "box 4", "box 5"];

const compressFirstBox = (boxes) => {
  console.log(boxes[0]);
};

compressFirstBox(arr); // O(1) => Constant Time

// Another Example of a Constant Time Big Big O Notation

// NOTE: Although this function now takes O(2) operations, it still completes in a constant amount of time. Therefore, it still falls under constant time complexity.

const boxes = [0, 1, 2, 3, 4, 5];

const logFirstTwoBox = (arr) => {
  console.log(arr[0]);
  console.log(arr[1]);
};

logFirstTwoBox(boxes); // O(2)

// ~~~~~~~~~~ Practice ~~~~~~~~~~

// What is the Big O of the below function? (Hint, you may want to go line by line)

const funChallenge = (arr) => {
  let num = 43;
  num = 75 + 9;

  for (let i = 0; i < arr.length; i++) {
    anotherFunction();
    let status = true;
    a++;
  }
  return a;
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~ Answer Below ~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~ */
/* ~~~~~~~~~~~~~~~~~~~~~~~~ */

/*
const funChallenge = (input) => {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
};
*/

// when everything is added up, you should get 1 + 1 + 1 + n + n + n + n =  3 + 4n = 4n = n

// Answer: O(n)
