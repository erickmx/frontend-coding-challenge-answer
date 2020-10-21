import { useState, useEffect } from 'react';

export default function useCurrency(amount, currencyType) {
  const [currency, setCurrency] = useState();

  useEffect(() => {
    const amountString = amount.toString();
    const amountLength = amountString.length;
    let formatedValue = '';

    switch (amountLength) {
      case 0:
        formatedValue = '0.00';
        break;
      case 1:
        formatedValue = `0.0${amount}`;
        break;
      case 2:
        formatedValue = `0.${amount}`;
        break;
      default:
        formatedValue = `${amountString.substring(0, amountLength - 2)}.${amountString.substring(
          amountLength - 2,
        )}`;
    }

    const newValue = Number(formatedValue).toLocaleString('en-US', {
      style: 'currency',
      currency: currencyType,
    });

    setCurrency(newValue);
  }, [amount]);

  return [currency, setCurrency];
}
