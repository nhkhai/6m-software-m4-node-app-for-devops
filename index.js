require("dotenv").config();

const express = require("express");
const app = express();

const print = require("./controller");

app.get("/", print);

app.get("/introduce", (req, res) => {
  res.send("Hello I am Heng Khai");
});

// GET /home: prints "This is the home page".
app.get("/home", (req, res) => {
  res.send("This is the home page");
});

// POST /user: gets a user object (name, email, password) and prints the name and email.
app.post("/user", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Missing fields");
  }

  res.status(200).send(`Name: ${name}, Email: ${email}, Password: ${password}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
