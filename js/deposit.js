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

    // third step 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal +newDepositAmount;
    balanceTotalElement.innerText=currentBalanceTotal;


    // step 7
    depositField.value=''
})