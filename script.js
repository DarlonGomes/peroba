window.onload = quantasCartas;

function quantasCartas(){
    let quantidade = prompt("Bem vindo! Com quantas cartas você quer jogar?")
    quantidade = Number(quantidade)
    while(quantidade % 2 != 0 || quantidade > 14 || quantidade < 4){
        quantidade = prompt("Digite um número par entre 4 e 14.")
    }
    return quantidade
}

function distribuir(){
    quantidade = quantasCartas();
    geradorCartas(quantidade)
}

function geradorCartas(indice){
    const repositorio = [];
    for(i = 0; i < indice / 2; i++){
        repositorio.push[i]
        repositorio.push[i]
    }
    
}