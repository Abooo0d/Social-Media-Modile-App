import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../lib/AppWrite/api";
import { useRouter } from "expo-router";
import { MMKV } from "react-native-mmkv";
export const INITIAL_USER = {
  id: "",
  name: "",
  username: "",
  email: "",
  imageUrl: "",
  bio: "",
};
const INITIAL_STATE = {
  user: INITIAL_USER,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false,
  isLoading: false,
  storage: {},
};

const AuthContext = createContext(INITIAL_STATE);
const AuthProvider = ({ children }) => {
  const storage = new MMKV();
  const router = useRouter();
  const [user, setUser] = useState(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkAuthUser = async () => {
    setIsLoading(true);
    try {
      const currentAccount = await getCurrentUser();
      if (currentAccount) {
        setUser({
          id: currentAccount.$id,
          name: currentAccount.name,
          username: currentAccount.username,
          email: currentAccount.email,
          imageUrl: currentAccount.imageUrl,
          bio: currentAccount.bio,
        });
        storage.set("USER_TOKEN", currentAccount.$id);
        setIsAuthenticated(true);
        router.navigate("/Root/Pages/Home");
        return true;
      }
      storage.delete("USER_TOKEN");
      setIsAuthenticated(false);
      router.navigate("Auth/Forms/Login");
      return false;
    } catch (error) {
      console.log(error);
      storage.delete("USER_TOKEN");
      setIsAuthenticated(false);
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (
      storage.getString("USER_TOKEN") === "" ||
      storage.getString("USER_TOKEN") === null ||
      storage.getString("USER_TOKEN") === undefined
    ) {
      router.navigate("Auth/Forms/Login");
      checkAuthUser();
    } else {
      router.navigate("/Root/Pages/Home");
      checkAuthUser();
    }
  }, []);
  const values = {
    user,
    isLoading,
    isAuthenticated,
    storage,
    setUser,
    setIsAuthenticated,
    checkAuthUser,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const useUserContext = () => useContext(AuthContext);
