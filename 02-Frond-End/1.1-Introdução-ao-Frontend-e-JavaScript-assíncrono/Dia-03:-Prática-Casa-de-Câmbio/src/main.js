const button = document.getElementById('button')
const quadrado = document.getElementById('caixa')

// Lista de moedas
const data = ['AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTC', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLF', 'CLP', 'CNH', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'SSP', 'STD', 'STN', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VES', 'VND', 'VUV', 'WST', 'XAF', 'XAG', 'XAU', 'XCD', 'XDR', 'XOF', 'XPD', 'XPF', 'XPT', 'YER', 'ZAR', 'ZMW', 'ZWL']

// Limpa a tabela antes de mostrar o novo resultado
const cleaner = () => {
  while (quadrado.firstChild) {
    quadrado.removeChild(quadrado.firstChild)
  }
}

button.addEventListener('click', async () => {
  // Faz com que a pagina não recarregue
  event.preventDefault()

  // Chamada da API
  const currency = document.getElementById('currency')
  const baseCurrency = currency.value
  const test = `https://api.exchangerate.host/latest?base=${baseCurrency}`
  const response = await fetch(test)
  const character = await response.json()
  const moedas = character.rates

  // Verificação
  if (baseCurrency === '') {
    // eslint-disable-next-line no-undef
    Swal.fire({
      icon: 'error',
      title: 'Erro',
      text: 'Insira uma moeda!'
    })
  } else if (!data.some((moeda) => moeda === currency.value)) {
    // eslint-disable-next-line no-undef
    Swal.fire({
      icon: 'error',
      title: 'Erro',
      text: 'Essa não é uma moeda valida!'
    })
  } else { // Resultado Final
    cleaner()
    Object.entries(moedas).forEach(([key, value]) => {
      const coin = document.createElement('div')
      coin.classList.add('coin')
      coin.innerHTML = `💲${key}: <span id="valor">${value}</span>`
      quadrado.appendChild(coin)
    })
  }
})
