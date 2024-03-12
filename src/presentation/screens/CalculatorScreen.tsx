import {Text, View} from 'react-native';
import {globalStyles} from '../../config/theme/app-theme';

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={globalStyles.rowResult}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>
    </View>
  );
};
