export class InputLogin {
    constructor({
        labelText,
        inputText,
        inputType,
        id,
    }) {
     this.labelText = labelText
     this.inputText = inputText   
     this.inputType = inputType   
     this.id = id   
    }
    createInputUserLogin(){
        const input = document.createElement("input")
        input.classList.add("input-user-login")
        input.setAttribute("name","user-login")
        input.setAttribute("required","")
        input.setAttribute("type",this.inputType)
        input.setAttribute("placeholder",this.inputText)
        input.setAttribute("id",this.id)
        
        const label = document.createElement("label")
        label.classList.add("input-user-label")
        label.setAttribute("for","user-login")
        
        const div = document.createElement("div")
        div.classList.add("input-user-field")
        
        label.innerHTML = this.labelText
    
    
        div.appendChild(input)
        div.appendChild(label)
    
        return div
    }
}