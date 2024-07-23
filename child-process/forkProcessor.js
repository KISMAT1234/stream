process.on('message',(msg)=>{
    console.log('Messages from parent process:',msg)
})

let counter = 0;
setInterval(()=>{
    process.send({counter: counter++})
},1000)
console.log('counter',counter)