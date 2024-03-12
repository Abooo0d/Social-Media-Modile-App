import React from "react";
import { Stack } from "expo-router";
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
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.dark3,
          color: "white",
        },
        headerTintColor: "#fff",
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
          <TouchableOpacity style={{ width: 35, height: 35 }}>
            {user?.imageUrl ? (
              <Image
                source={{ uri: user.imageUrl } || Profile}
                style={{
                  tintColor: Colors.primary,
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
      }}
    >
      <Stack.Screen
        name="Pages/Home/index"
        options={{
          title: "Home",
        }}
      />
    </Stack>
  );
};
<Stack.Screen
  options={{
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: Colors.dark1,
    },
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
      <TouchableOpacity style={{ width: 35, height: 35 }}>
        <Image
          source={{ uri: user.imageUrl } || Profile}
          style={{
            tintColor: Colors.primary,
            width: 35,
            height: 35,
            objectFit: "contain",
            borderRadius: 100,
          }}
        />
      </TouchableOpacity>
    ),
  }}
/>;

export default _layout;
