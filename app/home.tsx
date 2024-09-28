import IconButton from '@/components/buttons/IconButton';
import IconTextButton from '@/components/buttons/IconTextButton';
import StoreCoupon from '@/components/store/StoreCoupon';
import StoreDetails from '@/components/store/StoreDetails';
import StoreMenu from '@/components/store/StoreMenu';
import SwitchOptions from '@/components/switches/SwitchOptions';
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const mockData = [
    {
      coupons: [
        {
          title: 'Up to 25% OFF',
          description:
            'Enjoy being PRo for this benefit at the top restaurants and stores',
          extraInfo: true,
        },
        {
          title: 'Up to 35% OFF',
          description:
            'Enjoy being Super PRo for this benefit at the top restaurants and stores',
          extraInfo: true,
        },
      ],
    },
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

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('@/assets/images/balance-01.jpg')}
        style={styles.bannerImage}
      ></Image>
      <View style={styles.headerButtonsContainer}>
        <View style={styles.topButtonsContainer}>
          <IconButton
            icon={<AntDesign name='arrowleft' size={24} color='black' />}
          />
          <View style={styles.actionButtonsContainer}>
            <IconButton
              icon={<AntDesign name='search1' size={24} color='black' />}
            />
            <IconButton
              icon={<Feather name='share-2' size={24} color='black' />}
            />
            <IconButton
              icon={<AntDesign name='hearto' size={24} color='black' />}
            />
          </View>
        </View>
        <IconTextButton
          icon={<AntDesign name='hearto' size={16} color='black' />}
          text='Create group order'
          bgColor='white'
          borderWidth={2}
          borderColor='gray'
        />
      </View>
      <View style={styles.storeInfoContainer}>
        <View style={styles.storeTitleContainer}>
          <Image
            source={require('@/assets/images/balance-02.jpg')}
            style={styles.storeImage}
          />
          <Text style={styles.storeTitle}>Title Store</Text>
        </View>
        <View style={styles.storeDetailsContainer}>
          <StoreDetails
            title='Delivery'
            icon={<AntDesign name='search1' size={16} color='black' />}
            value='42 mins'
          />
          <StoreDetails
            title='Delivery fee'
            icon={<AntDesign name='search1' size={16} color='black' />}
            value='42 mins'
          />
          <StoreDetails
            title='Rating'
            icon={<AntDesign name='search1' size={16} color='black' />}
            value='4.8'
            extraValueInfo='(641)'
          />
        </View>
        <View style={styles.storeSwitchOptions}>
          <SwitchOptions
            options={[
              { name: 'Delivery', value: 1 },
              { name: 'Pickup', value: 2 },
            ]}
          />
          <IconTextButton
            icon={<AntDesign name='search1' size={16} color='#36d686' />}
            text='See map'
            borderColor='#dee0df'
            borderWidth={1}
            borderRadius={10}
            textColor='#36d686'
            textWeight={600}
          />
        </View>
      </View>
      <ScrollView
        horizontal={true}
        style={styles.couponsScroll}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.couponsContainer}>
          {mockData[0].coupons.map((item, index) => (
            <StoreCoupon
              icon={<FontAwesome6 name='crown' size={16} color='#f7c522' />}
              title={item.title}
              description={item.description}
              extraInfo={item.extraInfo}
              key={index}
            />
          ))}
        </View>
      </ScrollView>

      <View>
        <Text>Options</Text>
        <StoreMenu categories={categoriesData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 300,
    position: 'absolute',
    zIndex: -1,
  },
  headerButtonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 300,
    padding: 10,
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
  },
});
