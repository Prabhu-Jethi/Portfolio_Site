const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const contactRoutes = require("./routes/contact");
const projectRoutes = require("./routes/projects");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => res.send("Portfolio API Running"));

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio")
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log("MongoDB Connection Error", err));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);