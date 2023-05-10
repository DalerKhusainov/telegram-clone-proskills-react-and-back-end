import React from "react";
import { ChatTitle } from "../chat-title/ChatTitle";
import { MessagesList } from "../messages-list/MessagesList";
import { InputMessage } from "../input-message/InputMessage";

import "./chat.styles.scss";

export const Chat = ({ selectedContact, currentUser, curUserContacts }) => {
  return (
    <div className="chat">
      <ChatTitle selectedContact={selectedContact} />
      <MessagesList />
      <InputMessage
        selectedContact={selectedContact}
        currentUser={currentUser}
        curUserContacts={curUserContacts}
      />
    </div>
  );
};
