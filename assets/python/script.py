import time
import datetime

NEW_YEAR = datetime.datetime(2022, 1, 1)
# check if date passed the new year. 
DELTA = datetime.timedelta(microseconds=-0.0000000001)

#repeat
while True:
  time_until_new_year = NEW_YEAR - datetime.datetime.now()

  if time_until_new_year < DELTA:
    print("Happy New Year!!!")
    break
  else:
    print(time_until_new_year)

  # wait until 1 second before repeating
  time.sleep(1)



# Get New Years Date in time
# Get Current Date in time

""" Function():
  while (t):
    var timedifference = new years date - current date
    go through each time
    define months, days, hours, minutes and seconds in time.

    getElementbyId("") months
    getElementbyId("") days
    getElementbyId("") hours
    getElementbyId("") minutes
    getElementbyId("") seconds
    
    iterate every second
"""

