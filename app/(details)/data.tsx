import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function DataDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Data Details</Text>
        {/* <Link href="/home">View Index</Link> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
