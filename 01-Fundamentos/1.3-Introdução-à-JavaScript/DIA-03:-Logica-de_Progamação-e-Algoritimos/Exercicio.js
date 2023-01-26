//Primeiro Exercicio
let fatorial = (10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)
console.log(fatorial)

//Segundo Exercicio
let word = 'tryber';
let inverted = ''

for (let index = word.length - 1; index >= 0; index -= 1) {
    inverted += word[index]
}
console.log(inverted)

//Terceiro Exercicio
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra1 = ''
let menorPalavra1 = ''

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra1.length)
        maiorPalavra1 = array[index];

}

console.log(maiorPalavra1)

//Quarto Exericio
function primeNumber(num) {
    for (var divisor = 2; divisor < num; divisor += 1)
        if (num % divisor == 0) return false;
    return true;
}

var determinadoNumero = 50;
let maiorNumero = 0

for (var index = 2; index < determinadoNumero; index += 1)
    if (primeNumber(index)) {
        if(maiorNumero < index){
            maiorNumero = index;
        }
    }

    console.log(maiorNumero)
