import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({ title, style }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical:10,
    paddingBottom:15
    
  },
  text:{
    fontSize:20,
    fontFamily:"MonaSans"
  }
});
