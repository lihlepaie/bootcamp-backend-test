module.exports = function(weekday){
  var isDay=!weekday.startsWith('S');
    return isDay;
}

// function isWeekday(weekday){
//   var isDay=!weekday.startsWith('S');
//   console.log(isDay);
//   return isDay
// }
// isWeekday('Monday')
// isWeekday('Sunday')
