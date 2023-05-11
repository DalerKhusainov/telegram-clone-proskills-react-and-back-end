import React from "react";
import "./contacts-list.styles.scss";
import { Contacts } from "../contact/Contact";

export const ContactsList = ({
  curUserContacts,
  setSelectedContact,
  currentUser,
  getMessage,
  handleClickContact,
}) => {
  return (
    <div className="contacts-list">
      {curUserContacts.map((contact) => (
        <Contacts
          key={contact.contactId}
          contact={contact}
          setSelectedContact={setSelectedContact}
          currentUser={currentUser}
          getMessage={getMessage}
          handleClickContact={handleClickContact}
        />
      ))}
    </div>
  );
};
