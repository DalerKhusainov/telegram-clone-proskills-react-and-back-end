import React, { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Chat } from "../../components/chat/Chat";
import axios from "axios";
import { getFirstLetter } from "../../functions/functions";
import "./home.style.scss";

export const Home = ({ curUserContacts, currentUser }) => {
  const [selectedContact, setSelectedContact] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);

  const logedUserId = currentUser.map((user) => user.userId);
  const logedUserFirstName = currentUser.map((user) => user.firstName);
  const logedUserLastName = currentUser.map((user) => user.lastName);
  const logedUserAbbreviation = `${getFirstLetter(
    logedUserFirstName
  )}${getFirstLetter(logedUserLastName)}`;
  const selectedContactId = selectedContact.map((contact) => contact.contactId);

  const handleClickContact = async (id) => {
    await fetch(`http://localhost:5000/contacts/allcontacts/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((contacts) => setSelectedContact(contacts));

    getMessage();
  };

  const getMessage = () => {
    axios
      .get(
        `http://localhost:5000/messages/${logedUserId[0]}/${selectedContactId[0]}`
      )
      .then((res) => setFilteredMessages(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      <div className="container">
        <Sidebar
          curUserContacts={curUserContacts}
          setSelectedContact={setSelectedContact}
          currentUser={currentUser}
          getMessage={getMessage}
          handleClickContact={handleClickContact}
        />
        <Chat
          selectedContact={selectedContact}
          currentUser={currentUser}
          curUserContacts={curUserContacts}
          getMessage={getMessage}
          filteredMessages={filteredMessages}
          logedUserAbbreviation={logedUserAbbreviation}
        />
      </div>
    </div>
  );
};
