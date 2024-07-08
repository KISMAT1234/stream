const {Transform} = require('stream');
const uppercaseWordProcessing = new Transform({
    transform(chunk,encoding,callback){
       console.log(chunk.toString(),'chunk')
       const upperCaseString = chunk.toString().toUpperCase();
       callback(null,upperCaseString);
    }
 })

 module.exports =  uppercaseWordProcessing