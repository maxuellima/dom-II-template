
const mudarInputPassword = (event)=>{
event.preventDefault()
const meuInputDeSenha = document.getElementById("password")
meuInputDeSenha.setAttribute("type", "password")



}

const alterarModoDeEstilo = (event) => {
event.preventDefault()
const form = document.querySelector(".light")
// form.classList.remove("light")
// form.classList.add("dark")
form.classList.toggle("dark")
}

