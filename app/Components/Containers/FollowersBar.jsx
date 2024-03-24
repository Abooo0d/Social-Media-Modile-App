import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGetUsers } from "../../../lib/React-Query/queriesAndMutation";
import UserCard from "../UserCard";
import { Colors } from "../../../Constants/Colors";

const FollowersBar = () => {
  const { data: users, isPending: isLoading } = useGetUsers();
  return (
    <View style={styles.followersBar}>
      <Text style={styles.title}>Followers</Text>
      <ScrollView
        contentContainerStyle={styles.followersBarContainer}
        style={styles.barScrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {users?.pages[0]?.documents.map((user, index) => (
          <UserCard user={user} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FollowersBar;

const styles = StyleSheet.create({
  followersBarContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  barScrollView: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    backgroundColor: Colors.dark1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark4,
  },
  followersBar: {},
  title: {
    color: "#fff",
    fontSize: 30,
    margin: 10,
    marginLeft: 20,
    fontWeight: "700",
  },
});
