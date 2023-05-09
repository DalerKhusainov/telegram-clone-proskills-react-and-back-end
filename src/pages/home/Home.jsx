import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Chat } from "../../components/chat/Chat";

import "./home.style.scss";

export const Home = ({ curUserContacts }) => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar curUserContacts={curUserContacts} />
        <Chat />
      </div>
    </div>
  );
};
