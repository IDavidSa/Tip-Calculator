const bill = document.querySelector('#bill');
const tips = document.querySelectorAll('.button-tip');
const custom = document.querySelector('#custom');
const numberOfPeople = document.querySelector('#people');
const tipPerPerson = document.querySelector('#tip-person');
const totalBill = document.querySelector('#total');
const reset = document.querySelector('#reset');

let billAmount = 0;
    tipPercentage = 0;
    numPeople = 0;



    bill.addEventListener('input',()=>{
        if(bill.value >= 0){
            billAmount = parseFloat(bill.value);
            console.log(billAmount);
            calc();
        }
    })

const active = (elemento)=>{
    elemento.classList.add('selected');
    elemento.classList.remove('unselected');
}

const disabled = (elemento) =>{
    elemento.classList.add('unselected');
    elemento.classList.remove('selected');
}


tips.forEach(element =>{
    element.addEventListener('click', ()=>{
        if(element.classList.contains('unselected')){
            
            
            tips.forEach(el =>{
                disabled(el);
                
            })
            active(element);
            tipPercentage = parseFloat(element.innerHTML);
            console.log(tipPercentage);
            calc();
        } else{
            disabled(element);
            rstDisplay();

        }

    })
    })


custom.addEventListener('input', ()=>{
    if(custom.value >= 0){
        tips.forEach(e =>{
            disabled(e);
        })
        tipPercentage = custom.value;
        calc();
        console.log(tipPercentage);
    }
})

numberOfPeople.addEventListener('input',()=>{
    numPeople = parseInt(numberOfPeople.value);
    console.log(numPeople);
    calc();
})

const rst = ()=>{
    billAmount = 0;
    tipPercentage = 0;
    numPeople = 0;

    tips.forEach(e=>{
        disabled(e);
    })

    numberOfPeople.value = "";
    bill.value = "";
    custom.value = "";

    


}

const rstDisplay = ()=>{
    tipPerPerson.innerHTML = '00.00';
    totalBill.innerHTML = '00.00';
}

reset.addEventListener('click', rst);

const calc = ()=>{
    if(billAmount > 0 && tipPercentage > 0 && numPeople > 0){
        let totalTip = billAmount * tipPercentage/100;
        let total = billAmount + totalTip;

        tipPerPerson.innerHTML =` ${(totalTip/numPeople).toFixed(2)}`;
        totalBill.innerHTML = `${(total/numPeople).toFixed(2)}`;

        console.log("resultado: " + totalTip);
        console.log('total: ' + total);
    } else{
        rstDisplay();
    }
    
}

  




