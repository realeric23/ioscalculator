import {useRef, useState} from 'react';

enum Operators {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [result, setResult] = useState('0');
  const [previousResult, setPreviousResult] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setResult('0');
    setPreviousResult('0');
  };

  const buildNumber = (textnumber: string) => {
    //validation ..
    if (result.includes('.') && textnumber === '.') return;

    if (result.startsWith('0') || result.startsWith('-0')) {
      // .
      if (textnumber === '.') {
        setResult(result + textnumber);

        // evaluate if there is a 0 and a .
      } else if (textnumber === '0' && result.includes('.')) {
        setResult(result + textnumber);

        // evaluate if its different from 0 and it has a .
      } else if (textnumber !== '0' && !result.includes('.')) {
        setResult(textnumber);

        // avoid 000.00
      } else if (textnumber === '0' && !result.includes('.')) {
        setResult(result);
      }
    } else {
      setResult(result + textnumber);
    }
  };

  const positiveNegative = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''));
    } else {
      setResult('-' + result);
    }
  };

  const btnDelete = () => {
    let negative = '';
    let tempNum = result;
    if (result.includes('-')) {
      negative = '-';
      tempNum = result.substr(1);
    }

    if (tempNum.length > 1) {
      setResult(negative + tempNum.slice(0, -1));
    } else {
      setResult('0');
    }
  };

  const changePreNum = () => {
    if (result.endsWith('.')) {
      setPreviousResult(result.slice(0, -1));
    } else {
      setPreviousResult(result);
    }
    setResult('0');
  };

  const divideButton = () => {
    changePreNum();
    lastOperation.current = Operators.divide;
  };

  const multiplyButton = () => {
    changePreNum();
    lastOperation.current = Operators.multiply;
  };

  const substractButton = () => {
    changePreNum();
    lastOperation.current = Operators.substract;
  };

  const addButton = () => {
    changePreNum();
    lastOperation.current = Operators.add;
  };

  const calculate = () => {
    const num1 = Number(result);
    const num2 = Number(previousResult);

    switch (lastOperation.current) {
      case Operators.add:
        setResult(`${num1 + num2}`);
        break;

      case Operators.substract:
        setResult(`${num2 - num1}`);
        break;

      case Operators.multiply:
        setResult(`${num1 * num2}`);
        break;

      case Operators.divide:
        setResult(`${num2 / num1}`);
        break;

      default:
        setResult('0');
        break;
    }
    setPreviousResult('0');
  };

  return {
    result,
    setResult,
    previousResult,
    setPreviousResult,
    multiplyButton,
    substractButton,
    addButton,
    buildNumber,
    calculate,
    clean,
    positiveNegative,
    btnDelete,
    divideButton,
  };
};
