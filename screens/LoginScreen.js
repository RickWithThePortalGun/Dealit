import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import Screen from "../components/Screen";
import Title from "../components/Title";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
const LoginScreen = () => {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) {
      setLoginFailed(true);
    }
    setLoginFailed(false);
    console.log(result.data);
    logIn(result.data);
    console.log(result.data)
  };
  return (
    <Screen>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Title
        title={`Log in to Dealit!`}
        style={{ fontFamily: "MonaSansBold" }}
      />
      <View style={{ marginHorizontal: 10, flex: 1 }}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error={`Invalid email and/or password.`}
            visible={loginFailed}
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
          <SubmitButton title={`Login`} />
        </AppForm>
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 30,
    alignSelf: "center",
  },
});
