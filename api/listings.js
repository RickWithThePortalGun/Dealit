import client from "./client";

const endpoints = "listings";

const getListings = () => client.get(endpoints);
console.log("client called");

export default {
  getListings,
};
