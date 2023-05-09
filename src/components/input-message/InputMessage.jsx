import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import { v4 as uuid } from "uuid";
import "./input-message.styles.scss";

export const InputMessage = ({ selectedContact, currentUser }) => {
  // const handleSubmit = (e) => {
  //   const message = {
  //     messageId: uuid(),
  //     senderId: currentUser[0].userId,
  //     receiverId: selectedContact[0].contactId,
  //   };
  // };

  return (
    <div className="input-message">
      <div className="input-message__attach-icon">
        <IconButton>
          <AttachFileIcon fontSize="large" />
        </IconButton>
      </div>
      <div className="input-message__form">
        {/* <form onSubmit={handleSubmit}> */}
        <input type="text" name="" id="" placeholder="Write a message..." />
        {/* </form> */}
      </div>
      <div className="input_message__icons">
        <IconButton>
          <SentimentSatisfiedAltIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <SendIcon fontSize="large" color="primary" />
        </IconButton>
      </div>
    </div>
  );
};
