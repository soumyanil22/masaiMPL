let fav = JSON.parse(localStorage.getItem("favourites"));

fav.forEach((elem) => {
  let num = elem.num;
  let teamA = elem.team1;
  let teamB = elem.team2;
  let date = elem.date;
  let venue = elem.venue;

  let data = document.createElement("tr");

  let c1 = document.createElement("td");
  c1.innerText = num;
  let c2 = document.createElement("td");
  c2.innerText = teamA;
  let c3 = document.createElement("td");
  c3.innerText = teamB;
  let c4 = document.createElement("td");
  c4.innerText = date;
  let c5 = document.createElement("td");
  c5.innerText = venue;

  let button = document.createElement("td");
  button.innerText = "Delete";
  button.style.cursor = "pointer";

  button.addEventListener("click", () => {
    delfunc(elem, fav);
  });

  data.append(c1, c2, c3, c4, c5, button);

  document.querySelector("tbody").append(data);
});

function delfunc(elem, fav) {
  let ind = fav.indexOf(elem);
  fav.splice(ind, 1);

  localStorage.setItem("favourites", JSON.stringify(fav));
  window.location.reload();
}
