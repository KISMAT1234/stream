const express = require('express');
const app = express();

app.get('/non-blocking',(req,res)=>{
    res.status(200).send("This page is non blocking");

})


app.get('/blocking',(req,res)=>{
    let counter = 0;
    for(let i=0;i<1000000000000;i++){
        counter++;
    }
    res.status(200).send(`This page is blocking ${counter}`);
})

app.listen(8000,()=>{
    console.log(`App listening on port 8000`)
})
