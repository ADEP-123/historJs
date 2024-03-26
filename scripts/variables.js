class Variables {
    constructor(flipCards, flipUnits, startButton, divInicio, transContaniner, zonaConteo, transCohete, zonaHistoria) {
        this.flipCards = flipCards;
        this.flipUnits = flipUnits;
        this.startButton = startButton;
        this.divInicio = divInicio;
        this.transContaniner = transContaniner;
        this.zonaConteo = zonaConteo;
        this.transCohete = transCohete;
        this.zonaHistoria = zonaHistoria;
        this.minUser = 0;
        this.secUser = 0;
        this.minLeft = 0;
        this.secLeft = 0;
        this.min1t = null;
        this.min1b = null;
        this.min2t = null;
        this.min2b = null;
        this.sec1t = null;
        this.sec1b = null;
        this.sec2t = null;
        this.sec2b = null;

    }

    setTimeUser(newMin, newSec) {
        this.minUser = newMin;
        this.secUser = newSec;
    }

    setUsarSpaces() {
        this.min1t = document.querySelector("#min1t");
        this.min1b = document.querySelector("#min1b");
        this.min2t = document.querySelector("#min2t");
        this.min2b = document.querySelector("#min2b");
        this.sec1t = document.querySelector("#sec1t");
        this.sec1b = document.querySelector("#sec1b");
        this.sec2t = document.querySelector("#sec2t");
        this.sec2b = document.querySelector("#sec2b");
    }

    setTimeLeft(minLeft, secLeft) {
        this.minLeft = minLeft;
        this.secLeft = secLeft;

    }
}

const variables = new Variables(
    document.querySelectorAll(".flip-card"),
    document.querySelectorAll(".flipUnit"),
    document.querySelector("#start"),
    document.querySelector("#divInicio"),
    document.querySelector("#transitionContainer"),
    document.querySelector("#zonaConteo"),
    document.querySelector("#transCoh"),
    document.querySelector("#historiaJs"));
variables.setUsarSpaces()
export default variables