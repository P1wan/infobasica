// Funções para os Exercícios

// Exercício 1: Preencher o Nome e Data de Nascimento
function validarExercicio1() {
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('data-nascimento').value;
    const resultado = document.getElementById('resultado');

    if (nome && dataNascimento) {
        resultado.innerHTML = `<p>Obrigado, ${nome}. Sua data de nascimento é ${formatarData(dataNascimento)}.</p>`;
    } else {
        resultado.innerHTML = `<p>Por favor, preencha todos os campos.</p>`;
    }
    return false; // Evita o envio do formulário e recarregamento da página
}

function formatarData(data) {
    const partes = data.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

// Exercício 2: Copiar URL de um Vídeo no YouTube
function validarExercicio2() {
    const urlVideo = document.getElementById('url-video').value;
    const videoEmbed = document.getElementById('video-embed');
    const videoId = getYouTubeVideoID(urlVideo);

    if (videoId) {
        videoEmbed.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" 
            frameborder="0" allowfullscreen></iframe>
        `;
    } else {
        videoEmbed.innerHTML = `<p>URL inválida. Por favor, insira um link válido do YouTube.</p>`;
    }
    return false;
}

function getYouTubeVideoID(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Exercício 3: Abrir Calculadora e Inserir Resultados
function validarExercicio3() {
    const resultado1 = parseInt(document.getElementById('resultado1').value);
    const resultado2 = parseInt(document.getElementById('resultado2').value);
    const resultado3 = parseInt(document.getElementById('resultado3').value);
    const resultado = document.getElementById('resultado');
    let mensagens = [];

    if (resultado1 === 20) {
        mensagens.push("Resposta 1 correta!");
    } else {
        mensagens.push("Resposta 1 incorreta. O correto é 20.");
    }

    if (resultado2 === 45) {
        mensagens.push("Resposta 2 correta!");
    } else {
        mensagens.push("Resposta 2 incorreta. O correto é 45.");
    }

    if (resultado3 === 25) {
        mensagens.push("Resposta 3 correta!");
    } else {
        mensagens.push("Resposta 3 incorreta. O correto é 25.");
    }

    resultado.innerHTML = mensagens.join('<br>');
    return false;
}

// Exercício 4: Upload de Arquivo
function validarExercicio4() {
    const arquivo = document.getElementById('arquivo').files[0];
    const resultado = document.getElementById('resultado');

    if (arquivo) {
        if (arquivo.name === 'tarefa.txt') {
            const reader = new FileReader();
            reader.onload = function(e) {
                const conteudo = e.target.result.trim();
                if (conteudo === 'Concluí a tarefa 4') {
                    resultado.innerHTML = '<p>Arquivo correto! Parabéns.</p>';
                } else {
                    resultado.innerHTML = '<p>O conteúdo do arquivo está incorreto.</p>';
                }
            };
            reader.readAsText(arquivo);
        } else {
            resultado.innerHTML = '<p>O nome do arquivo está incorreto.</p>';
        }
    } else {
        resultado.innerHTML = '<p>Por favor, selecione um arquivo.</p>';
    }
}

// Exercício 5: Clique em um Botão e Leia a Explicação
function exibirExplicacaoBotao() {
    const explicacao = document.getElementById('explicacao-botao');
    explicacao.innerHTML = `
        <p>Botões são elementos interativos que executam uma ação quando clicados. Eles podem enviar formulários, iniciar downloads ou desencadear outras funcionalidades em um site.</p>
    `;
}

// Exercício 6: Selecionar Links Corretos
let acertosEx6 = 0;
let tentativasEx6 = 0;

function elementoClicado(elemento) {
    tentativasEx6++;
    if (elemento.tagName === 'A') {
        acertosEx6++;
        elemento.style.color = 'green';
        elemento.onclick = null;
    } else {
        elemento.style.color = 'red';
        elemento.onclick = null;
    }

    if (tentativasEx6 === 5) {
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<p>Você acertou ${acertosEx6} de 3 links possíveis.</p>`;
    }
}

// Exercício 7: Completar um Formulário
function validarExercicio7() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const resultado = document.getElementById('resultado');

    if (nome && email && mensagem) {
        resultado.innerHTML = `<p>Formulário enviado com sucesso! Obrigado pelo seu contato, ${nome}.</p>`;
    } else {
        resultado.innerHTML = `<p>Por favor, preencha todos os campos.</p>`;
    }
    return false;
}

