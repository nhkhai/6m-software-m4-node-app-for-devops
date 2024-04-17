require("dotenv").config();

const express = require("express");
const app = express();

const print = require("./controller");

app.get("/", print);
app.get("/hello", print);
app.get("/home", print_home);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
