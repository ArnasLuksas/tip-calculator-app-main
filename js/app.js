const billInput = document.querySelector('#bill');
const btns = document.querySelector('.btns_container');
const peoples = document.querySelector('#numOfPeople');
const custom = document.querySelector('.customNumber');
const span = document.querySelector('.fillError')
const bill = document.querySelector('.billError')
const tip = document.querySelector('.tip');
const total = document.querySelector('.tipAmount');
const reset = document.querySelector('.reset');
const allInputs = document.querySelectorAll('input');
const section = document.querySelector('.secOne');

let billVal;
let peopleVal;
let customVal;

const getCustomResult = () => {
    billVal = Number(billInput.value);
    customVal = Number(custom.value / 100)
    peopleVal = Number(peoples.value);
    const personTip = billVal * customVal / peopleVal;
    const personTipRound = (Math.round(personTip * 100) / 100).toFixed(2);
    const personTotal = (billVal * customVal + billVal) / peopleVal;
    const personTotalRound = (Math.round(personTotal * 100) / 100).toFixed(2);

    reset.removeAttribute("class", "enableBtn");
    reset.removeAttribute("disabled");

    if (!billVal) {
        bill.textContent = `Can't be zero`;
        billInput.classList.add('error');
    } else {
        bill.textContent = "";
        billInput.classList.remove('error');
    }
    if (!peopleVal) {
        span.textContent = `Can't be zero`;
        peoples.classList.add('error');
    } else {
        span.textContent = ``;
        peoples.classList.remove('error');
        tip.textContent = `$${personTipRound}`;
        total.textContent = `$${personTotalRound}`;
    }
}


const getButtonsResult = (e) => {
    const btnVal = Number(e.target.value);
    const personTip = billVal * btnVal / peopleVal;
    const personTipRound = (Math.round(personTip * 100) / 100).toFixed(2);
    const personTotal = (billVal * btnVal + billVal) / peopleVal;
    const personTotalRound = (Math.round(personTotal * 100) / 100).toFixed(2);


    if (!billVal) {
        bill.textContent = `Can't be zero`;
        billInput.classList.add('error');

    } else {
        bill.textContent = '';
        billInput.classList.remove('error');
    }
    if (!peopleVal) {
        span.textContent = `Can't be zero`;
        peoples.classList.add('error');
    } else {
        span.textContent = ``;
        peoples.classList.remove('error');
        tip.textContent = `$${personTipRound}`;
        total.textContent = `$${personTotalRound}`;
    }
    if (btnVal) {
        custom.value = "";
    }
}

const clearInputs = () => {
    allInputs.forEach((input) => {
        input.value = "";
        tip.textContent = "$0.00";
        total.textContent = "$0.00";
    })
    reset.setAttribute("class", "enableBtn");
    reset.setAttribute("disabled")
}

const removeMinus = (e) => {
    if (e.keyCode === 189) {
        e.preventDefault();
    }
}

reset.addEventListener('click', clearInputs)
section.addEventListener('input', getCustomResult);
btns.addEventListener('click', getButtonsResult);
section.addEventListener('keydown', removeMinus);



