import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "../../Constants/Colors";
import Logo from "../assets/images/logo-s.png";
import Profile from "../assets/images/profile.png";
import { Image, TouchableOpacity } from "react-native";
import { useUserContext } from "../../Context/AuthContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
const _layout = () => {
  const { user } = useUserContext();
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
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              padding: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Image
              source={Logo}
              style={{
                width: 30,
                height: 30,
                objectFit: "contain",
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity style={{ width: 35, height: 35, marginRight: 10 }}>
            {user?.imageUrl ? (
              <Image
                source={{ uri: user.imageUrl } || Profile}
                style={{
                  // tintColor: ,
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
        ),
        tabBarStyle: {
          backgroundColor: Colors.dark3,
          activeTintColor: Colors.primary,
          inactiveTintColor: Colors.dark4,
          borderTopWidth: 2,
          borderTopColor: Colors.dark3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="Pages/Home/index"
        options={{
          title: "Home",
          headerTitleStyle: {
            color: "white",
          },
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              size={28}
              name="home"
              color={focused ? Colors.primary : "#aaa"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Pages/Chats/index"
        options={{
          title: "Chats",
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
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
