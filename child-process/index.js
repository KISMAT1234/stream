const fs = require('fs');
const crypto = require('crypto')

setTimeout(()=>console.log('hello from timer'),0)
setImmediate(()=>console.log('hello from setImmediate'))

fs.readFile('non_existent_file.txt',(err,data)=>{
    console.log('File read completed')
    setTimeout(()=>console.log('hello from timer 2'),0)
    setTimeout(()=>console.log('hello from timer 3'),4000)
    setImmediate(()=>console.log('hello from setImmediate 2'))

    crypto.pbkdf2('passsword','salt1',100000,1024,'sha512',()=>{
        console.log('Password 1 done')
    })
})
console.log('From top level code')


                      