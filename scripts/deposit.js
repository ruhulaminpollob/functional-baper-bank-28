function getInputValues(inputFiledId) {
    const previousValue =document.getElementById(inputFiledId);
    const inputValueString = previousValue.value;
    const inputValue = parseFloat(inputValueString);
    inputValueString.value ='';
    return inputValue;
}

function getElementValues(elementId) {
    const previousElement = document.getElementById(elementId);
    const elementValueString = previousElement.value;
    const elementValue = parseFloat(elementValueString)
    return elementValue;
}
document.getElementById('deposit').addEventListener('click', function () {
    const depositValue =getInputValues('deposit-value');
    const depositElement =getElementValues('deposit-total');
    
})