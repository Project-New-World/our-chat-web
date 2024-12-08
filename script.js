import { ButtonLogin } from "./components/buttons/button-login.js"
import { InputLogin } from "./components/inputs/input-login.js"
import { environment, prefix } from "./config.js"

function placeInputLogin(parameters) {
    const article = document.getElementById("boxLogin")
    const div = new InputLogin(parameters).createInputUserLogin()
    article.appendChild(div)
}

function placeButtonLogin(parameters) {
    const article = document.getElementById("boxLogin")
    const button = new ButtonLogin(parameters).createButtonLogin()
    article.appendChild(button)
}

placeInputLogin({
    inputId: "inputEmailLogin",
    inputText: "Email",
    inputType: "text",
    labelText: "Email"
})
placeInputLogin({
    inputId: "inputPasswordLogin",
    inputText: "Password",
    inputType: "password",
    labelText: "Password"
})
placeButtonLogin({
    buttonText: "Login",
    buttonFunction: login,
})

async function login() {
    const email = document.getElementById("inputEmailLogin").value
    const password = document.getElementById("inputPasswordLogin").value
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', '/');
    const response = await fetch(environment+prefix.people+"/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers:headers
    })
    if (response.ok){
        const data = await response.json()
        sessionStorage.setItem("name",data[0].name)
        window.location = "./main-content/home.html"
    }
}


window.login = login