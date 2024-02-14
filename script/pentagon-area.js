
function calculatePentagonArea(){
    // get the perimeter from the first input.
    const perimeter = pickInputValueById('pentagon-perimeter');
    console.log('perimeter: ',perimeter);


    // get the apothem from the first input.
    const apothem = pickInputValueById('pentagon-apothem');
    console.log('apothem: ',apothem);

    // calculate the pentagon area.
const area = 0.5 * perimeter * apothem;


// display the area in the areaSpan.
showInnerTextById('pentagon-area',area);
}

function pickInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue =inputField.value ;
    const inputFieldValueNumber =parseFloat(inputFieldValue);
    return inputFieldValueNumber
}

//function of display the area in the areaSpan.
function showInnerTextById(elementId, feedback){
    const element =document.getElementById(elementId);
    element.innerText =feedback;
}