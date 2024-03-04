import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing Auth TOKEN: ", error);
  }
};

const getToken = async () => {
  try {
    const authToken = await SecureStore.getItemAsync(key);
    return authToken;
  } catch (error) {
    console.log("Error, Couldn't get token: ", error);
  }
};

const getUser = async () => {
  const token=await getToken();
  return (token) ? jwtDecode(token): null
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Unable to delete token: ", error);
  }
};

export default {
  getUser,
  storeToken,
  removeToken,
  getToken
};
