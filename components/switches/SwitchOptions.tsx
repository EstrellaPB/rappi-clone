import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  options: Array<{ name: string; value: number }>;
  selectedOptBg?: string;
  selectedOptNameColor?: string;
}
export default function SwitchOptions({
  options,
  selectedOptBg,
  selectedOptNameColor,
}: Props) {
  const [selectedOption, setSelectedOption] = useState(1);
  const customSelectedOptContainer = {
    backgroundColor: selectedOptBg || 'white',
  };
  const customSelectedOptName = {
    color: selectedOptNameColor || '#36d686',
  };
  const optionStyles = (value: number) => {
    let optStyles = {
      container: styles.optionContainer,
      name: styles.optionName,
    };
    if (value === selectedOption) {
      optStyles = {
        container: { ...optStyles.container, ...customSelectedOptContainer },
        name: { ...optStyles.name, ...customSelectedOptName },
      };
    }
    return optStyles;
  };

  return (
    <View style={styles.container}>
      {options.map((opt) => (
        <Pressable onPress={() => setSelectedOption(opt.value)} key={opt.value}>
          <View style={optionStyles(opt.value).container}>
            <Text style={optionStyles(opt.value).name}>{opt.name}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cfcfcf',
    flexDirection: 'row',
    gap: 4,
    padding: 4,
    borderRadius: 25,
  },
  optionContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 50,
  },
  optionName: {
    fontWeight: '600',
  },
});
