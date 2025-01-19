// function Texto(){
//     const paragrafo = document.createElement("p")
//     paragrafo.textContent = "Ola Mundo!"
//     document.body.appendChild(paragrafo)
// }
// const botao =  document.getElementById("botao")
// botao.onclick = Texto

const primeiroNumero = document.querySelector('.primeiro_numero').value;
const segundoNumero = document.querySelector('.Segundo_numero').value;

function FuncaoSomar(n1, n2) {
    let soma = Number(n1) + Number(n2)
    console.log(soma)
    return soma
}


const botaoSomar = document.querySelector('.btnSomar')
botaoSomar.onclick = () => {
    const valor1 = primeiroNumero.value;
    const valor2 = segundoNumero.value;
    FuncaoSomar(valor1,valor2)
}






