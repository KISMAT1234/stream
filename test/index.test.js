const {add} = require('../index.js')
// const request = require('supertest')
// const app = require('../index.js')



test('Adds two number',()=>{
    expect(add(1,2)).toEqual(3)
})


// test('should signup for a user',async () => {
//     await request(app).post('/user').send({
//         username:'kismat',
//         email:'kismat@gmail.com',
//         password:'kismat'
//     }).expect(200)
// })

// test("should get all users", async () => {
//     const res = await request(app).get("/users");
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty("length");
//   });

// describe("User API",()=>{
//     describe("given a username and password",()=>{
//         test("should respond with a 200 status code",()=>{

//         })
//     })
//     describe("when the username and password are missing",()=>{

//     })
// })