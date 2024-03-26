function flipDigit(element, newValue) {
    let startValue = element.textContent

    const card = document.createElement("div");
    if (element.classList.contains("top")) {
        card.classList.add("flipedTop");
    } else {
        card.classList.add("flipedBottom");
    }

    if (element.classList.contains("top")) {
        card.textContent = startValue;
    } else {
        card.textContent = newValue
    }

    if (element.classList.contains("top")) {
        card.addEventListener("animationstart", e => {
            element.textContent = newValue;
        })
        card.addEventListener("animationend", e => {
            card.remove();
        })
    } else {
        card.addEventListener("animationend", e => {
            element.textContent = newValue
            card.remove()
        })
    }
    element.parentNode.append(card)
}
export default flipDigit