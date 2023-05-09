const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.use(express.json());

const messages = [];

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
  const createCourseSchema = Joi.object({
    messageId: Joi.string().min(1).required(),
    senderId: Joi.string().min(1).required(),
    receiverId: Joi.string().min(1).required(),
    message: Joi.string().min(1).required(),
    date: Joi.string().required(),
  });
  return createCourseSchema.validate(postValue);
};

module.exports = router;
