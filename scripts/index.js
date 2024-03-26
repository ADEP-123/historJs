import variables from "./variables.js";
import flip from "./modules/counter/flip.js";
import setUserTime from "./modules/inicio/setUserTime.js";
import startAPP from "./modules/inicio/startAPP.js";


//Logica del inicio
variables.startButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const minUser = document.querySelector("#mins");
    const secUser = document.querySelector("#secs");
    if (minUser.value == "" || secUser.value == "") {
        alert("los minutos o segundos no pueden ser nulos")
    } else {
        if (parseInt(minUser.value) > 59) {
            alert("Los minutos no pueden ser mayores a 59")
        } else if (parseInt(secUser.value) > 59) {
            alert("Los segundos no pueden ser mayores a 59")
        } else {
            if (!minUser.value[1]) {
                minUser.value = "0" + minUser.value
            }
            if (!secUser.value[1]) {
                secUser.value = "0" + secUser.value
            }
            setUserTime(minUser.value, secUser.value)
            variables.setTimeLeft(parseInt(minUser.value), parseInt(secUser.value))
            startAPP()
            //Logica para setear el intervalo y no sobrecargar el explorador
            let intervaloFlip = setInterval(flip, 1000);
            const milLeft = variables.minLeft * 1000 * 60 + variables.secLeft * 1000 + 1000;

            setTimeout(() => {
                clearInterval(intervaloFlip)
                intervaloFlip = null;
            }, milLeft)
        }
    }
})









