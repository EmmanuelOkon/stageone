function updateTime() {
  const currentDayOfTheWeekElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );

  const currentUTCTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  const currentDate = new Date();
  const utcPlusOneOffset = 1 * 60; 
  currentDate.setUTCMinutes(currentDate.getUTCMinutes() + utcPlusOneOffset);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

  const currentUTCHours = currentDate.getUTCHours();
  const currentUTCMinutes = currentDate.getUTCMinutes();
  const currentTimeFormat = currentUTCHours >= 12 ? "PM" : "AM";
  const formattedUTCHours = currentUTCHours % 12 || 12;
  const currentUTCTime = `${formattedUTCHours}:${currentUTCMinutes
    .toString()
    .padStart(2, "0")} ${currentTimeFormat} `;

  currentDayOfTheWeekElement.textContent = currentDayOfWeek;
  currentUTCTimeElement.textContent = currentUTCTime;
}
updateTime();
setInterval(updateTime, 60000);
