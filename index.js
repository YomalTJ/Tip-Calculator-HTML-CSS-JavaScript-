const amount = document.getElementById("amount");
const guests = document.getElementById("guests");
const quality = document.getElementById("quality");
const tipAmount = document.getElementById("tip-amount");

calculate = () => {
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
    amount.value = '';
    quality.value = '';
    guests.value = '';

    if(tipAmount === 'Nan'){
        tipAmount.innerHTML = 'Tip $0 each';
        showTipAmount();
    }
    else{
        tipAmount.innerHTML = 'Tip $' + tip  + ' each';
        showTipAmount();
    }
}

showTipAmount = () => {
    var x = tipAmount;
    x.classList = 'show';
    setTimeout(() => {
        x.className = x.className.replace('show', '')
    }, 3000);
}