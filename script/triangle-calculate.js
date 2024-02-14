/*
*objective: get base and height of a triangle.calculate the area by using the provided formula and then display the area.
*step-1: get base value of the triangle after clicking the button.
*step-2: for this added an id in the base input field.
*step-3: use getElementById to access the input field.
*step-4: get value from the input field.(value is string now).
*step-5: convert the value to a number. use paseFloat methode.
*
*/
function calculateTriangleArea(){
    // get the base value.
    const triangleBaseInput =document.getElementById('triangle-base');
    const triangleBaseText =triangleBaseInput.value;
    const base =parseFloat(triangleBaseText);
    console.log('base: ',base);

    // get the height value.
    const triangleHeightInput =document.getElementById('triangle-height');
    const triangleHeightText =triangleHeightInput.value;
    const height =parseFloat(triangleHeightText);

    console.log('height: ',height);
// calculate the area/
    const area = 0.5 * base * height;
    console.log('The area of the triangle is: ',area);
    // display the area in the areaSpan.
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}