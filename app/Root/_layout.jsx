import React, { useEffect } from "react";
import { Tabs, useRouter } from "expo-router";
import { Colors } from "../../Constants/Colors";
import Logo from "../assets/images/logo-s.png";
import Profile from "../assets/images/profile.png";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useUserContext } from "../../Context/AuthContext";
import { useSignOutAccount } from "../../lib/React-Query/queriesAndMutation";
import {
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
const _layout = () => {
  const router = useRouter();
  const { user, checkAuthUser } = useUserContext();
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  useEffect(() => {
    if (isSuccess) {
      checkAuthUser();
    }
  }, [isSuccess]);
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: Colors.primary,
        headerStyle: {
          backgroundColor: Colors.dark3,
        },
        headerTintColor: Colors.light2,
        headerShadowVisible: true,
        headerLeft: () => (
          <TouchableOpacity style={styles.topBarLeftButton}>
            <Image source={Logo} style={styles.topBarLeftButtonImage} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={styles.topBarRightView}>
            <TouchableOpacity onPress={() => signOut()}>
              <SimpleLineIcons name="logout" size={24} color={Colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 35, height: 35, marginRight: 10 }}
            >
              {user?.imageUrl ? (
                <Image
                  source={{ uri: user.imageUrl } || Profile}
                  style={{
                    tintColor: !user.imageUrl ? Colors.primary : "",
                    width: 35,
                    height: 35,
                    objectFit: "contain",
                    borderRadius: 100,
                  }}
                />
              ) : (
                <FontAwesome5 name="user" size={24} color={Colors.primary} />
              )}
            </TouchableOpacity>
          </View>
        ),
        tabBarStyle: styles.tabBarStyles,
      }}
    >
      <Tabs.Screen
        name="Pages/Home/index"
        options={{
          title: "Home",
          headerTitleStyle: {
            color: Colors.light2,
          },
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              size={22}
              name="home"
              color={focused ? Colors.primary : "#aaa"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Pages/AllUsers/index"
        options={{
          title: "All Users",
          headerTitleStyle: {
            color: Colors.light2,
          },
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              size={22}
              name="users"
              color={focused ? Colors.primary : "#aaa"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Pages/CreatePost/index"
        options={{
          title: "Create Post",
          presentation: "modal",
          headerTitleStyle: {
            color: Colors.light2,
          },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={32}
              name="add-circle"
              color={focused ? Colors.primary : "#aaa"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Pages/Explore/index"
        options={{
          title: "Explore",
          headerTitleStyle: {
            color: Colors.light2,
          },
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              size={22}
              name="image-multiple-outline"
              color={focused ? Colors.primary : "#aaa"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Pages/Chats/index"
        options={{
          title: "Chats",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={22}
              color={focused ? Colors.primary : "#aaa"}
            />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            alert("Abood");
          },
        })}
      />
      <Tabs.Screen
        name="Pages/Saves/index"
        options={{
          href: null,
          title: "Saves",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="bookmark"
              size={22}
              color={focused ? Colors.primary : "#aaa"}
            />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            alert("Abood");
          },
        })}
      />
    </Tabs>
  );
};

export default _layout;
const styles = StyleSheet.create({
  topBarLeftButton: {
    width: 50,
    height: 50,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  topBarLeftButtonImage: {
    width: 30,
    height: 30,
    objectFit: "contain",
  },
  topBarRightView: {
    display: "flex",
    gap: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 100,
    paddingRight: 10,
  },
  tabBarStyles: {
    backgroundColor: Colors.dark3,
    activeTintColor: Colors.primary,
    inactiveTintColor: Colors.dark4,
    borderTopWidth: 2,
    borderTopColor: Colors.dark3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: Colors.dark4,
  },
});
