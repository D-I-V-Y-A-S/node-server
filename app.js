// const http = require("http")

//creating a node server with http module

// const PORT = 3500

// const server = http.createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.write("Hello World!")
//     response.end("Response ended");
// })

// const server = http.createServer((request, response) => {
//     const data={
//         "id":"1",
//         "name":"abc"
//     }
// response.writeHead(200, { "Content-Type": "application/json" });
//     // response.write("Hello World!")
//     response.end(JSON.stringify(data));
// })
const http=require('node:http')
const PORT=3500

const fs = require('fs')
const server = http.createServer((request, response) => {
    fs.readFile('index.html', (error, data) => {
        if (error) {
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.write("File Doesn't exists");
        }
        else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data);
        }
        response.end("Response ended");
    })
})

// server.listen(PORT, console.log(`Server started running at http://localhost:${PORT}`))

//response.writeHead(statusCode, headers)
//fs-filesystem
//JSON.stringify-builtinMethod
//http.createServer((request, response)-whenever a request reaches the server the response in this function will be executed.

// const http=require('node:http')
// const PORT=3500

// const server=http.createServer((request,response)=>
// {
//     response.writeHead(200,{"Content-Type":"text/plain"})
//     response.write("HELLO WORLD!")
//     response.end(console.log("response ended"))
// })

// const server=http.createServer((request,response)=>
// {
//     response.writeHead(200,{"Content-Type":"application/json"})
//     const data={
//         "id":"1","name":"abc"
//     }
//     response.end(JSON.stringify(data))

// })

server.listen(PORT,console.log(`server started running at http://localhost:${PORT}`))