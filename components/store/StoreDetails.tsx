import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../ThemedText';

interface Props {
  title: string;
  icon: ReactNode;
  value: string;
  extraValueInfo?: string;
}
export default function StoreDetails({ title, icon, value, extraValueInfo = '' }: Props) {
  return (
    <View>
      <View style={styles.title}>
        <ThemedText>{title}</ThemedText>
        {icon}
      </View>
      <View style={styles.valueContainer}>
        <ThemedText style={styles.valueText}>{value}</ThemedText>
        <ThemedText>{extraValueInfo}</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  valueContainer: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
  },
  valueText: {
    fontWeight: 'bold',
  },
});
