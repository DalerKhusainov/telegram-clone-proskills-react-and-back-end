import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./search-contacts.scss";

export const SearchContacts = () => {
  return (
    <div className="search-contacts">
      <div className="menu-icon">
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
      <div className="search-contacts__form">
        <form>
          <input type="text" name="" id="" placeholder="Search..." />
        </form>
      </div>
    </div>
  );
};
