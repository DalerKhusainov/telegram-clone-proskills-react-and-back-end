import React, { useRef, useState, useEffect } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import "./input-message.styles.scss";

export const InputMessage = ({ messageInputRef, handleMessageInput }) => {
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
        <IconButton onClick={handleMessageInput}>
          <SendIcon fontSize="large" color="primary" />
        </IconButton>
      </div>
    </div>
  );
};
