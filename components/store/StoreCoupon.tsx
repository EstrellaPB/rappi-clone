import { Entypo } from '@expo/vector-icons';
import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  icon: ReactNode;
  title: string | ReactNode;
  description: string | ReactNode;
  extraInfo?: boolean;
}
export default function StoreCoupon({
  icon,
  title,
  description,
  extraInfo = false,
}: Props) {
  return (
    <Pressable onPress={() => console.log('coupon selected')}>
      <View style={styles.container}>
        <View style={styles.body}>
          {icon}
          <View style={styles.info}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.descriptionText}>{description}</Text>
          </View>
        </View>
        {extraInfo && <Entypo name='chevron-right' size={24} color='black' />}
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
