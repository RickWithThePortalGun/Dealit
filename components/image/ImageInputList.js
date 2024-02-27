import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const ref = useRef();
  return (
    <View>
    <ScrollView
      ref={ref}
      showsHorizontalScrollIndicator={false}
      horizontal
      onContentSizeChange={() => ref.current.scrollToEnd()}
    >
      <View style={styles.container}>
        {imageUris.map((uri, index) => (
          <View key={uri} style={styles.image}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
              key={index}
            />
          </View>
        ))}
        <View style={styles.image}>
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
  image: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
});
