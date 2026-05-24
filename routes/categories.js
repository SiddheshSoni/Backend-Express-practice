const express = require("express");
const router = express.Router();

router.get("/categories", (req, res)=>{
    res.send("Here is a list of all categories!")
})

router.post("/categories", (req, res)=>{
    res.send("A new category has been created!")
})


module.exports = router;