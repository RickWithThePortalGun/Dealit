import * as MediaLibrary from "expo-media-library";
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import colors from "../../config/colors";

const ImageInput = ({ imageUri, onChangeImage }) => {
  const [mediaLibraryPermissionGranted, setMediaLibraryPermissionGranted] =
    useState(false);
  useEffect(() => {
    const requestMediaLibraryPermission = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setMediaLibraryPermissionGranted(status === "granted");
    };
    requestMediaLibraryPermission();
  }, []);

  useEffect(() => {
    if (mediaLibraryPermissionGranted) {
      console.log("Media Library status = Granted");
    } else if (!mediaLibraryPermissionGranted) {
      console.log("Media Library status = Denied");
    }
  }, [mediaLibraryPermissionGranted]); // Run this effect only when permission state changes

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to remove this image ?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.6,
      });
      onChangeImage(result.assets[0].uri);
    } catch (error) {
      console.log("Error reading image", error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            color={colors.medium}
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
