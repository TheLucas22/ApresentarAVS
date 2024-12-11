// Importa o banco de dados de usuários (UserDatabase) e a instância (userDatabase) do cadastro.js
import { userDatabase } from './cadastro.js';

// Função com o listener para lidar com o envio do formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const messageContainer = document.getElementById('message'); // Referência à div da mensagem

    // Autentica o usuário
    if (userDatabase.authenticate(email, password)) {
        messageContainer.classList.add('success-message');
        messageContainer.classList.remove('error-message');
        messageContainer.textContent = "Login realizado com sucesso!";
        messageContainer.style.display = 'block'; 

        // Opcional: Redirecionar para a página inicial ou área restrita
        window.location.href = "index1.html"; // Descomente esta linha para redirecionar
    } else {
        messageContainer.classList.add('error-message');
        messageContainer.classList.remove('success-message');
        messageContainer.textContent = "Email ou senha incorretos. Tente novamente.";
        messageContainer.style.display = 'block'; 
    }
});
