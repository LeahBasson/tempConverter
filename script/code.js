
function celsiusToFahrenheit(){
    let celsius = +document.querySelector('[Celsius]').value;
    document.querySelector('[Fahrenheit]').value = ((celsius*1.8)+32).toFixed(2);
}

function fahrenheitToCelsius(){
    let Fahrenheit = +document.querySelector('[Fahrenheit]').value;
    document.querySelector('[Celsius]').value = ((Fahrenheit-32)/1.8).toFixed(2);
}