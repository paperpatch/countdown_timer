const NEW_YEAR = "1 Jan 2022"

function countdown() {
  const newYearsDate = new Date(NEW_YEAR);
  const currentDate = new Date();

  const diff = new Date(newYearsDate - currentDate);

  console.log(diff.getHours())
  var timedifference = new years date - current date

}

    


/*
  go through each time
  define months, days, hours, minutes and seconds in time.

  getElementbyId("") months
  getElementbyId("") days
  getElementbyId("") hours
  getElementbyId("") minutes
  getElementbyId("") seconds
  
  set .text() for each one
  */