import variables from "./variables.js";
import flip from "./modules/counter/flip.js";

//Logica para setear el intervalo y no sobrecargar el explorador
let intervaloFlip = setInterval(flip, 1000);
const milLeft = variables.minLeft * 1000 * 60 + variables.secLeft * 1000 + 1000;
setTimeout(() => {
    clearInterval(intervaloFlip)
    intervaloFlip = null;
}, milLeft)









