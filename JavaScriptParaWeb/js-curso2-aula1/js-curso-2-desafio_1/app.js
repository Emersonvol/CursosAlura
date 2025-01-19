let titulo = document.querySelector('h1');
titulo.innerHTML= 'Hora do Desafio';



function mensagemNoConsole(){
console.log('O botão foi clicado');

}

function exebirAlerta(){
alert('Eu amo JS');

}

function funcaoPrompt(){
let nomeDaCidade =prompt("Digite o nome da cidade do Brasil");

alert(`Estive em ${nomeDaCidade} e lembrei de voce`);

}

function somar(){
    let numero1 = parseInt(prompt('informe um numero:'));
    let numero2 = parseInt(prompt('informe outro  numero:'));

    let soma = numero1 + numero2
    
    alert(soma)

}