let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//Primeiro Exercicio
for (index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

//Segundo Exercicio
let soma = 0;

for (index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
console.log(soma);

//Terceiro Exercicio
let media;
media = (soma / numbers.length);
console.log(media);

//Quarto Exercicio
if (media > 20) {
    console.log('valor maior que 20');
}

else {
    console.log('valor manor que 20')
}

//Quinto Exercicio
let maior = 0
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) {
        maior = numbers[index];
    }
}
console.log(maior);

//Sexto Exercicio
let impares = 0;
for (index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 2) !== 0) {
        impares += 1;
    }
}
if (impares === 0) {
    console.log('nenhum valor impar encontrado');
}
else {
    console.log(impares);

}

//Setimo Exercicio

let menor = 1000
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menor) {
        menor = numbers[index];
    }
}
console.log(menor);
//Tirar Duvida sobre a variavel

//Oitavo Exercicio
let oitavo = [];
for (let index = 0; index <= 25; index += 1) {
    oitavo.push(index);
}


//Nono Exercicio
for (index = 0; index < oitavo.length; index += 1) {
    console.log(oitavo[index] / 2);
}
