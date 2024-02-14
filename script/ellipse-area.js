function calculateEllipseArea(){
    // get the perimeter from the first input.
    const majorAxis = takeInputValueById('ellipse-major-axis');
    console.log('majorAxis: ',majorAxis);


    // get the apothem from the first input.
    const minorAxis = takeInputValueById('ellipse-minor-axis');
    console.log('minorAxis: ',minorAxis);

    // calculate the ellipse area.
const area = 3.1416 * majorAxis * minorAxis;
console.log('the area of ellipse is: ',area);

// display the area in the areaSpan.
setInnerTextById('ellipse-area',area);
}

function takeInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue =inputField.value ;
    const inputFieldValueNumber =parseFloat(inputFieldValue);
    return inputFieldValueNumber
}

//function of display the area in the areaSpan.
function setInnerTextById(elementId, feedback){
    const element =document.getElementById(elementId);
    element.innerText =feedback;
}