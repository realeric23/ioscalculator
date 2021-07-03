import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/AppTheme';

export const CalculatorScreen = () => {
  const {
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
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousResult !== '0' && (
        <Text style={styles.smallResult}>{previousResult}</Text>
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>

      {/* Button Row */}
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={btnDelete} />
        <ButtonCalc text="/" color="#FF9427" action={divideButton} />
      </View>

      {/* Button Row */}
      <View style={styles.row}>
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="#FF9427" action={multiplyButton} />
      </View>

      {/* Button Row */}
      <View style={styles.row}>
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="#FF9427" action={substractButton} />
      </View>

      {/* Button Row */}
      <View style={styles.row}>
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#FF9427" action={addButton} />
      </View>

      {/* Button Row */}
      <View style={styles.row}>
        <ButtonCalc text="0" widthB action={buildNumber} />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
