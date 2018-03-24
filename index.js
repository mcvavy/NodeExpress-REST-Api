const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

//Setting up express app
const app = express();

mongoose.connect("mongodb://localhost/ninjago");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use("/api", require("./routes/api"));

app.listen(process.env.port || 4000, () => console.log("Now listening for requests"));