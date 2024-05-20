import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { useGlobalSearchParams } from "expo-router";
import { Colors } from "../../../../Constants/Colors";
import { useUserContext } from "../../../../Context/AuthContext";
import { useChatsContext } from "../../../../Context/ChatsContext";
import { useGetUserProfile } from "../../../../lib/React-Query/queriesAndMutation";

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
          <View>
            <Text>Abood</Text>
          </View>
        </View>
        <View style={styles.Line} />
        {/* End The Friend Info */}
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
});
