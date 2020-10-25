// DEFINE YOUR FUNCTION BELOW:
// DEFINE YOUR FUNCTION BELOW:
function lastElement(word) {
    if (word.length > 0) {
        return word[word.length-1];       
    }
    return null;
}
console.log(lastElement([3,5,7]));
console.log(lastElement([1]));
console.log(lastElement([]));