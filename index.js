// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit", dispFunc);

let schedules = JSON.parse(localStorage.getItem("schedule")) || [];

function dispFunc() {
  event.preventDefault();
  let form = document.querySelector("#masaiForm");
  let schObj = {
    num: form.matchNum.value,
    team1: form.teamA.value,
    team2: form.teamB.value,
    date: form.date.value,
    venue: form.venue.value,
  };

  schedules.push(schObj);

  localStorage.setItem("schedule", JSON.stringify(schedules));
}
