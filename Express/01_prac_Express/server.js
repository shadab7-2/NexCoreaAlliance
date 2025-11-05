// Import express
const express = require('express');
const app =  express();

//Define Port
const PORT = 3000;

//Basic Routes
app.get('/', (req, res)=>{
    res.send("Wellcome to Welcome to my Express Server 🚀")
})

app.get('/about', (req,res)=>{
    res.send("Wellcome to the About Page .")
});

app.get('/contact', (req, res) =>{
    res.send("Wellcome to the Contact Page .")
})

//Start Server
app.listen(PORT,()=>{
      console.log(`Server running on http://localhost:${PORT}`);
})