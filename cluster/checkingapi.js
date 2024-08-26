const axios = require('axios');
const crypto = require('crypto')
const express = require('express');
const app = express();

app.get('/heavy1',async(req,res)=>{
    const start  = Date.now()
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    // if(response){
    //     console.log(`${Date.now()-start}ms`,'response json')
    //     res.send(`the result of cpu intensive work is heavy1`)
        
    // }
    crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
         console.log(`${Date.now()-start}ms`,'Password 10 done')
    })
     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
         console.log(`${Date.now()-start}ms`,'Password 10 done')
    })
    crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password 10 done')
   })
   crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
    console.log(`${Date.now()-start}ms`,'Password 10 done')
   })
//    crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//        console.log(`${Date.now()-start}ms`,'Password 10 done')
//    })

const response1 = await axios.get('https://jsonplaceholder.typicode.com/users');
if(response1){
    console.log(`${Date.now()-start}ms`,'response json')
    res.send(`the result of cpu intensive work is heavy1`)
    
}

// const response2 = await axios.get('https://jsonplaceholder.typicode.com/posts');
// if(response2){
//     console.log(`${Date.now()-start}ms`,'response json')
//     res.send(`the result of cpu intensive work is heavy1`)
    
// }
// const response3 = await axios.get('https://jsonplaceholder.typicode.com/users');
// if(response3){
//     console.log(`${Date.now()-start}ms`,'response json')
//     res.send(`the result of cpu intensive work is heavy1`)
    
// }
// const response4 = await axios.get('https://jsonplaceholder.typicode.com/users');
// if(response4){
//     console.log(`${Date.now()-start}ms`,'response json')
//     res.send(`the result of cpu intensive work is heavy1`)
    
// }
  
    // console.log(response,'response')

    // let counter = 0;
    // for(let i=0;i<10000000000;i++){
    //     counter++;
    // }
    // res.send(`the result of cpu intensive work is heavy1 ${counter}`)
})


app.listen(8000,()=>{
    console.log(`App listening on port 8000`)
})
