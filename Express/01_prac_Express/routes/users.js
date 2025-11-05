const express = require("express");
const router = express.Router();

//Get all user
router.get("/", (req, res) => {
    res.send("All users listed here");
});

//POST create a new user
router.post("/", (req, res) =>{
    res.send(`User created : ${req.body.name}` )
});

module.exports = router;