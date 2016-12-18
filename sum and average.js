var numbers = [1, 2, 3];

function average(numbers, ifSum){
    tot = 0;
    return numbers.reduce(function(total, element){
        
        return  tot = total += element;
    }) / numbers.length;
}

function assertEqual(actual, expected, testName) {
  if(actual === expected) {
    console.log('test passed');
  } else {
    console.log('test failed [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}
var actual = average(numbers);
var expected = 2;
assertEqual(actual, expected, 'finds the average is not equal');
var actual = tot;
var expected = 6;
assertEqual(actual, expected, 'finds the sum is not equal');

var numbers = [10, 20, 30];
var actual = average(numbers);
var expected = 20;
assertEqual(actual, expected, 'finds the average is not equal');
var actual = total;
var expected = 60;
assertEqual(actual, expected, 'finds the sum is not equal');