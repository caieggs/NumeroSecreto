alert("Bem vindo ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao NS
while (chute != numeroSecreto) {
    chute = prompt("Escolha um numero entre 1 e 100");
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto){
        break;
    } 
    else {
        if (chute > numeroSecreto){
        alert(`O numero secreto é menor que ${chute}`);
        }
        else{
        alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Isso aí! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);



