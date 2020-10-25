// DEFINE YOUR FUNCTION BELOW:
function sumArray(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log(sumArray([1,2,3]));
console.log(sumArray([2,2,2,2]));
console.log(sumArray([50,50,1]));