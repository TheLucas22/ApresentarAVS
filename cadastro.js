// cadastro.js

// Definição da classe User
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

// Definição da classe UserDatabase
class UserDatabase {
    constructor() {
        // Tenta carregar os usuários do localStorage ou cria uma lista vazia
        this.users = JSON.parse(localStorage.getItem('users')) || [];
    }

    // Adiciona um usuário ao banco de dados
    addUser(user) {
        // Verifica se já existe um usuário com o mesmo email
        if (this.users.some(existingUser => existingUser.email === user.email)) {
            return { success: false, message: "Um usuário com este email já está cadastrado." };
        }
        // Adiciona o novo usuário ao banco de dados
        this.users.push(user);
        // Armazena os dados no localStorage
        localStorage.setItem('users', JSON.stringify(this.users));
        return { success: true, message: "Cadastro realizado com sucesso!" };
    }

    // Retorna todos os usuários cadastrados
    getUsers() {
        return this.users;
    }

    // Método para autenticar um usuário
    authenticate(email, password) {
        const user = this.users.find(existingUser => existingUser.email === email && existingUser.password === password);
        return user !== undefined; // Retorna true se o usuário for encontrado
    }
}

// Criação de uma instância do banco de dados de usuários
const userDatabase = new UserDatabase();

// Manipulador de evento para o formulário de cadastro
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('primero');
    const messageContainer = document.getElementById('message');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            const name = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('senha').value;
            const confirmPassword = document.getElementById('confirmarsenha').value;

            // Verifica se as senhas são iguais
            if (password !== confirmPassword) {
                messageContainer.classList.add('error-message');
                messageContainer.classList.remove('success-message');
                messageContainer.textContent = "As senhas não coincidem. Tente novamente.";
                messageContainer.style.display = 'block'; // Exibe a mensagem de erro
                return;
            }

            // Cria um novo usuário
            const newUser = new User(name, email, password);

            // Adiciona o usuário ao banco de dados
            const result = userDatabase.addUser(newUser);

            // Exibe o feedback baseado no resultado
            if (result.success) {
                messageContainer.classList.add('success-message');
                messageContainer.classList.remove('error-message');
                messageContainer.textContent = result.message;
                messageContainer.style.display = 'block'; // Exibe a mensagem de sucesso
                form.reset(); // Limpa o formulário
                // Opcional: Redirecionar para a página de login ou outra página
                window.location.href = "login.html"; // Descomente esta linha para redirecionar
            } else {
                messageContainer.classList.add('error-message');
                messageContainer.classList.remove('success-message');
                messageContainer.textContent = result.message;
                messageContainer.style.display = 'block'; // Exibe a mensagem de erro
            }
        });
    }
});

// Exporta a classe e a instância do nosso "banco de dados" para ser usado em outros arquivos
export { UserDatabase, userDatabase };
