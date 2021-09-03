var btnClick = document.querySelector("#btn-Click");
var formData = document.querySelector("#form-date");
var outPut = document.querySelector("#output-container");




const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
  ];

function clickHandler(){
    const formResults = new FormData(formData);     
    let score = 0,
      index = 0;
    for (let value of formResults.values()) {
      if (value === correctAnswers[index]) {
        score = score + 1;
      }
      index = index + 1;
}
    outPut.innerText = "Your test score is " + score ;
}


btnClick.addEventListener("click", clickHandler)
