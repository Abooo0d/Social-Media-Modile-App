import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useUserContext } from "../../../../Context/AuthContext";
import { useSignOutAccount } from "../../../../lib/React-Query/queriesAndMutation";
import { useRouter } from "expo-router";
const HomePage = () => {
  const router = useRouter();
  const { storage, checkAuthUser, isAuthenticated } = useUserContext();
  const { mutateAsync: signOut } = useSignOutAccount();
  useEffect(() => {
    console.log("Home Page Check Auth User");
    if (!isAuthenticated) {
      router.navigate("/Auth/Forms/Login");
    }
  }, []);

  return (
    <View>
      <Text>HomePage</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 20,
          width: 100,
          marginTop: 20,
        }}
        onPress={async () => {
          signOut();
          const isLoggedIn = await checkAuthUser();
          if (!isLoggedIn) {
            router.navigate("/Auth/Forms/Login");
          }
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>SignOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
