const express = require("express");
const app = express();

app.set("view engine", "ejs");
// app.set('views', './views')
app.use(express.static("public"));

app.get("/", (req, res) => {
  const user = { 
    name: "shadab", 
    role: "Developer",
    favoriteLanguage: "Javascript",
    };
  res.render("index", { user });// passing data to EJS
});
app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
