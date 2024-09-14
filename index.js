const express = require('express');
const mongoose = require('mongoose');

const app= express();
app.use(express.json());
// // app.use("/users", userRoutes);

// // const Database = async() => {
// // try{
// //     await mongoose.connect('mongodb+srv://kismat:kismat@cluster0.mnlkha6.mongodb.net/donation');
// //     // console.log('MongoDb connected');
// // } catch(err){
// //     // console.log('connection failed');
// //     console.error(err);
// // }
// // };
// // Database();
// app.post('/api/',(req,res)=>{
//     res.sendStatus(200);
// });



// const PORT = 8080;
// app.listen(PORT,()=> console.log(`Listening on port ${PORT}`));

// module.exports=app;




// const add = (a,b) => {
//     return a + b
// }

// module.exports = {
//     add
// } 

const { PrismaClient } =  require("@prisma/client");
const prisma = new PrismaClient()

module.exports = prisma


