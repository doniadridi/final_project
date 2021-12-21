const Mongoose =require("mongoose");

const connectDB =async () => {
    try {
  await Mongoose.connect(
    'mongodb+srv://donia:test@cluster0.11alt.mongodb.net/TEST?retryWrites=true&w=majority',
    {
        useNewUrlParser : true , 
         useUnifiedTopology : true , 
         
         
         
      }, 
     
    
    
    )
  console.log("database connect")
    }catch(error){
      console.log(error)
      
console.log("database is not connect");
    }
};
module.exports=connectDB;