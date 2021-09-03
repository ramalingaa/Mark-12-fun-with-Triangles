var sideFirst = document.querySelector("#side1");
var sideSecond = document.querySelector("#side2");
var sideThree = document.querySelector("#side3");
var btnClick = document.querySelector("#btn-click");
var outputShow = document.querySelector("#output")


function clickHandler(){
    var newSideFirst = Number(sideFirst.value);
    var newSideSecond = Number(sideSecond.value);
    var newsideThree = Number(sideThree.value);
     var semiPerimeter = (newSideFirst + newSideSecond + newsideThree) / 2;
     var result = Math.sqrt(semiPerimeter * (semiPerimeter - newSideFirst) * (semiPerimeter - newSideFirst) * (semiPerimeter - newSideFirst));
     let newResult  = result.toFixed(4)
     outputShow.innerText = "Area of a triangle using heron's formula is " + newResult + " units";

     
}

btnClick.addEventListener("click", clickHandler)