import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../../../../Constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

const index = () => {
  return (
    <View style={styles.createPostForm}>
      <Text style={styles.title}>Create Post</Text>
      <ScrollView
        style={styles.fieldsCon}
        contentContainerStyle={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 15,
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.filedCon}>
          <Text style={styles.filedName}>Caption</Text>
          <TextInput
            style={styles.captionInput}
            placeholder="What Are You Thinking About"
            placeholderTextColor={Colors.light4}
            selectionColor={Colors.primary}
            // value={email}
            // onChangeText={(e) => setEmail(e)}
            multiline={true}
            numberOfLines={3}
            keyboardType="default"
          />
        </View>
        <View style={styles.filedCon}>
          <Text style={styles.filedName}>Add Photo</Text>
          <TouchableOpacity style={styles.addImageBtn}>
            <FontAwesome name="image" size={50} color={Colors.light3} />
            <Text style={styles.addImageText}>Click Here To Add An Image</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.filedCon}>
          <Text style={styles.filedName}>LastName</Text>
          <TextInput
            style={styles.input}
            placeholder="What Are You Thinking About"
            placeholderTextColor={Colors.light4}
            selectionColor={Colors.primary}
            // value={email}
            // onChangeText={(e) => setEmail(e)}
            keyboardType="default"
          />
        </View>
        <View style={styles.filedCon}>
          <Text style={styles.filedName}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="What Are You Thinking About"
            placeholderTextColor={Colors.light4}
            selectionColor={Colors.primary}
            // value={email}
            // onChangeText={(e) => setEmail(e)}
            keyboardType="default"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  createPostForm: {
    backgroundColor: Colors.dark1,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    margin: 10,
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: "700",
    width: "100%",
    textAlign: "left",
  },
  fieldsCon: {
    width: "100%",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "flex-start",
    gap: 20,
    padding: 20,
  },
  filedCon: {
    width: "100%",
  },
  filedName: {
    color: Colors.light2,
    fontSize: 20,
  },
  input: {
    backgroundColor: Colors.dark3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    color: Colors.light3,
    borderRadius: 10,
    height: 50,
    width: "100%",
    marginTop: 10,
  },
  captionInput: {
    backgroundColor: Colors.dark3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    color: Colors.light3,
    borderRadius: 10,
    height: 150,
    textAlignVertical: "top",
    width: "100%",
    marginTop: 10,
  },
  addImageBtn: {
    marginTop: 10,
    backgroundColor: Colors.dark3,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 300,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    borderRadius: 10,
  },
  addImageText: {
    fontSize: 18,
    color: Colors.light3,
  },
});
