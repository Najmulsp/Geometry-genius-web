/*
*objective: get base and height of a parallelogram.calculate the area by using the provided formula and then display the area.
*step-1: get base value of the parallelogram after clicking the button.
*step-2: for this added an id in the base input field.
*step-3: use getElementById to access the input field.
*step-4: get value from the input field.(value is string now).
*step-5: convert the value to a number. use paseFloat methode.
*
*/

function calculateParallelogramArea(){
    // get the length value.
    const parallelogramLengthInput =document.getElementById('parallelogram-base');
const parallelogramLengthText =parallelogramLengthInput.value ;
const base = parseFloat(parallelogramLengthText);
console.log('base: ',base);

// get the width value.
const parallelogramHeightInput = document.getElementById('parallelogram-height');
const parallelogramHeightText =parallelogramHeightInput.value ;
const height =parseFloat(parallelogramHeightText);
console.log('height: ', height);

// calculate the parallelogramHeightText area.
const area = base * height;

// display the area in the areaSpan.
const parallelogramArea = document.getElementById('parallelogram-area');
parallelogramArea.innerText =area;
}

