const http = require('http');

const port = 3000;
const hostname = '127.0.0.1'

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello Web Programming Technology</h1>');
    res.end('Oh Yeah!!!!!!\n');
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`)
});
