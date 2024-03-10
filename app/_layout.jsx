import { Slot } from "expo-router";
import { QueryProvider } from "../lib/React-Query/QueryProvider";
import AuthProvider from "../Context/AuthContext";

export default function Layout() {
  return (
    <AuthProvider>
      <QueryProvider>
        <Slot />
      </QueryProvider>
    </AuthProvider>
  );
}
