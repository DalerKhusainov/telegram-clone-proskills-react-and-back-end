const express = require("express");
const cors = require("cors");
const app = express();

const contactsRouter = require("./routes/contacts");
const usersRouter = require("./routes/users");
const messagesRouter = require("./routes/messages");

app.use(cors());
app.use("/messages", messagesRouter);
app.use("/contacts", contactsRouter);
app.use("/users", usersRouter);
app.use(express.json());

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
