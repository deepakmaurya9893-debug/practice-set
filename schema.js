const   mongoose= require("mongoose")

      const userschema = mongoose.Schema({
           
        from:{
        type:String,


        },
        to:{

             type: String
        },
        msg:{
            type:String
           

        },
        date:{
            type: Date,
             default:  Date.now
        }
        
      })


        const chat = new mongoose.model("chat",userschema)


         



        module.exports=chat;

