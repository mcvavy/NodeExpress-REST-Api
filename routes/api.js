const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

router.get("/ninjas", (req, res) => {
    res.send({ type: "GET" });
});

router.post("/ninjas", (req, res) => {
    Ninja.create(req.body).then((ninja) => {
        res.send(ninja);
    });
});

router.put("/ninjas/:id", (req, res) => {
    res.send({ type: "PUT" });
});

router.delete("/ninjas/:id", (req, res) => {
    res.send({ type: "DELETE" });
});

module.exports = router;

