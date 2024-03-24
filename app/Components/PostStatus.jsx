import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../Constants/Colors";
import LikeImage from "../assets/icons/like.png";
import LikedImage from "../assets/icons/liked.png";
import SaveImage from "../assets/icons/save.png";
import SavedImage from "../assets/icons/saved.png";
import {
  useDeleteSavedPost,
  useGetCurrentUser,
  useLikePost,
  useSavePost,
} from "../../lib/React-Query/queriesAndMutation";
const PostStatus = ({ post, userId }) => {
  const { data: currentUser } = useGetCurrentUser();
  const { mutate: likePost } = useLikePost();
  const { mutate: savePost, isPending: isSavingPost } = useSavePost();
  const { mutate: deleteSavedPost, isPending: isDeletingSavedPost } =
    useDeleteSavedPost();
  const likesList = post?.likes?.map((user) => user.$id);
  const [likes, setLikes] = useState(likesList);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const savedPostRecord = currentUser?.save.find(
    (record) => record.post.$id === post?.$id
  );
  useEffect(() => {
    setIsSaved(!!savedPostRecord);
    setIsLiked(likesList.includes(userId));
  }, [currentUser]);
  const handelLikePost = (e) => {
    e.stopPropagation();
    let newLikes = [...likes];
    const hasLiked = newLikes.includes(userId);
    if (hasLiked) {
      newLikes = newLikes.filter((id) => id !== userId);
      setIsLiked(false);
    } else {
      newLikes.push(userId);
      setIsLiked(true);
    }
    setLikes(newLikes);
    likePost({ postId: post?.$id || "", likesArray: newLikes });
  };
  const handelSavePost = (e) => {
    e.stopPropagation();
    if (savedPostRecord) {
      setIsSaved(false);
      deleteSavedPost(savedPostRecord.$id);
    } else {
      savePost({ postId: post?.$id || "", userId });
      setIsSaved(true);
    }
  };
  return (
    <View style={styles.StatusContainer}>
      <TouchableOpacity style={styles.buttons} onPress={handelLikePost}>
        <Image source={isLiked ? LikedImage : LikeImage} />
        <Text style={styles.likeText}>{likes.length}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={handelSavePost}>
        <Image source={isSaved ? SavedImage : SaveImage} />
      </TouchableOpacity>
    </View>
  );
};

export default PostStatus;

const styles = StyleSheet.create({
  StatusContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttons: {
    padding: 5,
    borderRadius: 10,
    width: 30,
    height: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  likeText: { color: Colors.light2, marginLeft: 5 },
});
