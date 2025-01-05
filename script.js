import { environment, prefix } from "./config.js"
import { AlertError } from "./components/alerts/alert-error.js";
import { ButtonLogin } from "./components/buttons/button-login.js";
import { InputLogin } from "./components/inputs/input-login.js";


function defineBodyHeight() {
    const body = document.getElementById("body")
    const height = window.innerHeight;
    body.style.height = `${height}px`
}
defineBodyHeight()

function placeCLoader() {
    const cLoader = document.getElementById("cLoader")
    cLoader.style.display = "block"
}

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
    buttonFunctions: [login, placeCLoader]
})

async function login() {
    const email = document.getElementById("inputEmailLogin").value
    const password = document.getElementById("inputPasswordLogin").value
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', '/');
    const response = await fetch(environment + prefix.people + "/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: headers
    })
    const cLoader = document.getElementById("cLoader")
    cLoader.style.display = "none"
    const data = await response.json()
    if (response.ok) {
        sessionStorage.setItem("name", data[0].name)
        window.location = "./main-content/home.html"
    }
    if (response.status == 401) {
        new AlertError({
            message: data.message
        }).createAlertError()
    }
}


window.login = login