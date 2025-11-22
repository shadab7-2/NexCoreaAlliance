const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/blogContent/:slug", (req, res) => {
  res.send("This is blog Content page" + req.params.slug);
});

app.get("/user-details/:id", (req, res) => {
  res.send("User Details of Id : " + req.params.id);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
