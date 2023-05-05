import React from "react";
import "./message-field.styles.css";

export const MessageField = ({
  chatMessages,
  chatSenderImg,
  filteredMessage,
}) => {
  return (
    <div className="message-field">
      <div className="receiver-message-container">
        <img
          className="receiver-message-img"
          alt="contactPhoto"
          src={chatSenderImg}
        />
        <div className="receiver-message">
          <div className="receiver-message-text">{chatMessages}</div>
          <p className="message-date">12:20</p>
        </div>
      </div>
      {filteredMessage.map((message) => (
        <>
          <div key={message.messageId} className="sender-message-container">
            <div className="sender-message-text">{message.message}</div>
            <p className="message-date">{message.date}</p>
          </div>
        </>
      ))}
    </div>
  );
};
