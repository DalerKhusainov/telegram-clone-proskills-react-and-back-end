import React from "react";
import "./register-panel.styles.css";

import TextField from "@mui/material/TextField";

export const RegisterPanel = () => {
  return (
    <div className="register-panel-container">
      <h5 className="register-text">Register</h5>
      <div className="register-input-first-name">
        <TextField
          //   className="input-name"
          //   onChange={(e) => setName(e.target.value)}
          fullWidth
          id="outlined-basic"
          label="Enter your name"
          variant="outlined"
        />
      </div>
      <div className="register-input-last-name">
        <TextField
          //   className="input-name"
          //   onChange={(e) => setName(e.target.value)}
          fullWidth
          id="outlined-basic"
          label="Enter your name"
          variant="outlined"
        />
      </div>
      <div className="register-input-email">Email</div>
      <div className="register-input-password">Password</div>
      <div className="register-import-toggle">Import all contacts</div>
    </div>
  );
};
