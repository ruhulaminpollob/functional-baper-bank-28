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
// deposit button
document.getElementById('deposit').addEventListener('click', function () {
    const depositValue =getInputValues('deposit-value');
    const depositElement =getElementValues('deposit-total');
    
    const newDepositElement = depositValue + depositElement;
    const setDepositElement  =setElementByIds('deposit-total', newDepositElement);

    const balanceElement =getElementValues('balance-total');
    const newBalanceElement = depositValue + balanceElement;
    const setNewBalance = setElementByIds('balance-total', newBalanceElement);    
})

// withdraw button
document.getElementById('withdraw').addEventListener('click', function () {
    const withdrawValue=getInputValues('withdraw-value');
    const withdrawElement=getElementValues('withdraw-total');
    const newWithdrawElement =withdrawValue +withdrawElement;
    const setWithdrawElement =setElementByIds('withdraw-total', newWithdrawElement)

    const balanceWithdrawElement =getElementValues('balance-total');
    const newBalanceWithdrawElement =  balanceWithdrawElement - withdrawValue;
    const setNewBalance = setElementByIds('balance-total', newBalanceWithdrawElement);
})