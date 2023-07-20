// function verificarTecla(event) {

// }

const verificarTecla = (event) => {
if (event.shiftKey) {
    document.getElementById("mensagem").innerHTML = "Atenção, segurando o Shift!"
    
} else {
    document.getElementById("mensagem").innerHTML = ""
    
}
}