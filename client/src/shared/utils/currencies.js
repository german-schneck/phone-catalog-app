export const formatNumberToPrice = (number, currency) =>
  new Intl.NumberFormat('es', {
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: 'narrowSymbol'
  }).format(number);
