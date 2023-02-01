//creat a function that function will get all odd numbers of an array and odd sum of an array.
//1.function for get sum of an array
function getSumOfAnArray(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        var index = i;
        var elementOfArray = array[i];
        sum = sum + elementOfArray;
        // console.log(index, elementOfArray, sum);
    }
    return sum;
}
var numbers = [20, 21, 33, 5, 10, 30, 45, 48, 11, 60, 40];
var sumResultOfArray = getSumOfAnArray(numbers);
// console.log(sumResultOfArray);



//2.function for get all odd number 
var emptyArray = [];
function getOddNumberOfAnArray(takenArray) {
    for (var i = 0; i < takenArray.length; i++) {
        var index = i;
        var element = takenArray[index];
        if (element % 2 !== 0) {
            emptyArray.push(element);
        }
    }
    console.log(emptyArray);
}
const oddResultOfArray = getOddNumberOfAnArray(numbers);
const finalSumResultArray = getSumOfAnArray(emptyArray);
console.log('Total sum of an array of all odd number:', finalSumResultArray);
