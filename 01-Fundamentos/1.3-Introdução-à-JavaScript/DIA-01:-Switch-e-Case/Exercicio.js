//Primeiro Exercicio
const a = 4;
const b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Segundo Exercicio
const c = 3;
const d = 5;
const e = 6;

if (c > d && c > e) {
    console.log('C é maior')
}
else if (d > c && d > e) {
    console.log('D é maior')
}
else {
    console.log('E é maior')
}

//Terceiro Exercicio
let parametro;
if (parametro > 0) {
    console.log('Positive');
}
else if (parametro < 0) {
    console.log('Negative');
}
else {
    console.log('zero');
}

//Quarto Exercicio
const f = 60
const g = 60
const h = 60

if ((f + g + h) === 180) {
    console.log(true)
}
else {
    console.log(false)
}

//Quinto Exercicio
let peça;

switch (peça) {
    case 'Torre':
        console.log('Move em linhas retas');

        break;

    case 'Cavalo':
        console.log('Move em L')

        break;

    case 'Bispo':
        console.log('Move na diagonal')

        break;

    case 'Rainha':
        console.log('Move em linhas retas e na diagonal')

        break;

    case 'Rei':
        console.log('Move uma casa na diagonal ou em linha reta')

        break;
    case 'Peão':
        console.log('Move uma ou duas casas da pra frente')

        break;

}

//Sexto Exercicio
let porcentagem = 75
if(porcentagem >= 90){
    console.log('A')
}
else if(porcentagem >= 80){
    console.log('B')
}
else if(porcentagem >= 70){
    console.log('C')
}
else if(porcentagem >= 60){
    console.log('D')
}
else if(porcentagem >= 50){
    console.log('E')
}
else{
    console.log('F')
}