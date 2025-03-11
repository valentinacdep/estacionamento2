// login
document.getElementById('login').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  fetch('http://localhost:3030/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Login bem-sucedido!");
        window.location.href = "paginicial.html";
      } else {
        console.log(data.success);
        alert("Usuário ou senha incorretos!");
      }
    }
    );
})
