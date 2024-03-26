document.getElementById('withdraw-btn').addEventListener('click',function(){
    // first step
    const withdrawField = document.getElementById('withdrawField');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    withdrawField.value =''; 

    // second step 

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);

    // third 
    
    const balanceTotalElement = document.getElementById('balance-total');
    const prebalanceTotalString = balanceTotalElement.innerText;
    const prebalanceTotal = parseFloat(prebalanceTotalString);


    if(withdrawAmount > prebalanceTotal){
        alert('Insufficient balance');
        return;
    }

    if (isNaN(withdrawAmount)) {
        alert('Please provide a valid number')
        return
      }

    //  fourth
    const totalWithdraw = withdrawTotal + withdrawAmount;
    withdrawTotalElement.innerText = totalWithdraw;

    // 4th step 
    
   const balanceTotal = prebalanceTotal - totalWithdraw;
   balanceTotalElement.innerText =balanceTotal;


})