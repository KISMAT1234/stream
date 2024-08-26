const express = require('express');
const mongoose = require('mongoose');
const EventEmitter = require('events').EventEmitter;

const app= express();
app.use(express.json());
// app.use("/users", userRoutes);

// const Database = async() => {
// try{
//     await mongoose.connect('mongodb+srv://kismat:kismat@cluster0.mnlkha6.mongodb.net/donation');
//     // console.log('MongoDb connected');
// } catch(err){
//     // console.log('connection failed');
//     console.error(err);
// }
// };
// Database();
let task = []
app.post('/',(req,res)=>{
    task.push(function(){
        return req.headers
   });

   const hugeArray = new Array(10000000).fill(req)

   req.user = {
    id:1,
    username:'Inefficient User',
    badObject:req,
    hugeArray
   }

   eventEmitter.on('start', () => {
    console.log('Useless event emitted')
   })

   setTimeout( () => {
    res.send('Hello world')
   })
});



const PORT = 8080;
app.listen(PORT,()=> console.log(`Listening on port ${PORT}`));

module.exports=app;
