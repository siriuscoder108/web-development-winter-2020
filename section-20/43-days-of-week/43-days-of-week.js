// DEFINE YOUR FUNCTION BELOW:
function returnDay(number) {
    let day = {
        1: 'Monday', 
        2: 'Tuesday', 
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'};
    if (number > 0 && number < 8) {
        return day[number];
    }
    return null;
}
console.log(returnDay(1));
console.log(returnDay(7));
console.log(returnDay(4));
console.log(returnDay(0));
