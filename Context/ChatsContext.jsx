import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { getMessages } from "../lib/AppWrite/api";
const INITIAL_STATE = {
  senderId: "",
  receiverId: "",
  messages: undefined,
  isGettingMessages: false,
  setReceiverId: () => {},
  setSenderId: () => {},
};
const ChatsContext = createContext(INITIAL_STATE);
const ChatsProvider = ({ children }) => {
  const [senderId, setSenderId] = useState("");
  const [receiverId, setReceiverId] = useState("");
  const [messages, setMessages] = useState();
  const [isGettingMessages, setIsGettingMessages] = useState(false);
  const FetchMessages = async () => {
    setIsGettingMessages(true);
    const data = await getMessages(senderId, receiverId);
    const me = data?.documents.map((message) => {
      return {
        senderId: message.senderId,
        receiverId: message.receiverId,
        messageBody: message.messageBody,
      };
    });
    setMessages(me);
    setIsGettingMessages(false);
  };
  useEffect(() => {
    if (senderId !== "" && receiverId !== "") {
      FetchMessages();
    }
  }, [receiverId, senderId]);
  const values = {
    senderId,
    receiverId,
    messages,
    isGettingMessages,
    setReceiverId,
    setSenderId,
  };
  return (
    <ChatsContext.Provider value={values}>{children}</ChatsContext.Provider>
  );
};
export default ChatsProvider;
export const useChatsContext = () => useContext(ChatsContext);
