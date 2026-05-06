// Validação do formulário
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Validação simples de email
    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um email válido!");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    // Limpar formulário
    document.getElementById("formContato").reset();
});
function toggleTema() {
    document.body.classList.toggle("dark");
}
