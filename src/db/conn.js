// Connection Js
const mongoose=require("mongoose");
// Linking to Database Environment on MongoDb Compass
const url="mongodb://localhost:27017";
// Error handling Conditions If Connection to Server is Successful then Display Connection is Successful other wise throw error
mongoose.connect(url,{

}).then(()=>{
    console.log("connection is successfull");
}).catch((err)=>{
    console.log(err);
})