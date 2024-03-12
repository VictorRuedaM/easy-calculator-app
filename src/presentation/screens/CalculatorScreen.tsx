import {Text, View} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={globalStyles.rowResult}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          color={colors.lightGray}
          colorText={'black'}
        />
        <CalculatorButton
          label="+/-"
          color={colors.lightGray}
          colorText={'black'}
        />
        <CalculatorButton
          label="del"
          color={colors.lightGray}
          colorText={'black'}
        />
        <CalculatorButton label=" ÷ " color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="7" color={colors.darkGray} />
        <CalculatorButton label="8" color={colors.darkGray} />
        <CalculatorButton label="9" color={colors.darkGray} />
        <CalculatorButton label="x" color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="4" color={colors.darkGray} />
        <CalculatorButton label="5" color={colors.darkGray} />
        <CalculatorButton label="6" color={colors.darkGray} />
        <CalculatorButton label="−" color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="1" color={colors.darkGray} />
        <CalculatorButton label="2" color={colors.darkGray} />
        <CalculatorButton label="3" color={colors.darkGray} />
        <CalculatorButton label="+" color={colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="0" color={colors.darkGray} dobleSize={true} />
        <CalculatorButton label="." color={colors.darkGray} />
        <CalculatorButton label="=" color={colors.orange} />
      </View>
    </View>
  );
};
