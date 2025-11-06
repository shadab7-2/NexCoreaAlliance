const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("<h1> Hello World </h1>");
});
app.get('/express/about', (req , res ) =>{
    res.send("<h1> About ExpressJs </h2>");
})
app.get('/express/contact', (req, res) =>{
    res.send("<h1> Contact EXpress Js</h1>");
});
app.get('/product/:id-:name', (req, res) =>{
    console.log(req.params.name);
    res.json(req.params);
    res.send("<h1> Product Name : " + req.params.name + " and Product ID : " + req.params.id);
});

app.listen(3000, () => {console.log("Server is running http://localhost:3000")});