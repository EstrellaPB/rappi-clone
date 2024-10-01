import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './home';
import ProfileScreen from './profile';
import { useThemeColor } from '@/hooks/useThemeColor';

const Drawer = createDrawerNavigator();

export default function Layout() {
  const colorTint = useThemeColor({}, 'tint');

  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: 'Home',
            drawerHideStatusBarOnOpen: true,
            headerStyle: { backgroundColor: colorTint },
            headerTitleStyle: { color: '#000000' },
          }}
        />
        <Drawer.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            drawerHideStatusBarOnOpen: true,
            headerStyle: { backgroundColor: colorTint },
            headerTitleStyle: { color: '#000000' },
          }}
        />
      </Drawer.Navigator>
    </>
  );
}
// export default function RootLayout() {
//   return (
//     <Stack>
//       {/* <Stack.Screen name='index' /> */}
//       {/* <Stack.Screen
//         name='(details)'
//         options={{ headerShown: false }}
//       /> */}
//       <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
//     </Stack>
//   );
// }
