import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import Screen from "./Screen";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo=useNetInfo();
  if(netInfo.type !== "unknown" && netInfo.isInternetReachable===false){
    return (
      <View style={styles.container}>
        <AppText style={{ color: colors.light }}>No Internet Connection</AppText>
      </View>
    );
  }
  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: "100%",
    position: "absolute",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: Constants.statusBarHeight,
  },
});
