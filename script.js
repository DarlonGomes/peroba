window.onload = quantasCartas;
const matriz =["bobrossparrot", "explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot", "unicornparrot"]
let contador = 0;

function comparador() { 
	return Math.random() - 0.5; 
}

function quantasCartas(){
    let quantidade = prompt("Bem vindo! Com quantas cartas você quer jogar?")
    quantidade = Number(quantidade)
    while(quantidade % 2 != 0 || quantidade > 14 || quantidade < 4){
        quantidade = prompt("Digite um número par entre 4 e 14.")
    }
    geradorCartas(quantidade);
}


function rotacionar(elemento){
    elemento.classList.add("rotate");
    contador++;
}

function geradorCartas(indice){
    const repositorio = [];
    repositorio.sort(comparador);
    const corpo = document.querySelector("main");

    for(i = 0; i < indice / 2; i++){
        repositorio.push(matriz[i]);
        repositorio.push(matriz[i]);
    }
    repositorio.sort(comparador);
    
    for (i = 0; i < indice; i++){
        corpo.innerHTML += `
        <div class="card" onclick="rotacionar(this)">
        <div class="front-face face" >
        <img src="image/front.png" />
        </div>
        <div class="back-face face" >
        <img src="image/${repositorio[i]}.gif" />
        </div>
        </div>
        `
    }
}
