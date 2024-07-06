const http = require('http')
const fs = require('fs');

const server = http.createServer((req,res)=>{
   if(req.url !=='/'){
    return res.end()
   }

   
   //This method is not good for large files. It consumes more kb/mb in the memory.
//    const file = fs.readFileSync('test.txt')  
//    return res.end(file)
 
    //Good way to read files
   // const readableStream = fs.createReadStream('test.txt')
   // readableStream.pipe(res)


   //Bad way to copy big files
   // const file = fs.readFileSync('test.txt')
   // fs.writeFileSync('output.txt',file)
   // res.end()

   // //Good way to copy big files
   // const readStream = fs.createReadStream('test.txt');
   // const writeStream = fs.createWriteStream('output.txt');

   // readStream.on('data',(chunk)=>{
   //    console.log(chunk,'chunk')
   //    writeStream.write(chunk);
   // })


   const sampleFileStream = fs.createReadStream('text.txt')
   const outputWritableStream = fs.createWriteStream('output.txt')

   sampleFileStream.on('data',(chunk)=>{
      console.log(chunk,'chunk')
      const upperCaseString = chunk.toString().toUpperCase();
      const finalString = upperCaseString.replaceAll(/the/gi,'And')

      outputWritableStream.write(finalString);
   })
   
   
   res.end();
})

const PORT = 8080
server.listen(PORT,()=> console.log(`Listening on port ${PORT}`))