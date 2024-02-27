import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Icon = ({
  name,
  size = 40,
  backgroundColor = "black",
  style,
  iconColor = "#fff",
}) => {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <MaterialCommunityIcons
        name={name}
        size={size * 0.5}
        backgroundColor={backgroundColor}
        color={iconColor}
      />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({});
