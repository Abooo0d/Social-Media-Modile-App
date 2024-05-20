import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../../../Constants/Colors";
import { useGetUsers } from "../../../../lib/React-Query/queriesAndMutation";
import ChatCard from "../../../Components/ChatCard";
const index = () => {
  const {
    data: users,
    fetchNextPage,
    hasNextPage,
    isPending: isLoading,
  } = useGetUsers();
  return (
    <View style={styles.chatsForm}>
      <Text style={styles.title}>All Chats</Text>
      <ScrollView
        contentContainerStyle={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 15,
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
        style={styles.usersContainer}
      >
        {users.pages[0].documents.map((user, index) => (
          <ChatCard user={user} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  chatsForm: {
    backgroundColor: Colors.dark1,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    margin: 10,
    marginLeft: 20,
    fontWeight: "700",
    width: "100%",
    textAlign: "left",
  },
  usersContainer: {
    width: "100%",
    height: "100%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    gap: 10,
  },
});
