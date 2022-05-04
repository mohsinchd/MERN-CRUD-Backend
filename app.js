require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./DB/connection");
const users = require("./DB/Models/userSchema");
const cors = require("cors");
const router = require("./Routes/router");

app.use(cors());
app.use(express.json());

app.use(router);

const port = 8003;

app.listen(port, () => {
  console.log(`Server is Listening on the Port ${port}`);
});
