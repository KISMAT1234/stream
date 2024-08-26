const express = require('express');
const app = express();

// app.get('/non-blocking',(req,res)=>{
//     res.status(200).send("This page is non blocking");

// })

// app.get('/heavy2',(req,res)=>{
   
// console.log('hello from top')
// process.env.UV_THREADPOOL_SIZE
// console.log(process.env.UV_THREADPOOL_SIZE,'thread pool size')
    
    // let counter = 0;
    // for(let i=0;i<10000000000;i++){
    //     counter++;
    // }
    // setTimeout(()=>{
    //     console.log('timer on ')
    // },5000)

    // console.log(counter);
    // console.log('hello from below')

 
    // res.send(`the result of cpu intensive work is heavy2 ${counter}`)  
// })


// app.get('/heavy3',(req,res)=>{
//     let counter = 0;
//     for(let i=0;i<1000000000;i++){
//         counter++;
//     }
//     res.send(`the result of cpu intensive work is heavy3 ${counter}`)

  
// })
// app.get('/heavy1',(req,res)=>{
//     let counter = 0;
//     for(let i=0;i<10000000000;i++){
//         counter++;
//     }
//     res.send(`the result of cpu intensive work is heavy1 ${counter}`)
// })

// app.listen(8000,()=>{
//     console.log(`App listening on port 8000`)
// })


//loadtesting ---------
// npx loadtest -n 1200 -c 400 -k http://localhost:8000

// pm2 memory usage test ------
// npx pm2 start primary.js
// npx pm2 monit
// npx pm2 status
// npx pm2 stop primary.js
