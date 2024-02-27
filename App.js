import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useState } from "react";
import navigationTheme from "./navigation/navigationTheme";
import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import FeedNavigator from "./navigation/FeedNavigator";
import UiTesting from "./screens/UiTesting";

export default function App() {
  const [fontsLoaded] = useFonts({
    MonaSans: require("./assets/fonts/MonaSans-Regular.ttf"),
    MonaSansBold: require("./assets/fonts/MonaSans-Bold.ttf"),
    MonaSansMedium: require("./assets/fonts/MonaSans-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
    // <UiTesting />
  );
}
