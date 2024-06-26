import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../../../Constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";
const index = () => {
  const choseFile = () => {
    DocumentPicker.getDocumentAsync().then((data) => {
      setImage(data.assets[0].uri);
    });
  };
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");
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
            value={caption}
            onChangeText={(e) => setCaption(e)}
            multiline={true}
            numberOfLines={3}
            keyboardType="default"
          />
        </View>
        <View style={styles.filedCon}>
          <Text style={styles.filedName}>Add Photo</Text>
          <TouchableOpacity
            style={styles.addImageBtn}
            onPress={() => choseFile()}
          >
            {image !== "" ? (
              <>
                <Image source={{ uri: image }} style={styles.postImage} />
              </>
            ) : (
              <>
                <FontAwesome name="image" size={50} color={Colors.light3} />
                <Text style={styles.addImageText}>
                  Click Here To Add An Image
                </Text>
              </>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.filedCon}>
          <Text style={styles.filedName}>Location</Text>
          <TextInput
            style={styles.input}
            placeholder="What Are You Thinking About"
            placeholderTextColor={Colors.light4}
            selectionColor={Colors.primary}
            value={location}
            onChangeText={(e) => setLocation(e)}
            keyboardType="default"
          />
        </View>
        <View style={styles.filedCon}>
          <Text style={styles.filedName}>Tags</Text>
          <TextInput
            style={styles.input}
            placeholder="What Are You Thinking About"
            placeholderTextColor={Colors.light4}
            selectionColor={Colors.primary}
            value={tags}
            onChangeText={(e) => setTags(e)}
            keyboardType="default"
          />
        </View>
        <View style={styles.filedCon}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Create</Text>
          </TouchableOpacity>
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
    padding: 10,
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
  postImage: { width: "100%", height: "100%", borderRadius: 10 },
  btn: {
    backgroundColor: Colors.primary,
    width: "100%",
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
});
