import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import { setNewDate } from "../../functions/functions";
import { ChatTitle } from "../chat-title/ChatTitle";
import { MessagesList } from "../messages-list/MessagesList";
import { InputMessage } from "../input-message/InputMessage";
import "./chat.styles.scss";

export const Chat = ({
  selectedContact,
  currentUser,
  getMessage,
  filteredMessages,
  logedUserAbbreviation,
}) => {
  const messageInputRef = useRef();

  const logedUserId = currentUser.map((user) => user.userId);
  const selectedContactId = selectedContact.map((contact) => contact.contactId);
  const selectedContactImgURL = selectedContact.map(
    (contact) => contact.contactImgUrl
  );
  const selectedContactLastMessage = selectedContact.map(
    (contact) => contact.lastMessage
  );
  const selectedContactLastMessageDate = selectedContact.map(
    (contact) => contact.lastMessageDate
  );

  console.log(selectedContactLastMessageDate);

  const handleMessageInput = async () => {
    const messageInput = messageInputRef.current.value;
    if (messageInput === "") return;
    const message = {
      messageId: uuid(),
      senderId: logedUserId[0],
      receiverId: selectedContactId[0],
      message: messageInput,
      date: setNewDate(),
    };
    messageInputRef.current.value = null;

    await fetch("http://localhost:5000/messages", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(message),
    });

    getMessage();
  };

  return (
    <div className="chat">
      <ChatTitle selectedContact={selectedContact} />
      <MessagesList
        filteredMessages={filteredMessages}
        selectedContactImgURL={selectedContactImgURL[0]}
        logedUserAbbreviation={logedUserAbbreviation}
        selectedContactLastMessage={selectedContactLastMessage[0]}
        selectedContactLastMessageDate={selectedContactLastMessageDate[0]}
      />
      <InputMessage
        messageInputRef={messageInputRef}
        handleMessageInput={handleMessageInput}
      />
    </div>
  );
};
