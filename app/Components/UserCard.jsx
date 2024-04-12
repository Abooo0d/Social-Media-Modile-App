import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../../Constants/Colors";

const UserCard = ({ user }) => {
  return (
    <View style={styles.userCard}>
      <View style={styles.subCard}>
        <Image
          source={{ uri: user?.imageUrl && user.imageUrl }}
          style={styles.userImage}
        />
        <View style={styles.textCon}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.username}>@{user.username}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.followBtn}>
        <Text style={styles.FollowBtnText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  userCard: {
    width: "100%",
    height: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.dark4,
    paddingHorizontal: 20,
  },
  subCard: {
    display: "flex",
    flexDirection: "row",
    gap: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  userImage: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  textCon: { minWidth: 120, paddingLeft: 15 },
  name: {
    color: Colors.light2,
    fontSize: 20,
  },
  username: {
    color: Colors.light3,
    fontSize: 18,
  },
  followBtn: {
    width: 75,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  FollowBtnText: {
    color: Colors.light2,
    fontSize: 20,
    fontWeight: "700",
  },
});
