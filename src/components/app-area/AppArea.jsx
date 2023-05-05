import "./app-area.styles.css";
import { useState, useEffect } from "react";
import { setFirstName } from "../../functions/functions";

import SearchContacts from "../search-contacts-field/SearchContacts";
import { ContactsList } from "../contacts-list/ContactsList";
import { ChatTitleField } from "../chat-title-field/ChatTitleField";
import { MessageField } from "../message-field/MessageField";
import { MessageInput } from "../message-input/MessageInput";
import { MenuSeсtion } from "../menu-section/MenuSeсtion";

import { contacts1 } from "../../data/contacts";
import { contacts2 } from "../../data/contacts";
import { contacts3 } from "../../data/contacts";
// import { users } from "../../data/users";

import { LOCALE_STORAGE_KEY_MESSAGES } from "../../configs/configs";
import { LOCALE_STORAGE_KEY_CONTACTS } from "../../configs/configs";

const AppArea = ({ userFullName, currentUser }) => {
  //////////////////////////////////////////////////////////////////////////
  ///// STATES
  // THIS STATE INITIALLY CONTAINS ALL CONTACTS OF APP USERS
  const [allUsersContacts, setAllUsersContacts] = useState([
    ...contacts1,
    ...contacts2,
    ...contacts3,
  ]);
  const [allContacts, setAllContacts] = useState(contacts1);
  const [filteredContacts, setFilteredContacts] = useState(allContacts);
  const [message, setMessage] = useState([]);
  const [filteredMessage, setFilteredMessage] = useState([]);

  const [selectedContact, setSelectedContact] = useState([]);
  const [clickedContactId, setClickedContactId] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [chatMessages, setChatMessages] = useState("");
  const [chatSenderImg, setChatSenderImg] = useState("");

  // THIS STATE CONTAINS THE VALUE FOR MOVING THE MenuSection.jsx
  const [menuTransformValue, setMenuTransformValue] = useState("100");

  // THESE STATES CONTAIN THE DEFAULT VALUES FOR DARKMODE
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const [fontColorDark, setFontColorDark] = useState("#343a40");
  const [hoverBackgroundColor, setHoverBackgroundColor] = useState("#fff");
  const [hamburgerMenuColor, setHamburgerMenuColor] = useState("#343a40");
  const [searchContactsBackgroundColor, setSearchContactsBackgroundColor] =
    useState("#f1f3f5");

  ///////////////////////////////////////////////////////////
  /////// GETTING CONTACTS DATA FROM LOCALE STORAGE
  useEffect(() => {
    const storedContacts = JSON.parse(
      localStorage.getItem(LOCALE_STORAGE_KEY_CONTACTS)
    );
    if (!storedContacts) return;
    setAllUsersContacts(storedContacts);
  }, []);

  ///////////////////////////////////////////////////////////
  /////// STORING CONTACTS DATA TO LOCALE STORAGE
  useEffect(() => {
    localStorage.setItem(
      LOCALE_STORAGE_KEY_CONTACTS,
      JSON.stringify(allUsersContacts)
    );
  }, [allUsersContacts]);

  ///////////////////////////////////////////////////////////
  /////// GETTING MESSAGE DATA FROM LOCALE STORAGE
  useEffect(() => {
    const storedMessages = JSON.parse(
      localStorage.getItem(LOCALE_STORAGE_KEY_MESSAGES)
    );
    if (!storedMessages) return;
    setMessage(storedMessages);
  }, []);

  ///////////////////////////////////////////////////////////
  /////// STORING MESSAGE DATA TO LOCALE STORAGE
  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY_MESSAGES, JSON.stringify(message));
  }, [message]);

  //////////////////////////////////////////////////////////////////////////
  ///// FILTER METHOD WHICH TAKES VALUE FROM LOGIN COMPONENT AND FILTER THE CURRNET
  ///// ACCOUNT TO THE APP
  useEffect(() => {
    const logedUser = allUsersContacts.filter(
      (userName) => userName.owner === setFirstName(userFullName)
    );
    setAllContacts(logedUser);
    setFilteredContacts(logedUser);
    setChatMessages(logedUser[0].lastMessage);
    setChatSenderImg(logedUser[0].contactImgUrl);
  }, [allUsersContacts, userFullName]);

  //////////////////////////////////////////////////////////////////////////
  ///// CLICK HANDLER WHICH SELECT A CONTACT AND DISPLAYS THE CONTACT NAME TO ChatTitleField.jsx
  ///// ALSO IT SETS DEFAULT MESSAGE TO MESSAGE FIELD
  const onContactClickHandler = (id) => {
    const newSelectedContact = filteredContacts.filter(
      (contact) => contact.contactId === id
    );
    setSelectedContact(newSelectedContact);
    setClickedContactId(id);
    setChatMessages(newSelectedContact[0].lastMessage);
    setChatSenderImg(newSelectedContact[0].contactImgUrl);
  };

  //////////////////////////////////////////////////////////////////////////
  ///// CLICK HANDLER WHICH SELECT A CONTACT AND DISPLAYS THE CHAT TO MessageField.jsx
  useEffect(() => {
    const newFilteredMessages = message.filter(
      (message) =>
        message.receiverId === clickedContactId &&
        message.senderId === currentUser.userId
    );
    setFilteredMessage(newFilteredMessages);
  }, [message, clickedContactId, currentUser]);

  //////////////////////////////////////////////////////////////////////////
  ///// THE INPUT HANDLER WHICH TAKES VALUE FROM SEARCH CONTACTS FIELD
  const onSearchHandler = (e) => {
    const newSearchValue = e.target.value.toLocaleLowerCase();
    setSearchValue(newSearchValue);
  };

  //////////////////////////////////////////////////////////////////////////
  ///// SEARCH HANDLER FOR FILTERING THE CONTACTS
  useEffect(() => {
    const newFilteredContact = allContacts.filter((contact) =>
      contact.contactFirstName.toLocaleLowerCase().includes(searchValue)
    );
    setFilteredContacts(newFilteredContact);
  }, [allContacts, searchValue]);

  //////////////////////////////////////////////////////////////////////////
  ///// DARK MODE TOGGLE HANDLER
  const onNightModeHandler = (e) => {
    const isOn = e.target.checked;
    if (isOn === true) {
      setBackgroundColor("#333464");
      setFontColorDark("#868e96");
      setSearchContactsBackgroundColor("#868e96");
      setHamburgerMenuColor("#868e96");
    } else {
      setBackgroundColor("#f8f9fa");
      setFontColorDark("#343a40");
      setSearchContactsBackgroundColor("#f1f3f5");
      setHamburgerMenuColor("#343a40");
    }
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/quizzes")
      .then((response) => response.json())
      .then((quizzes) => console.log(quizzes));
  }, []);

  return (
    <>
      <div className="container">
        <MenuSeсtion
          menuTransformValue={menuTransformValue}
          setMenuTransformValue={setMenuTransformValue}
          user={userFullName}
          onNightModeHandler={onNightModeHandler}
          backgroundColor={backgroundColor}
          fontColorDark={fontColorDark}
        />
        <div className="menu-area-2">Menu Area</div>
        <div className="app-area">
          <div
            className="contacts-container"
            style={{ backgroundColor: `${backgroundColor}` }}
          >
            <SearchContacts
              onSearchHandler={onSearchHandler}
              menuTransformValue={menuTransformValue}
              setMenuTransformValue={setMenuTransformValue}
              searchContactsBackgroundColor={searchContactsBackgroundColor}
              hamburgerMenuColor={hamburgerMenuColor}
            />
            <ContactsList
              contacts={filteredContacts}
              onContactClickhandler={onContactClickHandler}
              fontColorDark={fontColorDark}
              hoverBackgroundColor={hoverBackgroundColor}
              setHoverBackgroundColor={setHoverBackgroundColor}
            />
          </div>
          <div
            className="message-container"
            style={{ backgroundColor: `${backgroundColor}` }}
          >
            <ChatTitleField
              selectedContact={selectedContact}
              fontColorDark={fontColorDark}
            />
            <MessageField
              chatMessages={chatMessages}
              chatSenderImg={chatSenderImg}
              filteredMessage={filteredMessage}
            />
            <MessageInput
              selectedContact={selectedContact}
              currentUser={currentUser}
              setMessage={setMessage}
              message={message}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppArea;
