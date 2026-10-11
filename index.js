  const express = require('express');
  const app = express();
  const mongoose =require('mongoose');
  const chat = require('./schema.js');

   const path =require('path');
   app.set("view engine","ejs");
   app.set("views",path.join(__dirname,"views"));
   app.use(express.static(path.join(__dirname,"public")))
     let port = 9000;
  main()
  .then((res)=>{
    console.log("sucess")

  })
  .catch((err)=>{
    console.log(err)
  })
   async function main() {
      await mongoose.connect("mongodb://localhost:27017/chatbot")
   }





  app.get("/alldata", async( req,res)=>{
        
      let chats = await chat.find();
    
    res.render("chats.ejs",{chats})
  })

     app.get("/new",(req,res)=>{
  
      res.render("form.ejs")
     

     }) 



     app.listen(port,()=>{

  console.log(`server is running on the ${port}`)


     })