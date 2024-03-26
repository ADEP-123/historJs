class Variables {
    constructor(flipCards, flipUnits, minLeft, secLeft) {
        this.flipCards = flipCards;
        this.flipUnits = flipUnits;
        this.minLeft = minLeft;
        this.secLeft = secLeft;
    }
}
const variables = new Variables(document.querySelectorAll(".flip-card"), document.querySelectorAll(".flipUnit"), 10, 59);
export default variables