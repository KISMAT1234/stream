// Promise.resolve('promised value').then(()=>{
//     throw new Error('error');
// })
// Promise.reject('promised value').then(()=>{
//     throw new Error('error');
// })
// Promise.resolve('promised value').then(()=>{
//     throw new Error('error');
// })

const productToAdd = undefined;

if(!productToAdd){
    throw new Error('How can I add new product when no value provided');
}