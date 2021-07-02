import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/AppTheme';

export const CalculatorScreen = () => {
  const [result, setResult] = useState('0');
  const [previousResult, setPreviousResult] = useState('0');

  const clean = () => {
    setResult('0');
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

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{previousResult}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>

      {/* Button Row */}
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={clean} />
        <ButtonCalc text="/" color="#FF9427" action={clean} />
      </View>

      {/* Button Row */}
      <View style={styles.row}>
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="#FF9427" action={clean} />
      </View>

      {/* Button Row */}
      <View style={styles.row}>
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="#FF9427" action={clean} />
      </View>

      {/* Button Row */}
      <View style={styles.row}>
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#FF9427" action={clean} />
      </View>

      {/* Button Row */}
      <View style={styles.row}>
        <ButtonCalc text="0" widthB action={buildNumber} />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#FF9427" action={clean} />
      </View>
    </View>
  );
};
