document.getElementById('btn-calculate').addEventListener('click', function(){
    // Income
    const income = inputFieldToNumberById('inputIncome');
    if(isNaN(income)){
        alert('Warning! the income field is blank!');
        return;
    }
    else if(income < 0){
        alert('Warning! the income field in (-) minus figure.');
        return;
    }

    // Expenses ---->
    const food = inputFieldToNumberById ('food-expense');
    if(isNaN(food)){
        alert('Required! Food Field is empty');
        return;
    }
    const rent = inputFieldToNumberById ('rent-expense');
    if(isNaN(rent)){
        alert('Required! Rent field is empty');
        return;
    }
    const cloth = inputFieldToNumberById ('cloth-expense');
    if(isNaN(cloth)){
        alert('Required! Cloth field is empty');
        return;
    }

    // Calculate Total Expense and Balance
    const expenses = food + rent + cloth;
    const balance = income - expenses;
    if(expenses > income){
        alert('Your income figure is greater than your expense figure.');
        return;
    }
    setAValueOnField ('total-expense', expenses);
    setAValueOnField ('balance', balance);

})

// Savings Section ---->
document.getElementById('btn-save').addEventListener('click', function(){
    const balanceAmount = spanFieldtoNumberById ('balance');
    const savePercentage = inputFieldToNumberById ('input-percantage');
    const savingsDivide = balanceAmount * savePercentage;
    const savingsAmount = savingsDivide / 100;
    setAValueOnField ('total-saving', savingsAmount);
    const remainingBalance = balanceAmount - savingsAmount;
    setAValueOnField('remaining-balance', remainingBalance);
})

