import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types';
export default function TabBar({ state, descriptors, navigation }) {
  const icons = {
    Home: (props) => <AntDesign name="home" size={24} color={inactiveColor} {...props} />,
    Settings: (props) => <AntDesign name="setting" size={24} color={inactiveColor} {...props} />
  }
  const primaryColor = '#0891b2';
  const inactiveColor = '#737373';
  return (
    <View style={styles.tabBar}>
      {state.routes.map(
        (
          route: { key: string | number; name: any; params: any },
          index: any
        ) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
          if (['_sitemap', '+not-found'].includes(route.name)) return null;
          console.log(route.name)
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.name}
              style={styles.tabBarItem}
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              {
                icons[route.name]({
                  color: isFocused ? primaryColor : inactiveColor
                })
              }
              <Text style={{ color: isFocused ? primaryColor : inactiveColor }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    // position: 'absolute',
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    // marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});
