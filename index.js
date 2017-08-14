var moment = require("moment");


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
    return pre + "during Daylight Savings Time.";
  } else {
    return pre + "not Daylight Savings Time.";
  }
}

function feelingFroggy(leap){
  if (leap === true){
    return pre + "a leap year.";
  } else {
    return pre + "not a leap year.";
  }
}


console.log(pre + firstLine + ".");
console.log(pre + "the " + secondLine + " day of the year.");
console.log(pre + timeInSeconds +
" seconds into the day.");
console.log(timeOfYear(daylight));
console.log(feelingFroggy(leap));
