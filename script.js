function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Todos os campos são obrigatórios!");
        return false;
    }
    return true;
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const message = urlParams.get('message');

    if (name && email && message) {
        document.getElementById('response').innerHTML = `
            <h2>Obrigado pelo contato, ${name}!</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong> ${message}</p>
        `;
    }
};
