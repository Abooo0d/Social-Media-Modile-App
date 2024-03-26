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
          <Text style={styles.username}>{user.username}</Text>
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
    height: 160,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.dark4,
  },
  subCard: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  userImage: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  textCon: { minWidth: 150, paddingLeft: 15 },
  name: {
    color: Colors.light2,
    fontSize: 24,
  },
  username: {
    color: Colors.light3,
    fontSize: 20,
  },
  followBtn: {
    width: 100,
    borderRadius: 10,
    backgroundColor: Colors.dark1,
    borderWidth: 2,
    borderColor: Colors.primary,
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
