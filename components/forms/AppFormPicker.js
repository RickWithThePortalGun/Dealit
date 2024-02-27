import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
const AppFormPicker = ({ items, numberOfColumns, style, PickerItemComponent, name, placeholder, icon }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <View style={style}>
        <AppPicker
          items={items}
          numberOfColumns={numberOfColumns  }
          PickerItemComponent={PickerItemComponent}
          placeholder={placeholder}
          selectedItem={values[name]}
          icon={icon}
          onSelectItem={(item) => setFieldValue(name, item)}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
