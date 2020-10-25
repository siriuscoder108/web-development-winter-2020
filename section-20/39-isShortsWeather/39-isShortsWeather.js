// DEFINE YOUR FUNCTION BELOW:
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    }
    return false;
}
console.log(isShortsWeather(80));
console.log(isShortsWeather(48));
console.log(isShortsWeather(75));