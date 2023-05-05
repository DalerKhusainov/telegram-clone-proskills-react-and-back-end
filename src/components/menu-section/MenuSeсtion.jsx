import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./menu-section.styles.css";
import { setInitialName } from "../../functions/functions";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import CampaignIcon from "@mui/icons-material/Campaign";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SettingsIcon from "@mui/icons-material/Settings";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import LogoutIcon from "@mui/icons-material/Logout";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export const MenuSeсtion = ({
  menuTransformValue,
  setMenuTransformValue,
  user,
  onNightModeHandler,
  backgroundColor,
  fontColorDark,
}) => {
  const [hiddenValue, setHiddenValue] = useState("130");
  const [rotateValue, setRotateValue] = useState("0");
  const navigate = useNavigate();

  const onClickExpandMoreIconHandler = () => {
    if (hiddenValue === "0") {
      setHiddenValue("130");
      setRotateValue("180");
    } else {
      setHiddenValue("0");
      setRotateValue("0");
    }
  };

  return (
    <>
      <div
        className="menu-area"
        style={{ transform: `translateX(-${menuTransformValue}%)` }}
      >
        <div className="menu" style={{ backgroundColor: `${backgroundColor}` }}>
          <div
            className="menu-current-account"
            style={{ backgroundColor: `${backgroundColor}` }}
          >
            <div className="menu-account-img">{setInitialName(user)}</div>
            <div className="menu-account-name-field">
              <div className="menu-account-name-emoji-fieid">
                <p
                  className="menu-account-name"
                  style={{ color: `${fontColorDark}` }}
                >
                  {user}
                </p>
                <p className="menu-emoji-status">Set Emoji Status</p>
              </div>
              <div
                className="menu-account-name-field-icon"
                style={{ transform: `rotate(${rotateValue}deg)` }}
                onClick={onClickExpandMoreIconHandler}
              >
                <ExpandMoreIcon fontSize="large" color="inharite" />
              </div>
            </div>
          </div>
          <div
            className="menu-buttons"
            style={{ transform: `translateY(-${hiddenValue}px)` }}
          >
            <div className="menu-btn-add-contact-and-logout-field">
              <div className="add-contact-field">
                <div className="btn-add-contact">+</div>
                <p
                  className="btn-add-contact-text"
                  style={{ color: `${fontColorDark}` }}
                >
                  Add contact
                </p>
              </div>
              <div className="logout-field" onClick={() => navigate("/")}>
                <div className="logout-icon">
                  <LogoutIcon fontSize="small" />
                </div>
                <p
                  className="logout-text"
                  style={{ color: `${fontColorDark}` }}
                >
                  Log out
                </p>
              </div>
            </div>
            <div className="menu-button">
              <div className="btn-icon clr-blue">
                <GroupIcon color="inherit" />
              </div>
              <p className="btn-name" style={{ color: `${fontColorDark}` }}>
                New Group
              </p>
            </div>
            <div className="menu-button">
              <div className="btn-icon clr-yellow">
                <CampaignIcon color="inherit" />
              </div>
              <p className="btn-name" style={{ color: `${fontColorDark}` }}>
                New Channel
              </p>
            </div>
            <div className="menu-button">
              <div className="btn-icon clr-red">
                <PersonIcon color="inherit" />
              </div>
              <p className="btn-name" style={{ color: `${fontColorDark}` }}>
                Contacts
              </p>
            </div>
            <div className="menu-button">
              <div className="btn-icon clr-green">
                <LocalPhoneIcon color="inherit" />
              </div>
              <p className="btn-name" style={{ color: `${fontColorDark}` }}>
                Calls
              </p>
            </div>
            <div className="menu-button">
              <div className="btn-icon clr-blue">
                <BookmarkIcon color="inherit" />
              </div>
              <p className="btn-name" style={{ color: `${fontColorDark}` }}>
                Saved Messages
              </p>
            </div>
            <div className="menu-button">
              <div className="btn-icon clr-violet">
                <SettingsIcon color="inherit" />
              </div>
              <p className="btn-name" style={{ color: `${fontColorDark}` }}>
                Settings
              </p>
            </div>
            <div className="menu-button">
              <div className="btn-icon clr-indigo">
                <BedtimeIcon color="inherit" fontSize="small" />
              </div>
              <div className="btn-night-mode-field">
                <p className="btn-name" style={{ color: `${fontColorDark}` }}>
                  Night Mode
                </p>
                <Switch {...label} onChange={onNightModeHandler} />
              </div>
            </div>
          </div>
          <div className="app-version-field">
            <p className="app-version-name">Telegram Desktop</p>
            <p className="app-version-number">Version 4.8.1 x64 - About</p>
          </div>
        </div>
        <div
          className="empty-menu"
          onClick={() => {
            menuTransformValue === "0"
              ? setMenuTransformValue("100")
              : setMenuTransformValue("0");
          }}
        ></div>
      </div>
    </>
  );
};
