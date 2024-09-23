import IconButton from '@/components/buttons/IconButton';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View
      style={styles.mainContainer}
    >
      <Image
        source={require('@/assets/images/balance-01.jpg')}
        style={styles.bannerImage}
      ></Image>
      <View style={styles.containerButtons}>
        <IconButton icon={<AntDesign name="arrowleft" size={28} color="black" />} />
        <View style={styles.containerActionButtons}>
          <IconButton icon={<AntDesign name="arrowleft" size={28} color="black" />} />
          <IconButton icon={<AntDesign name="arrowleft" size={28} color="black" />} />
          <IconButton icon={<AntDesign name="arrowleft" size={28} color="black" />} />
        </View>
      </View>




      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative'
  },
  bannerImage: {
    width: '100%',
    height: 300,
    position: 'absolute',
    zIndex: -1
  },
  containerActionButtons: {
    flexDirection: 'row'
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10
  }
});
