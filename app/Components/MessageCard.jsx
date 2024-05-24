import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Constants/Colors";

const MessageCard = ({ message, userId, receiverId }) => {
  return (
    <View
      style={{
        ...styles.messageCon,
        margin: 10,
        alignItems: message.senderId === userId ? "flex-end" : "flex-start",
        paddingHorizontal: 10,
      }}
    >
      {message.senderId === userId ? (
        <View
          style={{
            ...styles.messageBody,
            backgroundColor: Colors.primary,
          }}
        >
          <Text style={styles.messageText}>{message.messageBody}</Text>
          <View
            style={{
              ...styles.try,
              backgroundColor: Colors.primary,
              right: -6,
            }}
          />
        </View>
      ) : (
        <View
          style={{
            ...styles.messageBody,
            backgroundColor: Colors.light2,
          }}
        >
          <Text style={styles.messageText}>{message.messageBody}</Text>
          <View
            style={{
              ...styles.try,
              backgroundColor: Colors.light2,
              left: -6,
            }}
          />
        </View>
      )}
    </View>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  messageCon: {
    display: "flex",
    overflow: "hidden",
  },
  messageBody: {
    padding: 12,
    flexShrink: 1,
    borderRadius: 10,
    position: "relative",
  },
  messageText: { color: Colors.dark1 },
  try: {
    position: "absolute",
    width: 12,
    height: 12,
    bottom: -6,
    transform: [{ rotate: "45deg" }],
  },
});
