const countDownDate = new Date("Dec 20, 2021 00:00:00").getTime();
const countDownFuncttion = setInterval(function() {
   const now = new Date().getTime();
   const distance = countDownDate - now;
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("countdown-one").innerHTML = days;
document.getElementById("countdown-two").innerHTML = hours;
document.getElementById("countdown-three").innerHTML = minutes;
document.getElementById("countdown-four").innerHTML = seconds;
}, 1000);

