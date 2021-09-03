var baseInput = document.querySelector("#base");
var heightInput = document.querySelector("#height");
var btnClick = document.querySelector("#btn-click");
var outputShow = document.querySelector("#output");

    function clickHandler(){
       let baseInputIn = Number(baseInput.value);
       let heightInputIn = Number(heightInput.value);
        let result = Math.sqrt(baseInputIn * baseInputIn + heightInputIn * heightInputIn);
        outputShow.innerText = "The length of hypotenuse is " + result;


    }



btnClick.addEventListener("click", clickHandler)