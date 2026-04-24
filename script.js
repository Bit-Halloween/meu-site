const botao = document.getElementById("botao-tema");

// Quando a página carrega
window.onload = function () {


if (localStorage.getItem("tema") === "claro") {
    document.body.classList.add("claro");
    botao.textContent = "☀️";
}


}

function alternarTema() {
document.body.classList.toggle("claro");

if (document.body.classList.contains("claro")) {
    botao.textContent = "☀️";
    localStorage.setItem("tema", "claro");
} else {
    botao.textContent = "🌙";
    localStorage.setItem("tema", "escuro");
}


}
