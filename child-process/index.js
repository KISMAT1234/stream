// const fs = require('fs');
// const crypto = require('crypto')
const start  = Date.now()

// process.env.UV_THREADPOOL_SIZE = 4

// setTimeout(()=>console.log('hello from timer'),0)
// setImmediate(()=>console.log('hello from setImmediate'))

// fs.readFile('non_existent_file.txt',(err,data)=>{
//     console.log('File read completed')
//     setTimeout(()=>console.log('hello from timer 2'),0)
//     setImmediate(()=>console.log('hello from setImmediate 2'))

//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 1 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 2 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 3 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 4 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 5 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 6 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 7 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 8 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 9 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 10 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 10 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 10 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 10 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 10 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 10 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 10 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 10 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 10 done')
//     })
//     crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
//         console.log(`${Date.now()-start}ms`,'Password 10 done')
//     })

//     console.log('after crypto');
//     setTimeout(()=>console.log('after crypto from timer '),0)

// })











console.log('From top level code')

setTimeout(()=>console.log(`${Date.now()-start}ms hello from timer`),1000)

console.log(` From top level code 1`)



let counter = 0;
for(let i=0;i<1000000000;i++){
    counter++;
}
console.log(`${Date.now()-start}ms and ${counter} is counted number`)
                      
setTimeout(()=>console.log(`${Date.now()-start}ms hello from timer 2`),5000)

console.log('From top level code 2')

