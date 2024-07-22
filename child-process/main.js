const { exec, execFile, spawn, fork } = require('child_process');
const path = require('path');

// __dirname is available by default in CommonJS
// const __filename = path.resolve();  // This sets __filename correctly

const __dir = path.dirname(__filename);
 const start = Date.now();
//  console.log(start,'main file date')


 //exec
// exec('ls -lh', (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout:\n${stdout}`);
// });

// let counter = 0;
// for(i=0;i<1000000000; i++){
//     counter++;
// }
// console.log(`${Date.now()-start}ms Processing ${counter} in main file`)


// console.log('before')
// setTimeout(() =>console.log(` timer`),2000)
// //execFile
// const fileProcessorPath = path.resolve(__dir, 'execFileProcessor.js');
// execFile('node',[fileProcessorPath], (error, stdout, stderr) => {
//     console.log('inside')
//         if (error) {
//                 console.log(`error: ${error.message}`);
//                 return;
//             }
//             if (stderr) {
//                     console.log(`stderr: ${stderr}`);
//                     return;
//                 }
//                 console.log(`stdout:\n${stdout}`)
// });
// console.log('after') 
// setTimeout(() =>console.log('timer 2'),0)

// let abs = 0;
// for(i=0;i<1000000000; i++){
//     abs++;
// }
// console.log(`${Date.now()-start}ms Processing ${abs} in main but at last`)



//spwan
const spwanedChild = spawn('find',['.']);
spwanedChild.stdout.on('data',(data)=>{
 console.log(`stdout:\n${data}`);
})
spwanedChild.stderr.on('data',(data)=>{
    console.log(`stderr:\n${data}`);
})
spwanedChild.on('error',(error)=>{
    console.log(`stdout:\n${data.message}`);
   })
spwanedChild.on('close',(code)=>{
    console.log(`child process exited with  ${code}`);
})





















