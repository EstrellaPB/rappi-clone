import { useEffect, useState, type PropsWithChildren, type ReactElement } from 'react';
import { DeviceEventEmitter, StyleSheet, useColorScheme, View } from 'react-native';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';

const HEADER_HEIGHT = 200;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
  backHeader: React.ReactNode
}>;

export default function ParallaxScrollViewCustom({
  children,
  backHeader,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [scrollReEnabled, setScrollReEnabled] = useState(true);
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  // Cambiar la posición del scroll programáticamente
  const changeScrollPosition = (yPosition: number) => {
    scrollRef.current?.scrollTo({ y: yPosition, animated: false, }); // Desplaza a la posición Y deseada
  };
  // Escuchar el evento emitido desde el componente hijo
  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener('scrollTab.event', (data) => {
      console.log('⌛❤', data.enableParentScroll)
      setScrollReEnabled(data.enableParentScroll);
    });

    return () => {
      subscription.remove(); // Limpiar el listener cuando el componente se desmonta
    };
  }, []);

  const handleScrollLimit = (currentOffset: number) => {
    console.log('parent offset:', currentOffset)
    if (scrollReEnabled && !scrollEnabled) {
      console.log('real activation')
      changeScrollPosition(195);
      console.log('parent offset after reactiviting:', currentOffset)
    }
    else if (currentOffset >= 200) {
      console.log('atorado')
      runOnJS(setScrollEnabled)(false); // Deshabilita el scroll si pasamos los 250px
      DeviceEventEmitter.emit('scrollScreen.event', { enableChildScroll: true });

    } else if (currentOffset < 200) {
      console.log('no atorado')
      runOnJS(setScrollEnabled)(true); // Habilita el scroll si bajamos de los 250px
      DeviceEventEmitter.emit('scrollScreen.event', { enableChildScroll: false });
    }
  };

  // Reacciona cuando scrollOffset cambia
  useAnimatedReaction(
    () => scrollOffset.value,
    (currentOffset) => {
      runOnJS(handleScrollLimit)(currentOffset); // Llama a handleScrollLimit con runOnJS
    },
    [scrollEnabled, scrollReEnabled] // Dependencia del estado de scrollEnabled
  );

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [0, 0, HEADER_HEIGHT],
            [0, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        // {
        //   scale: interpolate(
        //     scrollOffset.value,
        //     [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
        //     [2, 1, 1]
        //   ),
        // },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={10} onScroll={() => console.log('parent scroll')} scrollEnabled={scrollEnabled} bounces={false} alwaysBounceVertical={false} bouncesZoom={false} alwaysBounceHorizontal={false}>
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}

        >
          {headerImage}
        </Animated.View>
        <View style={{ zIndex: -1 }}>{backHeader}</View>
        <ThemedView style={styles.content}>
          {children}
        </ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   height: 700,
  //   width: '100%',
  //   margin: 0,
  //   padding: 0,
  // },
  // header: {
  //   height: 250,
  //   // overflow: 'hidden',
  //   width: '100%',
  // },
  // content: {
  //   flexGrow: 1,
  //   height: 700,
  //   overflow: 'scroll',
  //   zIndex: 1,
  // },

  container: {
    // flex: 1,
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  header: {
    height: 250,
    width: '100%',
  },
  content: {
    flexGrow: 1,
    height: 600,
  },
});
