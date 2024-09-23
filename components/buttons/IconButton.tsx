import { ReactNode } from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface Props {
  icon: ReactNode
}
export default function IconButton({ icon }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable >
        {icon}
        {/* <AntDesign name="arrowleft" size={28} color="black" /> */}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
  }
})