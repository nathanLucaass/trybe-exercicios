console.log('Teste');
import validator from 'validator';

const button = document.getElementById('button');
const resultado = document.getElementById('result')
const selected = document.getElementById('selecionado')
button.addEventListener('click', () => {
    const valorPassado = document.getElementById('objTest');
    const valor = valorPassado.value;
    const selecionado = selected.value
    event.preventDefault();
    if (selecionado === 'Email') {
        console.log(valor);
        if (validator.isEmail(valor)) {
            console.log('deu certo');
            resultado.innerHTML = 'A validação retornou true';
        } else {
            resultado.innerHTML = 'A validação retornou false'
        }
    }
    if (selecionado === 'CreditCard') {
        if (validator.isCreditCard(valor, { creditCard: 'visa' })) {
            resultado.innerHTML = 'A validação retornou true';
        } else {
            resultado.innerHTML = 'A validação retornou false'
        }
    }
})
