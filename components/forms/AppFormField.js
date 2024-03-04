import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const AppFormField = ({ name, style, icon, ...otherProps }) => {
  const { setFieldTouched, setFieldValue, values, errors, touched } =
    useFormikContext();
  return (
    <>
      <View style={style}>
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          icon={icon}
          onChangeText={(text) => setFieldValue(name, text)}
          value={values[name]}
          {...otherProps}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
