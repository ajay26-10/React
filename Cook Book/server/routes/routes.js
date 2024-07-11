const express = require("express");
const router = express.Router();
const recipes = require("../models/recipes");
const verifyToken = require("../middleware/authMiddleware")


router.get("/recipes",verifyToken, async (req, res) => {
  const details = await recipes.find({});
  res.json(details);
});


router.post("/add-recipe", async (req, res) => {
  try {
    const data = req.body;
    const result = await recipes.create(data);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

module.exports = router;