import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { ArrowLeftIcon, HearthIcon, SearchIcon, ShareIcon } from "../Icons";
import IconButton from "../buttons/IconButton";
import IconTextButton from "../buttons/IconTextButton";

export default function StoreHeader() {
  return (<ImageBackground style={{ height: 300 }} source={require('@/assets/images/balance-01.jpg')}>
    <View style={{ height: 300, padding: 16, justifyContent: 'space-between' }}>
      <View style={styles.topButtonsContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <IconButton icon={<ArrowLeftIcon />} />
          <Text style={{ fontWeight: '700', fontSize: 24 }}>Store</Text>
        </View>
        <View style={styles.actionButtonsContainer}>
          <IconButton icon={<SearchIcon />} />
          <IconButton icon={<ShareIcon />} />
          <IconButton icon={<HearthIcon />} />
        </View>
      </View>
      <IconTextButton
        icon={<HearthIcon size={16} />}
        text="Create group order"
        bgColor="white"
        borderWidth={2}
        borderColor="gray"
      />
    </View>
  </ImageBackground>);
}


const styles = StyleSheet.create({
  actionButtonsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
})