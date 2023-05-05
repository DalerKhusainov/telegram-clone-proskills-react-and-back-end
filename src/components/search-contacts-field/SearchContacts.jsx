import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import "./search-contacts.styles.css";

export default function SearchContacts({
  onSearchHandler,
  menuTransformValue,
  setMenuTransformValue,
  searchContactsBackgroundColor,
  hamburgerMenuColor,
}) {
  return (
    <div className="search-contacts-field">
      <div
        className="menu-icon"
        style={{ color: `${hamburgerMenuColor}` }}
        onClick={() => {
          menuTransformValue === "100"
            ? setMenuTransformValue("0")
            : setMenuTransformValue("100");
        }}
      >
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
      </div>
      <div
        className="search-input"
        style={{ backgroundColor: `${searchContactsBackgroundColor}` }}
      >
        <TextField
          onChange={onSearchHandler}
          id="outlined-basic"
          variant="outlined"
          size="small"
          fullWidth={true}
          placeholder="Search"
        />
      </div>
    </div>
  );
}

// End point on server?
// peckage nodemon?
