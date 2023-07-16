const readline = require('readline-sync')

const imc = () => {

  const weight = readline.question('Qual seu peso?');
  const height = readline.question('Qual sua altura?');

 const imc = weight / (height * height);
  if(imc < 18.5){
    console.log('Abaixo do Peso');
  } else if (imc > 18.5 && imc < 24.9){
    console.log('Peso Normal');
  } else if (imc > 25 && imc < 29.9){
    console.log('Acima do Peso');
  } else if (imc > 30 && imc < 34.9){
    console.log('Obesidade Grau 1');
  } else if (imc > 35 && imc < 39.9){
    console.log('Obesidade Grau 2');
  } else {
    console.log('Obesidade Graus 3 e 4');
  }

}
imc()
console.log(imc);

module.exports = {
  imc
}

