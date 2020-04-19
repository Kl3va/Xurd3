// We are declaring an empty array to store final values
var arr = [];
// We declare a function to compile all neccessary steps
function compute(num) {
    // a for loop is made to test conditions and iterate through the numbers
    for (i = 1; i <= num; i++){
        //if statement for setting conditions
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            arr.push("yu-gi-oh");
          } else if (i % 2 === 0 && i % 3 === 0) {
            arr.push("yu-gi");
          } else if (i % 2 === 0 && i % 5 === 0) {
            arr.push("yu-oh");
          } else if (i % 2 === 0) {
            arr.push("yu");
          } else if (i % 3 === 0 && i % 5 === 0) {
            arr.push("gi-oh");
          } else if (i % 3 === 0) {
            arr.push("gi");
          } else if (i % 5 === 0) {
            arr.push("oh");
          } else arr.push(i);
        }
         // return final values
         return arr;   
    };
    compute(100);
    console.log(arr);
    //empty arrays are required to call the second parameter
    var arr = [];
    compute(60);
    console.log(arr);
