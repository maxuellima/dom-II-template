const insereItem = (event) => {

    const novoItem = document.createElement("li");

    let textoDoInput = document.createTextNode(document.getElementById("meu-input").value);

    // const novoConteudo = document.createTextNode(textoDoInput);

    novoItem.appendChild(textoDoInput);

    const listaParaInserir = document.getElementById("lista");

    listaParaInserir.insertAdjacentElement("beforeend", novoItem);

}