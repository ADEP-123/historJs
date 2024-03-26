import variables from "../../variables.js";
import reproducirAudCohe from "./reproducitAudCohe.js";
import switchToHistory from "./switchToHistory.js";

const insertarCohete = () => {
    variables.zonaConteo.style.display = "none";
    variables.transCohete.style.cssText = "display: flex;";
    const imageCohete = variables.transCohete.querySelector("#cohete");
    imageCohete.src = "images/coete.png"
    setTimeout(() => {
        imageCohete.src = "images/coete.gif"
        reproducirAudCohe()
    }, 2000);
    setTimeout(() => {
        switchToHistory()
    }, 7000)
}
export default insertarCohete