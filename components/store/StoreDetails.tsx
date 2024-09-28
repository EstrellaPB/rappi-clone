import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
        <Text>{title}</Text>
        {icon}
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>{value}</Text>
        <Text>{extraValueInfo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    gap: 4,
  },
  valueContainer: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center'
  },
  valueText: {
    fontWeight: 'bold'
  },
});
