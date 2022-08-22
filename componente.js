const todosBotoes = document.querySelectorAll(".opcoes");
const submit = document.querySelector(".enviar");
const resultado = document.querySelector(".span_value");
const bloco = document.querySelector(".caixa");
const outraTela = document.querySelector(".segunda_tela");

let selected = "";

todosBotoes.forEach(btn => {
    btn.addEventListener("click", (e) => {
        removeSelectedClasses()
        selected = e.target.textContent
        e.target.classList.add("selected")
    })
})


submit.addEventListener("click", () => {
    resultado.textContent = value;
    bloco.style.display = "none";
    outraTela.style.display = "flex";
})