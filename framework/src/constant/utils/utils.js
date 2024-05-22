export function formatPrice(value, opts = {}) {
  const { locale = 'en-US', currency = 'USD', fractionDigits = 0 } = opts;
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    maximumFractionDigits: fractionDigits,
    minimumFractionDigits: fractionDigits,
  });
  return formatter.format(value);
}
