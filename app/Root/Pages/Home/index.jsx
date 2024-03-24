import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useUserContext } from "../../../../Context/AuthContext";
import {
  useGetPosts,
  useSignOutAccount,
} from "../../../../lib/React-Query/queriesAndMutation";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../../../Constants/Colors";
import PostCard from "../../../Components/PostCard";
import FollowersBar from "../../../Components/Containers/FollowersBar";

const HomePage = () => {
  const router = useRouter();
  const { isAuthenticated } = useUserContext();
  const { data: posts, isPending: isGettingPosts } = useGetPosts();
  useEffect(() => {
    if (!isAuthenticated) {
      router.navigate("/Auth/Forms/Login");
    }
  }, []);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <FollowersBar />
        <Text style={styles.title}>HomeFeed</Text>
        {!isGettingPosts &&
          posts.pages[0].documents?.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
      </ScrollView>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.dark1,
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: 10,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    margin: 10,
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: "700",
  },
});
