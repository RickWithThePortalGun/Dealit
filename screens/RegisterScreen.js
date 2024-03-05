import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import Title from "../components/Title";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(30).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
const RegisterScreen = () => {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleRegister = async (userInfo) => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) {
        console.log(result.data.error);
        setErrorMessage(result.data.error);
        setError(true);
      } else {
        setErrorMessage("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }
    setError(false);
    setErrorMessage();
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };
  return (
    <Screen>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Title
        title={`Sign Up to Dealit!`}
        style={{ fontFamily: "MonaSansBold" }}
      />
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ErrorMessage visible={error} error={errorMessage} />
      </View>
      <View style={{ marginHorizontal: 10, alignItems: "center" }}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleRegister}
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
        <ActivityIndicator text={`Signing you Up!`} visible={registerApi.loading || loginApi.loading} />
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
