`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("date");
  const dateString = new Date().toLocaleDateString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);
