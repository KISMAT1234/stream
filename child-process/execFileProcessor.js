// const start = require('./main')
let start = Date.now()
console.log(start,'start value')
console.log('processing data...')
let counter = 0;
for(i=0;i<100000000; i++){
    counter++;
}
console.log(`${Date.now()-start}ms Processing ${counter} entries finished in execfile`)
console.log('execfile after cpu intensive task')