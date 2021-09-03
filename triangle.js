var anglePrime = document.querySelector("#angle1");
var angleSec = document.querySelector("#angle2");
var angleTern = document.querySelector("#angle3");
var btnClick = document.querySelector("#btn-click");
var outputShow = document.querySelector("#output")


function clickHandler(){
    var newAnglePrime = Number(anglePrime.value);
    var newAngleSec = Number(angleSec.value);
    var newAngleTern = Number(angleTern.value);
     let outputValue = newAnglePrime + newAngleSec + newAngleTern;
    if(outputValue === 180 ){
        showMessage();
    }
    else{
        errorMessage();
    }

    function showMessage(){
        let valieMessage = "Yay your inputs form a Triangle";
        outputShow.innerText = valieMessage;
    }
    function errorMessage(){
        let errorMessage = "Oh.. inputs does not form a Triangle";
        outputShow.innerText = errorMessage;
    }
}


btnClick.addEventListener("click", clickHandler)
