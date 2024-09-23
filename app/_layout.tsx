
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './home';
import ProfileScreen from './profile';

const Drawer = createDrawerNavigator();

export default function Layout() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={HomeScreen} options={{ title: 'Home' }} />
      <Drawer.Screen name="profile" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Drawer.Navigator>
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
