import React from "react";
import "./contact.styles.scss";

export const Contacts = ({ contact }) => {
  const {
    contactFirstName,
    contactLastName,
    contactImgUrl,
    isLogin,
    lastMessage,
    lastMessageDate,
    newMessages,
  } = contact;

  return (
    <div className="contact">
      <img className="contact__img" alt="" src={contactImgUrl} />
      <div className="contact__info">
        <p className="name">{`${contactFirstName} ${contactLastName}`}</p>
        <p className="last-message">{lastMessage}</p>
      </div>
      <div className="contact__date-and-message-amount">
        <p className="date">{lastMessageDate}</p>
        <div className="message-amount">{newMessages}</div>
      </div>
    </div>
  );
};
