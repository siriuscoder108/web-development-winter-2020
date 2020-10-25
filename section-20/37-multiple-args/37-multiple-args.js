// define isSnakeEyes below:
function isSnakeEyes(die1, die2) {
    if (die1 === die2 && die1 === 1) {
        console.log(`Snake Eyes! for die1 ${die1} and die2 ${die2}`);
    } else {
        console.log(`Not Snake Eyes!for die1 ${die1} and die2 ${die2}`);
    }
}
isSnakeEyes(1, 2);
isSnakeEyes(3, 1);
isSnakeEyes(1, 1);
isSnakeEyes(0, 0);