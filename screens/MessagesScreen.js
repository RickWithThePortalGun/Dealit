import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/list/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/list/ListItemSeparator";
import ListItemDeleteAction from "../components/list/ListItemDeleteAction";
import Title from "../components/Title";

const initialMessages = [
  {
    id: 1,
    title: "$1000 Couch in great condition jfgcjfcjcjgfcjhgchgcjhcghjcjhcgjhgcj",
    description: "I'm interested in buying this",
    image: require("../assets/aiimg.jpg"),
  },
  {
    id: 2,
    title: "$100 Red Jacket",
    description: "I like the red jacket you posted! I'm offering $60 fo it.",
    image: require("../assets/aiimg.jpg"),
  },
];

const MessagesScreen = (props) => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    // Delete the message from messages
    // Call the server
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen style={styles.screen}>
      <Title title={`Messages`}/>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            // style={{ marginBottom: 10, marginTop: 5 }}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => {
                  handleDelete(item);
                  console.log("tapped");
                }}
              />
            )}
            onPress={() => console.log(`Message selected`, item)}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 3,
              title: "$700 Rolex",
              description: "$500 and I'll take it!",
              image: require("../assets/aiimg.jpg"),
            },
            {
              id: 1,
              title: "$1000 Couch in great condition jfgcjfcjcjgfcjhgchgcjhcghjcjhcgjhgcj",
              description: "I'm interested in buying this",
              image: require("../assets/aiimg.jpg"),
            },
            {
              id: 2,
              title: "$100 Red Jacket",
              description: "I like the red jacket you posted! I'm offering $60 fo it.",
              image: require("../assets/aiimg.jpg"),
            },
            {
              id: 4,
              title: "$1000 Couch in great condition jfgcjfcjcjgfcjhgchgcjhcghjcjhcgjhgcj",
              description: "I'm interested in buying this",
              image: require("../assets/aiimg.jpg"),
            },
            {
              id: 5,
              title: "$100 Red Jacket",
              description: "I like the red jacket you posted! I'm offering $60 fo it.",
              image: require("../assets/aiimg.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
