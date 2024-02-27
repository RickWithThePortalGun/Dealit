import React from "react";
import { StyleSheet, Text } from "react-native";
import AppText from "../AppText";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <Text style={styles.error}>{error}</ Text>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
    alignSelf: "flex-start",
    marginLeft: 10,
  },
});
