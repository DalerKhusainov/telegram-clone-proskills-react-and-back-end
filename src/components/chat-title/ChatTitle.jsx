import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TableChartIcon from "@mui/icons-material/TableChart";
import IconButton from "@mui/material/IconButton";
import "./chat-title.styles.scss";

export const ChatTitle = () => {
  return (
    <div className="chat-title">
      <div className="chat-title__info">
        <p className="name">Chat title</p>
        <p className="status">Contact Status</p>
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
