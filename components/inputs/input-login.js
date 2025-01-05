export class InputLogin {
    constructor({
        inputId,
        labelText,
        inputText,
        inputType,
    }) {
        this.labelText = labelText
        this.inputText = inputText
        this.inputType = inputType
        this.inputId = inputId
    }
    createInputUserLogin() {
        const input = document.createElement("input")
        input.classList.add("input-user-login")
        input.setAttribute("name", "user-login")
        input.setAttribute("required", "")
        input.setAttribute("type", this.inputType)
        input.setAttribute("placeholder", this.inputText)
        input.setAttribute("id", this.inputId)

        const label = document.createElement("label")
        label.classList.add("input-user-label")
        label.setAttribute("for", "user-login")

        const div = document.createElement("div")
        div.classList.add("input-user-field")

        label.innerHTML = this.labelText


        div.appendChild(input)
        div.appendChild(label)

        return div
    }
}