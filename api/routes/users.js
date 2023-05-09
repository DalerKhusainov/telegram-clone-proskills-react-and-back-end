const Joi = require("joi");
const express = require("express");
const router = express.Router();
let uuid = require("uuid");

router.use(express.json());

const users = [
  {
    userId: uuid.v4(),
    firstName: "Daler",
    lastName: "Khusainov",
    email: "dalerkhusainov85@gmail.com",
    password: "101010",
    confirmPassword: "101010",
  },
  {
    userId: uuid.v4(),
    firstName: "Imran",
    lastName: "Khusainov",
    email: "imrankhusainov85@gmail.com",
    password: "202020",
    confirmPassword: "202020",
  },
  {
    userId: uuid.v4(),
    firstName: "Matin",
    lastName: "Khusainov",
    email: "matinkhusainov85@gmail.com",
    password: "303030",
    confirmPassword: "303030",
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const { error, value } = validateUser(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = {
    userId: uuid.v4(),
    firstName: value.firstName,
    lastName: value.lastName,
    email: value.email,
    password: value.password,
    confirmPassword: value.confirmPassword,
  };

  users.push(user);
  res.send(users);
});

const validateUser = (postValue) => {
  const createCourseSchema = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(15).required(),
    confirmPassword: Joi.ref("password"),
  });
  return createCourseSchema.validate(postValue);
};

module.exports = router;
