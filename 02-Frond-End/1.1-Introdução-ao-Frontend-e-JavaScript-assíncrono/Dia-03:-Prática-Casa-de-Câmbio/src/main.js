// Seleção dos elementos da pagina
const button = document.getElementById('button');
const quadrado = document.getElementById('allCurrency');
const referencia = document.getElementById('referencia');
button.addEventListener('click', async () => {
    // Faz com que a pagina não recarregue
    event.preventDefault();
    quadrado.innerHTML = '';
    // Chamada da API
    const currency = document.getElementById('currency');
    const baseCurrency = currency.value.toUpperCase();
    const test = `https://api.exchangerate.host/latest?base=${baseCurrency}`;
    const response = await fetch(test);
    const character = await response.json();
    const moedas = character.rates;

    // Verificação
    if (!baseCurrency) {
    // eslint-disable-next-line no-undef
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Insira uma moeda!'
        });
    } else if (!moedas[baseCurrency]) {
    // eslint-disable-next-line no-undef
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Essa não é uma moeda valida!'
        });
    } else { // Resultado Final
        referencia.innerHTML = `Valores referentes a 1 ${baseCurrency}`;
        Object.entries(moedas).forEach(([key, value]) => {
            const coin = document.createElement('div');
            coin.classList.add('coin');
            coin.innerHTML = `&nbsp;🪙 ${key}: &nbsp; <span id="valor">${value.toFixed(2)}</span>`
            quadrado.appendChild(coin);
        });
    }
});
