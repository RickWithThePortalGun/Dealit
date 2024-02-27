import React from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Title from "../components/Title";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(30).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
const RegisterScreen = () => {
  return (
    <Screen>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
    <Title title={`Sign Up to Dealit!`} style={{fontFamily:"MonaSansBold"}}/>
      <View style={{ marginHorizontal: 10, alignItems: "center" }}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
            <AppFormField
            name={`name`}
            icon={`id-card`}
            autoCapitalize="none"
            autoCorrect
            placeholder="Name"
          />
          <AppFormField
            name={`email`}
            icon={`user`}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            name={`password`}
            icon={`lock`}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            placeholder="Password"
            textContentType="password"
          />
          <SubmitButton title={`Sign Up`} />
        </AppForm>
      </View>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 30,
    alignSelf: "center",
  },
});
