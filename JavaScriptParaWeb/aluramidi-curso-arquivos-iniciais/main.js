const listaDeTeclas = document.querySelectorAll(".tecla");
//constante que seleciona todas as class teclas,gerando assim uma lista 
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }else{ 
        console.log('Elemento ou seletor invalido nao encontrado')
    }
}//funcao executa o atributo play , e recessebe uma parametro , que e o id da tag audio

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];//pego todas os buttons que contem a class tecla e seleciono por indice usando o contador
    const instrumento = tecla.classList[1];//adiciono as class em uma lista
    const idAudio = `#som_${instrumento}`; // seleciono a segunda parte da class , que o que precisamos para informar
    //dinamicamente qual id deve ser passado para a funcao anonima
    tecla.onclick = function () {// funcao anonima necessaria para que possamos chamar a funcao e passar paremetros 
        tocaSom(`${idAudio}`);
    }
    tecla.onkeydown = function (event) {
        if (event.code === "Space" || event.code === "Enter") {
            tecla.classList.add("ativa")
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove("ativa")

    }
}

document.querySelector('.tecla').forEach(function(tecla){
    tecla.addEventLister('click',(e)=>{
        const elementoClicado = e.target
        if(elementoClicado.classList.contains('ativa')){
            elementoClicado.classList.remove('ativa')
        }else{
            elementoClicado.classList.add('ativa');
        }
        this.classList.add('ativa')
    })
})



// i = 0;//contador
// while (i <= listaDeTeclas.length) { // o while com listaDeteclas pega o tamanho da Lista e faz a repeticao
//     const tecla = listaDeTeclas[i]//pego todas os buttons que contem a class tecla e seleciono por indice usando o contador
//     const instrumento = tecla.classList[1]//adiciono as class em uma lista
//     console.log(tecla)
//     const idAudio = `#som_${instrumento}` // seleciono a segunda parte da class , que o que precisamos para informar
//     //dinamicamente qual id deve ser passado para a funcao anonima
//     tecla.onclick = function () {// funcao anonima necessaria para que possamos chamar a funcao e passar paremetros
//         tocaSom(`${idAudio}`);
//     }
//     i++ //adiciona mas uma no contador ate a lista ser igual ao contador
// }
