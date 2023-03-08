// Crie uma função sum que, dado um número ilimitado de parâmetros,
//  retorna a soma desses parâmetros.
//   Ao chamar a função dessa forma : sum(4,5,6), o número 15 deve ser retornado.

const sum1 = (...paramiters) => {
    let result = 0
    paramiters.forEach((paramiter) => {
        result += paramiter
    })
    return result
}
console.log(sum1(4, 5, 6));

const sum2 = (...paramiters) => paramiters.reduce ((acc, curr) => acc + curr, 0);
console.log(sum2(4, 5, 6));