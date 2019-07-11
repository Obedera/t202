// if(condição){
//     comandos
// }
// else{
//     comandos
// }

let user = prompt("Digite seu usuario");
if(user=="joao"){
    let senha = prompt("Digite sua senha");
    if(senha=="aviao123"){
    alert("Login efetuado com sucesso");
    }
    else{
        alert("Senha incorreta");
    }
}
else{
    alert("Usuario incorreto");
}