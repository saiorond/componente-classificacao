const todosBotoes = document.querySelectorAll(".opcoes");
const submit = document.querySelector(".enviar");
const error = document.getElementById("error-msg");
const resultado = document.querySelector(".classificacao_escolhida");
const box1 = document.getElementById("boxum");
const box2 = document.getElementById("boxdois");

let selected = "";

todosBotoes.forEach(btn => {
    btn.addEventListener("click", (e) => {
        removeSelectedClasses()
        selected = e.target.textContent
        e.target.classList.add("selected")
    })
})


submit.addEventListener("click", () => {
    if (selected === "") {
        addBotaoErros()
        setTimeout(() => {
            removeBotaoErros()
        }, 3000)
        return
    }

    resultado.textContent = `Você selecionou ${selected} de 5`
    box1.classList.add("d-none");
    box2.classList.remove("d-none");
})

function addBotaoErros() {
    error.classList.remove("d-none")
    todosBotoes.forEach(btn => {
        btn.classList.add("error")
    })
}

function removeBotaoErros() {
    error.classList.add("d-none")
    todosBotoes.forEach(btn => {
        btn.classList.remove("error")
    })
}

function removeSelectedClasses() {
    botoes.forEach(btn => {
        btn.classList.remove("selected")
    })
}