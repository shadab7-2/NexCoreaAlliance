const express = require("express");
const Student = require("./modules/students_models");
const mongoose = require("mongoose");

const Admin = require("./modules/Admin_model");

const bcrypt = require("bcrypt");
const session = require("express-session");

//Mongodb connections
mongoose
  .connect("mongodb://127.0.0.1:27017/nexcore_students_app")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//Express Js app initializations
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "random-key", //random key 32 charecters
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  Admin.create(req.body);
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", async (req, res) => {
  let admin = await Admin.findOne({ email: req.body.email });
  if (admin) {
    let isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      admin.password
    );
    if (isPasswordCorrect) {
      req.session.admin = admin;
      res.redirect("/");
    } else {
      console.log("Invalid password");
      res.redirect("/login");
    } 
  } else {
    console.log("No admin found");
    res.redirect("/login");
  }
});
app.get("/", async (req, res) => {
  let students = await Student.find();
  res.render("index", { students });
});

app.post("/add-student", (req, res) => {
  Student.create(req.body);
  res.redirect("/");
});

app.get("/delete-student/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

app.get("/edit-student/:id", async (req, res) => {
  let student = await Student.findById(req.params.id);
  Student.findByIdAndUpdate(req.params.id);
  res.render("edit-student", { student });
});

app.post("/edit-student/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on the port : http://localhost:3000");
});
