function getInputValues(inputFiledId) {
    const previousValue =document.getElementById(inputFiledId);
    const inputValueString = previousValue.value;
    const inputValue = parseFloat(inputValueString);
    previousValue.value ='';  
    return inputValue;
}

function getElementValues(elementId) {
    const previousElement = document.getElementById(elementId);
    const elementValueString = previousElement.innerText;
    const elementValue = parseFloat(elementValueString)
    
    return elementValue;
}

function setElementByIds(elementId, newElementValue) {
    if (isNaN(newElementValue)) {
        alert('empty')
        return;
    }
    const getElementById = document.getElementById(elementId);
    getElementById.innerText =newElementValue;
}