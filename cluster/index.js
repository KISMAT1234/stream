const express = require('express');
const app = express();

// app.get('/non-blocking',(req,res)=>{
//     res.status(200).send("This page is non blocking");

// })

app.get('/heavy',(req,res)=>{
    let counter = 0;
    for(let i=0;i<1000000000;i++){
        counter++;
    }
    res.send(`the result of cpu intensive work is ${counter}`)

  
})

app.listen(8000,()=>{
    console.log(`App listening on port 8000`)
})


//loadtesting 
// npx loadtest -n 1200 -c 400 -k http://localhost:8000