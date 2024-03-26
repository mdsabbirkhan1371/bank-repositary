document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);
    

    const balanceTotalElement = document.getElementById('balance-total');
    const prebalanceTotalString = balanceTotalElement.innerText;
    const prebalanceTotal = parseFloat(prebalanceTotalString);


    const withdrawField = document.getElementById('withdrawField');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    withdrawField.value ='';

    if(withdrawAmount > prebalanceTotal){
        alert('Insufficient balance');
        return;
    }

    // first step 

 
    

    if (isNaN(withdrawAmount)) {
        alert('Please provide a valid number')
        return
      }

     

    // second step 

    
    // third step 
    const totalWithdraw = withdrawTotal + withdrawAmount;
    withdrawTotalElement.innerText = totalWithdraw;

    
    // 4th step 


    
   const balanceTotal = prebalanceTotal - totalWithdraw;
   balanceTotalElement.innerText =balanceTotal;


})