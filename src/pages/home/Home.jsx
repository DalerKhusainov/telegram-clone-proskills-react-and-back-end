import React, { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Chat } from "../../components/chat/Chat";

import "./home.style.scss";

export const Home = ({ curUserContacts, currentUser }) => {
  const [selectedContact, setSelectedContact] = useState([]);

  return (
    <div className="home">
      <div className="container">
        <Sidebar
          curUserContacts={curUserContacts}
          setSelectedContact={setSelectedContact}
        />
        <Chat selectedContact={selectedContact} currentUser={currentUser} />
      </div>
    </div>
  );
};
