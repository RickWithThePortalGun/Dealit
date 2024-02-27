import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagLine}>Sell what you don't need...</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
        style={{marginBottom:3}}
          title={"Login"}
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title={"Sign Up"}
          style={{marginBottom:20}}
          onPress={() => navigation.navigate("Register")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "relative",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
