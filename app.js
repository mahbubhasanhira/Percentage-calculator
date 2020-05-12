const Calculate = document.querySelector('#calculate-btn');
Calculate.addEventListener('click', function(e){
   e.preventDefault();
    const Amount = document.getElementById('amount').value;
    const AmountNumber = Number(Amount);

    const Percent = document.getElementById('percent').value;
    const PercentNumbr = Number(Percent);

    const pay = document.querySelector("#pay");
    const discount = document.querySelector('#discount');


    if(AmountNumber < 0 || PercentNumbr < 0){
        alert('Please Enter A Posetive Number');
    } 
    else if(Amount ===  '' || Percent === ''){
        alert('Please Fulfil Both Field');
    }
    else{
        const payMath  = (AmountNumber -(AmountNumber / 100) * PercentNumbr).toFixed(2);
        const discountMath = ((AmountNumber / 100) * PercentNumbr).toFixed(2);
        
       pay.textContent = `Pay Amount: ${payMath}`;
       discount.textContent =`Discount Amount: ${discountMath}`;
    }





//    console.log(AmountNumber);
//    console.log(Percent1);

});

