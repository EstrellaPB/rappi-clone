import { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ChevronRight } from '../Icons';

interface Props {
  icon: ReactNode;
  title: string | ReactNode;
  description: string | ReactNode;
  extraInfo?: boolean;
}
export default function StoreCoupon({ icon, title, description, extraInfo = false }: Props) {
  return (
    <Pressable onPress={() => console.log('coupon selected')}>
      <View style={styles.container}>
        <View style={styles.body}>
          {icon}
          <View style={styles.info}>
            <ThemedText style={styles.titleText}>{title}</ThemedText>
            <ThemedText style={styles.descriptionText}>{description}</ThemedText>
          </View>
        </View>
        {extraInfo && <ChevronRight />}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#c0c2c1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 350,
    padding: 16,
    height: 85,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  info: {
    gap: 2,
  },
  titleText: {
    fontWeight: '900',
  },
  descriptionText: {
    width: 240,
    fontSize: 12,
  },
});
