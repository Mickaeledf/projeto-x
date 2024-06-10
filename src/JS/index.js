
const btnAvancar = document.getElementById("btn-avancar");

let cartaoAtual = 0;

const cartoes = document.querySelectorAll(".cartao");


const btnVoltar = document.getElementById("btn-voltar");

btnAvancar.addEventListener("click", function(){

    if(cartaoAtual === cartoes.length - 1) return;

   esconderCartoes();

    cartaoAtual++;
    
    cartoes[cartaoAtual].classList.add("selecionado");


});

btnVoltar.addEventListener("click", function(){

    if(cartaoAtual === 0) return;

    esconderCartoes();
    
    cartaoAtual--;
    
    cartoes[cartaoAtual].classList.add("selecionado");
});

function esconderCartoes() {
    const cartaoSelecionado = document.querySelector(".selecionado");

    cartaoSelecionado.classList.remove("selecionado");
}
