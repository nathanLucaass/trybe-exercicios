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
let porcentagem;
if (porcentagem >= 90) {
    console.log('A')
}
else if (porcentagem >= 80) {
    console.log('B')
}
else if (porcentagem >= 70) {
    console.log('C')
}
else if (porcentagem >= 60) {
    console.log('D')
}
else if (porcentagem >= 50) {
    console.log('E')
}
else {
    console.log('F')

}

//Há um par entre nós

//Primeiro Exercicio
const i = 2;
const k = 4;
const l = 5;
if ((i % 2) === 0) {
    console.log(true);
}
else if ((k % 2) === 0) {
    console.log(true);
}
else if ((i % 2) === 0) {
    console.log(true);
}
else {
    console.log(false);
}

//Segundo Exercicio
if ((i % 2) !== 0) {
    console.log(true);
}
else if ((k % 2) !== 0) {
    console.log(true);
}
else if ((i % 2) !== 0) {
    console.log(true);
}
else {
    console.log(false);
}

//Terceiro Exercicio

const custo = 100
const valorVenda = 150
const impostoSobreCusto = 0.2;
if (custo < 0 || valorVenda < 0) {
    console.log('Valor de entrada menor que zero')
} else {
    const valorCustoTotal = custo + (custo * impostoSobreCusto);
    const lucroPorProduto = valorVenda - valorCustoTotal;
    const lucroTotal = lucroPorProduto * 1000;
    console.log(lucroTotal)
}

//Quarto Exercicio
let salario = 3000;
let inss;
let impostoDeRenda;
let salarioInss;

if (salario <= 1556.94) {
    salarioInss = (salario * 0.92);
    console.log(salarioInss)
}

else if (salario >= 1556.95 && salario <= 2594.92) {
    salarioInss = (salario * 0.9);
    console.log(salarioInss)
}

else if (salario >= 2594.93 && salario <= 5189.82) {
    salarioInss = (salario * 0.89);
    console.log(salarioInss)
}
else {
    salarioInss = (salario - 570.88);
    console.log(salarioInss)
}
let salarioLiquido;

if (salarioInss > 1903.99 && salarioInss < 2826.65) {
    salarioLiquido = ((salarioInss * 0.925) + 142.80);
    console.log(salarioLiquido)
}

else if (salarioInss > 2826.66 && salarioInss < 3751.05) {
    salarioLiquido = ((salarioInss * 0.85) + 354.80);
    console.log(salarioLiquido)
}

else if (salarioInss > 3751.06 && salarioInss < 4664.68) {
    salarioLiquido = ((salarioInss * 0.775) + 636.13);
    console.log(salarioLiquido)
}

else if (salarioInss > 4664.68) {
    salarioLiquido = ((salarioInss * 0.725) + 868.36);
    console.log(salarioLiquido)
}

else{
    salarioLiquido = salarioInss;
}