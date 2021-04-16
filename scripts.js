let slider = document.getElementById("myRange");
let pageviews = document.getElementById("pageviews");
let amountPerMounth = document.getElementById("amount-per-month");
let amount = 16;
amountPerMounth.innerHTML = amount;

function handlerSlider() {
    slider.oninput = function () {
        if( slider.value == 1 ) {
            pageviews.innerHTML = '10k';
            amount = 8;
            amountPerMounth.innerHTML = amount;
         } else if ( slider.value == 2) {
            pageviews.innerHTML = '50k';
            amount = 12;
            amountPerMounth.innerHTML = amount;
         } else if ( slider.value == 3) {
            pageviews.innerHTML = '100k';
            amount = 16;
            amountPerMounth.innerHTML = amount;
         } else if ( slider.value == 4) {
            pageviews.innerHTML = '500k';
            amount = 24;
            amountPerMounth.innerHTML = amount;
         } else {
            pageviews.innerHTML = '1M';
            amount = 36;
            amountPerMounth.innerHTML = amount;
         }
    }
}

handlerSlider();

let switchBtn = document.getElementById('switch-btn');
    switchBtn.addEventListener('click', handlerSwitchBtn);

function handlerSwitchBtn() {
    if(this.classList.contains('switch-on')){
        this.classList.remove('switch-on');
        handlerSlider();
    } else {
        this.classList.add('switch-on');
        slider.oninput = function () {
            if( slider.value == 1 ) {
                pageviews.innerHTML = '10k';
                amount = 8;
                amountPerMounth.innerHTML = amount - (amount * 0.25);
                console.log(amount);
             } else if ( slider.value == 2) {
                pageviews.innerHTML = '50k';
                amount = 12;
                amountPerMounth.innerHTML = amount - (amount * 0.25);
             } else if ( slider.value == 3) {
                pageviews.innerHTML = '100k';
                amount = 16;
                amountPerMounth.innerHTML = amount - (amount * 0.25);
             } else if ( slider.value == 4) {
                pageviews.innerHTML = '500k';
                amount = 24;
                amountPerMounth.innerHTML = amount - (amount * 0.25);
             } else {
                pageviews.innerHTML = '1M';
                amount = 36;
                amountPerMounth.innerHTML = amount - (amount * 0.25);
             }
        }
    }
}

let btnTrial = document.getElementById('start_trial');
btnTrial.addEventListener('click', () => {
   alert("Your trial period has started! Congradulations!");
});
