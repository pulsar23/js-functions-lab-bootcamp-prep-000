// write your code below!

var name = "you";
var holiday = 'Independence Day';
var days = 20;


function happyHolidays(){
  return "Happy holidays!";
}

function happyHolidaysTo(name){
  return 'Happy holidays, ${name}!';
}

function happyHolidayTo(holiday, name){
  return 'Happy ${holiday}, ${name}!';
}

function holidayCountdown(holiday, days){
  return 'It\'s ${days} days until ${holiday}!';
}

var string1 = happyHolidaysTo(name);
var string2 = happyHolidayTo(holiday,name);
holiday = "Mother's Day";
var string3 = holidayCountdown(holiday,days);
