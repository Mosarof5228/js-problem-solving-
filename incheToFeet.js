
//problem-1:
//creat a function and that function will convert inches to feet.
function converterMachine(inches) {
    var feet = inches / 12;
    return feet;

}
const reasultOfFeet = converterMachine(100);
const convertToFixed = reasultOfFeet.toFixed(2);
const finalResultIs = parseFloat(convertToFixed);
console.log("Total Feet is:", finalResultIs);


//recall function.
const secondCallFeet = converterMachine(240);
console.log("second call function result:", secondCallFeet);