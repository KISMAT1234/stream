const express = require('express');
const app = express();
const {Worker} = require("worker_threads")

app.get('/non-blocking',(req,res)=>{
    res.status(200).send("This page is non blocking");

})

app.get('/blocking',(req,res)=>{
    const worker = new Worker("./worker.js")
    worker.on("message",(data)=>{
        console.log(data,'data from worker')
        res.status(200).send(`This page is blocking ${data}`);
    })

    worker.on("error",(error)=>{
        res.status(200).send("Error");
    })

  
})

app.listen(8000,()=>{
    console.log(`App listening on port 8000`)
})
