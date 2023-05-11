import React, { useEffect, useState } from "react";
import { Message } from "../message/Message";
import "./messages-list.styles.scss";

export const MessagesList = ({
  filteredMessages,
  selectedContactImgURL,
  logedUserAbbreviation,
  selectedContactLastMessage,
  selectedContactLastMessageDate,
}) => {
  return (
    <div className="messages-list">
      <Message
        filteredMessages={filteredMessages}
        selectedContactImgURL={selectedContactImgURL}
        logedUserAbbreviation={logedUserAbbreviation}
        selectedContactLastMessage={selectedContactLastMessage}
        selectedContactLastMessageDate={selectedContactLastMessageDate}
      />
    </div>
  );
};
