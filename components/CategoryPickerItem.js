import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "./Icon";
import AppText from "./AppText";

const CategoryPickerItem = ({ onPress, item }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          style={{ marginBottom: 6 }}
          name={item.icon}
          size={60}
        />
      </TouchableOpacity>

      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 17,
    width: "100%",
  },
});
