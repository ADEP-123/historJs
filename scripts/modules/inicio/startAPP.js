import variables from "../../variables.js"

const startAPP = () => {
    variables.divInicio.style.display = "none"
    variables.transContaniner.style.cssText = "display: flex;";
    setTimeout(() => {
        variables.transContaniner.style.display = "none";
        variables.zonaConteo.style.cssText = "display: flex;";
    }, 1000)
}
export default startAPP