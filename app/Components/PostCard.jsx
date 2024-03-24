import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Constants/Colors";
import { multiFormatDateString } from "../utils";
import PostStatus from "./PostStatus";
import { useUserContext } from "../../Context/AuthContext";
const PostCard = ({ post }) => {
  const { user } = useUserContext();
  return (
    <View style={styles.card}>
      <View style={styles.userInfo}>
        <Image
          source={{ uri: post?.creator?.imageUrl }}
          style={styles.creatorImage}
        />
        <View style={styles.postInfo}>
          <Text style={styles.userFullName}>{post?.creator?.name}</Text>
          <Text style={styles.postDate}>
            {multiFormatDateString(post.$createdAt)} - {post.location}
          </Text>
        </View>
      </View>
      <Text style={styles.caption}>{post.caption}</Text>
      <View style={styles.tagsCon}>
        {post.tags.map((tag, index) => (
          <Text style={styles.tags} key={index}>
            #{tag}
          </Text>
        ))}
      </View>
      <Image source={{ uri: post.imageUrl }} style={styles.image} />
      <PostStatus post={post} userId={user.id} />
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    minHeight: 400,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
    backgroundColor: Colors.dark3,
    borderWidth: 1,
    borderColor: "rgba(35,35,35,1)",
    gap: 2,
    color: Colors.light3,
    marginBottom: 20,
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: 20,
  },
  creatorImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
  },
  postInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  userFullName: {
    color: Colors.light2,
    fontSize: 20,
  },
  postDate: {
    color: Colors.light3,
    fontSize: 16,
  },
  tagsCon: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 5,
  },
  tags: {
    color: Colors.light3,
    fontSize: 18,
  },
  caption: { color: Colors.light2, fontSize: 18, marginBottom: 5 },
  image: { flex: 1, borderRadius: 20, minHeight: 300, maxHeight: 500 },
});
