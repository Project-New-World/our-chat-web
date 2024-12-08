export class ButtonLogin {
    constructor({
        buttonText,
        buttonFunction,
    }) {
        this.buttonText = buttonText
        this.buttonFunction = buttonFunction
    }
    createButtonLogin (){
        const button = document.createElement("button")
        button.classList.add("button-login")
        button.onclick = this.buttonFunction;
        button.innerHTML = this.buttonText
        return button
    }
}