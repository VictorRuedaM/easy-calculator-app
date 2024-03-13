import {useEffect, useRef, useState} from 'react';

enum Operation {
  add = '+',
  subtract = '−',
  multiply = 'x',
  division = '÷',
  percentage = '%',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  const [previousNumber, setPrevioustNumber] = useState('0');

  const lastOperation = useRef<Operation>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstPart = formula.split(' ')[0];
      setFormula(`${firstPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevioustNumber(`${subResult}`);
  }, [formula]);

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
    setFormula('0');
    lastOperation.current = undefined;
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
    calculateResult();
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
  const percentageOperation = () => {
    setLastNumber();
    lastOperation.current = Operation.percentage;
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);
    lastOperation.current = undefined;
    setPrevioustNumber('0');
  };

  const calculateSubResult = (): number => {
    const [value1, operator, value2] = formula.split(' ');
    const number1 = Number(value1);
    const number2 = Number(value2);

    if (isNaN(number2)) return number1;

    switch (operator) {
      case Operation.percentage:
        return (number1 / 100) * number2;
      case Operation.add:
        return number1 + number2;
      case Operation.subtract:
        return number1 - number2;
      case Operation.multiply:
        return number1 * number2;
      case Operation.division:
        return number1 / number2;
      default:
        throw new Error('Invalid Operation');
    }
  };
  return {
    //* Properties
    number,
    previousNumber,
    formula,

    //* Methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divisionOperation,
    percentageOperation,
    calculateResult,
  };
};
