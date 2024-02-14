function calculateRhombusArea(){
    // get the diagonal-1 from first input.
const diagonal1 =getInputValueById('rhombus-diagonal1');
console.log('diagonal-1: ',diagonal1);

// get the diagonal-2 from second input.
const diagonal2 =getInputValueById('rhombus-diagonal2');
console.log('diagonal-2: ',diagonal2);

// calculate the rhombus area.
const area = 0.5 * diagonal1 * diagonal2;

// display the area in the areaSpan.
const rhombusAreaSpan = document.getElementById('rhombus-area');
rhombusAreaSpan.innerText =area;
}

// get the diagonals by run this similar function.
function getInputValueById(inputFieldId){
    const inputField =document.getElementById(inputFieldId)
const inputFieldValue =inputField.value ;
const inputValueNumber =parseFloat(inputFieldValue);
// console.log(inputValueNumber)
return inputValueNumber
}