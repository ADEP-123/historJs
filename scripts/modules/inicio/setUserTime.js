import variables from "../../variables.js";
const setUserTime = (minUser, secUser) => {

    variables.sec2b.textContent = secUser[1];
    variables.sec2t.textContent = secUser[1];
    variables.sec1b.textContent = secUser[0];
    variables.sec1t.textContent = secUser[0];

    variables.min2b.textContent = minUser[1];
    variables.min2t.textContent = minUser[1];
    variables.min1b.textContent = minUser[0];
    variables.min1t.textContent = minUser[0];

}
export default setUserTime