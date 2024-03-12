import {useState} from 'react';

export const useCalculator = () => {
  const [number, setNumber] = useState('0');

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Point decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      // It is evaluated if it is another zero and there is  point
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      // It is evaluated if it is different from zero, has not point and is the first number
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      // More than one zero at the beginning is avoided
      if (numberString === '0' && !number.includes('.')) return;

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  const clean = () => {
    setNumber('0');
  };

  const deleteOperation = () => {
    let currentSing = '';
    let temporalNumber = number;

    if (number.includes('-')) {
      currentSing = '-';
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSing + temporalNumber.slice(0, -1));
    }
    setNumber('0');
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    return setNumber('-' + number);
  };
  return {
    //* Properties
    number,

    //* Methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
  };
};
