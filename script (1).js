// script.js - Interatividade do site

// Validação de envio do formulário de login
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Login efetuado com sucesso!");
        });
    }
});
