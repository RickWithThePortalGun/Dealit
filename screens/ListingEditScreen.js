import React from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import Title from "../components/Title";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "An image is required").label("Images"),
});
const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "table-chair" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "tshirt-v" },
  {
    label: "Electronics",
    value: 3,
    backgroundColor: "purple",
    icon: "monitor-screenshot",
  },
  { label: "Cars", value: 4, backgroundColor: "cyan", icon: "car" },
  { label: "Games", value: 5, backgroundColor: "black", icon: "ticket" },
  { label: "Sport", value: 6, backgroundColor: "blue", icon: "football" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "blue",
    icon: "headphones",
  },
  { label: "Books", value: 8, backgroundColor: "pink", icon: "book" },
  { label: "Others", value: 9, backgroundColor: "magenta", icon: "tab" },
];
const ListingEditScreen = () => {
  const location=useLocation();
  return (
    <Screen>
      <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Title title={`Post a property`} />
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
            images: [],
          }}
          onSubmit={() => console.log(location)}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="images" />
          <AppFormField
            icon={`tag`}
            maxLength={255}
            name="title"
            placeholder="Title"
          />
          <View style={styles.priceCategoryContainer}>
            <AppFormField
              icon={`dollar-sign`}
              style={{ width: "35%", marginRight: 5, flexDirection: "column" }}
              maxLength={8}
              keyboardType="numeric"
              name="price"
              placeholder="Price"
            />
            <AppFormPicker
              PickerItemComponent={CategoryPickerItem}
              items={categories}
              style={{ width: "60%" }}
              icon={`apps`}
              name="category"
              numberOfColumns={3}
              placeholder="Category"
            />
          </View>
          <AppFormField
            maxLength={255}
            multiline
            icon={`audio-description`}
            numberofLines={3}
            name="description"
            placeholder="Description"
          />
          <View style={{ marginTop: 30 }}>
            <SubmitButton title={`Submit`} />
          </View>
        </AppForm>
      </View>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
    marginTop: 2,
    marginBottom: 15,
    alignSelf: "center",
  },
  priceCategoryContainer: {
    flexDirection: "row",
  },
});
