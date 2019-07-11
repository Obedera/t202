// while(condição){
//     codigo a ser repetido enquanto a condição verdadeira
// }
let signos = ['Aries','Touro','Gemeos','Cancer','Leão','Virgem','Libra','Escorpião','Sargitário','Capricornio','Aquario','Peixes'];
console.log(signos);
let contador=0;
console.log("Exemplo com while");
console.log(" ");
while(contador<12){
    console.log(signos[contador]);
    // contador += 1;
    contador++;
}

// Exemplo especifico de while
// let idade = Number(prompt("Digite a sua idade"));
// while (isNaN(idade)){
//     alert("Idade Incorreta");
//     idade =Number(prompt("Digite a sua idade"));
// }

// for(inicio; fim; passo){

// }
console.log(" ");
console.log("Exemplo com for");
console.log(" ");
for(let cont=0;cont < signos.length; cont++){
    console.log(signos[cont]);
}

console.log(" ");
// o in assume o valor posição
for(let i in signos){
    console.log(signos[i]);
}

console.log(" ");
//  o of assume o valor dentro da posição
for(let signo of signos){
    console.log(signo);
}




