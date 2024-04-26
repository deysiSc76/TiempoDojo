function aceptarCookie(){
    var cookieDiv = document.querySelector(".cookie");
    cookieDiv.remove();
}
function celsiusAFahrenheit(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function fahrenheitACelsuis(temp) {
    return Math.round(5 / 9 * (temp - 32));
}
function convertir(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = fahrenheitACelsuis(tempVal);
        } else {
            tempSpan.innerText = celsiusAFahrenheit(tempVal);
        }
    }
}