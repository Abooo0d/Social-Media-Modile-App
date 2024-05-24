import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useGlobalSearchParams } from "expo-router";
import { Colors } from "../../../../Constants/Colors";
import { useUserContext } from "../../../../Context/AuthContext";
import { useChatsContext } from "../../../../Context/ChatsContext";
import { useGetUserProfile } from "../../../../lib/React-Query/queriesAndMutation";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import MessageCard from "../../../Components/MessageCard";
const ChatPage = () => {
  const { id } = useGlobalSearchParams();
  const { user } = useUserContext();
  const { data: receiver, isPending: isLoadingReceiver } =
    useGetUserProfile(id);
  const {
    receiverId,
    senderId,
    messages,
    isGettingMessages,
    setReceiverId,
    setSenderId,
  } = useChatsContext();
  useEffect(() => {
    setSenderId(user.id);
    setReceiverId(id);
  }, [id]);
  return (
    <View style={styles.chatForm}>
      <View style={styles.chatCon}>
        {/* Start The Friend Info */}
        <View style={styles.friendInfo}>
          <View style={styles.friendInfoData}>
            {!isLoadingReceiver && (
              <Image
                source={{
                  uri:
                    receiver?.documents[0]?.imageUrl &&
                    receiver?.documents[0]?.imageUrl,
                }}
                style={styles.friendProfileImage}
              />
            )}
            <View>
              <Text style={styles.friendName}>
                {receiver?.documents[0]?.name}
              </Text>
              <Text style={styles.friendUsername}>
                @{receiver?.documents[0]?.username}
              </Text>
              <Text></Text>
            </View>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionsBtn}>
              <Feather name="video" size={24} color={Colors.light3} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionsBtn}>
              <Ionicons name="call-outline" size={24} color={Colors.light3} />
            </TouchableOpacity>
          </View>
        </View>
        {/* End The Friend Info */}
        <View style={styles.Line} />
        {/* Start The Chat Section */}
        <View style={styles.chatArea}>
          <ScrollView
            style={{ flex: 1, width: "100%" }}
            contentContainerStyle={styles.messagesContainer}
          >
            {messages?.map((message, index) => (
              <MessageCard
                message={message}
                userId={user.id}
                receiverId={id}
                key={index}
              />
            ))}
          </ScrollView>
        </View>
        {/* End The Chat Section */}
        <View style={styles.Line} />
        {/* Start The Message Creation Section */}
        <View style={styles.messageCreation}>
          <View style={styles.inputCon}>
            <TouchableOpacity style={styles.mediaBtn}>
              <Feather name="paperclip" size={20} color={Colors.light3} />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Your Message"
              placeholderTextColor={Colors.light4}
              selectionColor={Colors.primary}
            />
            <TouchableOpacity style={styles.mediaBtn}>
              <Ionicons name="mic-outline" size={20} color={Colors.light3} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.sendBtn}>
            <Feather name="send" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* End The Message Creation Section */}
      </View>
    </View>
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  chatForm: {
    backgroundColor: Colors.dark1,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
  },
  chatCon: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.dark3,
    borderRadius: 10,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  friendInfo: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  friendInfoData: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  friendProfileImage: { height: 60, width: 60, borderRadius: 60 },
  friendName: {
    color: Colors.light2,
    fontSize: 22,
  },
  friendUsername: {
    color: Colors.light3,
    fontSize: 18,
  },
  Line: {
    width: "80%",
    height: 2,
    backgroundColor: Colors.dark4,
    marginLeft: "10%",
    marginVertical: 10,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  actionsBtn: {
    backgroundColor: Colors.dark4,
    borderRadius: 10,
    padding: 10,
  },
  chatArea: {
    flex: 1,
    width: "100%",
  },
  messagesContainer: {
    display: "flex",
    justifyContent: "flex-end",
    height: "100%",
    alignItems: "stretch",
  },
  messageCreation: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    gap: 10,
  },
  inputCon: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.dark2,
    borderRadius: 10,
  },
  mediaBtn: {},
  input: { flex: 1, paddingHorizontal: 10, fontSize: 20 },
  sendBtn: { backgroundColor: "#ca8a04", padding: 10, borderRadius: 10 },
});
