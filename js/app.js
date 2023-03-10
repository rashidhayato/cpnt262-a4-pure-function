const hourlyRate = 20
const dailypayMent  = function (week){
  const total = week + hourlyRate;
  const hourly = TimeRanges * hourlyRate;
    
       console.log(`$${dailypayMent} plus ${hourlyRate * 8}% hour is $${total}.`);
}




// week 1
const week1 = 10;

// week 2
const week2 = 20;

// week 3
const week3 = 30;

// Function // Argument //
dailypayMent(week1)
dailypayMent(week2)
dailypayMent(week3)