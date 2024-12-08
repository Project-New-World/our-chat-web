import { InputLogin } from "./components/inputs/basic-input.js"

function placeInputLogin(parameters) {
    const article = document.getElementById("boxLogin")
    const div = new InputLogin(parameters).createInputUserLogin()
    article.appendChild(div)
}

placeInputLogin({
    id: "inputEmailLogin",
    inputText: "Email",
    inputType: "text",
    labelText: "Email"
})
placeInputLogin({
    id: "inputPasswordLogin",
    inputText: "Password",
    inputType: "password",
    labelText: "Password"
})

async function login() {
    const email = document.getElementById("inputEmailLogin").value
    const password = document.getElementById("inputPasswordLogin").value
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', '/');
    const response = await fetch("https://ourchat-ii0z.onrender.com/people/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers:headers
    })
    const data = await response.json()
    console.log(data)
}


window.login = login