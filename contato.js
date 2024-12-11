document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio normal do formulário

    // Obtendo os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Armazenando os dados no localStorage
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push({ name, email, message });
    localStorage.setItem('contacts', JSON.stringify(contacts));

    // Exibindo feedback ao usuário
    document.getElementById('feedback').textContent = 'Sua mensagem foi enviada com sucesso!';

    // Limpando o formulário após envio
    document.getElementById('contactForm').reset();
});
