export class AlertError {
    constructor({
        message,
    }) {
        this.message = message
    }
    createAlertError() {
        const box = document.createElement("div")
        const text = document.createElement("span")
        const body = document.getElementsByTagName("body")[0]

        box.classList.add("box-alert")
        
        text.innerText = this.message
        
        box.appendChild(text)

        body.appendChild(box)
        setTimeout(() => {
            box.style.display = "none"
        }, 5000)
    }
}