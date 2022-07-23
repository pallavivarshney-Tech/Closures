console.log("working");
// Question 1
   function counter(){
  var counter = 0;

  function IncreaseCounter() {
      return counter += 1;
  };

  return IncreaseCounter;
}

var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());


// Question 2


let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?  // 1 will be logged
  }
  console.log(count); // What is logged?  // 0 will be logged
})();

//Question 3

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?   
  }, 1000);
}
// after 1sec
//3
//3
//3

//Question 4

// Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function Area() {
  let length = 2;
  return function () {
    let breadth = 3;
    console.log(length * breadth);
  };
}
let area = Area();
area(); //6


//Question 5

// Take a variable in outer function and create an inner function to increase the counter every time it is called
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let val = counter();
val(); //1
val(); //2
val(); //3

// QUESTION 6.

// Print Output

var a = 12;
(function () {
  alert(a);
})();





//Alert with value 12 will come on the webpage

// Question 6
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();

// Alert with value 12 will come only one time

// Question 7
var globalVar = "xyz";

(function outerFunc(outerArg) {
  var outerVar = "a";

  (function innerFunc(innerArg) {
    var innerVar = "b";

    console.log(
      "outerArg = " +
        outerArg +
        "\n" +
        "innerArg = " +
        innerArg +
        "\n" +
        "outerVar = " +
        outerVar +
        "\n" +
        "innerVar = " +
        innerVar +
        "\n" +
        "globalVar = " +
        globalVar
    );
  })(456);
})(123);

//123
//456
//a
//b
//xyz