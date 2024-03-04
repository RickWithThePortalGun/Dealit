import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons,FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles"

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && <FontAwesome5 solid name={icon} size={20} color={colors.medium} style={styles.icon}/>}
      <TextInput placeholderTextColor={defaultStyles.colors.medium} {...otherProps} style={[{flex:1},defaultStyles.text]} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textinput: {
    color:colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  icon:{
    marginRight:10
  } 
});
