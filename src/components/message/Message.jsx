import React from "react";
import "./message.styles.scss";

export const Message = ({
  filteredMessages,
  selectedContactImgURL,
  logedUserAbbreviation,
  selectedContactLastMessage,
  selectedContactLastMessageDate,
}) => {
  return (
    <>
      <div className="message">
        <div className="messageInfo">
          <img alt="" src={selectedContactImgURL} />
        </div>
        <div className="messageContent">
          <p>{selectedContactLastMessage}</p>
          <span className="message-date">{selectedContactLastMessageDate}</span>
        </div>
      </div>
      {filteredMessages.map((message) => (
        <div key={message.messageId} className="message owner">
          <div className="messageInfo">
            <p>{logedUserAbbreviation}</p>
          </div>
          <div className="messageContent">
            <p>{message.message}</p>
            <span className="message-date">{message.date}</span>
          </div>
        </div>
      ))}
    </>
  );
};
