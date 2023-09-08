const greeting = getGreeting();
const greetingElement = document.getElementById('greeting');
greetingElement.textContent = `${greeting} Welcome To My Portfolio`;

const currentDay = getDay();
const daySpan = document.getElementById('day');
daySpan.textContent = currentDay;

const timeSpan = document.getElementById('time');

function updateClock() {
   const currentTime = getTime();
   timeSpan.textContent = currentTime;
}

setInterval(updateClock, 1000);

function getGreeting() {
   const currentHour = new Date().getHours();

   if (currentHour >= 0 && currentHour < 12) {
      return 'Good Morning!';
   } else if (currentHour >= 12 && currentHour < 16) {
      return 'Good Afternoon!';
   } else if (currentHour >= 16 && currentHour < 22) {
      return 'Good Evening!';
   } else {
      return 'Hello! It\'s late; you should probably be sleeping.';
   }
}

function getDay() {
   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   const currentDayIndex = new Date().getDay();
   return daysOfWeek[currentDayIndex];
}

function getTime() {
   const currentTimeInMillis = new Date().getTime();
   return currentTimeInMillis;
}