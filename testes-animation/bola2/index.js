var porcent = document.querySelector('.porcent') //pegando a classe 'porcent'
var count = 4;
var loading = document.querySelector('.loading') //fazendo para que no if use, e la vai ser feito que quando chegue em 100% ele delete o loading
var load = setInterval(animate, 50);

function animate(){
    if(count == 100){
        loading.parentElement.removeChild(loading); //ta pegando o loading e que quando chegasse a 100% ele removesse os filhos do elemento loading
        clearInterval(load); //quando chega a 100 ele está parando a animação
    }
    else{
        count = count + 1;
        porcent.textContent = count + '%'  //pega diretamente o texto de dentro da classe porcent e está alterando o valor dela para x%
    }
}