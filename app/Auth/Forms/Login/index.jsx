import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../../../Constants/Colors";
import { Link } from "expo-router";
import Layout from "../Layout";
import { useSignInAccount } from "../../../../lib/React-Query/queriesAndMutation";
import { useUserContext } from "../../../../Context/AuthContext";
import { useRouter } from "expo-router";
const Login = () => {
  // Fields
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const {
    checkAuthUser,
    isLoading: isUserLoading,
    isAuthenticated,
    storage,
  } = useUserContext();
  const { mutateAsync: signInAccount, isPending: isSignIngInAccount } =
    useSignInAccount();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const minPasswordLength = 8;
  // Functions
  const onSubmit = async () => {
    try {
      const user = { email: email, password: password };
      const session = await signInAccount(user);
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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      router.navigate("/Root/Pages/Home");
    }
  }, [isAuthenticated]);

  return (
    <Layout>
      {isUserLoading ? (
        <View
          style={{
            width: "100%",
            height: "150%",
            display: isSignIngInAccount ? "flex" : "none",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0.5,
            position: "absolute",
          }}
        >
          <ActivityIndicator color={Colors.primary} size={"large"} />
        </View>
      ) : (
        <>
          <View>
            <Text style={styles.text}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={Colors.light4}
              selectionColor={Colors.primary}
              value={email}
              onChangeText={(e) => setEmail(e)}
              keyboardType="email-address"
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
                      (error) =>
                        error != "Please enter a valid email address \n"
                    );
                  });
                }
              }}
            />
          </View>
          <View>
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
                if (password.length < minPasswordLength) {
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
                        error !=
                        "Password must be at least 8 characters long \n"
                    );
                  });
                }
              }}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.createAccountText}>
              Don`t Have An Account?!{" "}
              <Text
                style={{
                  color: Colors.light3,
                  textDecorationLine: "underline",
                  paddingBottom: 5,
                }}
              >
                {" "}
                <Link href="/Auth/Forms/Sign-up">Create One</Link>
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
              display: isSignIngInAccount ? "flex" : "none",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0.5,
              position: "absolute",
            }}
          >
            <ActivityIndicator color={Colors.primary} size={"large"} />
          </View>
        </>
      )}
    </Layout>
  );
};

export default Login;

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
  error: { color: "crimson", fontSize: 20, textAlign: "center" },
});
