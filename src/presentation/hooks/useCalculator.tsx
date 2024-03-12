import {useRef, useState} from 'react';

enum Operation {
  add,
  subtract,
  multiply,
  division,
}


export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPrevioustNumber] = useState('0');

  const lastOperation = useRef<Operation>();

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
    setPrevioustNumber('0');
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

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPrevioustNumber(number.slice(0, -1));
    } else {
      setPrevioustNumber(number);
    }
    setNumber('0');
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.add;
  };
  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.subtract;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.multiply;
  };
  const divisionOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.division;
  };

  const calculateResult = () => {
    const number1 = Number(number);
    const number2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operation.add:
        setNumber(`${number2 + number1}`);
        break;
      case Operation.subtract:
        setNumber(`${number2 - number1}`);
        break;
      case Operation.multiply:
        setNumber(`${number2 * number1}`);
        break;
      case Operation.division:
        setNumber(`${number2 / number1}`);
        break;
      default:
        throw new Error('Invalid Operation');
    }
    setPrevioustNumber('0');
  };
  return {
    //* Properties
    number,
    previousNumber,

    //* Methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divisionOperation,
    calculateResult,
  };
};
