const inputPaulo = document.querySelector("#f_input")
const button = document.querySelector("#btn-email")

let funcoes = [
    () => {
        let usuario = inputPaulo.value
        alert(`Muito bem vindo, ${usuario}`)
    }
]

button.addEventListener("click",funcoes[0])