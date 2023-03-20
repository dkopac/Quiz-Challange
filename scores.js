var score = document.querySelector("#score");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

//Clear
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

//Retrieve Storage
var allScores = localStorage.getItem("allScores");
allScores.JSON.parse(allScores);

if (allScores !== null) {
  for (var i = 0; i < allScores.length; i++) {
    var createLi = document.createElement("li");
    createLi.textContent = allScores[i].initials + " " + allScores[i].score;
    score.appendChild(createLi);
  }
}
//index
goBack.addEventListener("click", function () {
  window.location.replace("./index.html");
});
