// Get current day
      let day1 = new Date().toLocaleString('en-US', { weekday: 'long',});
      document.getElementById("day").innerHTML = day1; //current day of the week
setInterval(refreshTime, 1000);
