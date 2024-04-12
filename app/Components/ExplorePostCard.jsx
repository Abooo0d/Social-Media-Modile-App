import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Constants/Colors";
import PostStatus from "./PostStatus";
import { useUserContext } from "../../Context/AuthContext";
const ExplorePostCard = ({ post }) => {
  const { user } = useUserContext();
  return (
    <View style={styles.explorePostCard}>
      <Image source={{ uri: post?.imageUrl }} style={styles.postImage} />

      <View style={styles.status}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: post.creator.imageUrl }}
            style={styles.creatorImage}
          />
          <Text style={styles.username}>@{post.creator.username}</Text>
        </View>
        <View style={styles.statusInfo}>
          <PostStatus post={post} userId={user.id} explore={true} />
        </View>
      </View>
    </View>
  );
};

export default ExplorePostCard;

const styles = StyleSheet.create({
  explorePostCard: {
    width: "100%",
    height: 300,
    borderRadius: 20,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  status: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0 ,0.1)",
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    gap: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  creatorImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  username: {
    color: Colors.light2,
    fontSize: 22,
    fontWeight: "bold",
  },
  statusInfo: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    gap: 5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
