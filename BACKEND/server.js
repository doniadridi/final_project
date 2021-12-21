const express =require("express");
const morgan = require("morgan");
const connectDB =require("./database/db");
const bodyParser = require ('body-parser');
const cors = require('cors')
require("dotenv").config();

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));


app.use(morgan("dev"));
//connect to db
connectDB();
app.use(cors());
app.use (bodyParser());
//routes 
app.use("/user",require("./routes/route"));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", " ,content-type");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  
  next();
  
});
const PORT =5000
app.listen(PORT,()=>{
    console.log('Server is running successfully on port',PORT);})