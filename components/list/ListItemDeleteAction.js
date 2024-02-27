import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import colors from "../../config/colors";
const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <View>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.light}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    height:"100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
