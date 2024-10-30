function validarLogin() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (senha === 'unifor') {
        // Redireciona para o perfil
        window.location.href = 'perfil.html';
    } else {
        alert('Senha incorreta. Por favor, tente novamente.');
    }
    return false; // Impede o envio do formulário
}

function exibirMensagem(mensagem) {
    alert(mensagem);
}
