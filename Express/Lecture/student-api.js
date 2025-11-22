const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello World');
});

//API to fetch All Student
app.get('/students', (req, res) =>{
    let stuents = JSON.parse(fs.readFileSync('students.json', 'utf-8'));
    res.json(stuents);
})

//API to fetch one student
app.get('/students/:id', (req, res)=>{
    let obj = JSON.parse(fs.readFileSync('students.json', 'utf-8'));
    obj = obj.students.find(student => student.id === parseInt(req.params.id));

    if(obj){
        res.json(obj)
    }else{
        res.status(404).json({message: "Student not found ."});
    }
    res.json(obj);
});
app.delete('/students/:id', (req, res) =>{
    let obj =JSON.parse(fs.readFileSync('students.json', 'utf-8'));
    obj.students = obj.students.filter(student => student.id !== parseInt(req.params.id));
    fs.writeFileSync('students.json', JSON.stringify(obj));
    res.status(200).json({message: "student deleted successfully"});
})
app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
})