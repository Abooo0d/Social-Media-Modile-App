import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../../../Constants/Colors";
import {
  useGetPosts,
  useSearchPosts,
} from "../../../../lib/React-Query/queriesAndMutation";
import useDebounce from "../../../../Hooks/useDebounce";
import ExplorePostCard from "../../../Components/ExplorePostCard";
const index = () => {
  const { data: posts, isPending: isLoading } = useGetPosts();
  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue, 500);
  const { data: searchPosts, isPending: isSearchFetching } =
    useSearchPosts(debounceValue);
  const showSearchResult = searchValue !== "";
  return (
    <View style={styles.exploreForm}>
      <Text style={styles.title}>Post Search</Text>
      <TextInput
        style={styles.input}
        placeholder="What Are You Searching For"
        placeholderTextColor={Colors.light4}
        selectionColor={Colors.primary}
        value={searchValue}
        onChangeText={(e) => setSearchValue(e)}
        keyboardType="default"
      />
      {isLoading ? (
        <View style={styles.loaderCon}>
          <ActivityIndicator color={Colors.primary} size={"large"} />
        </View>
      ) : (
        <>
          {showSearchResult ? (
            <>
              {isSearchFetching ? (
                <View style={styles.loaderCon}>
                  <ActivityIndicator color={Colors.primary} size={"large"} />
                </View>
              ) : (
                <>
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
                    {searchPosts?.documents?.map((post, index) => (
                      <ExplorePostCard post={post} key={index} />
                    ))}
                  </ScrollView>
                </>
              )}
            </>
          ) : (
            <>
              <ScrollView
                contentContainerStyle={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 20,
                  paddingBottom: 20,
                }}
                showsVerticalScrollIndicator={false}
                style={styles.usersContainer}
              >
                {posts?.pages[0]?.documents?.length > 0 && (
                  <>
                    {posts?.pages[0]?.documents?.map((post, index) => (
                      <ExplorePostCard post={post} key={index} />
                    ))}
                  </>
                )}
              </ScrollView>
            </>
          )}
        </>
      )}
    </View>
  );
};

{
  /*
      
       {isLoading ? (
        <View style={styles.loaderCon}>
          <ActivityIndicator color={Colors.primary} size={"large"} />
        </View>
      ) : (
        <>
          {showSearchResult ? (
            <>
              {isLoadingSearchUsers ? (
                <View style={styles.loaderCon}>
                  <ActivityIndicator color={Colors.primary} size={"large"} />
                </View>
              ) : searchUsers.documents.length > 0 ? (
                <>
      */
}

export default index;

const styles = StyleSheet.create({
  exploreForm: {
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
    marginBottom: 20,
    fontWeight: "700",
    width: "100%",
    textAlign: "left",
  },
  input: {
    backgroundColor: Colors.dark3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    color: Colors.light3,
    borderRadius: 10,
    height: 50,
    width: "100%",
    marginTop: 10,
  },
  loaderCon: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
