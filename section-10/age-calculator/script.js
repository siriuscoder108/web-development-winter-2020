var age = prompt("Enter your age and find out how many days you've been alive.");
var leap = age / 4;
var days = (age * 365) + leap;
alert(age + " years is roughly " + days + " days");