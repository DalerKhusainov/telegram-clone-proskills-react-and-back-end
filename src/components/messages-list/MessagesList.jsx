import React from "react";
import { Message } from "../message/Message";
import "./messages-list.styles.scss";

export const MessagesList = () => {
  return (
    <div className="messages-list">
      <Message />
    </div>
  );
};
