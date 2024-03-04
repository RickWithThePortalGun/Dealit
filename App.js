import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import OfflineNotice from "./components/OfflineNotice";
import AppNavigator from "./navigation/AppNavigator";
import navigationTheme from "./navigation/navigationTheme";
import AuthNavigator from "./navigation/AuthNavigator";
import AuthContext from "./auth/context";
import authStorage from "./auth/storage";
import "core-js/stable/atob";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [user, setUser] = useState();
  const restoreUser = async () => {
    try {
      // Prevent splash screen auto-hide during initialization
      await SplashScreen.preventAutoHideAsync();
      const user = await authStorage.getUser();
      if (user) {
        setUser(user);
      }
    } catch (error) {
      console.error("Error restoring user:", error);
    } finally {
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    restoreUser();
  }, []); // Run restoreToken only on initial render

  const [fontsLoaded] = useFonts({
    MonaSans: require("./assets/fonts/MonaSans-Regular.ttf"),
    MonaSansBold: require("./assets/fonts/MonaSans-Bold.ttf"),
    MonaSansMedium: require("./assets/fonts/MonaSans-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
    // <UiTesting />
  );
}
