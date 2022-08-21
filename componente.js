const todosBotoes= document.querySelectorAll("[data-botao]").values;


function mostraClassificacao() {
    for (const botao of todosBotoes) {
        botao.addEventListener("click", classificacaoNaTela);
    }
}

function classificacaoNaTela () {
    const qualClassificacao = document.getElementById("agradecimento");
    qualClassificacao.innerHTML = `Você selecionou ${botao} de 5`;   
}