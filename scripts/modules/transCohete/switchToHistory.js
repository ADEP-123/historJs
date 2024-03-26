import variables from "../../variables.js";
const switchToHistory = () => {
    variables.transCohete.style.display = "none"
    variables.zonaHistoria.style.cssText = "display: flex;";
    AOS.init()
}
export default switchToHistory