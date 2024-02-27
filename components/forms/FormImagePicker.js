import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageInputList from "../image/ImageInputList";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name }) => {
  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri != uri)
    );
  };

  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <View style={styles.container}>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default FormImagePicker;

const styles = StyleSheet.create({
  container: {},
});
