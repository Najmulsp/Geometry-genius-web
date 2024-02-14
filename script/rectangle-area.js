/*
*objective: get length and width of a rectangle.calculate the area by using the provided formula and then display the area.
*step-1: get length value of the triangle after clicking the button.
*step-2: for this added an id in the base input field.
*step-3: use getElementById to access the input field.
*step-4: get value from the input field.(value is string now).
*step-5: convert the value to a number. use paseFloat methode.
*
*/

function calculateRactangleArea(){
    // get the length value.
    const rectangleLengthInput =document.getElementById('rectangle-length');
const rectangleLengthText =rectangleLengthInput.value ;
const length = parseFloat(rectangleLengthText);
console.log('length: ',length);

// get the width value.
const rectangleWidthInput = document.getElementById('rectangle-width');
const rectangleWidthText =rectangleWidthInput.value ;
const width =parseFloat(rectangleWidthText);
console.log('width: ', width);

// calculate the rectangle area.
const area = length * width;

// display the area in the areaSpan.
const rectangleArea = document.getElementById('rectangle-area');
rectangleArea.innerText =area;
}








