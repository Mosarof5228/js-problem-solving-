var myDays = 25;

function machine() {
    var firstOneToTenDays = 500;
    var second11To20Days = 300;
    var third21ToAnyDays = 100;

    if (myDays <= 10) {
        var total = firstOneToTenDays * myDays;


    }
    else if (myDays <= 20 && myDays > 10) {
        var first10DaysCost = 10 * firstOneToTenDays;
        var remainingDays = myDays - 10;
        var totalDaysCost = remainingDays * second11To20Days;
        var secondTotalcost = first10DaysCost + totalDaysCost;



    }
    else if (myDays > 20) {
        var first10DaysCost = 500 * 10;
        var remainingDays = myDays - 10;
        var totalDaysCost = remainingDays * second11To20Days;
        var remainingDays = myDays - 20;
        var thirdTotalCost = remainingDays * 100;
        var thirdTotalCostIs = first10DaysCost + totalDaysCost + thirdTotalCost;

    }

}