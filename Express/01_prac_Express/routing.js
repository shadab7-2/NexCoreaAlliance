 const express = require('express');
 const app = express();

 //Buil-in Middleware
 app.use(express.json());

  //Import routers
  const projectRoutes =require("./routes/products");
  const userRoutes = require("./routes/users");

  //Mount routes (like connectiong roads to main highway)
  app.use("/api/projects", projectRoutes);
  app.use("/api/users", userRoutes);

  //Root Route
  app.get("/", (req, res) =>{
    res.send("Welcome to Sahdab's Modular express app!");
  });

  // Start server
  app.listen(3000, ()=>{
    console.log("server running on http://localhost:3000");
  }); 