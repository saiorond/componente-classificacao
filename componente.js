const todosBotoes = document.querySelectorAll(".opcoes");
const submit = document.querySelector(".enviar");
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
    
    resultado.textContent = `Você selecionou ${selected} de 5`
    box1.classList.add("d-none");
    box2.classList.remove("d-none");
})

function removeSelectedClasses() {
    botoes.forEach(btn => {
        btn.classList.remove("selected")
    })
}