import React from "react";
import "./sidebar.styles.scss";
import { SearchContacts } from "../search-contacts/SearchContacts";
import { ContactsList } from "../contacts-list/ContactsList";

export const Sidebar = ({
  curUserContacts,
  setSelectedContact,
  currentUser,
  getMessage,
  handleClickContact,
}) => {
  return (
    <div className="sidebar">
      <SearchContacts setSelectedContact={setSelectedContact} />
      <ContactsList
        curUserContacts={curUserContacts}
        setSelectedContact={setSelectedContact}
        currentUser={currentUser}
        getMessage={getMessage}
        handleClickContact={handleClickContact}
      />
    </div>
  );
};
