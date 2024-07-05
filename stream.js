const {Readable,Writable} = require('stream')

const readableStream = new Readable({
    highWaterMark: 2,
    read() {}
})

const WritableStream = new Writable({
write(s){
    console.log('writing',s.toString());
}
})

readableStream.on('data', (chunk)=>{
    console.log('Data coming',chunk);
    console.log('Data coming',chunk.toString());
    WritableStream.write(chunk)
})

readableStream.push('Hello from kismat')

