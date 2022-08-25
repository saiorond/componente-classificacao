const todosBotoes = document.querySelectorAll(".opcoes");
const submit = document.querySelector(".enviar");
const submit2 = document.querySelector(".classificar_novamente");
const box1 = document.getElementById("boxum");
const box2 = document.getElementById("boxdois");
const escolha = document.getElementById("escolha");


submit.addEventListener("click", () => {
  box2.classList.remove("hidden")
  box1.style.display = "none"
});

submit2.addEventListener("click", () => {
    box2.classList.add("hidden")
    box1.style.display = "block"
  });

todosBotoes.forEach((opcao) => {
    opcao.addEventListener("click", () => {
        escolha.innerHTML = opcao.innerHTML
    })
  })
