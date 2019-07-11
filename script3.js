let material;
let qtdDegraus = 0;
let degrau;

material='#';
degrau = material;

while(qtdDegraus<6){
    console.log(material);
    material = degrau+material;
    qtdDegraus++;
}


let qtdDegrausUser = Number(prompt("Digite a quantidade de degraus"));
material = prompt("Digite o material");
degrau=material;


for(qtdDegraus=0;qtdDegraus<qtdDegrausUser;qtdDegraus++){
    console.log(material);
    material = degrau+material;
}