import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Constants/Colors";

const UserCard = ({ user }) => {
  return (
    <View style={styles.userCard}>
      <Image source={{ uri: user.imageUrl }} style={styles.profileImage} />
      <Text style={styles.username}> @{user.username}</Text>
      <Text style={styles.name}> {user.name}</Text>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  userCard: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.dark3,
    borderRadius: 20,
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: Colors.dark4,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  username: {
    color: Colors.light3,
    fontSize: 16,
    width: "100%",
    height: 16,
    textAlign: "center",
  },
  name: {
    color: Colors.light2,
    fontSize: 20,
    textAlign: "center",
  },
});
