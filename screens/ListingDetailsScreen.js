import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/list/ListItem";
import {FontAwesome6} from "@expo/vector-icons"

export default function ListingDetailsScreen({route}) {
  const listing=route.params;
  return (
    <View style={{position:"relative"}}>
      
      <Image style={styles.image} source={{uri:listing.images[0].url}} />
      <View style={styles.chevron}>
        <FontAwesome6 name="chevron-down" color={colors.dark} size={30}/>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>$ {listing.price}</Text>
        <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/aiimg.jpg")}
          title="Oyeniyi Victor"
          style={{padding:5}}
          subTitle="5 listings"
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  chevron:{
    position:'absolute',
    top:"2 %",
    left:"45%",
  },
  detailsContainer: {
    padding: 20,
    // backgroundColor:"red"
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    marginVertical: 15,
    color: colors.secondary,
    fontWeight: "600",
    fontSize: 23,
  },
  userContainer:{
    marginVertical:40
  }
});
