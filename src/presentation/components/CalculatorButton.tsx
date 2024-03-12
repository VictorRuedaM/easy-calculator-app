import {Pressable, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  colorText?: string;
  dobleSize?: boolean;
}
export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  colorText = 'white',
  dobleSize = false,
}: Props) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.6 : 1,
        width: dobleSize ? 180 : 80,
      })}>
      <Text
        style={{
          ...globalStyles.buttonText,
          color: colorText,
        }}>
        {label}
      </Text>
    </Pressable>
  );
};
