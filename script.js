window.onload = quantasCartas;
const matriz =["bobrossparrot", "explodyparrot","fiestaparrot","metalparrot","revertitparrot","tripletsparrot", "unicornparrot"]
matriz.sort(comparador);
let contador = 0;
let cartaUm;
let cartaDois;

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

function retornaOrigem(cartaUm, cartaDois){
    cartaUm.classList.remove("rotate");
    cartaDois.classList.remove("rotate");
}

function rotacionar(elemento){
    if (elemento.classList.contains("rotate")){
        return; 
    }
    
    // Estou conseguindo selecionar mais do que duas cartas.

    elemento.classList.add("rotate");
    contador++;

    const primeira = cartaUm == undefined;
    if (primeira){
        cartaUm = elemento;
        return;
    }

    cartaDois = elemento;

   const errado = cartaUm.innerHTML != cartaDois.innerHTML;
   if (errado){
       setTimeout(retornaOrigem, 1000, cartaUm, cartaDois);
   }

   cartaUm = undefined;
   cartaDois = undefined;
}