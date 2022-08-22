const todosBotoes= document.querySelectorAll("#data-botao").values;

function mostraClassificacao() {
    const botao = todosBotoes;
        botao.addEventListener("click", classificacaoNaTela);
    
}

function classificacaoNaTela () {
    const qualClassificacao = document.getElementById("agradecimentos");
    qualClassificacao.innerHTML = `Você selecionou ${botao} de 5`;   
    mostraClassificacao();
}