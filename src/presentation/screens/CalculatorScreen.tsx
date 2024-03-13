import {Text, View} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divisionOperation,
    percentageOperation,
    previousNumber,
    calculateResult,
    formula,
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={globalStyles.rowResult}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={globalStyles.mainResult}>
          {formula}
        </Text>
        {formula === previousNumber ? (
          <Text style={globalStyles.subResult}></Text>
        ) : (
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={globalStyles.subResult}>
            {previousNumber}
          </Text>
        )}
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => clean()}
          label="C"
          color={colors.lightGray}
          colorText={'black'}
        />
        <CalculatorButton
          onPress={() => toggleSign()}
          label="+/-"
          color={colors.lightGray}
          colorText={'black'}
        />
        <CalculatorButton
          onPress={() => deleteOperation()}
          label="&#9003;"
          color={colors.redDelete}
        />
        <CalculatorButton
          onPress={() => divisionOperation()}
          label=" ÷ "
          color={colors.primaryButton}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => buildNumber('7')}
          label="7"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('8')}
          label="8"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('9')}
          label="9"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => multiplyOperation()}
          label="x"
          color={colors.primaryButton}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => buildNumber('4')}
          label="4"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('5')}
          label="5"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('6')}
          label="6"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => subtractOperation()}
          label="−"
          color={colors.primaryButton}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => buildNumber('1')}
          label="1"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('2')}
          label="2"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('3')}
          label="3"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => addOperation()}
          label="+"
          color={colors.primaryButton}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('.')}
          label="."
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => calculateResult()}
          label="="
          color={colors.secundaryButton}
        />
        <CalculatorButton
          onPress={() => percentageOperation()}
          label="%"
          color={colors.primaryButton}
        />
      </View>
    </View>
  );
};
