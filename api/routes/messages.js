const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.use(express.json());

const messages = [
  {
    messageId: "111",
    senderId: "222",
    receiverId: "333",
    message: "Test Message",
    date: "Just now",
  },
  {
    messageId: "222",
    senderId: "444",
    receiverId: "555",
    message: "Test Message",
    date: "Just now",
  },
];

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
