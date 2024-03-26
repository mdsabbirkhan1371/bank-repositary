document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositFiled = document.getElementById('depositField');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    
    // second step 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositString);

    // step 3

    const currentDepositTotal =previousDepositTotal + newDepositAmount; 
    depositTotalElement.innerText = currentDepositTotal;

    // step 4 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal +newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositFiled.value = ''

    
})