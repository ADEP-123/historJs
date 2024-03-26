import variables from "../../variables.js";
function reproducirBeep() {
    variables.beepSound.currentTime = 0;
    variables.beepSound.play();
}
export default reproducirBeep;