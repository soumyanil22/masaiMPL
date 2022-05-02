// write js code here corresponding to matches.html

let data = JSON.parse(localStorage.getItem("schedule"));

dispfunc(data);

function filterfunc(value, data, dispfunc) {
  if (value == "none") {
    dispfunc(data);
  } else {
    dispfunc(
      data.filter((ele) => {
        return ele.venue == value;
      })
    );
  }
}

let fav = JSON.parse(localStorage.getItem("favourites")) || [];

function dispfunc(data) {
  document.querySelector("tbody").innerHTML = "";
  data.forEach((elem) => {
    let num = elem.num;
    let teamA = elem.team1;
    let teamB = elem.team2;
    let date = elem.date;
    let venue = elem.venue;

    let data1 = document.createElement("tr");

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

    let button = document.createElement("h4");
    button.innerText = "Favourite";
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {
      favfunc(elem, fav);
    });

    data1.append(c1, c2, c3, c4, c5, button);

    document.querySelector("tbody").append(data1);
  });
}

function favfunc(elem, fav, data) {
  if (fav == undefined || fav.indexOf(elem) == -1) {
    fav.push(elem);
  }
  console.log(fav);
  localStorage.setItem("favourites", JSON.stringify(fav));
}
