import { StyleSheet, Text, View, Modal } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

const UploadScreen = ({ progress = 0, visible = false, onDone }) => {
  return (
    <Modal visible={visible} >
      <View style={styles.container}>
        {progress<1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            onAnimationFinish={onDone}
            loop={false}
            style={styles.animation}
            source={require("../assets/animations/done.json")}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animation: {
    width:"25%",
    height:"25%"
  },
});
