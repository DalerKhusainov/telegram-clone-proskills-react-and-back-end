import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TableChartIcon from "@mui/icons-material/TableChart";
import IconButton from "@mui/material/IconButton";
import "./chat-title.styles.scss";

export const ChatTitle = ({ selectedContact }) => {
  const isLogin = selectedContact.map((contact) => contact.isLogin);

  return (
    <div className="chat-title">
      <div className="chat-title__info">
        <p className="name">
          {selectedContact.map(
            (contact) =>
              `${contact.contactFirstName} ${contact.contactLastName}`
          )}
        </p>
        <p
          className="status"
          style={{
            color: `${isLogin[0] ? "#82c91e" : "#adb5bd"}`,
          }}
        >
          {isLogin[0] ? "online" : "offline"}
        </p>
      </div>
      <div className="chat-title__icons">
        <IconButton>
          <SearchIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <TableChartIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <MoreVertIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};
