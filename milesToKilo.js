//problem-2:creat a function and that function will take miles input and return output as a kilometer.
/* function mileToKilometer(miles) {
    let kilometer = miles * 1.60934;
    return kilometer;
}
const kilometerResult = mileToKilometer(5);
console.log(kilometerResult); */


function workout(workoutName) {
    var bicepWorkout = ['cable cross', 'bicep', 'bicep'];
    var cesworkout = ['cest fly', 'cest press', 'cest'];
    if (workoutName == 'chest') {
        return cesworkout;
    }
    else if (workoutName == 'bicep') {
        return bicepWorkout;
    }
    else {
        return missing;
    }
}
const workoutPlane = workout('chest');
console.log(workoutPlane);