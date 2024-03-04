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
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator visible={getListingsApi.loading} />
      </View>
      {getListingsApi.error && !getListingsApi.loading ? (
        <>
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <AppText>Couldn't retrieve Listings</AppText>
            <AppButton
              title="Retry"
              style={{ marginHorizontal: 20, width: "50%" }}
              color="black"
              onPress={getListingsApi.request}
            />
          </View>
        </>
      ) : (
        ""
      )}
      {!getListingsApi.loading && (
        <FlatList
          refreshing={refreshing}
          onRefresh={getListingsApi.request}
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
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
