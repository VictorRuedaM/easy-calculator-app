import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../config/theme/app-theme';

export const CalculatorScreen = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={globalStyles.rowResult}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>
      <View style={globalStyles.row}>
        <Pressable style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>5</Text>
        </Pressable>
      </View>
    </View>
  );
};
