/* jshint esversion: 6 */
$(document).ready(() => {
// Simple getElementById test to see if JavaScript has stopped working
document.getElementById('testTest').innerHTML = "JavaScript is working!";


// ==========jQuery Animations==========

// Expands the sidenav
$('.sidenav').on('mouseenter', () => {
	$('.sidenav').addClass('sidenav-active');
}).on('mouseleave', () => {
	$('.sidenav').removeClass('sidenav-active');
});

// Colapses the sidenav after it has been scrolled past
// Change sidenav css width to addclass so it can be removed and go back tp normal
window.onscroll = function() {
	scrollSidenav();
};
function scrollSidenav() {
  	if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 500) {
  		$('.sidenav').fadeOut('fast');
  		$('.sidenav').addClass('sidenav-closed');
    	$('.page-wrapper').addClass('page-wrapper-closed');
  	} else if (document.body.scrollTop < 700 || document.documentElement.scrollTop < 500) {
  		$('.sidenav').fadeIn('fast').removeClass('sidenav-closed');
  		$('.page-wrapper').removeClass('page-wrapper-closed');
  	}
}

// Fades out and in the temperature cards when clicked in the sidenav
$('#fahrenheitLi').on('click', () => {
	$('#fahrenheitCard').fadeToggle('slow');
	$('#fahrenheitLi').toggleClass('sidenav-button-active');
});
$('#celsiusLi').on('click', () => {
	$('#celsiusCard').fadeToggle('slow');
	$('#celsiusLi').toggleClass('sidenav-button-active');
});
$('#kelvinLi').on('click', () => {
	$('#kelvinCard').fadeToggle('slow');
	$('#kelvinLi').toggleClass('sidenav-button-active');
});


// ==========Temperature Calculations==========

const printKelvin = document.getElementById("kelvinText");
const printCelsius = document.getElementById("celsiusText");
const printFahrenheit = document.getElementById("fahrenheitText");
const printGasMark = document.getElementById("gasMarkText");

// Prints the temperature values
function printTemperatures(kelvin, celsius, fahrenheit, gasMark) {
	printKelvin.innerHTML = kelvin + "K";
	printCelsius.innerHTML = celsius + "°C";
	printFahrenheit.innerHTML = fahrenheit + "°F";
	printGasMark.innerHTML = "Gas Mark " + gasMark;
}

// create a function that stops an input that is not a number
function gasMarkChecker(gasMark, celsius) {
	if (gasMark < 1) {
		// impossible value. Use 1/2 or 1/4 for fractions
	} else if (gasMark > 12) {
		// theoretical value. Most Gas Mark ovens don't go above 12
	}
	// else if between certain values print 1/2 or 1/4
}

// Takes a temperature input in kelvin and converts it into celsius and fahrenheit
function kelvinFunction() {
	const kelvin = document.getElementById('kelvinField').value;
	
	// Converts Kelvin into Celsius
	const celsius = kelvin - 273;
	
	// Converts Celsius into Gas Mark
	let gasMark = (celsius - 121) / 14;
	gasMark = Math.floor(gasMark);

	// Converts Celsius into Fahrenheit
	let fahrenheit = celsius * (9 / 5) + 32;
	fahrenheit = Math.floor(fahrenheit);
	
	printTemperatures(kelvin, celsius, fahrenheit, gasMark);
}
// Calls the Kelvin function on click
const kelvinButton = document.getElementById('kelvinButton');
kelvinButton.addEventListener('click', kelvinFunction, false);

// Takes a temperature input in Celsius and converts it into Kelvin and Fahrenheit
function celsiusFunction() {
	const celsius = document.getElementById('celsiusField').value;
	
	// Converts Celsius into Gas Mark
	let gasMark = (celsius - 121) / 14;
	gasMark = Math.floor(gasMark);
	
	// Converts Celsius into Kelvin
	const kelvin = (celsius / 1) + 273;

	// Converts Celsius into Fahrenheit
	let fahrenheit = celsius * (9 / 5) + 32;
	fahrenheit = Math.floor(fahrenheit);
	
	printTemperatures(kelvin, celsius, fahrenheit, gasMark);
}
// Calls the Celsius function on click
const celsiusButton = document.getElementById('celsiusButton');
celsiusButton.addEventListener('click', celsiusFunction, false);

function fahrenheitFunction() {
	const fahrenheit = document.getElementById('fahrenheitField').value;
	
	// Converts Fahrenheit to Celsius
	const celsiusRaw = (fahrenheit - 32) / (9 / 5);
	const celsius = Math.round(celsiusRaw);
	
	// Converts Celsius into Gas Mark
	let gasMark = (celsiusRaw - 121) / 14;
	gasMark = Math.round(gasMark);
	
	// Converts Celsius into Kelvin
	let kelvin = (celsiusRaw / 1) + 273;
	kelvin = Math.round(kelvin);
	
	printTemperatures(kelvin, celsius, fahrenheit, gasMark);
}
// Calls the Fahrenheit function on click
const fahrenheitButton = document.getElementById('fahrenheitButton');
fahrenheitButton.addEventListener('click', fahrenheitFunction, false);

function gasMarkFunction() {
	const gasMark = document.getElementById('gasMarkField').value;
	
	// Converts Gas Mark into Celsius
	let celsiusRaw = (gasMark * 14) + 121;
	let celsius = Math.floor(celsiusRaw);
	
	// Converts Celsius into Kelvin
	let kelvin = (celsiusRaw / 1) + 273;
	kelvin = Math.floor(kelvin);

	// Converts Celsius into Fahrenheit
	let fahrenheit = celsiusRaw * (9 / 5) + 32;
	fahrenheit = Math.floor(fahrenheit);
	
	// Gas Mark can have values of 1/2 and 1/4. These are not properly converted by the formula so they are converted in an if, else statement.
	if (gasMark === "1/2") {
		celsius = 121;
		fahrenheit = 250;
		kelvin = 394;
	} else if (gasMark === "1/4") {
		celsius = 107;
		fahrenheit = 225;
		kelvin = 380;
	}
	
	printTemperatures(kelvin, celsius, fahrenheit, gasMark);
}
// Calls the Gas Mark function on click
const gasMarkButton = document.getElementById('gasMarkButton');
gasMarkButton.addEventListener('click', gasMarkFunction, false);

// Look into rounding errors from math.floor when using Fahrenheit
// Stop inputs that are not numbers
// Use Number.isInteger(); to make sure it is a whole number

});