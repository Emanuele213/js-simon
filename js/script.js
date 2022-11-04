let numRandom;
const eleNumber = document.querySelector('.num');
const eleBtn = document.querySelector('.mod-btn');
let eleBtnConfront = document.querySelector('.mod-btn-blue');

eleBtn.addEventListener('click', function () {
    eleBtn.classList.add('hidden');
    function number () {
        for (let i = 0; i < 5; i++) {
            numRandom = Math.floor(Math.random() * 100 ) + 1;
            console.log(numRandom);
            eleNumber.innerHTML += `${numRandom} `;
        }
    }
    
    number ();
    
    const idWait = setTimeout (waitNumber, 10000);
    function waitNumber () {
        eleNumber.classList.add('hidden');
    }

    const idWaitBar = setTimeout (waitBar, 5000);
    function waitBar () {
        const container = document.querySelector('.container');
        const Bar = document.createElement('input');
        Bar.setAttribute("type", "text");
        Bar.setAttribute("name", "number");
        Bar.setAttribute("id", "number");
        container.append(Bar);
        const eleInput = document.querySelector('#number');
        const eleBar = eleInput.value;
        eleBtnConfront = document.createElement('button');
        eleBtnConfront.classList.add('mod-btn-blue');
        eleBtnConfront.innerHTML = "Controlla";
        container.append(eleBtnConfront);

        eleBtnConfront.addEventListener('click', function() {
            if (eleBar.value == numRandom) {
                console.log('Hai vinto');
            }else {
                console.log('Hai perso');
            }
        })
    }
}) 