// first step 
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('depositField');
    const newDepositAmountString = depositField.value;
    const newDepositAmount= parseFloat(newDepositAmountString)

    // second step 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString =depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    
    const currentDepositTotal = previousDepositTotal+newDepositAmount;
    depositTotalElement.innerText=currentDepositTotal;
    




    // step 7
    depositField.value=''
})