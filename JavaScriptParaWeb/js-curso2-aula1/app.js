let tentativas = 1;
let listaNumeroSorteados = []
let numeroLimite = 10

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero  secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}
exibirMensagemInicial();
let numeroSecreto = gerarNumeroAleatorio();
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagensTentativas = `voce descobriu o numero com ${tentativas} ${palavraTentativas}`
        exibirTextoNaTela('p', mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Numero e secreto e menor! ');
        } else {
            exibirTextoNaTela('p', 'Numero e secreto e maior! ');

        }
        tentativas++;
        limparCampo()
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumeroSorteados.length;
    if (quantidadeDeElementosNaLista === numeroLimite) {
        listaNumeroSorteados = []
    }

    if (listaNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados)
        return numeroEscolhido;
    }




}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
}

function reiniciaJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}