//Peter's schol teacher asked him to write a program that would return true if a number is even and false if a number is odd. Help peter write the program.

function evenOddMachine(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const result = evenOddMachine(11);
console.log(result);