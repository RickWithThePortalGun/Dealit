import React from "react";
import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  else {
    return (
      <LottieView
        source={require("../assets/animations/loader.json")}
        autoPlay
        loop
        style={{ width: 400,height: 400 }}
      />
    );
  }
};

export default ActivityIndicator;
