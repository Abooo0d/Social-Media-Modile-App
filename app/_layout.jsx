import { Slot } from "expo-router";
import { QueryProvider } from "../lib/React-Query/QueryProvider";
import AuthProvider from "../Context/AuthContext";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function Layout() {
  return (
    <AuthProvider>
      <QueryProvider>
        {/* <GestureHandlerRootView style={{ flex: 1 }}> */}
        <Slot />
        {/* </GestureHandlerRootView> */}
      </QueryProvider>
    </AuthProvider>
  );
}
