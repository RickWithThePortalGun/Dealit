import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import listingsApi from "../api/listings";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import ActivityIndicator from "../components/ActivityIndicator";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setError(false);
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);
    if (!response.ok) {
      console.log("error connnecting to server");
      return setError(true);
    }
    setError(false);
    setListings(response.data);
    console.log(listings);
  };
  return (
    <Screen style={styles.screen}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator visible={loading} />
      </View>
      {error && (
        <>
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <AppText>Couldn't retrieve Listings</AppText>
            <AppButton
              title="Retry"
              style={{ marginHorizontal: 20, width: "50%" }}
              onPress={loadListings}
            />
          </View>
        </>
      )}
      {!loading && (
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
