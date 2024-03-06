import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import Layout from "../Layout";
import { Colors } from "../../../../Constants/Colors";

const SignUp = () => {
  return (
    <Layout>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={true}
        indicatorStyle="white"
      >
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.text}>Full Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor={Colors.light4}
            keyboardType="default"
            selectionColor={Colors.primary}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.text}>Username:</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor={Colors.light4}
            keyboardType="default"
            selectionColor={Colors.primary}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.text}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={Colors.light4}
            keyboardType="email-address"
            selectionColor={Colors.primary}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.text}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor={Colors.light4}
            keyboardType="default"
            secureTextEntry
            selectionColor={Colors.primary}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.createAccountText}>
          Already Have An Account?!{" "}
          <Text
            style={{
              color: Colors.light3,
              textDecorationLine: "underline",
              paddingBottom: 5,
            }}
          >
            {" "}
            <Link href="/Auth/Forms/Login">Log In</Link>
          </Text>
        </Text>
      </View>
    </Layout>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.dark3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    color: Colors.light3,
    borderRadius: 10,
    height: 50,
    width: 250,
    marginTop: 10,
  },
  text: { color: Colors.light2, fontSize: 20, marginLeft: 10 },
  btn: {
    backgroundColor: Colors.primary,
    width: 250,
    textAlign: "center",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    transition: 200,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
  createAccountText: {
    color: Colors.light2,
    fontSize: 16,
    textAlign: "center",
  },
  scrollView: {
    height: 300,
    maxHeight: 400,
    gap: 20,
    padding: 10,
  },
});
