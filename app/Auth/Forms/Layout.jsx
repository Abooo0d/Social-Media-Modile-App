import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../../Constants/Colors";
import Logo from "../../assets/images/logo.png";
const Layout = ({ children }) => {
  return (
    <View style={styles.view}>
      <View>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.loginText}>Login To Your Account</Text>
        <Text style={styles.welcomeText}>Welcome Back Enter Your Account</Text>
      </View>
      {children}
    </View>
  );
};
export default Layout;
const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.dark1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    gap: 30,
    width: "100%",
    display: "flex",
  },
  logo: {
    height: 70,
    width: 200,
    marginRight: 20,
    objectFit: "contain",
  },
  loginText: {
    color: Colors.light2,
    fontSize: 18,
    textAlign: "center",
  },
  welcomeText: {
    color: Colors.light3,
    fontSize: 16,
    textAlign: "center",
  },
});
