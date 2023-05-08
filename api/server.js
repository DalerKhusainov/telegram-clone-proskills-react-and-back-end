const express = require("express");
const cors = require("cors");
const app = express();
// const Joi = require("joi");

const contactsRouter = require("./routes/contacts");
const usersRouter = require("./routes/users");

app.use(cors());
app.use("/contacts", contactsRouter);
app.use("/users", usersRouter);
app.use(express.json());

// const courses = [
//   { id: 1, name: "course1" },
//   { id: 2, name: "course2" },
//   { id: 3, name: "course3" },
// ];

// app.get("/api/courses", (req, res) => {
//   res.send(courses);
// });

// app.post("/api/courses", (req, res) => {
//   const { error, value } = validateCourse(req.body);

//   if (error) return res.status(400).send(error.details[0].message); // <-------

//   const course = {
//     id: courses.length + 1,
//     name: value.name,
//   };

//   courses.push(course);
//   res.send(courses);
// });

// const validateCourse = (course) => {
//   const createCourseSchema = Joi.object({
//     name: Joi.string().min(3).required(),
//   });
//   return createCourseSchema.validate(course);
// };

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
