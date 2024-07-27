const express = require('express');
const app = express();
const {Worker} = require("worker_threads")

app.get('/non-blocking',(req,res)=>{
    res.status(200).send("This page is non blocking");

})

app.get('/blocking',(req,res)=>{
    const worker = new Worker("./worker.js")
    worker.on("message",(data)=>{
        // console.log(data,'data from worker')
        res.status(200).send(`This page is blocking ${data}`);
    })

    worker.on("error",(error)=>{
        res.status(200).send("Error");
    })
})

app.listen(8000,()=>{
    console.log(`App listening on port 8000`)
})

// let counter = 0;
// for(let i=0;i<10000000000;i++){
//     counter++;
// }
// res.status(200).send("This page is blocking the main thread");