import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TableChartIcon from "@mui/icons-material/TableChart";
import IconButton from "@mui/material/IconButton";
import "./chat-title.field.styles.css";

export const ChatTitleField = ({ selectedContact, fontColorDark }) => {
  const isLogin = selectedContact.map((contact) => contact.isLogin);

  return (
    <div className="chat-field">
      <div className="chat-info">
        <p className="chat-title" style={{ color: `${fontColorDark}` }}>
          {selectedContact.map(
            (contact) =>
              `${contact.contactFirstName} ${contact.contactLastName}`
          )}
        </p>
        <p
          className="chat-status"
          style={{ color: `${isLogin[0] ? "#339af0" : "#fab005"}` }}
        >
          {selectedContact.map((contact) => {
            return contact.isLogin ? "online" : "offline";
          })}
        </p>
      </div>
      <div className="chat-field__icons">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <TableChartIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};
