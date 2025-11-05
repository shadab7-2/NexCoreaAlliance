const express = require("express");
const router = express.Router();

//Get all projects
router.get("/", (req, res) =>{
    res.send("list of all projects");
});

//GET a single project by ID
router.get("/:id", (req, res) =>{
    res.send(`Project details for ID :${req.params.id}`);
});

//POST new project
router.post("/", (req, res) =>{
    res.send(`New Project created : ${req.body.title}`);
});

module.exports = router;