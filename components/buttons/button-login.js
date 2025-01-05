export class ButtonLogin {
    constructor({
        buttonText,
        buttonFunctions,
    }) {
        this.buttonText = buttonText
        this.buttonFunctions = buttonFunctions
    }
    createButtonLogin() {
        const divButton = document.createElement("div")
        const button = document.createElement("button")
        const divCLoader = document.createElement("div")

        button.classList.add("button-login")
        divCLoader.classList.add("c-loader")

        divCLoader.id = "cLoader"

        divButton.style.width = "100%"
        divButton.style.display = "flex"
        divButton.style.alignItems = "center"
        divButton.style.textAlign = "center"
        divButton.style.paddingTop = "15px"

        button.style.marginLeft = "10%"
        button.style.marginRight = "5%"

        divButton.appendChild(button)
        divButton.appendChild(divCLoader)

        this.buttonFunctions.forEach(buttonFunction => {
            button.addEventListener("click", buttonFunction)
        });

        button.innerHTML = this.buttonText

        return divButton
    }
}