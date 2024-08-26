const cluster = require('cluster');
const os = require('os');
const path = require('path');

const newPath = path.dirname(__filename);
const cpuCount = os.cpus().length;

const crypto = require('crypto')

// console.log(`CPU count: ${cpuCount}`);
// console.log(`Primary pid = ${process.pid}`);
// console.log(cluster.isPrimary,'checking cluster boolean value');


// if (cluster.isPrimary) { // works as a loadprocess.env.UV_THREADPOOL_SIZE
//     // console.log(process.env.UV_THREADPOOL_SIZE,'thread pool size') balancing to distribute loads to other workers
//     cluster.setupPrimary({
//         exec: path.join(newPath, 'index.js'),
//     });

//     for (let i = 0; i < cpuCount; i++) {
//         cluster.fork();
//     }

//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`Worker ${worker.process.pid} has been killed`);
//         console.log('Starting another worker');
//         // cluster.fork();
//     });
// }else {
//     console.log('else in')
// }



if (cluster.isPrimary) { // works as a loadprocess.env.UV_THREADPOOL_SIZE
        // console.log(process.env.UV_THREADPOOL_SIZE,'thread pool size') balancing to distribute loads to other workers
        // cluster.setupPrimary({
        //     exec: path.join(newPath, 'index.js'),
        // });
    
        // for (let i = 0; i < cpuCount; i++) {
        //     cluster.fork();
        // }
    
        // cluster.on('exit', (worker, code, signal) => {
        //     console.log(`Worker ${worker.process.pid} has been killed`);
        //     console.log('Starting another worker');
        //     // cluster.fork();
        // });
        cluster.fork()
        // cluster.fork()
        // cluster.fork()
        // cluster.fork()
        // cluster.fork()
        // cluster.fork()
    }else {
        const express = require('express')
        const app = express()
        
        // setTimeout(()=> {
            //     console.log('timer')
            // },5000)
            app.get('/api',(req,res)=> {
            const start = Date.now()
            
            // crypto.pbkdf2('a','b',100000, 512 , 'sha512' , () => {
            //   console.log( Date.now() - start   ,'ms time taken to hashed value')
            // })

            let count = 0
            for(i=0;i<1000000000;i++){
                count++
            }
            console.log( Date.now() - start  ,'counter value')

        })
        console.log('top')
        app.listen(8000,()=>{
            console.log('server connected')
        })
    }






// let coun = 0
// for(i=0;i<1000000000;i++){
//     coun++
// }
// console.log( Date.now() - start  ,'counter value second')