const fs = require('fs');
const crypto = require('crypto')
const start  = Date.now()

setTimeout(()=>console.log('hello from timer'),0)
setImmediate(()=>console.log('hello from setImmediate'))




fs.readFile('non_existent_file.txt',(err,data)=>{
    console.log('File read completed')
    setTimeout(()=>console.log('hello from timer 2'),0)
    setTimeout(()=>console.log(`${Date.now()-start}ms timer 3`),4000)
    setImmediate(()=>console.log('hello from setImmediate 2'))

    crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password 1 done')
    })
    crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password 2 done')
    })
    crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password 3 done')
    })
    crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password 4 done')
    })
    crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
        console.log(`${Date.now()-start}ms`,'Password 5 done')
    })

    console.log('after crypto');
    setTimeout(()=>console.log('after crypto from timer '),0)

    


})

console.log('From top level code')

let counter = 0;
for(let i=0;i<1000000000;i++){
    counter++;
}
console.log(`${Date.now()-start}ms and ${counter} is counted number`)
                      