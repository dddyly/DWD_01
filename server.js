let http = require ('http');
let fs = require ('fs');

let myServer = http.createServer (myRequestHandler)

myServer.listen (8080);

function myRequestHandler (req, res){

    //console.log (req);
    let path = req.url;
    console.log ('Incoming request at', req.url);
    console.log ('Server running in this directory:', __dirname)

    
    let filePath = __dirname + path;
    console.log ('Client requesting a file at', filePath);

    fs.readFile (filePath, function(err, data) {
        console.log ('Data received - send to client');
        res.writeHead(200);
        res.end(data);
    })
   // fs.readFile (__dirname)


}




// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//     // Serve index.html for root path
//     let filePath = req.url === '/' ? '/index.html' : req.url;
//     filePath = path.join(__dirname, filePath);
    
//     // Read and serve the file
//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             if (err.code === 'ENOENT') {
//                 res.writeHead(404, { 'Content-Type': 'text/html' });
//                 res.end('<h1>404 - File Not Found</h1>');
//             } else {
//                 res.writeHead(500);
//                 res.end('Server Error');
//             }
//         } else {
//             // Determine content type
//             const ext = path.extname(filePath);
//             let contentType = 'text/html';
            
//             if (ext === '.css') contentType = 'text/css';
//             if (ext === '.js') contentType = 'text/javascript';
            
//             res.writeHead(200, { 'Content-Type': contentType });
//             res.end(content);
//         }
//     });
// });

// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });