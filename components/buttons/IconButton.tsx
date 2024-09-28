import { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

interface Props {
  icon: ReactNode;
  border?: number;
  bgColor?: string;
  borderColor?: string;
}
export default function IconButton({
  icon,
  border,
  bgColor,
  borderColor,
}: Props) {
  return (
    <Pressable onPress={() => console.log('icon  button pressed')}>
      <View
        style={[
          styles.buttonContainer,
          {
            borderWidth: border || 0,
            backgroundColor: bgColor || 'white',
            borderColor: borderColor || 'black',
          },
        ]}
      >
        {icon}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderRadius: 50,
  },
});
