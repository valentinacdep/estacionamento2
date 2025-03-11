// cadastro de usuário
const cadastro = document.getElementById('cadastro');
cadastro.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;
    const confirmPassword = document.getElementById('confirm_senha').value;

    if (password !== confirmPassword) {
        alert("Senha inválida.");
        return;
    }

    const response = await fetch('http://localhost:3030/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha: password })
    });

    const result = await response.json();

    if (result.success) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    } else {
        alert("Erro ao cadastrar usuário.");
    }
});