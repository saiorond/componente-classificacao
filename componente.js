const botaoEnviar = document.querySelector("[data-enviar]");

function telaAgradecimento() {
    const telaContainer = document.createAttribute("div");
    telaContainer.classList.add("agradecimento")
}

botaoEnviar.addEventListener("click", telaAgradecimento)