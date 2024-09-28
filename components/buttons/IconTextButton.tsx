import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  icon: ReactNode;
  borderWidth?: number;
  bgColor?: string;
  text: string;
  borderColor?: string;
  borderRadius?: number;
  textColor?: string;
  textWeight?: any;
}
export default function IconTextButton({
  borderWidth,
  borderRadius,
  bgColor,
  borderColor,
  icon,
  text,
  textColor,
  textWeight,
}: Props) {
  const customStyles = {
    borderWidth: borderWidth || 0,
    backgroundColor: bgColor || 'white',
    borderColor: borderColor || 'black',
    borderRadius: borderRadius || 25,
  };

  const textCustomStyles = {
    color: textColor || 'black',
    fontWeight: textWeight || 400,
  };

  return (
    <Pressable onPress={() => console.log('icon text button pressed')}>
      <View style={[styles.buttonContainer, customStyles]}>
        {icon}
        <Text style={textCustomStyles}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'lightgray',
    // borderRadius: 25,
    alignSelf: 'flex-start',
    gap: 6,
  },
});
