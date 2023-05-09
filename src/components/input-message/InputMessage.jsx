import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import "./input-message.styles.scss";

export const InputMessage = () => {
  return (
    <div className="input-message">
      <div className="input-message__attach-icon">
        <IconButton>
          <AttachFileIcon fontSize="large" />
        </IconButton>
      </div>
      <div className="input-message__form">
        <form>
          <input type="text" name="" id="" placeholder="Write a message..." />
        </form>
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
