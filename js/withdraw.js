document.getElementById('withdraw-btn').addEventListener('click',function(){
    // first step 
    const withdrawField = document.getElementById('withdrawField');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    console.log(withdrawAmount)

    // second step 

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);

    // third step 

    const totalWithdraw = withdrawTotal + withdrawAmount;
    withdrawTotalElement.innerText = totalWithdraw;

    // 4th step 
    const balanceTotalElement = document.getElementById('balance-total');
    const prebalanceTotalString = balanceTotalElement.innerText;
   const prebalanceTotal = parseFloat(prebalanceTotalString);
   
   const balanceTotal = prebalanceTotal - totalWithdraw;
   balanceTotalElement.innerText =balanceTotal;

   withdrawField.value ='';
})