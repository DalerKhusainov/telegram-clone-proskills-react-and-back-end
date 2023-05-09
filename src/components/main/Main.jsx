import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../../pages/login/Login";
import { Home } from "../../pages/home/Home";
import { Register } from "../../pages/register/Register";
import "./main.styles.scss";

export const Main = (props) => {
  const [currentUser, setCurrentUser] = useState([]);
  const [curUserContacts, setCurUserContacts] = useState([]);

  console.log(curUserContacts);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Login
                  setCurUserContacts={setCurUserContacts}
                  setCurrentUser={setCurrentUser}
                />
              }
            />
            <Route
              path="home"
              element={
                <Home
                  curUserContacts={curUserContacts}
                  currentUser={currentUser}
                />
              }
            />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
