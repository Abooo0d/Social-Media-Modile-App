import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import Layout from "../Layout";
import { Colors } from "../../../../Constants/Colors";
import {
  useCreateAccount,
  useSignInAccount,
} from "../../../../lib/React-Query/queriesAndMutation";
import { useUserContext } from "../../../../Context/AuthContext";
import { useRouter } from "expo-router";
const SignUp = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const minPasswordLength = 8;
  const router = useRouter();
  const {
    checkAuthUser,
    isLoading: isUserLoading,
    isAuthenticated,
    storage,
  } = useUserContext();
  const { mutateAsync: createUserAccount, isPending: isCreatingUser } =
    useCreateAccount();
  const { mutateAsync: signInAccount, isPending: isSignIngInAccount } =
    useSignInAccount();
  const onSubmit = async () => {
    const user = {
      name: fullName,
      username: username,
      email: email,
      password: password,
    };
    const newUser = await createUserAccount(user);
    if (!newUser) {
      setErrors((prevErrors) => [
        ...prevErrors,
        "Sign Up Filed,Please Try Again later \n",
      ]);
      return;
    } else {
      setErrors((prevErrors) => {
        return prevErrors.filter(
          (error) => error != "Sign Up Filed,Please Try Again later \n"
        );
      });
    }
    const sessionData = {
      email: email,
      password: password,
    };
    const session = await signInAccount(sessionData);
    if (!session) {
      setErrors((prevErrors) => [
        ...prevErrors,
        "Theres An Error, Please Try Again",
      ]);
      return;
    }
    if (session.$id === undefined) {
      setErrors((prevErrors) => {
        if (!prevErrors.includes(`${"Login Error,Please Try Again"} \n`)) {
          return [...prevErrors, `${"Login Error,Please Try Again"} \n`];
        } else {
          return prevErrors;
        }
      });
    } else {
      setErrors((prevErrors) => {
        return prevErrors.filter(
          (error) => error != `${"Login Error,Please Try Again"} \n`
        );
      });
    }
    const IsLoggedIn = await checkAuthUser();
    if (IsLoggedIn) {
      router.navigate("/Root/Pages/Home");
    }
  };
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
            value={fullName}
            onChangeText={(e) => setFullName(e)}
            onBlur={() => {
              if (fullName === "") {
                setErrors((prevErrors) => {
                  if (
                    !prevErrors.includes("Please Fill The FullName Field \n")
                  ) {
                    return [...prevErrors, "Please Fill The FullName Field \n"];
                  } else {
                    return prevErrors;
                  }
                });
              } else {
                setErrors((prevErrors) => {
                  return prevErrors.filter(
                    (error) => error != "Please Fill The FullName Field \n"
                  );
                });
              }
            }}
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
            onChangeText={(e) => setUsername(e)}
            value={username}
            onBlur={() => {
              if (username === "") {
                setErrors((prevErrors) => {
                  if (
                    !prevErrors.includes("Please Fill The UserName Field \n")
                  ) {
                    return [...prevErrors, "Please Fill The UserName Field \n"];
                  } else {
                    return prevErrors;
                  }
                });
              } else {
                setErrors((prevErrors) => {
                  return prevErrors.filter(
                    (error) => error != "Please Fill The UserName Field \n"
                  );
                });
              }
            }}
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
            onChangeText={(e) => setEmail(e)}
            onBlur={() => {
              if (!emailRegex.test(email)) {
                setErrors((prevErrors) => {
                  if (
                    !prevErrors.includes(
                      "Please enter a valid email address \n"
                    )
                  ) {
                    return [
                      ...prevErrors,
                      "Please enter a valid email address \n",
                    ];
                  } else {
                    return prevErrors;
                  }
                });
              } else {
                setErrors((prevErrors) => {
                  return prevErrors.filter(
                    (error) => error != "Please enter a valid email address \n"
                  );
                });
              }
            }}
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
            value={password}
            onChangeText={(e) => setPassword(e)}
            onBlur={() => {
              if (password?.length < minPasswordLength) {
                setErrors((prevErrors) => {
                  if (
                    !prevErrors.includes(
                      "Password must be at least 8 characters long \n"
                    )
                  ) {
                    return [
                      ...prevErrors,
                      "Password must be at least 8 characters long \n",
                    ];
                  } else {
                    return prevErrors;
                  }
                });
              } else {
                setErrors((prevErrors) => {
                  return prevErrors.filter(
                    (error) =>
                      error != "Password must be at least 8 characters long \n"
                  );
                });
              }
            }}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
        <Text style={styles.btnText}>Sign Up</Text>
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
      <View>
        <Text style={styles.error}>{errors.map((error) => error)}</Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "150%",
          display: isCreatingUser || isSignIngInAccount ? "flex" : "none",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.5,
          position: "absolute",
        }}
      >
        <ActivityIndicator color={Colors.primary} size={"large"} />
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
    maxHeight: 350,
    gap: 20,
    padding: 10,
  },
  error: { color: "crimson", fontSize: 20, textAlign: "center" },
});
