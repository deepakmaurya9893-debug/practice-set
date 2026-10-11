
  const chat = require('./schema.js')
const mongoose = require('mongoose');



main()
 .then((res)=>{
    console.log("connection is succesful")
 })
 .catch((err)=>{
     console.log(err)
 })

async function main() {
    await mongoose.connect("mongodb://localhost:27017/chatbot")
}

chat.insertMany([
       
        {
         from:"amir",
         to : "rajexh",
         msg:"i love india",
         date:new Date()
       },
       {
         from:"akhilesh",
         to : "hari",
         msg:"i love india",
         date:new Date()
       },
       {
         from:"aman",
         to : "anish",
         msg:"i love india",
         date:new Date()
       },
       {
         from:"akku",
         to : "allu",
         msg:"i love india",
         date:new Date()
       },





         ])


