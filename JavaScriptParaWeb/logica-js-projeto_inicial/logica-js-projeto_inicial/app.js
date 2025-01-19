
alert("Boas vindas ao jogo do numero secreto");
let numeroMaximo = prompt('informe numero maximo')
const numeroSecreto = parseInt(Math.random()* numeroMaximo)+1;
let numeroChute
let  tentativas =1;
while (  numeroChute != numeroSecreto) {
    numeroChute = prompt('Diga um numero de 1 a ' + numeroMaximo);
    if (numeroChute == numeroSecreto) {
   break;
    } else {
        if (numeroChute > numeroSecreto) {
            alert(`numero secreto e menor que ${numeroChute}`);
        } else {
            alert(`numero secreto e maior que ${numeroChute}`);
        }
        tentativas++
    }

}

let palavraTentativa= tentativas >1? 'tentativas':'tentativa'
 alert(`acertou o numero e ${numeroSecreto} , com  ${tentativas} ${palavraTentativa}`)







