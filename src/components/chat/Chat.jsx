import React, { useState, useRef, useEffect } from "react";

import axios from "axios";
import { v4 as uuid } from "uuid";
import { setNewDate } from "../../functions/functions";

import { ChatTitle } from "../chat-title/ChatTitle";
import { MessagesList } from "../messages-list/MessagesList";
import { InputMessage } from "../input-message/InputMessage";

import "./chat.styles.scss";

export const Chat = ({ selectedContact, currentUser, curUserContacts }) => {
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  console.log(filteredMessages);

  const messageInputRef = useRef();

  const logedUserId = currentUser.map((user) => user.userId);
  const selectedContactId = selectedContact.map((contact) => contact.contactId);

  const handleMessageInput = () => {
    const messageInput = messageInputRef.current.value;
    const message = {
      messageId: uuid(),
      senderId: logedUserId[0],
      receiverId: selectedContactId[0],
      message: messageInput,
      date: setNewDate(),
    };
    messageInputRef.current.value = null;

    fetch("http://localhost:5000/messages", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((message) => setMessages(message));
  };

  // useEffect(() => {
  //   const newFilteredMessages = messages.filter(
  //     (message) =>
  //       message.senderId === logedUserId[0] &&
  //       message.receiverId === selectedContactId[0]
  //   );
  //   setFilteredMessages(newFilteredMessages);
  // }, [messages, logedUserId, selectedContactId]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/messages/${logedUserId[0]}/${selectedContactId[0]}`
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [logedUserId, selectedContactId]);

  return (
    <div className="chat">
      <ChatTitle selectedContact={selectedContact} />
      <MessagesList />
      <InputMessage
        messageInputRef={messageInputRef}
        handleMessageInput={handleMessageInput}
      />
    </div>
  );
};
