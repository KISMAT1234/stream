const fs = require('fs');
setTimeout(()=>console.log('hello from timer'),0)
setImmediate(()=>console.log('hello from setImmediate'))

fs.readFile('non_existent_file.txt',(err,data)=>{
    console.log('File read completed')
    setTimeout(()=>console.log('hello from timer 2'),0)
    setTimeout(()=>console.log('hello from timer 3'),4000)
    setImmediate(()=>console.log('hello from setImmediate 2'))


})
console.log('From top level code')


                      