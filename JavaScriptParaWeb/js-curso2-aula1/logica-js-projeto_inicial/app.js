function olaMundo(){
    console.log('Ola mundo!')
}
olaMundo()

function OlaPessoa(nome){
console.log(`Ola,${nome}`)
}

OlaPessoa("Emerson")

function dobraNumero(numero){

    return numero*2
}
console.log(dobraNumero(3))


function mediaDosNumero(num1,num2,num3){
return (num1 + num2 + num3)/3
}
console.log(mediaDosNumero(1,2,5))

function maiorNumero(num1,num2){
let numeroMaior = num1 > num2? `${num1} e maior que ${num2}` :  `${num2} e maior que ${num1}`     
return numeroMaior
}

console.log(maiorNumero(1,2))


function muiltplicacao( num){
    return num * num

}

console.log(muiltplicacao(5))

function imc(peso,altura){
let imc = peso / altura*altura
 return imc
}
console.log(imc(95,175))





function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);

  function converteParaDolar(valor){
    return valor * 4.80
  }
  console.log(converteParaDolar(10))



function areaDoRetangulo(a,h){
  return a*h


}
let listaGenerica = [];

let linguagensDeProgramacao =['JavaScript','C','C++', 'Kotlin' , 'Python'];


linguagensDeProgramacao.push('java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');


console.log(linguagensDeProgramacao);
console.log(linguagensDeProgramacao[0])
console.log(linguagensDeProgramacao[1])
console.log(linguagensDeProgramacao[linguagensDeProgramacao.length - 1])

