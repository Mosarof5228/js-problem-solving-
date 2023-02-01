
//sum of an array.
/* function sumOfNumber(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        var sum = sum + array[i];

    }
    return sum;
}
var numbers = [5, 7, 8, 10, 45, 30];
const sumResult = sumOfNumber(numbers)
console.log(sumResult); */

function getSumOfAnArray(numbers) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        var sum = sum + numbers[i];

    }
    return sum;

}
var moneys = [5, 7, 8, 10, 45, 100];
var result = getSumOfAnArray(moneys);
console.log(result);