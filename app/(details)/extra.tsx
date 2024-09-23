import { useEffect, useState } from 'react';
import {
  DeviceEventEmitter,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
export default function ExtraDetailsScreen() {
  const [scrollReEnabled, setScrollReEnabled] = useState(true);


  const handleScroll = (event: any) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    console.log(yOffset);
    if (yOffset <= 0) {
      console.log('activating parent');
      DeviceEventEmitter.emit('scrollTab.event', { enableParentScroll: true });
    } else {
      DeviceEventEmitter.emit('scrollTab.event', { enableParentScroll: false });
    }
    // setScrollY(yOffset);
  };

  // Escuchar el evento emitido desde el componente hijo
  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener('scrollScreen.event', (data) => {
      console.log('⌛', data.enableChildScroll)
      setScrollReEnabled(data.enableChildScroll);
    });

    return () => {
      subscription.remove(); // Limpiar el listener cuando el componente se desmonta
    };
  }, []);


  return (
    <View style={styles.container}>
      <ScrollView
        scrollEnabled={scrollReEnabled}
        scrollEventThrottle={10}
        alwaysBounceVertical={false}
        bouncesZoom={false}
        bounces={false}
        style={styles.scrollView}
        onScroll={(e) => {
          console.log('internal scroll');
          handleScroll(e);
        }}
      >
        {/* <View style={styles.content}> */}
        <View style={styles.imgContainer}>
          <Text>Extra Details</Text>
          <Image
            source={require('@/assets/images/balance-02.jpg')}
            style={styles.imageCard}
          ></Image>
          <Image
            source={require('@/assets/images/balance-03.jpg')}
            style={styles.imageCard}
          ></Image>
          <Image
            source={require('@/assets/images/balance-04.jpg')}
            style={styles.imageCard}
          ></Image>
        </View>
        {/* </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: '100%',
  },

  imageCard: {
    height: 200,
    width: 100,
    borderRadius: 10,
  },
  container: {
    flexGrow: 1,
    height: 500,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },

  imgContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingTop: 100,
    paddingBottom: 60,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
