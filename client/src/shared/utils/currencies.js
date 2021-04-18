export const formatNumberToPrice = (number, currency) =>
  new Intl.NumberFormat('es', {
    style: 'currency',
    currency: 'EUR'
  }).format(number);
