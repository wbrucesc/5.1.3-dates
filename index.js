const moment = require("moment");
const chalk = require("chalk");


var pre = "It is ";

var firstLine = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
var secondLine = moment().format("DDDo");
var hours = moment().format("hh");
var mins = moment().format("mm");
var secs = moment().format("ss");
var timeInSeconds = (hours * 3600) + (mins * 60) + secs;
var daylight = moment().isDST();
var leap = moment().isLeapYear();


function timeOfYear(daylight){
  if (daylight === true){
    return "It" + chalk.green(" is ") + "during Daylight Savings Time.";
  } else {
    return "It" + chalk.green(" is not ") + "not Daylight Savings Time.";
  }
}

function feelingFroggy(leap){
  if (leap === true){
    return  "It" + chalk.red(" is ") + "a leap year.";
  } else {
    return "It" + chalk.red(" is not ") + "a leap year.";
  }
}


console.log(pre + chalk.blue(firstLine) + ".");
console.log(pre + "the " + chalk.magenta(secondLine) + " day of the year.");
console.log(pre + chalk.cyan(timeInSeconds) +
" seconds into the day.");
console.log(timeOfYear(daylight));
console.log(feelingFroggy(leap));
