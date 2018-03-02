var router = require("express").Router();
var express = require("express")

var app = require("../server");

router.get("/", (req, res) => {
    res.send("This is a test route");
});

module.exports = router;