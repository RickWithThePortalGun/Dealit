import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../config/colors";

const ListItemSeparator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
    </View>
  );
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  separator: {
    width: "81%",
    height: 2,

    backgroundColor: colors.light,
  },
});
