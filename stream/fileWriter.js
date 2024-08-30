const fs = require('fs');

// const writeableStream = fs.createWriteStream('log.txt')
// process.stdin.pipe(writeableStream) 

const readableStream = fs.createReadStream('log.txt')

readableStream.pipe(process.stdout)
