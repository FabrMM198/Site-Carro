//Variáveis e funções

let formulario = document.querySelector('.formulario'); //Ir no hatml buscar o elemento, a classe "formulario"
let formularioTeste = document.querySelector('.formulario-teste'); //Ir no hatml buscar o elemento, a classe "formulario-teste"
let formularioSaibaMais = document.querySelector('.formulario-saibamais'); //Ir no hatml buscar o elemento, a classe "formulario-saibamais"
let mascara = document.querySelector('.mascara'); //Ir no hatml buscar o elemento, a classe "mascara"

console.log (formulario); //Exibe o elemento selecionado no console
console.log (formularioTeste); //Exibe o elemento selecionado no console
console.log (formularioSaibaMais); //Exibe o elemento selecionado no console

function abrirFormulario() { //Função para abrir o formulário
    formulario.style.left = '50%'; //Define a posição do formulário no eixo horizontal, centralizando-o na tela
    mascara.style.display = 'block'; //Exibe a máscara de fundo
}

function fecharFormulario() { //Função para fechar o formulário
    formulario.style.left = '-50%'; //Define a posição do formulário no eixo horizontal, movendo-o para fora da tela
    mascara.style.display = 'none'; //Esconde a máscara de fundo
}

function abrirFormularioTeste() { //Função para abrir o formulário de teste
    formularioTeste.style.left = '50%'; //Define a posição do formulário no eixo horizontal, centralizando-o na tela
    mascara.style.display = 'block'; //Exibe a máscara de fundo
}

function fecharFormularioTeste() { //Função para fechar o formulário de teste
    formularioTeste.style.left = '-50%'; //Define a posição do formulário no eixo horizontal, movendo-o para fora da tela
    mascara.style.display = 'none'; //Esconde a máscara de fundo
}

function abrirsaibamais() { //Função para abrir o formulário de saiba mais
    formularioSaibaMais.style.left = '50%'; //Define a posição do formulário no eixo horizontal, centralizando-o na tela
    mascara.style.display = 'block'; //Exibe a máscara de fundo
}

function fecharsaibamais() { //Função para fechar o formulário de saiba mais
    formularioSaibaMais.style.left = '-50%'; //Define a posição do formulário no eixo horizontal, movendo-o para fora da tela
    mascara.style.display = 'none'; //Esconde a máscara de fundo
}
