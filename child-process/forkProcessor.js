// process.on('message',(msg)=>{
//     console.log('Messages from parent process:',msg)
// })

// let counter = 0;
// setInterval(()=>{
//     process.send({counter: counter++})
// },1000)
// console.log('counter',counter)

let counter = 0;
for(i=0;i<1000000000; i++){
    counter++;
}
process.send(counter)