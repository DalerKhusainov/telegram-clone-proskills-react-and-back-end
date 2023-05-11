const Joi = require("joi");
const express = require("express");
const router = express.Router();
const { LocalStorage } = require("node-localstorage");
const storage = new LocalStorage("./local-storage/messages");

router.use(express.json());

const messages = [];

// router.get("/test", (req, res) => {
//   res.send(storage.getItem("testMessage"));
// });

// storage.setItem("testMessage", JSON.stringify(testMessage));

router.get("/:senderIdParam/:receiverIdParam", (req, res) => {
  const { senderIdParam, receiverIdParam } = req.params;
  const filteredMessages = messages.filter(
    (message) =>
      message.senderId === senderIdParam &&
      message.receiverId === receiverIdParam
  );
  res.send(filteredMessages);
});

router.post("/", (req, res) => {
  const { error, value } = validateMessage(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const message = {
    messageId: value.messageId,
    senderId: value.senderId,
    receiverId: value.receiverId,
    message: value.message,
    date: value.date,
  };

  messages.push(message);
  res.send(messages);
});

const validateMessage = (postValue) => {
  const createMessageSchema = Joi.object({
    messageId: Joi.string().min(1).required(),
    senderId: Joi.string().min(1).required(),
    receiverId: Joi.string().min(1).required(),
    message: Joi.string().min(1).required(),
    date: Joi.string().required(),
  });
  return createMessageSchema.validate(postValue);
};

module.exports = router;
