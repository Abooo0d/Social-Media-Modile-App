import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
export default function App() {
  const [num, setNum] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setNum((prevNum) => prevNum + 1)}
      >
        <Text style={styles.text}>Abood {num}</Text>
      </TouchableOpacity>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: 150,
    marginBottom: 20,
    display: "block",
    backgroundColor: "crimson",
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    width: "100%",
    fontSize: 20,
  },
});
