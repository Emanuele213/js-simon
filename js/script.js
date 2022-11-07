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
        //genera barra input 
        const Bar = document.createElement('input');
        Bar.setAttribute("type", "text");
        Bar.setAttribute("name", "number");
        Bar.setAttribute("id", "number");
        Bar.setAttribute("placeholder", "inserisci i numeri");
        container.append(Bar);
        const numUser  = document.getElementById("number").value;
        const eleNum = new Array (numUser);
        
        //genera bottone 
        eleBtnConfront = document.createElement('button');
        eleBtnConfront.classList.add('mod-btn-blue');
        eleBtnConfront.innerHTML = "Controlla";
        container.append(eleBtnConfront);

        eleBtnConfront.addEventListener('click', function() {
            console.log(eleNum);
            if (eleNum == numRandom) {
                console.log('Hai vinto');
            }else {
                console.log('Hai perso');
            }
        })
    }
}) 