
const express = require("express");
const app = express();

//Builts in JSON middlewares
app.use(express.json());

//Custom request logger middleware
app.use((req, res, next) =>{
    const startTime = Date.now();

    console.log(`${req.method} ${req.url} request received .`);

    //Add a property to a request
    req.requestTime = new Date().toLocaleString();

    //Run after responce finish
    res.on('finish', () =>{
        const duration = Date.now() - startTime;
        console.log(`${req.method} ${req.url} completed in ${duration}ms`);
    });
    next();//Dont forgot this

   
})

 //🧠 Step 3: Add Routes That Use This Middleware Data
    app.get("/", (req, res) => {
       res.send(`Hello Shadab this request was received at : ${req.requestTime}`);
    });
    app.get("/projests", (req, res) =>{
        res.send("here are your portfolio projects!");
    });

    app.listen(3000, ()=>{
        console.log("Server is running on http://localhost:3000");
    })