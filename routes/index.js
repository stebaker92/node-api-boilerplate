var router = require("express").Router();

var test = require("./test");

router.get("/", function (req, res) {
    res.json("Api is alive");
});

router.use('/test', test);


module.exports = router;