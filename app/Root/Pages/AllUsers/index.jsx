import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  useGetUsers,
  useSearchUser,
} from "../../../../lib/React-Query/queriesAndMutation";
import useDebounce from "../../../../Hooks/useDebounce";
import { Colors } from "../../../../Constants/Colors";
import UserCard from "../../../Components/UserCard";

const index = () => {
  const [searchValue, setSearchValue] = useState("");
  const debounceValue = useDebounce(searchValue, 500);
  const { data: searchUsers, isPending: isLoadingSearchUsers } =
    useSearchUser(debounceValue);
  const {
    data: users,
    fetchNextPage,
    hasNextPage,
    isPending: isLoading,
  } = useGetUsers();
  const showSearchResult = searchValue !== "";
  return (
    <View style={styles.usersForm}>
      <TextInput
        style={styles.input}
        placeholder="What Are You Looking For"
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
              {isLoadingSearchUsers ? (
                <View style={styles.loaderCon}>
                  <ActivityIndicator color={Colors.primary} size={"large"} />
                </View>
              ) : searchUsers.documents.length > 0 ? (
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
                    {searchUsers.documents.map((user, index) => (
                      <UserCard user={user} key={index} />
                    ))}
                  </ScrollView>
                </>
              ) : (
                <Text
                  style={{
                    color: Colors.light3,
                    marginTop: 20,
                    fontSize: 24,
                    fontWeight: "800",
                  }}
                >
                  No Search Result Found
                </Text>
              )}
            </>
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
                {users.pages[0].documents.map((user, index) => (
                  <UserCard user={user} key={index} />
                ))}
              </ScrollView>
            </>
          )}
        </>
      )}
    </View>
    // <Text>index</Text>
  );
};

export default index;

const styles = StyleSheet.create({
  usersForm: {
    backgroundColor: Colors.dark1,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
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
