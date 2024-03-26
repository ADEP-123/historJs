import variables from "../../variables.js";
import insertarCohete from "../transCohete/insertarCohete.js";
import flipDigit from "./flipDigit.js";

function flip() {
    if (variables.minLeft > 0 || variables.secLeft > 0) {
        if (variables.secLeft == 0) {
            variables.minLeft--;
            variables.secLeft = 59;
        } else {
            variables.secLeft--;
        }

        const newMin = variables.minLeft.toString().padStart(2, '0');
        const newSec = variables.secLeft.toString().padStart(2, '0');

        //Comparar cual cambia
        if (variables.sec2t.textContent !== newSec[1]) {
            flipDigit(variables.sec2t, newSec[1]);
        }
        if (variables.sec2b.textContent !== newSec[1]) {
            flipDigit(variables.sec2b, newSec[1]);
        }
        if (variables.sec1t.textContent !== newSec[0]) {
            flipDigit(variables.sec1t, newSec[0]);
        }
        if (variables.sec1b.textContent !== newSec[0]) {
            flipDigit(variables.sec1b, newSec[0]);
        }
        if (variables.min2t.textContent !== newMin[1]) {
            flipDigit(variables.min2t, newMin[1]);
        }
        if (variables.min2b.textContent !== newMin[1]) {
            flipDigit(variables.min2b, newMin[1]);
        }
        if (variables.min1t.textContent !== newMin[0]) {
            flipDigit(variables.min1t, newMin[0]);
        }
        if (variables.min1b.textContent !== newMin[0]) {
            flipDigit(variables.min1b, newMin[0]);
        }

    } else {
        insertarCohete()
    }
}
export default flip;