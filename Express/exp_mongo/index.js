const express = require("express");
const Student = require("./modules/students_models");
const mongoose = require('mongoose');

//Mongodb connections
 mongoose.connect('mongodb://127.0.0.1:27017/nexcore_students_app')
 .then(()=>{console.log('Connected to MongoDB')})
 .catch((err)=>{console.log(err)});

//Express Js app initializations
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended : true}))

app.get("/", async (req, res) => {
  let students = await Student.find();
  res.render('index', {students});
});

app.post('/add-student', (req, res)=>{
  Student.create(req.body);
  res.redirect('/');
});

app.get('/delete-student/:id',async (req, res) =>{
  await Student.findByIdAndDelete(req.params.id);
  res.redirect('/')
})

app.get('/edit-student/:id', async (req, res) =>{
  let student = await Student.findById(req.params.id)
   Student.findByIdAndUpdate(req.params.id)
    res.render('edit-student', {student})
});

app.post('/edit-student/:id', async(req, res) =>{
  await Student.findByIdAndUpdate(req.params.id, req.body)
  res.redirect('/')
})
     
app.listen(3000, () => {
  console.log("Server is running on the port : http://localhost:3000");
});
