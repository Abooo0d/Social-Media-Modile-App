import { Slot } from "expo-router";
import { QueryProvider } from "../lib/React-Query/QueryProvider";
import AuthProvider from "../Context/AuthContext";
import ChatsProvider from "../Context/ChatsContext";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function Layout() {
  return (
    <AuthProvider>
      <ChatsProvider>
        <QueryProvider>
          <Slot />
        </QueryProvider>
      </ChatsProvider>
    </AuthProvider>
  );
}
