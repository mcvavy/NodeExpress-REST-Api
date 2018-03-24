const express = require("express");

const app = express();

app.get("/api", (req, res) => {
    console.log("GET resquest");
    res.send({name: "Yoshi"});
})

app.listen(process.env.port || 4000, () => console.log("Now listening for requests"));