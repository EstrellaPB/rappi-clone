import IconTextButton from '@/components/buttons/IconTextButton';
import { CrowIcon, SearchIcon } from '@/components/Icons';
import ParallaxScrollHeaderSticky from '@/components/parallax/ParallaxScrollHeaderSticky';
import StoreCoupon from '@/components/store/StoreCoupon';
import StoreDetails from '@/components/store/StoreDetails';
import StoreHeader from '@/components/store/StoreHeader';
import StoreMenu from '@/components/store/StoreMenu';
import SwitchOptions from '@/components/switches/SwitchOptions';
import React, { useState } from 'react';
import { Image, LayoutChangeEvent, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  useSharedValue,
} from 'react-native-reanimated';

export default function HomeScreen() {
  // const scrollOffsetY = useSharedValue(0);
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffsetY = useScrollViewOffset(scrollRef);
  const headerHeight = useSharedValue(300);
  const mockData = [
    {
      coupons: [
        {
          title: 'Up to 25% OFF',
          description: 'Enjoy being PRo for this benefit at the top restaurants and stores',
          extraInfo: true,
        },
        {
          title: 'Up to 35% OFF',
          description: 'Enjoy being Super PRo for this benefit at the top restaurants and stores',
          extraInfo: true,
        },
      ],
    },
  ];
  const swtichOptions = [
    { name: 'Delivery', value: 1 },
    { name: 'Pickup', value: 2 },
  ];
  const categoriesData = [
    {
      id: '1',
      name: 'All',
      dishes: [
        'Pizza Margherita',
        'Pepperoni Pizza',
        'BBQ Chicken Pizza',
        'Cheeseburger',
        'Veggie Burger',
        'Chicken Burger',
        'California Roll',
        'Spicy Tuna Roll',
        'Tempura Roll',
        'Chocolate Cake',
        'Cheesecake',
        'Ice Cream',
        'Caesar Salad',
        'Greek Salad',
        'Lemonade',
        'Iced Tea',
      ],
    },
    {
      id: '2',
      name: 'Pizza',
      dishes: ['Pizza Margherita', 'Pepperoni Pizza', 'BBQ Chicken Pizza'],
    },
    {
      id: '3',
      name: 'Burgers',
      dishes: ['Cheeseburger', 'Veggie Burger', 'Chicken Burger'],
    },
    {
      id: '4',
      name: 'Sushi',
      dishes: ['California Roll', 'Spicy Tuna Roll', 'Tempura Roll'],
    },
    {
      id: '5',
      name: 'Desserts',
      dishes: ['Chocolate Cake', 'Cheesecake', 'Ice Cream'],
    },
    { id: '6', name: 'Salads', dishes: ['Caesar Salad', 'Greek Salad'] },
    { id: '7', name: 'Drinks', dishes: ['Lemonade', 'Iced Tea'] },
  ];
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleLayout = (event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setPosition({ x, y });
    console.log(`Posición: x=${x}, y=${y}, width=${width}, height=${height}`);
  };
  const tabsAnimatedStyle = useAnimatedStyle(() => {
    const limit = headerHeight.value > scrollOffsetY.value ? headerHeight.value : scrollOffsetY.value;
    const transformYValue = scrollOffsetY.value - position.y;
    // console.log(scrollOffsetY.value, headerHeight.value, limit, transformYValue);
    return {
      transform: [
        {
          translateY: interpolate(scrollOffsetY.value, [0, position.y, limit], [0, 0, transformYValue], Extrapolation.CLAMP),
        },
      ],
    };
  });

  return (
    <ParallaxScrollHeaderSticky
      scrollRef={scrollRef}
      headerBackgroundColor={{ light: '#fff', dark: '#fff' }}
      header={<StoreHeader />}
      onScroll={(_offset, height) => {
        headerHeight.value = height;
      }}
      position={position}
    >
      <View style={{ width: '100%', backgroundColor: 'white' }}>
        <View style={styles.storeInfoContainer}>
          <View style={styles.storeTitleContainer}>
            <Image source={require('@/assets/images/balance-02.jpg')} style={styles.storeImage} />
            <Text style={styles.storeTitle}>Title Store</Text>
          </View>
          <View style={styles.storeDetailsContainer}>
            <StoreDetails title="Delivery" icon={<SearchIcon size={16} />} value="42 mins" />
            <StoreDetails title="Delivery fee" icon={<SearchIcon size={16} />} value="42 mins" />
            <StoreDetails title="Rating" icon={<SearchIcon size={16} />} value="4.8" extraValueInfo="(641)" />
          </View>
          <View style={styles.storeSwitchOptions}>
            <SwitchOptions options={swtichOptions} />
            <IconTextButton
              icon={<SearchIcon size={16} color="#36d686" />}
              text="See map"
              borderColor="#dee0df"
              borderWidth={1}
              borderRadius={10}
              textColor="#36d686"
              textWeight={600}
            />
          </View>
        </View>
        <ScrollView horizontal={true} style={styles.couponsScroll} showsHorizontalScrollIndicator={false}>
          <View style={styles.couponsContainer}>
            {mockData[0].coupons.map((item, index) => (
              <StoreCoupon
                icon={<CrowIcon size={16} />}
                title={item.title}
                description={item.description}
                extraInfo={item.extraInfo}
                key={index}
              />
            ))}
          </View>
        </ScrollView>
        <StoreMenu categories={categoriesData} tabStyle={tabsAnimatedStyle} onLayout={handleLayout} />
      </View>
    </ParallaxScrollHeaderSticky>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    // position: 'relative',
    backgroundColor: 'white',
    width: '100%',
  },
  headerButtonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  storeInfoContainer: { width: '100%', padding: 16 },
  storeTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 8,
    alignItems: 'center',
    paddingBottom: 16,
    zIndex: -1,
  },
  storeTitle: {
    fontSize: 24,
    fontWeight: '900',
  },
  storeDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: '#dee0df',
    marginBottom: 20,
  },
  storeImage: { height: 30, width: 30, borderRadius: 50 },
  storeSwitchOptions: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },

  couponsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 85,
    gap: 16,
    paddingHorizontal: 16,
  },

  couponsScroll: {
    maxHeight: 85,
    height: 85,
  },
});
