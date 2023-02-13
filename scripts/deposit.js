function getInputValues(inputFiledId) {
    const previousValue =document.getElementById(inputFiledId);
    const inputValueString = previousValue.value;
    const inputValue = parseFloat(inputValueString);
    inputValueString.value ='';
    return inputValue;
}

function getElementValues(elementId) {
    const previousElement = document.getElementById(elementId);
    const elementValueString = previousElement.innerText;
    const elementValue = parseFloat(elementValueString)
    return elementValue;
}
console.log(getElementValues('deposit-total'));


function setElementById(elementId, newElementValue) {
    const getElementById = document.getElementById(elementId);
    getElementById.innerText =newElementValue;
}
document.getElementById('deposit').addEventListener('click', function () {
    const depositValue =getInputValues('deposit-value');
    const depositElement =getElementValues('deposit-total');
    console.log(depositElement);

    // const newDepositElement = depositValue + depositElement;
    
    // const setDepositElement  =setElementById('deposit-total', newDepositElement);
    
})