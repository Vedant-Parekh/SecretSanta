(function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  
    let goa = "02/08/2024 12:30:00 GMT+0530";
  
    const countDown = new Date(goa).getTime(),
      x = setInterval(function () {
  
        const now = new Date().getTime(),
          distance = countDown - now;
  
        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
        // do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's the target date!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
      }, 0);
  }());
  