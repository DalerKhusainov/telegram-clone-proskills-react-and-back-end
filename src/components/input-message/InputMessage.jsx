import React, { useRef } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import { v4 as uuid } from "uuid";
import { setNewDate } from "../../functions/functions";
import "./input-message.styles.scss";

export const InputMessage = ({
  selectedContact,
  currentUser,
  curUserContacts,
}) => {
  const messageInputRef = useRef();

  const logedUserId = currentUser.map((user) => user.userId);
  const selectedContactId = selectedContact.map((contact) => contact.contactId);

  const handleMessage = (e) => {
    e.preventDefault();
    const message = {
      messageId: uuid(),
      senderId: logedUserId[0],
      receiverId: selectedContactId[0],
      message: messageInputRef.current.value,
      date: setNewDate(),
    };
    console.log(message);

    fetch("http://localhost:5000/messages", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((message) => console.log(message));
  };

  return (
    <div className="input-message">
      <div className="input-message__attach-icon">
        <IconButton>
          <AttachFileIcon fontSize="large" />
        </IconButton>
      </div>
      <div className="input-message__form">
        <input
          ref={messageInputRef}
          type="text"
          name=""
          id=""
          placeholder="Write a message..."
        />
      </div>
      <div className="input_message__icons">
        <IconButton>
          <SentimentSatisfiedAltIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={handleMessage}>
          <SendIcon fontSize="large" color="primary" />
        </IconButton>
      </div>
    </div>
  );
};