// Exercício 8: Identificar Propagandas
let propagandasMarcadas = [];

function marcarPropaganda(elemento) {
    elemento.classList.toggle('selecionado');
    if (propagandasMarcadas.includes(elemento)) {
        propagandasMarcadas = propagandasMarcadas.filter(el => el !== elemento);
    } else {
        propagandasMarcadas.push(elemento);
    }
}

function verificarPropagandas() {
    let acertos = 0;
    propagandasMarcadas.forEach(elemento => {
        if (elemento.getAttribute('data-propaganda') === 'true') {
            acertos++;
            elemento.style.backgroundColor = 'green';
        } else {
            elemento.style.backgroundColor = 'red';
        }
    });
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>Você identificou corretamente ${acertos} propagandas.</p>`;
}

// Exercício 9: Escolher a Página Inicial
function validarExercicio9() {
    const paginaInicial = document.querySelector('input[name="pagina-inicial"]:checked').value;
    const motivo = document.getElementById('motivo').value.trim();
    const resultado = document.getElementById('resultado');

    if (motivo) {
        resultado.innerHTML = `<p>Você escolheu "${paginaInicial}" como sua página inicial.</p><p>Motivo: ${motivo}</p>`;
    } else {
        resultado.innerHTML = `<p>Por favor, explique o motivo da sua escolha.</p>`;
    }
    return false;
}

// Exercício 10: Pesquisa sobre Assuntos do Cotidiano
function gerarPergunta() {
    const perguntas = [
        "Como faço para pedir uma segunda via da conta da Cagece?",
        "Onde devo ir para registrar um Boletim de Ocorrência (B.O.) em Fortaleza?",
        "Como posso agendar um atendimento no Detran Ceará?",
        "Onde encontrar informações sobre cursos gratuitos em Fortaleza?",
        "Como consultar meu CPF gratuitamente?",
        "Onde fazer um teste rápido de COVID-19 em Fortaleza?",
        "Como tirar a segunda via da carteira de identidade?",
        "Onde solicitar auxílio para pagamento da conta de energia em Fortaleza?",
        "Como acessar os serviços da Receita Federal para declaração de imposto?",
        "Onde consigo consultar o saldo do meu FGTS?",
        "Como emitir a carteira de estudante em Fortaleza?",
        "Onde solicitar atendimento médico de emergência no SUS em Fortaleza?",
        "Como agendar uma consulta no posto de saúde mais próximo?",
        "Onde tirar a carteira de trabalho digital?",
        "Como faço para transferir a titularidade de uma conta de água ou luz?",
        "Onde registrar uma reclamação no PROCON Fortaleza?",
        "Como solicitar o Bolsa Família?",
        "Onde fazer a matrícula escolar na rede pública?",
        "Como denunciar uma árvore que está oferecendo risco de queda?",
        "Como posso solicitar a coleta de resíduos volumosos na minha rua?"
    ];

    const indice = Math.floor(Math.random() * perguntas.length);
    const pergunta = perguntas[indice];
    document.getElementById('pergunta').innerHTML = `<p><strong>${pergunta}</strong></p>`;
}

function validarExercicio10() {
    const resposta = document.getElementById('resposta').value.trim();
    const resultado = document.getElementById('resultado');

    if (resposta) {
        resultado.innerHTML = `<p>Obrigado por sua resposta!</p>`;
    } else {
        resultado.innerHTML = `<p>Por favor, insira sua resposta.</p>`;
    }
    return false;
}

// Chama a função para gerar a pergunta quando a página carrega
window.onload = function() {
    if (typeof gerarPergunta === 'function') {
        gerarPergunta();
    }
};
