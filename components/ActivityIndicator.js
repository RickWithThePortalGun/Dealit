import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";

const ActivityIndicator = ({ visible = false, text }) => {
  if (!visible) return null;
  else {
    return (
      <View style={styles.container}>
        <LottieView
          source={require("../assets/animations/loader.json")}
          autoPlay
          loop
          style={{ width: 400, height: 400 }}
        />
        <Text>{text}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    height:"100%",
    width:"100%",
    position:"absolute",
    flex:1,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
  },
});
export default ActivityIndicator;
