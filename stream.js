const {Readable} = require('stream')

const readableStream = new Readable({
    read() {}
})

readableStream.on('data', (chunk)=>{
    console.log('Data coming',chunk);
    console.log('Data coming',chunk.toString());
})

readableStream.push('Hello from kismat')