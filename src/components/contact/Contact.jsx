import React from "react";
import "./contact.styles.css";

export const Contact = ({
  contact,
  onContactClickhandler,
  fontColorDark,
  hoverBackgroundColor,
  setHoverBackgroundColor,
}) => {
  return (
    <>
      <div
        className="contact"
        onClick={() => onContactClickhandler(contact.contactId)}
      >
        <img src={contact.contactImgUrl} className="contact__img" alt="" />
        <div className="contact__info">
          <p
            className="contact__name"
            style={{ color: `${fontColorDark}` }}
          >{`${contact.contactFirstName} ${contact.contactLastName}`}</p>
          <p className="contact__message">{contact.lastMessage}</p>
        </div>
        <div className="contact__date-and-message-amount">
          <p className="contact__date">{contact.lastMessageDate}</p>
          <div className="contact__message-amount">{contact.newMessages}</div>
        </div>
      </div>
    </>
  );
};
