const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express App, hi!");
});

app.get("/about", (req, res) => {
  res.send("Hi! This is About Page");
});

app.listen(3000, () => {
  console.log("Server running on port 3001");
});
