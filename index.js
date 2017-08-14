var moment = require("moment");



// var today = new Date();
// console.log(today);
// var weekday = today.getDay();
// console.log(weekday);
// var month = today.getMonth();
// console.log(month);
// var dayOfMonth = today.getDate();
// console.log(dayOfMonth);
// var year = today.getFullYear();
// console.log(year);
// var hours = today.getHours();
// console.log(hours);
// var mins = today.get

// function getDate(){
//   // console.log("It is" + date);
// }
var pre = "It is ";

var firstLine = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var secondLine = moment().format("DDDo");
var thirdLine = moment().startOf('day').fromNow();
console.log(thirdLine);








console.log(pre + firstLine + ".");
console.log(pre + "the " + secondLine + " day of the year.");
console.log(pre + thirdLine + "into the day");
