import React from "react";
import "./sidebar.styles.scss";
import { SearchContacts } from "../search-contacts/SearchContacts";
import { ContactsList } from "../contacts-list/ContactsList";

export const Sidebar = ({ curUserContacts }) => {
  return (
    <div className="sidebar">
      <SearchContacts />
      <ContactsList curUserContacts={curUserContacts} />
    </div>
  );
};
