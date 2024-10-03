import { type PropsWithChildren, type ReactNode } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import Animated, {
  AnimatedRef,
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  useSharedValue,
} from 'react-native-reanimated';

const HEADER_HEIGHT = 300;

type Props = PropsWithChildren<{
  // headerImage: ReactElement;
  scrollRef?: AnimatedRef<Animated.ScrollView>;
  header: ReactNode;
  headerBackgroundColor: { dark: string; light: string };
  onScroll?: (scrollOffsetY: number, headerHeight: number) => void;
  position?: { x: number, y: number };
}>;

export default function ParallaxScrollHeaderSticky({ scrollRef, children, header, headerBackgroundColor, position, onScroll }: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scroll = scrollRef || useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scroll);
  const headerHeight = useSharedValue(300);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(scrollOffset.value, [0, position?.y || 0, (position?.y || 0) + HEADER_HEIGHT], [HEADER_HEIGHT, HEADER_HEIGHT, 100], Extrapolation.CLAMP);
    headerHeight.value = height;
    const transformYValue = HEADER_HEIGHT > scrollOffset.value ? HEADER_HEIGHT : scrollOffset.value;

    return {
      height,
      zIndex: 2,
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, transformYValue],
            Extrapolation.CLAMP,
          ),
        },
        // {
        //   scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        // },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16} onScroll={({ nativeEvent }) => onScroll && onScroll(nativeEvent.contentOffset.y, headerHeight.value)} >
        <Animated.View
          style={[styles.header, { backgroundColor: headerBackgroundColor[colorScheme] }, headerAnimatedStyle]}
        >
          {header}
        </Animated.View>
        <View style={styles.content}>{children}</View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 300,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    // padding: 32,
    gap: 16,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
});
