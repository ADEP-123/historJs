const flipCards = document.querySelectorAll(".flip-card");
const flipUnits = document.querySelectorAll(".flipUnit");

let min = 10;
let sec = 59;

setInterval(flip, 1000);
//flip()
function flip() {

    if (min >= 0 && sec >= 0) {

        if (sec == 0) {
            min--;
            sec = 59;
        } else {
            sec--;
        }

        const newMin = min.toString().padStart(2, '0');
        const newSec = sec.toString().padStart(2, '0');

        //obtener digitos acutales
        const min1t = document.querySelector("#min1t");
        const min1b = document.querySelector("#min1b");
        const min2t = document.querySelector("#min2t");
        const min2b = document.querySelector("#min2b");
        const sec1t = document.querySelector("#sec1t");
        const sec1b = document.querySelector("#sec1b");
        const sec2t = document.querySelector("#sec2t");
        const sec2b = document.querySelector("#sec2b");

        //Comparar cual cambia
        if (sec2t.textContent !== newSec[1]) {
            flipDigit(sec2t, newSec[1]);
        }
        if (sec2b.textContent !== newSec[1]) {
            flipDigit(sec2b, newSec[1]);
        }
        if (sec1t.textContent !== newSec[0]) {
            flipDigit(sec1t, newSec[0]);
        }
        if (sec1b.textContent !== newSec[0]) {
            flipDigit(sec1b, newSec[0]);
        }
        if (min2t.textContent !== newMin[1]) {
            flipDigit(min2t, newMin[1]);
        }
        if (min2b.textContent !== newMin[1]) {
            flipDigit(min2b, newMin[1]);
        }
        if (min1t.textContent !== newMin[0]) {
            flipDigit(min1t, newMin[0]);
        }
        if (min1b.textContent !== newMin[0]) {
            flipDigit(min1b, newMin[0]);
        }

    } else {
        alert("¡Llegamos al final!");
    }
}


function flipDigit(element, newValue) {
    const card = element.cloneNode(true)

    if (card.classList.contains("top")) {
        card.classList.add("flipedTop");
        element.insertAdjacentElement("afterend", card);
        // element.classList.add("flipedTop");
    } else {
        card.classList.add("flipedBottom");
        element.insertAdjacentElement("afterend", card);
        // element.classList.add("flipedBottom");
    }
    element.textContent = newValue;
    setTimeout(() => {
        card.textContent = newValue;
        card.parentNode.removeChild(card);
    }, 500)

}
