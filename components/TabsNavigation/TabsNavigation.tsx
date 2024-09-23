import DataDetailsScreen from '@/app/(details)/data';
import ExtraDetailsScreen from '@/app/(details)/extra';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

import ParallaxScrollViewCustom from '../ParallaxScrollViewCustom';
import TabBar from './TabBar';
const Tabs = createBottomTabNavigator();

const TabsNavigation = () => {

  return (
    <ParallaxScrollViewCustom
      headerImage={
        <Image source={require('@/assets/images/balance-01.jpg')} style={styles.bannerImage}></Image>
      }
      headerBackgroundColor={{ light: '#fff', dark: '#fff' }}
      backHeader={
        <Image source={require('@/assets/images/balance-01.jpg')} style={styles.bannerImageBack}></Image>
      }
    >
      <Tabs.Navigator
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}
        sceneContainerStyle={{ position: 'relative' }}
      >
        <Tabs.Screen
          name='Home'
          component={DataDetailsScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name='home' color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='Settings'
          component={ExtraDetailsScreen}
          options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name='cog' color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </ParallaxScrollViewCustom>
  );
};

export default TabsNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 1000,
  },
  bannerImage: {
    top: 0,
    width: '100%',
    height: 250,
  },
  bannerImageBack: {
    top: 0,
    width: '100%',
    height: 100,
  },
});
