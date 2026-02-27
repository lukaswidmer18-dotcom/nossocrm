export type CurrencyCode = 'BRL' | 'USD';

export function formatCurrency(value: number, currency: CurrencyCode = 'BRL'): string {
  if (currency === 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
