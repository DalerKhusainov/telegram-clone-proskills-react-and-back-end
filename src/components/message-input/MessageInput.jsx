import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import { setNewDate } from "../../functions/functions";
import "./message-input.styles.css";

import InputBase from "@mui/material/InputBase";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";

export const MessageInput = ({
  selectedContact,
  currentUser,
  setMessage,
  message,
}) => {
  const selectedContactId = selectedContact.map((contact) => contact.contactId);
  const inputMessageRef = useRef();

  //////////////////////////////////////////////////////////////////////////
  ///// HANDLER WHICH CREATES THE OBJECT OF MESSAGE
  const onMessageClickHandler = () => {
    const inputMessage = inputMessageRef.current.value;
    if (inputMessage === "") return;
    inputMessageRef.current.value = null;

    setMessage([
      ...message,
      {
        messageId: uuid(),
        senderId: `${currentUser.userId}`,
        receiverId: `${selectedContactId[0]}`,
        message: `${inputMessage}`,
        date: setNewDate(),
      },
    ]);
  };

  return (
    <div className="message-input">
      <div className="attach-icon">
        <IconButton>
          <AttachFileIcon />
        </IconButton>
      </div>
      <div className="input-text">
        <InputBase
          fullWidth={true}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Write a message..."
          inputRef={inputMessageRef}
        />
      </div>
      <IconButton>
        <SentimentSatisfiedAltIcon />
      </IconButton>
      <IconButton onClick={onMessageClickHandler}>
        <SendIcon color="primary" />
      </IconButton>
    </div>
  );
};
