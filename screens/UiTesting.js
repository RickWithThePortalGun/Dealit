import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../config/colors";
import { FontAwesome } from "@expo/vector-icons";

const UiTesting = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={require("../assets/couch.jpg")} />
        <View
          style={{
            zIndex: 1,
            padding: 10,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            top: "13%",
            left: "3%",
          }}
        >
          <FontAwesome name="chevron-left" color={colors.medium} size={20} />
        </View>
        <View
          style={{
            zIndex: 1,
            padding: 10,
            borderRadius: "50%",
            position: "absolute",
            top: "13%",
            right: "3%",
          }}
        >
          <FontAwesome name="share" color={colors.medium} size={20} />
        </View>
      </View>
      <View style={styles.descView}>
        <View style={styles.descheading}>
          <Text style={styles.heading}>Eco Rustic Style Bali Couch</Text>
          <Text style={styles.location}>Ubud, Bali, Indonesia</Text>
          <Text style={styles.price}>$6,420</Text>
        </View>
        <View style={styles.specIconscontainer}>
          <View
            style={{
              borderColor: "grey",
              borderWidth: 1,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              height: 40,
              borderRadius: 10,
              marginLeft: 10,
              width: 80,
              backgroundColor: colors.dark,
            }}
          >
            <FontAwesome name="bed" color={colors.light} />
            <Text style={{ paddingLeft: 10, color: colors.light }}>4 Beds</Text>
          </View>
          <View
            style={{
              borderColor: "grey",
              borderWidth: 1,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              height: 40,
              borderRadius: 10,
              marginLeft: 10,
              width: 80,
              backgroundColor: colors.dark,
            }}
          >
            <FontAwesome name="bath" color={colors.light} />
            <Text style={{ paddingLeft: 10, color: colors.light }}>
              2 Baths
            </Text>
          </View>
          <View
            style={{
              borderColor: "grey",
              borderWidth: 1,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              height: 40,
              borderRadius: 10,
              marginLeft: 10,
              width: 80,
              backgroundColor: colors.dark,
            }}
          >
            <FontAwesome
              name="globe"
              style={{ paddingLeft: 5 }}
              color={colors.light}
            />
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text style={{ paddingLeft: 5, color: colors.light }}>
                1,200m
              </Text>
              <Text style={{ fontSize: 10, color: colors.light }}>3</Text>
            </View>
          </View>
          <View
            style={{
              borderColor: "grey",
              borderWidth: 1,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              height: 40,
              borderRadius: 10,
              marginLeft: 10,
              width: 80,
              backgroundColor: colors.dark,
            }}
          >
            <FontAwesome name="calendar" color={colors.light} />
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Text style={{ paddingLeft: 8, color: colors.light }}>2023</Text>
            </View>
          </View>
        </View>
        <View style={styles.propertydesc}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "MonaSansBold",
              color: colors.light,
            }}
          >
            Property description
          </Text>
          <Text
            style={{ color: colors.light, paddingTop: 10, lineHeight: 18 }}
            numberOfLines={3}
          >
            Where rustic charm meets the heartbeat of the city. Nestled in the
            vibrant center, this enchanting couch offers a unique blend of urban
            convenience and timeless tranquility. As...
          </Text>
        </View>
        <View style={styles.propertydesc}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "MonaSansBold",
              color: colors.light,
            }}
          >
            Owner
          </Text>
          <View style={styles.ownerdesc}>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 5,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  marginVertical: 10,
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <Image
                  source={require("../assets/aiimg.jpg")}
                  style={{ width: 30, height: 30, objectFit: "contain" }}
                />
              </View>
              <View>
                <Text
                  style={{
                    color: colors.light,
                    paddingLeft: 5,
                    fontFamily: "MonaSansBold",
                    fontSize: 17,
                  }}
                >
                  Oyeniyi Victor
                </Text>
              </View>
            </View>
            <View style={{ paddingRight: 7 }}>
              <FontAwesome name="phone" size={20} color={colors.light} />
            </View>
          </View>

          <TouchableOpacity
            style={{ position: "absolute", bottom: -60, width: "100%" }}
          >
            <View
              style={{
                width: "100%",
                marginTop: 10,
                paddingHorizontal: 10,
                paddingVertical: 15,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <Text style={{ color: colors.dark, fontSize: 18 }}>
                Check Availability
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UiTesting;

const styles = StyleSheet.create({
  ownerdesc: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  propertydesc: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    flexDirection: "column",
  },
  descView: {
    flex: 0.6,
    flexDirection: "column",
  },
  imageView: {
    flex: 0.4,
    overflow: "hidden",
    borderRadius: 10,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  descheading: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  heading: {
    fontFamily: "MonaSansBold",
    fontSize: 23,
    color: colors.light,
  },
  location: {
    color: "grey",
    paddingVertical: 10,
  },
  price: {
    color: colors.light,
    fontSize: 25,
    paddingTop: 10,
  },
  specIconscontainer: {
    zIndex: 1,
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
