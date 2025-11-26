const express = require('express');
const dotenv = require('dotenv');
const Staff = require('./models/Staff.model');
const connectDB = require('./config/db')
dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) =>{
    res.send("Staff Api building");
})
//get, put, post , delete
app.post('/staff', async (req, res) =>{
   const staff = await Staff.create(req.body);
    console.log('staff api');
    res.status(201).json({
        success:true,
        message:"Staff data send successfully",
        data: staff
    });
});

app.get('/staff', async (req, res) =>{
    const staff = await Staff.find();
    res.json(staff)
});

app.get('/staff/:id' ,async (req, res) =>{
    const staff = await Staff.findById(req.params.id);
    res.json(staff);
})

app.put('/staff/:id' , async (req, res) =>{
  const staff = await Staff.findByIdAndUpdate(req,params.id, req.body);
  res.json({
    message: 'Stuedent update successfully',
    data : staff
  })
})

app.delete('/staff/:id', async (req, res) =>{
    const staff = await Staff.findByIdAndDelete(req.params.id);
     res.json({
        message: "Student delelted"
     })
})
//listen on server
app.listen(3000, (req, res) =>{
    console.log(`Server is running on the port ${process.env.SERVER_URL}:${process.env.SERVER_PORT}`)
})