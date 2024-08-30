const {Transform} = require('stream');

const replaceWordProcessing = new Transform({
    transform(chunk,encoding,callback){
       console.log(chunk.toString(),'chunk')
       const finalString = chunk.toString().replaceAll(/the/gi,'And')
       callback(null,finalString);
    }
 })

 module.exports = replaceWordProcessing