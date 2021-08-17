document.getElementById('deposit-button').addEventListener('click', function () {

    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositInput.value);//parseFloat() sting কে সংখ্যাই রুপান্তর করার জন্য ব্যবহার করা হয়;
    // console.log(depositAmount);


    // update deposit total---------------------
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = parseFloat(depositTotal.innerText); //parseFloat() sting কে সংখ্যাই রুপান্তর করার জন্য ব্যবহার করা হয়;
    const newDepositTotal = previousDepositAmount + newDepositAmount
    depositTotal.innerText = newDepositTotal;

    //update account balance--------------------
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);//parseFloat() sting কে সংখ্যাই রুপান্তর করার জন্য ব্যবহার করা হয়;
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clear the deposit input field
    depositInput.value = "";
})

// handle withdraw event handler------------------
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = parseFloat(withdrawInput.value);//parseFloat() sting কে সংখ্যাই রুপান্তর করার জন্য ব্যবহার করা হয়;
    // console.log(withdrawAmount);

    //set withdraw total--------------------
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotal.innerText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;


    //update balance----------------------
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);//parseFloat() sting কে সংখ্যাই রুপান্তর করার জন্য ব্যবহার করা হয়;
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clear the withdraw input field----------
    withdrawInput.value = "";
})