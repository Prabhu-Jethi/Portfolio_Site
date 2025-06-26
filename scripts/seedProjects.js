const mongoose = require("mongoose");
const Project = require("../models/Project");

mongoose.connect("mongodb://localhost:27017/portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleProjects = [
  {
    title: "MERN Todo App",
    description: "Manage tasks using MongoDB, Express, React, and Node.js.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Prabhu-Jethi/To-do-App",
  },
  {
    title: "Portfolio Website",
    description: "My portfolio site with React, Bootstrap, and animations.",
    tech: ["React", "Bootstrap", "AOS", "Node.js"],
    github: "https://github.com/Prabhu-Jethi/Portfolio_Site",
  },
];

Project.insertMany(sampleProjects)
  .then(() => {
    console.log("✅ Sample projects inserted!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Error inserting sample projects:", err);
    mongoose.disconnect();
  });
