

//Exercicio 1
let num = 0 ;
for (let index = 1; index <= 50; index +=1) {
    num = num +index;
}
console.log(num)

//Exercicio 2
let numeros = 0;
for (let index = 2; index <= 150; index +=1) {
    if (index % 3 ===0) {
    numeros +=1
}
}
if (numeros === 50) {
    console.log('Mensagem secreta')
}


//Exercicio 3
let escolhas = ["Pedra", "Papel", "Tesoura"];
let player1 = escolhas[Math.floor(Math.random() * escolhas.length)];
let player2 = escolhas[Math.floor(Math.random() * escolhas.length)];

if((player1 === "Pedra" && player2 === "Papel") || (player1 === "Papel" && player2 === "Tesoura") || (player1 === "Tesoura" && player2 === "Pedra")){
    console.log("Player 2 won");
}
else if (player1 === player2) {
    console.log("A Ties")
} else {
    console.log("Player 1 won")
}
console.log(player1)
console.log(player2)

//Exercicio 4
let idade;
if(idade < 18){
    console.log('A pessoa é menor de idade')
}
else{
    console.log('A pessoa é maior de idade')
}

//Bonus
let idade = Math.floor(Math.random() *30);
console.log(idade)
console.log(idade >= 18 ? 'Maior de idade' : 'Menor de idade')

//Exercicio 5
let Carolzita = 28
let Flavio = 31
let Noel = 95
if(Carolzita < Flavio && Carolzita < Noel){
    console.log('Carolzita é a mais nova')
}
else if(Noel < Carolzita && Noel < Flavio){
    console.log('Noel é a mais novo')
}
else{
    console.log('Flavio é o mais novo')
}


