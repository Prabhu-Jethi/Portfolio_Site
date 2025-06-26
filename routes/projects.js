const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET /api/projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error("Error fetching projects:", err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
