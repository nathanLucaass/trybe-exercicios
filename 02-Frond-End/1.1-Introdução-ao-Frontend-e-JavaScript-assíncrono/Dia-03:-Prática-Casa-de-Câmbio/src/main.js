const button = document.getElementById('button');
const quadrado = document.getElementById('caixa')
button.addEventListener('click', async () =>{
    event.preventDefault();
    const currency = document.getElementById('currency')
    const baseCurrency = currency.value;
    const test = `https://api.exchangerate.host/latest?base=${baseCurrency}`;
    const response = await fetch(test);
    const character = await response.json();
    const moedas = character.rates;

    while (quadrado.firstChild) {
        quadrado.removeChild(quadrado.firstChild);
    }    

Object.entries(moedas).forEach(([key, value]) =>{
    console.log(`${key}: ${value}`);
    const coin = document.createElement('div');
    coin.classList.add('coin');
    coin. innerText = `${key} ${value}`;
    quadrado.appendChild(coin);
})
    console.log(moedas);
});
